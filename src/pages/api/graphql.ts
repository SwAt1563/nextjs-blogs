// Install required packages
// npm i @apollo/server graphql graphql-tag next
// npm i -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers ts-node-dev typescript

import { ApolloServer } from "@apollo/server";
import {
  createContext,
  DataSourceContext,
} from "@/graphql-server/lib/context"; // Import your context creation function
import typeDefs from "@/graphql-server/lib/schema";
import resolvers from "@/graphql-server/lib/resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const apolloServer = new ApolloServer<DataSourceContext>({
  typeDefs,
  resolvers,
  
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => createContext({ req, res }),
});
