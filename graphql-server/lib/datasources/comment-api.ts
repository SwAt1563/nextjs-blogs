import type { PrismaClient } from "@prisma/client/scripts/default-index";
import type { CommentModel } from "../models";

export class CommentAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
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
