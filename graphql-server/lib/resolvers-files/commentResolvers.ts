import { Resolvers } from "../types";

export const commentResolvers: Resolvers = {

    Mutation: {
        createComment: async (_, { userId, blogId, content }, { dataSources }) => {
            return await dataSources.commentAPI.createComment(
                Number(userId),
                Number(blogId),
                content
            );
        },
    }
};


