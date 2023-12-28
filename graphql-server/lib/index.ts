// npm i @apollo/server graphql graphql-tag
// npm i -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers ts-node-dev typescript
// package scripits: "generate-server": "graphql-codegen --config graphql-server/codegen.ts"
// run the command when the schema and models ready
// npm run generate-server


import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { createContext } from "./context";
import { ApolloServerPluginCacheControl } from "@apollo/server/plugin/cacheControl";
import type { NextApiRequest, NextApiResponse } from "next";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginCacheControl({ defaultMaxAge: 5 })], // 5 seconds
  });

  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      const nextApiReq: NextApiRequest = req as NextApiRequest;
      const nextApiRes: NextApiResponse<NextApiRequest> =
        res as NextApiResponse<NextApiRequest>;

      const { cache } = server;

      return createContext({ req: nextApiReq, res: nextApiRes, cache });
    },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer();
