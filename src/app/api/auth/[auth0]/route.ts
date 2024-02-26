// https://auth0.github.io/nextjs-auth0/types/config.ConfigParameters.html
import { handleAuth, handleLogout, handleCallback } from "@auth0/nextjs-auth0";

import { GraphQLClient } from "graphql-request";

import type {
  RegisterMutation,
  LoginQuery,
} from "@/graphql-client/__generated__/graphql";

import { LOGIN, REGISTER } from "@/src/requests/authentications";

const afterCallback = async (req: any, session: any, state: any) => {
  const graphQLClient = new GraphQLClient(process.env.GRAPHQL_URL as string);

  // login user
  const loginData = await graphQLClient.request<LoginQuery>(LOGIN, {
    username: session.user.name.toLowerCase(),
  });

  // sucess login (user already exists in the database)
  if (loginData?.login?.success) {
    return {
      ...session,
      user: { ...session.user, ...loginData.login.user },
    };
  }
  // register user (user does not exist in the database)
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
  callback: handleCallback({ afterCallback }), // what to do after login
});
