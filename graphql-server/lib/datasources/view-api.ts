import type { PrismaClientAccelerated } from "@/prisma/db";
import type { ViewModel } from "../models";

export class ViewAPI {
  prisma: PrismaClientAccelerated;

  constructor(prisma: PrismaClientAccelerated) {
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
