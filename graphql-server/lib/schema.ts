import { gql } from "graphql-tag";

export const typeDefs = gql`
  type View {
    id: ID!
    blog: Blog!
    user: User!
  }

  type Like {
    id: ID!
    blog: Blog!
    user: User!
  }

  type Comment {
    id: ID!
    blog: Blog!
    user: User!
    content: String!
    createdAt: String
  }

  type Category {
    id: ID!
    name: String!
    blogs: [Blog!]
  }

  enum Role {
    ADMIN
    USER
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    role: Role!
    imageUrl: String
    blogs: [Blog!]
  }

  enum Status {
    PUBLISHED
    DRAFT
  }
  type Blog {
    id: ID!
    title: String!
    description: String!
    imageUrl: String
    updatedAt: String
    status: Status!
    user: User!
    category: Category!
    comments: [Comment!]
    likes: [Like!]
    views: [View!]
  }

  type Query {
    tracksForHome: [Track!]!
  }

  type Mutation {
    tracksForHome2: [Track!]!
  }
`;
