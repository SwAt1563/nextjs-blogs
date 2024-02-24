"use client";
import { gql } from "@/graphql-client/__generated__/";
import { useQuery } from "@apollo/client";
import { timeSince } from "@/src/app/lib/handle-time/created-at";
import { Carousel, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    const { data: blogs, loading, error, fetchMore } = useQuery(GET_HOME_BLOGS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

//   const [blogs, setBlogs] = useState<any>([]);

//   useEffect(() => {
//     // Simulate fetching blogs data. Replace this with your actual fetch call.
//     const fetchTopBlogs = async () => {
//       // Placeholder for your fetching logic. This could be a GraphQL query using Apollo Client or any other method you prefer.
//       const data = {
//         getTopBlogs: [
//           {
//             id: "1",
//             title: "First Blog",
//             description:
//               "loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//             imageUrl: "https://picsum.photos/id/1/400/400",
//             createdAt: "1703278235474",
//             user: {
//               username: "user1",
//               email: "user1@example.com",
//               id: "user1id",
//               imageUrl: "https://picsum.photos/id/1005/400/400",
//             },
//           },
//           {
//             id: "2",
//             title: "Second Blog",
//             description: "This is the second blog",
//             imageUrl: "https://picsum.photos/id/1/400/400",
//             createdAt: "1703278235474",
//             user: {
//               username: "user2",
//               email: "user2@example.com",
//               id: "user2id",
//               imageUrl: "https://picsum.photos/id/1005/400/400",
//             },
//           },
//           {
//             id: "3",
//             title: "Third Blog",
//             description: "This is the third blog",
//             imageUrl: "https://picsum.photos/id/1/400/400",
//             createdAt: "1703278235474",
//             user: {
//               username: "user3",
//               email: "user3@example.com",
//               id: "user3id",
//               imageUrl: "https://picsum.photos/id/1005/400/400",
//             },
//           },
//         ],
//       };
//       setBlogs(data.getTopBlogs);
//     };

//     fetchTopBlogs();
//   }, []);

 

  return (
    <>
      
    </>
  );
};

export default Blogs;
