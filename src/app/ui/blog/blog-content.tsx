"use client";
import { useQuery, useMutation } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";
import { timeSince } from "@/src/lib/handle-time/time";

import React, { useState, useEffect } from "react";
import { FaRegThumbsUp, FaRegEye } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {
  CREATE_COMMENT,
  CREATE_LIKE,
  CREATE_VIEW,
  UPDATE_BLOG_DESCRIPTION,
  DELETE_LIKE,
} from "@/src/requests/mutations";
import { GET_BLOG } from "@/src/requests/queries";

const BlogContent = ({
  blogId,
  userId,
}: {
  blogId: string;
  userId: string;
}) => {
  const [newComment, setNewComment] = useState("");
  const [editDescriptionShow, setEditDescriptionShow] = useState(false);

  const [createComment] = useMutation(CREATE_COMMENT);
  const [updateBlogDescription] = useMutation(UPDATE_BLOG_DESCRIPTION);

  const [createView, { data: viewData }] = useMutation(CREATE_VIEW, {
    variables: {
      userId,
      blogId,
    },
  });
  const [createLike] = useMutation(CREATE_LIKE, {
    variables: {
      userId,
      blogId,
    },
  });
  const [deleteLike] = useMutation(DELETE_LIKE, {
    variables: {
      userId,
      blogId,
    },
  });

  const {
    data: blog,
    loading,
    client,
  } = useQuery(GET_BLOG, {
    variables: {
      blogId,
      userId,
    },
  });

  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    createView();
    if (viewData?.createView) {
      client.cache.modify({
        id: `Blog:${blogId}`,
        fields: {
          number_of_views(existingViews = 0) {
            return existingViews + 1;
          },
        },
      });
    }
  }, [blogId, client.cache, createView, viewData]);

  useEffect(() => {
    setNewDescription(blog?.getBlog?.description ?? "");
  }, [blog?.getBlog?.description]);

  if (loading) return <p>Loading...</p>;

  if (blog?.getBlog === null) {
    return notFound();
  }

  const handleKeyPress = (e: {
    key: string;
    shiftKey: any;
    preventDefault: () => void;
  }) => {
    // Check if the Enter key is pressed without holding the Shift key
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent the default action to stop from submitting the form or adding a new line

      if (newComment.trim() !== "") {
        const newCommentData = {
          userId,
          blogId,
          content: newComment,
        };

        createComment({
          variables: newCommentData,
        });

        // https://www.apollographql.com/docs/react/caching/cache-interaction

        // update all the query
        // client.cache.updateQuery(
        //   { query: GET_BLOG, variables: { blogId, userId } },
        //   (data: any) => {
        //     return {
        //       getBlog: {
        //         ...data.getBlog,
        //         comments: [
        //           ...data.getBlog.comments,
        //           {
        //             content: newComment,
        //             createdAt: Date.now().toString(),
        //             user: {
        //               id: userId,
        //               username: data.getBlog.user.username,
        //               imageUrl: data.getBlog.user.imageUrl,
        //             },
        //           },
        //         ],
        //       },
        //     };
        //   }
        // );

        // modify a single field
        client.cache.modify({
          id: `Blog:${blog?.getBlog?.id}`, // client.cache.identify(blog?.getBlog)
          fields: {
            comments(existingComments = []) {
              const newCommentRef = {
                content: newComment,
                createdAt: Date.now().toString(),
                user: {
                  id: userId,
                  username: blog?.getBlog?.user?.username,
                  imageUrl: blog?.getBlog?.user?.imageUrl,
                },
              };

              return [...existingComments, newCommentRef];
            },
          },
        });

        setNewComment("");
      }
    }
  };

  const handleLike = () => {
    if (blog?.getBlog?.userMadeLike) {
      deleteLike();
      client.cache.modify({
        id: `Blog:${blog?.getBlog?.id}`,
        fields: {
          number_of_likes(existingLikes = 0) {
            return existingLikes - 1;
          },
          userMadeLike() {
            return false;
          },
        },
      });
    } else {
      createLike();
      client.cache.modify({
        id: `Blog:${blog?.getBlog?.id}`,
        fields: {
          number_of_likes(existingLikes = 0) {
            return existingLikes + 1;
          },
          userMadeLike() {
            return true;
          },
        },
      });
    }
  };

  const handleUpdateBlogDescription = () => {
    updateBlogDescription({
      variables: {
        blogId,
        description: newDescription,
      },
    });

    client.cache.modify({
      id: `Blog:${blog?.getBlog?.id}`,
      fields: {
        description() {
          return newDescription;
        },
      },
    });

    setEditDescriptionShow(false);
  };

  return (
    <>
      <div className="container my-5">
        <div className="border border-dark rounded p-5 position-relative">
          {userId === blog?.getBlog?.user?.id && (
            <div className="edit-description">
              <div onClick={() => setEditDescriptionShow(true)}>
                <button className="btn btn-primary position-absolute top-0 end-0 mt-5 me-5 d-none d-md-block">
                  Edit Blog
                </button>
                {/* Three dots button for small screens */}
                <div className="position-absolute top-0 end-0 mt-5 me-5 d-block d-md-none">
                  <BsThreeDots />
                </div>
              </div>

              <Modal
                show={editDescriptionShow}
                onHide={() => setEditDescriptionShow(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Edit Blog Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <textarea
                    className="form-control"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    rows={3}
                  ></textarea>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setEditDescriptionShow(false)}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleUpdateBlogDescription()}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )}
          <div className="d-flex align-items-center mb-3">
            <Link href={`/profile/${blog?.getBlog?.user?.id}`}>
              <Image
                src={blog?.getBlog?.user?.imageUrl as string}
                alt={blog?.getBlog?.user?.username as string}
                width={50}
                height={50}
                className="rounded-circle"
              />
            </Link>
            <div className="mx-3">
              <strong>{blog?.getBlog?.user?.username}</strong>
            </div>

            <div>{timeSince(blog?.getBlog?.createdAt as string)}</div>
          </div>
          <h1>{blog?.getBlog?.title}</h1>
          <Link href={`/?categoryName=${blog?.getBlog?.category?.name}`}>
            <h4 className="text-primary">{blog?.getBlog?.category?.name}</h4>
          </Link>
          <div className="mb-3 mt-5">
            <Image
              src={blog?.getBlog?.imageUrl as string}
              alt={blog?.getBlog?.title as string}
              width={600}
              height={400}
              className="img-fluid rounded w-100"
            />
          </div>
          <p>{blog?.getBlog?.description}</p>
          <div className="d-flex align-items-center">
            <button
              className={`btn border-0 ${
                blog?.getBlog?.userMadeLike ? "text-primary" : ""
              }`}
              onClick={handleLike}
            >
              <FaRegThumbsUp className="me-2" />
              {blog?.getBlog?.number_of_likes}
            </button>

            <div className="ms-3">
              <FaRegEye className="me-2" /> {blog?.getBlog?.number_of_views}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 comments">
        <div className="border border-dark rounded p-5">
          <h3>Comments</h3>
          <hr className="mb-4" />
          {blog?.getBlog?.comments &&
            blog?.getBlog?.comments.map((comment, index) => (
              <div key={index}>
                {index > 0 && (
                  <div className="text-center">
                    <hr
                      style={{ width: "90%", margin: "auto" }}
                      className="mb-3"
                    />
                  </div>
                )}
                <div className="d-flex mb-3">
                  <Link href={`/profile/${comment?.user?.id}`}>
                    <Image
                      src={comment?.user?.imageUrl as string}
                      alt={comment?.user?.username as string}
                      width={50}
                      height={50}
                      className="rounded-circle me-2"
                    />
                  </Link>
                  <div>
                    <div className="fw-bold">{comment?.user?.username}</div>

                    <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                      {timeSince(comment?.createdAt as string)}
                    </div>
                    <p className="mt-3">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))}
          <textarea
            className="form-control"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Write a comment..."
            rows={3}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
