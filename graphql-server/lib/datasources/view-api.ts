import type { PrismaClient } from "@prisma/client/scripts/default-index";
import type { ViewModel } from "../models";

export class ViewAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  // async createView(userId: number, blogId: number): Promise<ViewModel> {
  //   return await this.prisma.view.create({
  //     data: {
  //       user: {
  //         connect: {
  //           id: userId,
  //         },
  //       },
  //       blog: {
  //         connect: {
  //           id: blogId,
  //         },
  //       },
  //     },
  //   });
  // }

  // if the view already exists, don't create a new one
  async createView(userId: number, blogId: number): Promise<ViewModel> {
    return await this.prisma.view.upsert({
      where: {
        // Use the unique constraint name or fields
        UniqueBlogUserView: {
          userId: userId,
          blogId: blogId,
        },
      },
      update: {},
      create: {
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
