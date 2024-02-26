import type { PrismaClient } from "@prisma/client/scripts/default-index";

export class ViewAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createView(userId: number, blogId: number): Promise<boolean> {
    // Check if a view already exists
    const existingView = await this.prisma.view.findFirst({
      where: {
        userId: userId,
        blogId: blogId,
      },
    });

    // If a view exists, return false
    if (existingView) {
      return false;
    }

    // If no view exists, create a new view and return it
    await this.prisma.view.create({
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

    return true;
  }

}
