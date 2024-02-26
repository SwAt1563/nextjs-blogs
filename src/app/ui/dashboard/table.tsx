"use client";
import { useQuery, useMutation } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

import { formatDate } from "@/src/lib/handle-time/time";
import { useState, ChangeEvent } from "react";

import { DASHBOARD } from "@/src/requests/queries";
import { UPDATE_BLOG_STATUS, DELETE_BLOG } from "@/src/requests/mutations";

import { TableSkeleton } from "@/src/app/ui/skeletons";

const Table = () => {
  const [filterOption, setFilterOption] = useState<
    "ALL" | "PUBLISHED" | "DRAFT"
  >("ALL");

  const { data, loading, client, fetchMore, refetch } = useQuery(DASHBOARD, {
    variables: {
      offset: 0,
      limit: 5,
    },
  });

  const [updateBlogStatus] = useMutation(UPDATE_BLOG_STATUS);
  const [deleteBlog] = useMutation(DELETE_BLOG);

  if (loading) return <TableSkeleton />;

  const handleRefetch = (e: ChangeEvent<HTMLInputElement>) => {
    const option = e.target.value as "ALL" | "PUBLISHED" | "DRAFT";
    setFilterOption(option);
    if (option == "ALL") {
      refetch({
        offset: 0,
        limit: 5,
        status: undefined,
      });
    } else {
      refetch({
        offset: 0,
        limit: 5,
        status: option as any,
      });
    }
  };

  const handleDelete = async (blogId: string, status: string) => {
    await deleteBlog({
      variables: {
        blogId,
      },
    });

    // delete the blog from the cache
    client.cache.evict({ id: `Blog:${blogId}` });

    client.cache.modify({
      id: `ROOT_QUERY`, // Specifies the entry point in the cache
      fields: {
        getStats(existingStats, { readField }) {
          // Assuming you want to update within getStats directly
          const totalPublishedBlogs = readField(
            "totalPublishedBlogs",
            existingStats
          ) as number;
          const totalDraftBlogs = readField(
            "totalDraftBlogs",
            existingStats
          ) as number;

          return {
            ...existingStats,
            totalPublishedBlogs:
              status === "PUBLISHED"
                ? totalPublishedBlogs - 1
                : totalPublishedBlogs,
            totalDraftBlogs:
              status === "DRAFT" ? totalDraftBlogs - 1 : totalDraftBlogs,
          };
        },
      },
    });
  };

  const handleUpdateStatus = async (blogId: string, status: string) => {
    await updateBlogStatus({
      variables: {
        blogId,
        status: status as any,
      },
    });

    client.cache.modify({
      id: `Blog:${blogId}`,
      fields: {
        status() {
          return status;
        },
      },
    });

    client.cache.modify({
      id: `ROOT_QUERY`, // Specifies the entry point in the cache
      fields: {
        getStats(existingStats, { readField }) {
          // Assuming you want to update within getStats directly
          const totalPublishedBlogs = readField(
            "totalPublishedBlogs",
            existingStats
          ) as number;
          const totalDraftBlogs = readField(
            "totalDraftBlogs",
            existingStats
          ) as number;

          return {
            ...existingStats,
            totalPublishedBlogs:
              status === "PUBLISHED"
                ? totalPublishedBlogs + 1
                : totalPublishedBlogs - 1,
            totalDraftBlogs:
              status === "DRAFT" ? totalDraftBlogs + 1 : totalDraftBlogs - 1,
          };
        },
      },
    });
  };

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: data?.getBlogs?.blogs?.length || 0,
        limit: 5,
      },
    });
  };

  // Check if there are more blogs to load
  const hadMoreBlogs =
    data?.getBlogs?.blogs?.length !== undefined &&
    data.getBlogs.blogs.length < data.getBlogs.total;

  return (
    <>
      <div className="row mt-3">
        <div className="col-lg-10">
          <h3>Recent Blogs</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Category</th>
                <th scope="col">Status</th>
                <th scope="col">Created At</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.getBlogs?.blogs &&
                data.getBlogs?.blogs.map((blog: any) => (
                  <tr key={blog.id}>
                    <td>
                      <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </td>
                    <td>
                      <Link href={`/profile/${blog.user.id}`}>
                        <div className="d-flex align-items-center">
                          <Image
                            src={blog.user.imageUrl}
                            alt={blog.user.username}
                            width={30}
                            height={30}
                            className="rounded-circle"
                          />
                          <span className="ms-2 text-dark">
                            {blog.user.username}
                          </span>
                        </div>
                      </Link>
                    </td>
                    <td>{blog.category.name}</td>
                    <td>
                      <span
                        className={`badge ${
                          blog.status === "PUBLISHED"
                            ? "bg-success"
                            : "bg-warning"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td>{formatDate(blog.createdAt)}</td>
                    <td>
                      <div className="d-flex">
                        <button
                          className="btn btn-sm btn-outline-success me-2"
                          onClick={handleUpdateStatus.bind(
                            null,
                            blog.id,
                            blog.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED"
                          )}
                        >
                          {blog.status === "PUBLISHED"
                            ? "Mark as Draft"
                            : "Publish"}
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={handleDelete.bind(
                            null,
                            blog.id,
                            blog.status
                          )}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="text-center mb-3">
            {hadMoreBlogs && (
              <button
                className="btn btn-info text-light"
                onClick={handleLoadMore}
              >
                <BsThreeDots size={20} />
              </button>
            )}
          </div>
        </div>

        <div className="col-lg-2">
          <h3>Filter By Status</h3>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterOption"
              id="filterAll"
              value="ALL"
              checked={filterOption === "ALL"}
              onChange={handleRefetch}
            />
            <label className="form-check-label" htmlFor="filterAll">
              All
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterOption"
              id="filterPublished"
              value="PUBLISHED"
              checked={filterOption === "PUBLISHED"}
              onChange={handleRefetch}
            />
            <label className="form-check-label" htmlFor="filterPublished">
              Published
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterOption"
              id="filterDraft"
              value="DRAFT"
              checked={filterOption === "DRAFT"}
              onChange={handleRefetch}
            />
            <label className="form-check-label" htmlFor="filterDraft">
              Draft
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
