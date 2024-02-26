/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Register($username: String!, $email: String!, $imageUrl: String) {\n    register(username: $username, email: $email, imageUrl: $imageUrl) {\n      code\n      success\n      message\n      user {\n        imageUrl\n        email\n        username\n        id\n        role\n      }\n    }\n  }\n": types.RegisterDocument,
    "\n  query Login($username: String!) {\n    login(username: $username) {\n      code\n      success\n      message\n      user {\n        id\n        username\n        email\n        role\n        imageUrl\n      }\n    }\n  }\n": types.LoginDocument,
    "\nmutation CreateBlog($userId: ID!, $title: String!, $description: String!, $categoryName: String!, $imageUrl: String) {\n  createBlog(userId: $userId, title: $title, description: $description, categoryName: $categoryName, imageUrl: $imageUrl) {\n    id\n  }\n}\n": types.CreateBlogDocument,
    "\nmutation CreateComment($userId: ID!, $blogId: ID!, $content: String!) {\n  createComment(userId: $userId, blogId: $blogId, content: $content) {\n    content\n    createdAt\n    user {\n      id\n      username\n      imageUrl\n    }\n  }\n}\n": types.CreateCommentDocument,
    "\nmutation CreateView($userId: ID!, $blogId: ID!) {\n  createView(userId: $userId, blogId: $blogId)\n}\n": types.CreateViewDocument,
    "\nmutation CreateLike($userId: ID!, $blogId: ID!) {\n  createLike(userId: $userId, blogId: $blogId) {\n    id\n    blogId\n    userId\n  }\n}\n": types.CreateLikeDocument,
    "\nmutation DeleteLike($userId: ID!, $blogId: ID!) {\n  deleteLike(userId: $userId, blogId: $blogId) {\n    id\n    blogId\n    userId\n  }\n}\n": types.DeleteLikeDocument,
    "\nmutation UpdateBlog($blogId: ID!, $title: String, $description: String, $imageUrl: String) {\n  updateBlog(blogId: $blogId, title: $title, description: $description, imageUrl: $imageUrl) {\n    id\n    title\n    description\n    imageUrl\n    updatedAt\n    createdAt\n  }\n}\n": types.UpdateBlogDocument,
    "\nmutation UpdateBlogStatus($blogId: ID!, $status: Status!) {\n  updateBlogStatus(blogId: $blogId, status: $status) {\n    id\n  }\n}\n": types.UpdateBlogStatusDocument,
    "\n\nmutation DeleteBlog($blogId: ID!) {\n  deleteBlog(blogId: $blogId) {\n    id\n  }\n}\n": types.DeleteBlogDocument,
    "\nquery GetTopBlogs{\n  getTopBlogs{\n      id\n      title\n      description\n      imageUrl\n      createdAt\n      user {\n        username\n        email\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    \n  }\n}\n": types.GetTopBlogsDocument,
    "\nquery GetBlogsBySearchQuery($query: String, $categoryName: String, $limit: Int, $offset: Int) {\n  getBlogsBySearchQuery(query: $query, categoryName: $categoryName, limit: $limit, offset: $offset) {\n    total\n    blogs {\n      id\n      title\n      imageUrl\n      createdAt\n      user {\n        username\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    }\n  }\n}\n": types.GetBlogsBySearchQueryDocument,
    "\nquery GetBlogsByUser($userId: ID!) {\n  getBlogsByUser(userId: $userId) {\n    id\n    title\n    description\n    imageUrl\n    status\n    createdAt\n    category {\n      name\n    }\n    number_of_likes\n    number_of_views\n    number_of_comments\n  }\n}\n": types.GetBlogsByUserDocument,
    "\nquery GetUser($userId: ID!) {\n  getUser(userId: $userId) {\n    id\n    username\n    email\n    role\n    imageUrl\n  }\n}\n": types.GetUserDocument,
    "\nquery GetCategories {\n  getCategories {\n    name\n  }\n\n}\n": types.GetCategoriesDocument,
    "\nquery GetBlog($blogId: ID!, $userId: ID!) {\n  getBlog(blogId: $blogId, userId: $userId) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    category {\n      name\n    }\n    imageUrl\n    user {\n      id\n      email\n      imageUrl\n      username\n    }\n    userMadeLike\n    number_of_views\n    number_of_likes\n    number_of_comments\n    comments {\n      content\n      createdAt\n      user {\n        id\n        username\n        imageUrl\n      }\n    }\n  }\n}\n": types.GetBlogDocument,
    "\nquery GetBlogs($offset: Int, $limit: Int, $categoryName: String, $status: Status) {\n  getBlogs(offset: $offset, limit: $limit, categoryName: $categoryName, status: $status) {\n    total\n    blogs {\n      id\n      title\n      imageUrl\n      user {\n        id\n        username\n        email\n        imageUrl\n      }\n      status\n      createdAt\n      category {\n        name\n      }\n    }\n  }\n}\n": types.GetBlogsDocument,
    "\nquery GetStats {\n  getStats {\n    totalUsers\n    totalPublishedBlogs\n    totalDraftBlogs\n  }\n}\n": types.GetStatsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Register($username: String!, $email: String!, $imageUrl: String) {\n    register(username: $username, email: $email, imageUrl: $imageUrl) {\n      code\n      success\n      message\n      user {\n        imageUrl\n        email\n        username\n        id\n        role\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Register($username: String!, $email: String!, $imageUrl: String) {\n    register(username: $username, email: $email, imageUrl: $imageUrl) {\n      code\n      success\n      message\n      user {\n        imageUrl\n        email\n        username\n        id\n        role\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Login($username: String!) {\n    login(username: $username) {\n      code\n      success\n      message\n      user {\n        id\n        username\n        email\n        role\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query Login($username: String!) {\n    login(username: $username) {\n      code\n      success\n      message\n      user {\n        id\n        username\n        email\n        role\n        imageUrl\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateBlog($userId: ID!, $title: String!, $description: String!, $categoryName: String!, $imageUrl: String) {\n  createBlog(userId: $userId, title: $title, description: $description, categoryName: $categoryName, imageUrl: $imageUrl) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation CreateBlog($userId: ID!, $title: String!, $description: String!, $categoryName: String!, $imageUrl: String) {\n  createBlog(userId: $userId, title: $title, description: $description, categoryName: $categoryName, imageUrl: $imageUrl) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateComment($userId: ID!, $blogId: ID!, $content: String!) {\n  createComment(userId: $userId, blogId: $blogId, content: $content) {\n    content\n    createdAt\n    user {\n      id\n      username\n      imageUrl\n    }\n  }\n}\n"): (typeof documents)["\nmutation CreateComment($userId: ID!, $blogId: ID!, $content: String!) {\n  createComment(userId: $userId, blogId: $blogId, content: $content) {\n    content\n    createdAt\n    user {\n      id\n      username\n      imageUrl\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateView($userId: ID!, $blogId: ID!) {\n  createView(userId: $userId, blogId: $blogId)\n}\n"): (typeof documents)["\nmutation CreateView($userId: ID!, $blogId: ID!) {\n  createView(userId: $userId, blogId: $blogId)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateLike($userId: ID!, $blogId: ID!) {\n  createLike(userId: $userId, blogId: $blogId) {\n    id\n    blogId\n    userId\n  }\n}\n"): (typeof documents)["\nmutation CreateLike($userId: ID!, $blogId: ID!) {\n  createLike(userId: $userId, blogId: $blogId) {\n    id\n    blogId\n    userId\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation DeleteLike($userId: ID!, $blogId: ID!) {\n  deleteLike(userId: $userId, blogId: $blogId) {\n    id\n    blogId\n    userId\n  }\n}\n"): (typeof documents)["\nmutation DeleteLike($userId: ID!, $blogId: ID!) {\n  deleteLike(userId: $userId, blogId: $blogId) {\n    id\n    blogId\n    userId\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateBlog($blogId: ID!, $title: String, $description: String, $imageUrl: String) {\n  updateBlog(blogId: $blogId, title: $title, description: $description, imageUrl: $imageUrl) {\n    id\n    title\n    description\n    imageUrl\n    updatedAt\n    createdAt\n  }\n}\n"): (typeof documents)["\nmutation UpdateBlog($blogId: ID!, $title: String, $description: String, $imageUrl: String) {\n  updateBlog(blogId: $blogId, title: $title, description: $description, imageUrl: $imageUrl) {\n    id\n    title\n    description\n    imageUrl\n    updatedAt\n    createdAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateBlogStatus($blogId: ID!, $status: Status!) {\n  updateBlogStatus(blogId: $blogId, status: $status) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation UpdateBlogStatus($blogId: ID!, $status: Status!) {\n  updateBlogStatus(blogId: $blogId, status: $status) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\nmutation DeleteBlog($blogId: ID!) {\n  deleteBlog(blogId: $blogId) {\n    id\n  }\n}\n"): (typeof documents)["\n\nmutation DeleteBlog($blogId: ID!) {\n  deleteBlog(blogId: $blogId) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetTopBlogs{\n  getTopBlogs{\n      id\n      title\n      description\n      imageUrl\n      createdAt\n      user {\n        username\n        email\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    \n  }\n}\n"): (typeof documents)["\nquery GetTopBlogs{\n  getTopBlogs{\n      id\n      title\n      description\n      imageUrl\n      createdAt\n      user {\n        username\n        email\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    \n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetBlogsBySearchQuery($query: String, $categoryName: String, $limit: Int, $offset: Int) {\n  getBlogsBySearchQuery(query: $query, categoryName: $categoryName, limit: $limit, offset: $offset) {\n    total\n    blogs {\n      id\n      title\n      imageUrl\n      createdAt\n      user {\n        username\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    }\n  }\n}\n"): (typeof documents)["\nquery GetBlogsBySearchQuery($query: String, $categoryName: String, $limit: Int, $offset: Int) {\n  getBlogsBySearchQuery(query: $query, categoryName: $categoryName, limit: $limit, offset: $offset) {\n    total\n    blogs {\n      id\n      title\n      imageUrl\n      createdAt\n      user {\n        username\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetBlogsByUser($userId: ID!) {\n  getBlogsByUser(userId: $userId) {\n    id\n    title\n    description\n    imageUrl\n    status\n    createdAt\n    category {\n      name\n    }\n    number_of_likes\n    number_of_views\n    number_of_comments\n  }\n}\n"): (typeof documents)["\nquery GetBlogsByUser($userId: ID!) {\n  getBlogsByUser(userId: $userId) {\n    id\n    title\n    description\n    imageUrl\n    status\n    createdAt\n    category {\n      name\n    }\n    number_of_likes\n    number_of_views\n    number_of_comments\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetUser($userId: ID!) {\n  getUser(userId: $userId) {\n    id\n    username\n    email\n    role\n    imageUrl\n  }\n}\n"): (typeof documents)["\nquery GetUser($userId: ID!) {\n  getUser(userId: $userId) {\n    id\n    username\n    email\n    role\n    imageUrl\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetCategories {\n  getCategories {\n    name\n  }\n\n}\n"): (typeof documents)["\nquery GetCategories {\n  getCategories {\n    name\n  }\n\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetBlog($blogId: ID!, $userId: ID!) {\n  getBlog(blogId: $blogId, userId: $userId) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    category {\n      name\n    }\n    imageUrl\n    user {\n      id\n      email\n      imageUrl\n      username\n    }\n    userMadeLike\n    number_of_views\n    number_of_likes\n    number_of_comments\n    comments {\n      content\n      createdAt\n      user {\n        id\n        username\n        imageUrl\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetBlog($blogId: ID!, $userId: ID!) {\n  getBlog(blogId: $blogId, userId: $userId) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    category {\n      name\n    }\n    imageUrl\n    user {\n      id\n      email\n      imageUrl\n      username\n    }\n    userMadeLike\n    number_of_views\n    number_of_likes\n    number_of_comments\n    comments {\n      content\n      createdAt\n      user {\n        id\n        username\n        imageUrl\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetBlogs($offset: Int, $limit: Int, $categoryName: String, $status: Status) {\n  getBlogs(offset: $offset, limit: $limit, categoryName: $categoryName, status: $status) {\n    total\n    blogs {\n      id\n      title\n      imageUrl\n      user {\n        id\n        username\n        email\n        imageUrl\n      }\n      status\n      createdAt\n      category {\n        name\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetBlogs($offset: Int, $limit: Int, $categoryName: String, $status: Status) {\n  getBlogs(offset: $offset, limit: $limit, categoryName: $categoryName, status: $status) {\n    total\n    blogs {\n      id\n      title\n      imageUrl\n      user {\n        id\n        username\n        email\n        imageUrl\n      }\n      status\n      createdAt\n      category {\n        name\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetStats {\n  getStats {\n    totalUsers\n    totalPublishedBlogs\n    totalDraftBlogs\n  }\n}\n"): (typeof documents)["\nquery GetStats {\n  getStats {\n    totalUsers\n    totalPublishedBlogs\n    totalDraftBlogs\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;