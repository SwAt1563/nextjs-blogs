import {
  generalResolvers,
  blogResolvers,
  categoryResolvers,
  commentResolvers,
  userResolvers,
  likeResolvers,
  viewResolvers,
} from "./resolvers-files";

const resolvers = [
  generalResolvers,
  blogResolvers,
  categoryResolvers,
  commentResolvers,
  userResolvers,
  likeResolvers,
  viewResolvers,
];

export default resolvers;
