"use client";
import { gql } from "@/graphql-client/__generated__/";
import { useQuery } from "@apollo/client";
import { timeSince } from "@/src/app/lib/handle-time/created-at";
import { Carousel, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export const GET_TOP_BLOGS = gql(`
query GetTopBlogs{
  getTopBlogs{
      id
      title
      description
      imageUrl
      createdAt
      user {
        username
        email
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
`);

const Hero = () => {
    // const { data: blogs, loading, error } = useQuery(GET_TOP_BLOGS);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :</p>;

  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    // Simulate fetching blogs data. Replace this with your actual fetch call.
    const fetchTopBlogs = async () => {
      // Placeholder for your fetching logic. This could be a GraphQL query using Apollo Client or any other method you prefer.
      const data = {
        getTopBlogs: [
          {
            id: "1",
            title: "First Blog",
            description:
              "loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imageUrl: "https://picsum.photos/id/1/400/400",
            createdAt: "1703278235474",
            user: {
              username: "user1",
              email: "user1@example.com",
              id: "user1id",
              imageUrl: "https://picsum.photos/id/1005/400/400",
            },
          },
          {
            id: "2",
            title: "Second Blog",
            description: "This is the second blog",
            imageUrl: "https://picsum.photos/id/1/400/400",
            createdAt: "1703278235474",
            user: {
              username: "user2",
              email: "user2@example.com",
              id: "user2id",
              imageUrl: "https://picsum.photos/id/1005/400/400",
            },
          },
          {
            id: "3",
            title: "Third Blog",
            description: "This is the third blog",
            imageUrl: "https://picsum.photos/id/1/400/400",
            createdAt: "1703278235474",
            user: {
              username: "user3",
              email: "user3@example.com",
              id: "user3id",
              imageUrl: "https://picsum.photos/id/1005/400/400",
            },
          },
        ],
      };
      setBlogs(data.getTopBlogs);
    };

    fetchTopBlogs();
  }, []);

  // Function to truncate the description to 200 characters
  const truncateDescription = (description: string) => {
    return description.length > 200
      ? description.substring(0, 200) + "..."
      : description;
  };

  return (
    <>
      <Carousel className="w-100" data-bs-theme="dark">
        {blogs.map((blog: any) => (
          <Carousel.Item key={blog.id} className="p-5">
            <Row>
              <Col
                md={4}
                className="d-flex justify-content-end align-items-center"
              >
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={400}
                  height={400}
                  className="img-fluid rounded-3"
                />
              </Col>
              <Col md={8} className="d-flex flex-column  mt-3 mt-md-5">
                <h6>Posted {timeSince(blog.createdAt)}</h6>
                <Link href={`/blog/${blog.id}`}>
                <h2>{blog.title}</h2>
                </Link>
                <p>{truncateDescription(blog.description)}</p>

                <Link href={`/profile/${blog.user.id}`}>
                  <div className="d-inline-flex align-items-center">
                    <Image
                      src={blog.user.imageUrl}
                      alt={blog.user.username}
                      width={50}
                      height={50}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <h6 className="mt-3 mb-0">{blog.user.username}</h6>
                      <p className="">{blog.user.email}</p>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Hero;
