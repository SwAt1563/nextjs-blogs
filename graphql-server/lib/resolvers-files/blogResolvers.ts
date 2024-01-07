import { Resolvers } from "../types";


export const blogResolvers: Resolvers = {
  Query: {
    getBlog: async (_, { userId, blogId }, { dataSources }) => {
      return await dataSources.blogAPI.getBlog(Number(userId), Number(blogId));
    },

    getBlogsByUser: async (_, { userId }, { dataSources }) => {
      return await dataSources.blogAPI.getBlogsByUser(Number(userId));
    },

    getBlogs: async (
      _,
      { offset, limit, categoryName, status },
      { dataSources }
    ) => {
      try {
        const { blogs, total } = await dataSources.blogAPI.getBlogs(
          offset || 0,
          limit || 10,
          status || "ALL",
          categoryName || null
        );

        return {
          blogs,
          total,
        };
      } catch (err) {
        return {
          blogs: [],
          total: 0,
        };
      }
    },

    getBlogsBySearchQuery: async (
      _,
      { query, offset, limit, categoryName },
      { dataSources }
    ) => {
      try {
        const { blogs, total } =
          await dataSources.blogAPI.getBlogsBySearchQuery(
            query || null,
            offset || 0,
            limit || 10,
            categoryName || null
          );

        return {
          blogs,
          total,
        };
      } catch (err) {
        return {
          blogs: [],
          total: 0,
        };
      }
    },
  },

  Mutation: {
    createBlog: async (
      _,
      { userId, title, description, categoryName, imageUrl },
      { dataSources }
    ) => {
      return await dataSources.blogAPI.createBlog(
        Number(userId),
        title,
        description,
        categoryName,
        imageUrl ||
          "https://www.hallaminternet.com/wp-content/uploads/2020/01/Is-blogging-relevant-anymore.jpeg"
      );
    },

    deleteBlog: async (_, { blogId }, { dataSources }) => {
      return await dataSources.blogAPI.deleteBlog(Number(blogId));
    },

    updateBlogStatus: async (_, { blogId }, { dataSources }) => {
      return await dataSources.blogAPI.updateBlogStatus(Number(blogId));
    },

    updateBlog: async (
      _,
      { blogId, title, description, imageUrl },
      { dataSources }
    ) => {
      return await dataSources.blogAPI.updateBlog(
        Number(blogId),
        title || undefined,
        description || undefined,
        imageUrl || undefined
      );
    },
  },
};


