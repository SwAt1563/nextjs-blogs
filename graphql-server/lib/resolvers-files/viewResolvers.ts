import { Resolvers } from "../types";

export const viewResolvers: Resolvers = {

    Mutation: {
        createView: async (_, { userId, blogId }, { dataSources }) => {
            return await dataSources.viewAPI.createView(
                Number(userId),
                Number(blogId)
            );
        },
    },
};

