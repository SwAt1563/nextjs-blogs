import { PrismaClient } from "@prisma/client";

export class BlogAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createBlog(
    userId: number,
    categoryName: string,
    title: string,
    description: string,
    imageUrl?: string
  ) {
    const blogData = {
      title: title,
      description: description,
      // Conditionally include imageUrl only if provided
      ...(imageUrl && { imageUrl }),
      user: {
        connect: {
          id: userId,
        },
      },
      category: {
        connect: {
          name: categoryName,
        },
      },
    };

    return await this.prisma.blog.create({
      data: blogData,
    });
  }

  async getBlogs() {
    return await this.prisma.blog.findMany({
      include: {
        user: true,
        category: true,
        _count: {
          select: { views: true, likes: true },
        },
      },
    });
  }

  async getBlog(blogId: number) {
    return await this.prisma.blog.findUnique({
      where: {
        id: blogId,
      },
      include: {
        user: true,
        category: true,
        _count: {
          select: { views: true, likes: true },
        },
      },
    });
  }

  async getBlogsByCategory(categoryName: string) {
    return await this.prisma.blog.findMany({
      where: {
        category: {
          name: categoryName,
        },
      },
      include: {
        user: true,
        category: true,
        _count: {
          select: { views: true, likes: true },
        },
      },
    });
  }
}
