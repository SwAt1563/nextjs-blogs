"use client";
import React from "react";
// npm i @apollo/client
// npm i @apollo/space-kit // for styling
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const graphqlUrl = "http://localhost:3000/api/graphql";
  const apolloClient = new ApolloClient({
    uri: graphqlUrl,
    cache: cache,
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
