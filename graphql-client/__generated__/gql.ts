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
    "\n  query Login($username: String!) {\n    login(username: $username) {\n      code\n      success\n      message\n      user {\n        id\n        username\n        email\n        role\n        imageUrl\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Register($username: String!, $email: String!, $imageUrl: String) {\n    register(username: $username, email: $email, imageUrl: $imageUrl) {\n      code\n      success\n      message\n      user {\n        imageUrl\n        email\n        username\n        id\n        role\n      }\n    }\n  }\n": types.RegisterDocument,
    "\nmutation CreateBlog($userId: ID!, $title: String!, $description: String!, $categoryName: String!, $imageUrl: String) {\n  createBlog(userId: $userId, title: $title, description: $description, categoryName: $categoryName, imageUrl: $imageUrl) {\n    id\n  }\n}\n": types.CreateBlogDocument,
    "\nquery GetCategories {\n  getCategories {\n    name\n  }\n\n}\n": types.GetCategoriesDocument,
    "\nquery GetBlogsBySearchQuery($query: String, $categoryName: String, $limit: Int, $offset: Int) {\n  getBlogsBySearchQuery(query: $query, categoryName: $categoryName, limit: $limit, offset: $offset) {\n    total\n    blogs {\n      id\n      title\n      imageUrl\n      createdAt\n      user {\n        username\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    }\n  }\n}\n": types.GetBlogsBySearchQueryDocument,
    "\nquery GetTopBlogs{\n  getTopBlogs{\n      id\n      title\n      description\n      imageUrl\n      createdAt\n      user {\n        username\n        email\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    \n  }\n}\n": types.GetTopBlogsDocument,
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
export function gql(source: "\n  query Login($username: String!) {\n    login(username: $username) {\n      code\n      success\n      message\n      user {\n        id\n        username\n        email\n        role\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query Login($username: String!) {\n    login(username: $username) {\n      code\n      success\n      message\n      user {\n        id\n        username\n        email\n        role\n        imageUrl\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Register($username: String!, $email: String!, $imageUrl: String) {\n    register(username: $username, email: $email, imageUrl: $imageUrl) {\n      code\n      success\n      message\n      user {\n        imageUrl\n        email\n        username\n        id\n        role\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Register($username: String!, $email: String!, $imageUrl: String) {\n    register(username: $username, email: $email, imageUrl: $imageUrl) {\n      code\n      success\n      message\n      user {\n        imageUrl\n        email\n        username\n        id\n        role\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateBlog($userId: ID!, $title: String!, $description: String!, $categoryName: String!, $imageUrl: String) {\n  createBlog(userId: $userId, title: $title, description: $description, categoryName: $categoryName, imageUrl: $imageUrl) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation CreateBlog($userId: ID!, $title: String!, $description: String!, $categoryName: String!, $imageUrl: String) {\n  createBlog(userId: $userId, title: $title, description: $description, categoryName: $categoryName, imageUrl: $imageUrl) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetCategories {\n  getCategories {\n    name\n  }\n\n}\n"): (typeof documents)["\nquery GetCategories {\n  getCategories {\n    name\n  }\n\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetBlogsBySearchQuery($query: String, $categoryName: String, $limit: Int, $offset: Int) {\n  getBlogsBySearchQuery(query: $query, categoryName: $categoryName, limit: $limit, offset: $offset) {\n    total\n    blogs {\n      id\n      title\n      imageUrl\n      createdAt\n      user {\n        username\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    }\n  }\n}\n"): (typeof documents)["\nquery GetBlogsBySearchQuery($query: String, $categoryName: String, $limit: Int, $offset: Int) {\n  getBlogsBySearchQuery(query: $query, categoryName: $categoryName, limit: $limit, offset: $offset) {\n    total\n    blogs {\n      id\n      title\n      imageUrl\n      createdAt\n      user {\n        username\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetTopBlogs{\n  getTopBlogs{\n      id\n      title\n      description\n      imageUrl\n      createdAt\n      user {\n        username\n        email\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    \n  }\n}\n"): (typeof documents)["\nquery GetTopBlogs{\n  getTopBlogs{\n      id\n      title\n      description\n      imageUrl\n      createdAt\n      user {\n        username\n        email\n        id\n        imageUrl\n      }\n      category {\n        name\n      }\n      number_of_likes\n      number_of_views\n      number_of_comments\n    \n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;