import { Resolvers } from "../types";

export const categoryResolvers: Resolvers = {

    Query: {
        getCategories: async (_, __, { dataSources }) => {
            return await dataSources.categoryAPI.getCategories();
        }
    },

    Mutation: {
        createCategory: async (_, { name }, { dataSources }) => {
            return await dataSources.categoryAPI.createCategory(name);
        },
        
    }
};


