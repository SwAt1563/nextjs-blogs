import { blogResolvers } from "./resolvers-files/blogResolvers";
import { categoryResolvers } from "./resolvers-files/categoryResolvers";
import { commentResolvers } from "./resolvers-files/commentResolvers";
import { userResolvers } from "./resolvers-files/userResolvers";
import { likeResolvers } from "./resolvers-files/likeResolvers";
import { viewResolvers } from "./resolvers-files/viewResolvers";

const resolvers = [
  blogResolvers,
  categoryResolvers,
  commentResolvers,
  userResolvers,
  likeResolvers,
  viewResolvers,
];

export default resolvers;
