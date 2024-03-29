import { Resolvers } from "../types";

export const blogResolvers: Resolvers = {
  Query: {
    
    getBlog: async (_, { blogId, userId }, { dataSources }) => {
      return await dataSources.blogAPI.getBlog(Number(blogId), Number(userId));
    },

    getBlogsByUser: async (_, { userId }, { dataSources }) => {
      return await dataSources.blogAPI.getBlogsByUser(Number(userId));
    },

    getTopBlogs: async (_, __, { dataSources }: { dataSources: any }) => {
      return await dataSources.blogAPI.getTopThreePublishedBlogsBasedOnLikes();
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
        categoryName,
        title,
        description,
        imageUrl ||
          "https://blog1563-website-images.s3.amazonaws.com/blog/test_blog-637d9f30-a771-4530-ba5f-7142c9d2744f.png"
      );
    },

    deleteBlog: async (_, { blogId }, { dataSources }) => {
      return await dataSources.blogAPI.deleteBlog(Number(blogId));
    },

    updateBlogStatus: async (_, { blogId, status }, { dataSources }) => {
      return await dataSources.blogAPI.updateBlogStatus(Number(blogId), status);
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

  Blog: {
    comments: async ({ id }, _, { dataSources }) => {
      return await dataSources.commentAPI.getBlogComments(Number(id));
    },

    number_of_comments: async ({ _count }, _, __) => {
      return _count?.comments || 0;
    },

    number_of_views: async ({ _count }, _, __) => {
      return _count?.views || 0;
    },

    number_of_likes: async ({ _count }, _, __) => {
      return _count?.likes || 0;
    },
  },
};
