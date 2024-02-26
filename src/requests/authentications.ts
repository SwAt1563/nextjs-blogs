import { gql } from "graphql-request";

export const REGISTER = gql`
  mutation Register($username: String!, $email: String!, $imageUrl: String) {
    register(username: $username, email: $email, imageUrl: $imageUrl) {
      code
      success
      message
      user {
        imageUrl
        email
        username
        id
        role
      }
    }
  }
`;

export const LOGIN = gql`
  query Login($username: String!) {
    login(username: $username) {
      code
      success
      message
      user {
        id
        username
        email
        role
        imageUrl
      }
    }
  }
`;
