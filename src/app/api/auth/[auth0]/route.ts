// https://auth0.github.io/nextjs-auth0/types/config.ConfigParameters.html
import { handleAuth, handleLogout, handleCallback } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

import { GraphQLClient, gql } from "graphql-request";

import type {
  RegisterMutation,
  LoginQuery,
} from "@/graphql-client/__generated__/graphql";

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

const afterCallback = async (req: any, session: any, state: any) => {
  const graphQLClient = new GraphQLClient(process.env.GRAPHQL_URL as string);

  // login user
  const loginData = await graphQLClient.request<LoginQuery>(LOGIN, {
    username: session.user.name.toLowerCase(),
  });

  // sucess login
  if (loginData?.login?.success) {
    return {
      ...session,
      user: { ...session.user, ...loginData.login.user },
    };
  }
  // register user
  const registerData = await graphQLClient.request<RegisterMutation>({
    document: REGISTER,
    variables: {
      username: session.user.name.toLowerCase(),
      email: session.user.email.toLowerCase(),
      imageUrl: session.user.picture,
    },
  });

  return {
    ...session,
    user: { ...session.user, ...registerData?.register?.user },
  };
};

export const GET = handleAuth({
  logout: handleLogout({ returnTo: "/api/auth/login" }),
  callback: handleCallback({ afterCallback }),
});
