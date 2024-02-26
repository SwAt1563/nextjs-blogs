"use client";
import { useQuery } from "@apollo/client";
import { timeSince } from "@/src/lib/handle-time/time";
import { Carousel, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import { GET_TOP_BLOGS } from "@/src/requests/queries";



const Hero = () => {
  const { data: blogs, loading, error } = useQuery(GET_TOP_BLOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  // Function to truncate the description to 200 characters
  const truncateDescription = (description: string) => {
    return description.length > 200
      ? description.substring(0, 200) + "..."
      : description;
  };

  return (
    <>
      <div className="container">
        <Carousel className="w-100" data-bs-theme="dark">
          {blogs?.getTopBlogs?.map((blog: any) => (
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
      </div>
    </>
  );
};

export default Hero;
