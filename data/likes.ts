// likes.ts seed data

type LikeSeed = {
  userId: number;
  blogId: number;
};

// be carful likes should be on published blogs only
export const likes: LikeSeed[] = [
  { userId: 2, blogId: 1 },
  { userId: 2, blogId: 3 },
  { userId: 2, blogId: 6 },
  { userId: 3, blogId: 1 },
  { userId: 3, blogId: 6 },
];