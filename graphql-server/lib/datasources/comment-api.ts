import type { PrismaClientAccelerated } from "@/prisma/db";
import type { CommentModel } from "../models";

export class CommentAPI {
  prisma: PrismaClientAccelerated;

  constructor(prisma: PrismaClientAccelerated) {
    this.prisma = prisma;
  }

  async createComment(userId: number, blogId: number, content: string) : Promise<CommentModel>  {
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

  async getBlogComments(blogId: number): Promise<CommentModel[]> {
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
