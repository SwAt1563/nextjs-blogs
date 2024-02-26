// views.ts seed data

type ViewSeed = {
  userId: number;
  blogId: number;
};

// be carful views should be on published blogs only
export const views: ViewSeed[] = [
    { userId: 2, blogId: 1 },
    { userId: 2, blogId: 3 },
    { userId: 2, blogId: 6 },
    { userId: 3, blogId: 1 },
    { userId: 3, blogId: 6 },
    ];
