"use client";
import { gql } from "@/graphql-client/__generated__/";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import SearchTitle from "./(search)/search-title";
import SearchCategory from "./(search)/search-category";
import { AiFillLike, AiFillEye, AiOutlineComment } from "react-icons/ai";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const GET_HOME_BLOGS = gql(`
query GetBlogsBySearchQuery($query: String, $categoryName: String, $limit: Int, $offset: Int) {
  getBlogsBySearchQuery(query: $query, categoryName: $categoryName, limit: $limit, offset: $offset) {
    total
    blogs {
      id
      title
      imageUrl
      createdAt
      user {
        username
        id
        imageUrl
      }
      category {
        name
      }
      number_of_likes
      number_of_views
      number_of_comments
    }
  }
}
`);

const Blogs = () => {
  const searchParams = useSearchParams();

  const {
    data: blogs,
    loading,
    error,
    fetchMore,
    refetch, // Use this to refetch the query
  } = useQuery(GET_HOME_BLOGS, {
    variables: {
      offset: 0,
      limit: 3,
    },
  });

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: blogs?.getBlogsBySearchQuery?.blogs?.length || 0,
        limit: 3,
      },
    });
  };

  // Check if there are more tracks to load
  const hasMoreTracks =
    blogs?.getBlogsBySearchQuery?.blogs?.length !== undefined &&
    blogs.getBlogsBySearchQuery.blogs.length <
      blogs.getBlogsBySearchQuery.total;

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    const query = params.get("query");
    const categoryName = params.get("categoryName");

    const search = { query, categoryName };

    refetch({
      ...search,
      offset: 0,
      limit: 3,
    });

  }, [refetch, searchParams]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">Blogs</h1>
        <div className="row">
          <div className="col-8">
            <div className="row">
              {blogs?.getBlogsBySearchQuery?.blogs?.map((blog: any) => (
                <div key={blog.id} className="col-md-4">
                  <Link href={`/blog/${blog.id}`}>
                    <div className="card mb-4 shadow-sm">
                      <div className="position-relative ">
                        <Image
                          src={blog.imageUrl}
                          alt={blog.title}
                          width={200}
                          height={200}
                          className="img-fluid rounded-top-3 w-100"
                        />

                        {/* Small Image Overlay */}
                        <div
                          className="position-absolute "
                          style={{
                            bottom: "-50px",
                            left: "50%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          <Image
                            src={blog.user.imageUrl}
                            alt={blog.user.username}
                            width={100} // Adjust based on your needs
                            height={100} // Adjust based on your needs
                            className="border border-5 rounded-circle border-white" // Makes the image circular
                          />
                        </div>
                      </div>
                      <div className="card-body mt-5 text-center">
                        <p className="card-text">{blog.title}</p>

                        <div className="row">
                          <div className="col-4 border-end">
                            <AiFillLike />
                            <span className="ms-1">{blog.number_of_likes}</span>
                          </div>

                          {/* Views */}
                          <div className="col-4 border-end">
                            <AiFillEye />
                            <span className="ms-1">{blog.number_of_views}</span>
                          </div>

                          {/* Comments */}
                          <div className="col-4 ">
                            <AiOutlineComment />
                            <span className="ms-1">
                              {blog.number_of_comments}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              {/* If there are no blogs */}
              {blogs?.getBlogsBySearchQuery?.blogs?.length === 0 && (
                <div className="text-center">
                  <h5>No blogs found</h5>
                </div>
              )}

            </div>
            <div className="text-center mb-3">
              {hasMoreTracks && (
                <button
                  className="btn btn-info text-light"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              )}
            </div>
          </div>
          <div className="col-4">
            <SearchTitle />
            <SearchCategory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
