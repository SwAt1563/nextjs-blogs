"use client";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

import { Card, Button, ListGroup } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { notFound } from "next/navigation";
import { timeSince } from "@/src/app/lib/handle-time/time";


const UserBlogs = ({
  userId,
  styles,
}: {
  userId: string;
  styles: {
    readonly [key: string]: string;
  };
}) => {
  const { data: userBlogs } = useQuery(GET_USER_BLOGS, {
    variables: {
      userId,
    },
  });

  const { data: user, loading } = useQuery(GET_USER, {
    variables: {
      userId,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (user?.getUser === null) {
    return notFound();
  }

  // Function to truncate the description to 200 characters
  const truncateDescription = (description: string) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  return (
    <>
      <div className="user-profile">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ paddingTop: "120px" }}
        >
          <Card className="text-center w-100 position-relative">
            <div
              className="position-absolute "
              style={{
                top: "-100px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Image
                src={user?.getUser?.imageUrl as string}
                alt={user?.getUser?.username as string}
                width={200} // Adjust based on your needs
                height={200} // Adjust based on your needs
                className="border border-5 rounded-circle border-white" // Makes the image circular
              />
            </div>
            <Card.Body
              style={{
                paddingTop: "100px",
              }}
            >
              <Card.Title>{user?.getUser?.username}</Card.Title>
              <Card.Text>{user?.getUser?.email}</Card.Text>
             
                  <Card.Text>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                  <Button variant="primary">Read my bio</Button>
               

              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <div className="d-flex justify-content-center">
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className={`${styles.social_media} me-2`}
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Twitter"
                      className={`${styles.social_media} me-2`}
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className={`${styles.social_media} me-2`}
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href="#"
                      aria-label="YouTube"
                      className={`${styles.social_media}`}
                    >
                      <FaYoutube />
                    </Link>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>

        <div className="container">
          <h1 className="text-center my-5">{user?.getUser?.username} Blogs</h1>
          <div className="row">
            <div className="col-12">
              <div className="row">
                {userBlogs?.getBlogsByUser?.map((blog: any) => (
                  <div key={blog.id} className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <div className="position-relative ">
                        <Image
                          src={blog.imageUrl}
                          alt={blog.title}
                          width={200}
                          height={200}
                          className="img-fluid rounded-top-3 w-100"
                        />
                      </div>
                      <div className="card-body text-start">
                        {/* createdAt */}
                        <h6 className="text-muted">
                          Posted {timeSince(blog.createdAt)}
                        </h6>
                        <h4 className="card-text">{blog.title}</h4>
                        <p className="card-text">
                          {truncateDescription(blog.description)}
                        </p>

                        <Link href={`/blog/${blog.id}`}>
                          {blog.category.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* If there are no blogs */}
                {userBlogs?.getBlogsByUser?.length === 0 && (
                  <div className="text-center">
                    <h5>No blogs found</h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBlogs;
