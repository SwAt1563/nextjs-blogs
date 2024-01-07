import type { PrismaClientAccelerated } from "@/prisma/db";
import type { LikeModel } from "../models";
export class LikeAPI {
  prisma: PrismaClientAccelerated;

  constructor(prisma: PrismaClientAccelerated) {
    this.prisma = prisma;
  }

  async createLike(userId: number, blogId: number): Promise<LikeModel> {
    return await this.prisma.like.create({
      data: {
        user: { connect: { id: userId } },
        blog: { connect: { id: blogId } },
      },
    });
  }

  async deleteLike(userId: number, blogId: number): Promise<LikeModel> {
    return await this.prisma.like.delete({
      where: {
        UniqueBlogUserLike: {
          userId,
          blogId,
        },
      },
    });
  }

 

   

}
