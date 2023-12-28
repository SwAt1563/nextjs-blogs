import { PrismaClient } from "@prisma/client";

export class ViewAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createView(userId: number, blogId: number) {
    return await this.prisma.view.create({
      data: {
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

  async getBlogViews(blogId: number) {
    return await this.prisma.view.count({
      where: {
        blogId: blogId,
      },
    });
  }
}
