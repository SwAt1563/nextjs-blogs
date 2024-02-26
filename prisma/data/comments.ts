// comments.ts seed data

type CommentSeed = {
  userId: number;
  blogId: number;
  content: string;
};

// be carful comments should be on published blogs only
export const comments: CommentSeed[] = [
  { userId: 2, blogId: 1, content: "This is a great blog" },
  { userId: 2, blogId: 3, content: "Great Articl" },
  { userId: 2, blogId: 6, content: "Nice" },
  { userId: 3, blogId: 1, content: "Keep on" },
  { userId: 3, blogId: 6, content: "What happend ?" },
];
