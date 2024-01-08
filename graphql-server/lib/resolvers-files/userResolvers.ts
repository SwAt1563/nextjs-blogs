import { Resolvers } from "../types";

export const userResolvers: Resolvers = {
  Query: {
    getUser: async (_, { userId }, { dataSources }) => {
      return await dataSources.userAPI.getUserById(Number(userId));
    },
  },

  Mutation: {
    register: async (
      _,
      { username, email, imageUrl },
      { dataSources }
    ) => {
      try {
        // Check if imageUrl is provided, if not, set it to a default value or null
        const userImageUrl =
          imageUrl ||
          "https://pluspng.com/img-png/user-png-icon-account-human-person-user-icon-512.png"; // Change "defaultImageUrl" to your desired default value or set it to null
        const user = await dataSources.userAPI.createUser(
          username,
          email,
          userImageUrl
        );
        return {
          code: 200,
          success: true,
          message: `Successfully register ${username}`,
          user,
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: "Failed to register user",
          user: null,
        };
      }
    },

    login: async (_, { username }, { dataSources }) => {
      try {
        const response = await dataSources.userAPI.loginUser(username);

        if (!response.success) {
          return {
            code: 401, // Unauthorized
            success: false,
            message: response.error as string,
            user: null,
          };
        }

        return {
          code: 200,
          success: true,
          message: `Successfully logged`,
          user: response.user,
        };
      } catch (err) {
        return {
          code: 500, // Internal Server Error
          success: false,
          message: "Internal Server Error",
          user: null,
        };
      }
    },

  },

  User: {
    blogs: async ({id}, _, { dataSources }) => {
      return await dataSources.blogAPI.getBlogsByUser(id);
    },
  },
};


