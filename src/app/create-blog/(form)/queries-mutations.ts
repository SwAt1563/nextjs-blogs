import { gql } from "@/graphql-client/__generated__/";

export const CREATE_BLOG = gql(`
mutation CreateBlog($userId: ID!, $title: String!, $description: String!, $categoryName: String!, $imageUrl: String) {
  createBlog(userId: $userId, title: $title, description: $description, categoryName: $categoryName, imageUrl: $imageUrl) {
    id
  }
}
`);

export const GET_CATEGORIES = gql(`
query GetCategories {
  getCategories {
    name
  }

}
`);
