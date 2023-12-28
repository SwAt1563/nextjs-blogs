import { PrismaClient } from "@prisma/client";

export class LikeAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createLike(userId: number, blogId: number) {
    return await this.prisma.like.create({
      data: {
        user: { connect: { id: userId } },
        blog: { connect: { id: blogId } },
      },
    });
  }

  async deleteLike(userId: number, blogId: number) {
    return await this.prisma.like.delete({
      where: {
        UniqueBlogUserLike: {
          userId,
          blogId,
        },
      },
    });
  }

  async getBlogLikesCount(blogId: number) {
    return await this.prisma.like.count({
      where: {
        blogId: blogId,
      },
    });
  }

   

}
