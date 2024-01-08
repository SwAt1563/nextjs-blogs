import { InMemoryCache } from "@apollo/client";
// import { offsetLimitPagination } from "@apollo/client/utilities";
import { BlogPagination } from "../__generated__/graphql";


const mergePaginatedData = (existing: BlogPagination, incoming: BlogPagination, args: any) => {
  const { offset = 0, limit = 10 } = args || {};

  // Merge the paginated data manually
  const merged = {
    ...existing,
    blogs: [...(existing.blogs || []), ...(incoming.blogs || [])],
  };

  // Return the merged result
  return {
    ...merged,
    // Assuming you also want to keep other fields like totalBlogs
    total: incoming.total,
  };
};

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getBlogs: {
          keyArgs: false, // Prevent Apollo Client from automatically generating cache keys
          merge: (existing: BlogPagination = { total:  0}, incoming: BlogPagination, { args }) =>
            mergePaginatedData(existing, incoming, args),
        },
        getBlogsBySearchQuery: {
          keyArgs: false, // Prevent Apollo Client from automatically generating cache keys
          merge: (existing: BlogPagination = { total:  0}, incoming: BlogPagination, { args }) =>
            mergePaginatedData(existing, incoming, args),
        },
      },
    },
  },
});
