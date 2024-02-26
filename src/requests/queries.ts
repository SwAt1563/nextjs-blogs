import { gql } from "@/graphql-client/__generated__/";

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

export const GET_USER_BLOGS = gql(`
query GetBlogsByUser($userId: ID!) {
  getBlogsByUser(userId: $userId) {
    id
    title
    description
    imageUrl
    status
    createdAt
    category {
      name
    }
    number_of_likes
    number_of_views
    number_of_comments
  }
}
`);

export const GET_USER = gql(`
query GetUser($userId: ID!) {
  getUser(userId: $userId) {
    id
    username
    email
    role
    imageUrl
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

export const GET_BLOG = gql(`
query GetBlog($blogId: ID!, $userId: ID!) {
  getBlog(blogId: $blogId, userId: $userId) {
    id
    title
    description
    createdAt
    updatedAt
    category {
      name
    }
    imageUrl
    user {
      id
      email
      imageUrl
      username
    }
    userMadeLike
    number_of_views
    number_of_likes
    number_of_comments
    comments {
      content
      createdAt
      user {
        id
        username
        imageUrl
      }
    }
  }
}
`);

export const DASHBOARD = gql(`
query GetBlogs($offset: Int, $limit: Int, $categoryName: String, $status: Status) {
  getBlogs(offset: $offset, limit: $limit, categoryName: $categoryName, status: $status) {
    total
    blogs {
      id
      title
      imageUrl
      user {
        id
        username
        email
        imageUrl
      }
      status
      createdAt
      category {
        name
      }
    }
  }
}
`);

export const GET_STATS = gql(`
query GetStats {
  getStats {
    totalUsers
    totalPublishedBlogs
    totalDraftBlogs
  }
}
`);




