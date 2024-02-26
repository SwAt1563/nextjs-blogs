import { gql } from "@/graphql-client/__generated__/";

export const CREATE_BLOG = gql(`
mutation CreateBlog($userId: ID!, $title: String!, $description: String!, $categoryName: String!, $imageUrl: String) {
  createBlog(userId: $userId, title: $title, description: $description, categoryName: $categoryName, imageUrl: $imageUrl) {
    id
  }
}
`);

export const CREATE_COMMENT = gql(`
mutation CreateComment($userId: ID!, $blogId: ID!, $content: String!) {
  createComment(userId: $userId, blogId: $blogId, content: $content) {
    content
    createdAt
    user {
      id
      username
      imageUrl
    }
  }
}
`);

export const CREATE_VIEW = gql(`
mutation CreateView($userId: ID!, $blogId: ID!) {
  createView(userId: $userId, blogId: $blogId) {
    id
    blogId
    userId
  }
}
`);

export const CREATE_LIKE = gql(`
mutation CreateLike($userId: ID!, $blogId: ID!) {
  createLike(userId: $userId, blogId: $blogId) {
    id
    blogId
    userId
  }
}
`);

export const DELETE_LIKE = gql(`
mutation DeleteLike($userId: ID!, $blogId: ID!) {
  deleteLike(userId: $userId, blogId: $blogId) {
    id
    blogId
    userId
  }
}
`);

export const UPDATE_BLOG_DESCRIPTION = gql(`
mutation UpdateBlog($blogId: ID!, $title: String, $description: String, $imageUrl: String) {
  updateBlog(blogId: $blogId, title: $title, description: $description, imageUrl: $imageUrl) {
    id
    title
    description
    imageUrl
    updatedAt
    createdAt
  }
}
`);

export const UPDATE_BLOG_STATUS = gql(`
mutation UpdateBlogStatus($blogId: ID!, $status: Status!) {
  updateBlogStatus(blogId: $blogId, status: $status) {
    id
  }
}
`);

export const DELETE_BLOG = gql(`

mutation DeleteBlog($blogId: ID!) {
  deleteBlog(blogId: $blogId) {
    id
  }
}
`);

