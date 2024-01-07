import prisma from "../../prisma/db";

import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import type { NextApiRequest, NextApiResponse } from "next";

import {
  UserAPI,
  BlogAPI,
  CategoryAPI,
  CommentAPI,
  LikeAPI,
  ViewAPI,
} from "./datasources/index";

export type DataSourceContext = {
  dataSources: {
    userAPI: UserAPI;
    blogAPI: BlogAPI;
    categoryAPI: CategoryAPI;
    commentAPI: CommentAPI;
    likeAPI: LikeAPI;
    viewAPI: ViewAPI;
  };
};

export const createContext = ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse<NextApiRequest>;
  
}): DataSourceContext => {
  return {
    dataSources: {
      userAPI: new UserAPI(prisma),
      blogAPI: new BlogAPI(prisma),
      categoryAPI: new CategoryAPI(prisma),
      commentAPI: new CommentAPI(prisma),
      likeAPI: new LikeAPI(prisma),
      viewAPI: new ViewAPI(prisma),
    },
  };
};
