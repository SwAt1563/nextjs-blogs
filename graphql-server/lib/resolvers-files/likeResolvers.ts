import { Resolvers } from "../types";

export const likeResolvers: Resolvers = {
  Mutation: {
    createLike: async (_, { userId, blogId }, { dataSources }) => {
      return await dataSources.likeAPI.createLike(
        Number(userId),
        Number(blogId)
      );
    },
    deleteLike: async (_, { userId, blogId }, { dataSources }) => {
      return await dataSources.likeAPI.deleteLike(
        Number(userId),
        Number(blogId)
      );
    },
  },
};


