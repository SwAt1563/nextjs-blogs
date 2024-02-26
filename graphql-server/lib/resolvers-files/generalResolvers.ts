import { Resolvers } from "../types";

export const generalResolvers: Resolvers = {
  Query: {
    getStats: async (_, __, { dataSources }) => {
      const { published: totalPublishedBlogs, drafts: totalDraftBlogs } =
        await dataSources.blogAPI.countBlogsByStatus();
      const totalUsers = await dataSources.userAPI.countUsers();

      return {
        totalUsers,
        totalPublishedBlogs,
        totalDraftBlogs,
      };
    },
  },
};
