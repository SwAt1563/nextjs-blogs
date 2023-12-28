import { PrismaClient } from "@prisma/client";

export class CommentAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createComment(userId: number, blogId: number, content: string) {
    return await this.prisma.comment.create({
      data: {
        content: content,
        user: {
          connect: {
            id: userId,
          },
        },
        blog: {
          connect: {
            id: blogId,
          },
        },
      },
    });
  }

  async getBlogComments(blogId: number) {
    return await this.prisma.comment.findMany({
      where: {
        blogId: blogId,
      },
      include: {
        user: true,
      },
    });
  }
}
