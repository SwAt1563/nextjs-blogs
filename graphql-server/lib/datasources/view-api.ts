import type { PrismaClient } from "@prisma/client/scripts/default-index";
import type { ViewModel } from "../models";

export class ViewAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createView(userId: number, blogId: number): Promise<ViewModel> {
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

  
}
