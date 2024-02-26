import { Status, BlogModel } from "../models";
import type { PrismaClient } from "@prisma/client/scripts/default-index";

export class BlogAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async countBlogsByStatus(): Promise<{ published: number; drafts: number }> {
    const published = await this.prisma.blog.count({
      where: {
        status: "PUBLISHED",
      },
    });

    const drafts = await this.prisma.blog.count({
      where: {
        status: "DRAFT",
      },
    });

    return { published, drafts };
  }

  async createBlog(
    userId: number,
    categoryName: string,
    title: string,
    description: string,
    imageUrl?: string
  ): Promise<BlogModel> {
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

  async deleteBlog(blogId: number): Promise<BlogModel> {
    return await this.prisma.blog.delete({
      where: {
        id: blogId,
      },
    });
  }

  async updateBlogStatus(blogId: number, status: Status): Promise<BlogModel> {
    return await this.prisma.blog.update({
      where: {
        id: blogId,
      },
      data: {
        status,
      },
    });
  }

  async updateBlog(
    blogId: number,
    title?: string,
    description?: string,
    imageUrl?: string
  ): Promise<BlogModel> {
    const blogData = {
      // Conditionally include only if provided
      ...(title && { title }),
      ...(description && { description }),
      ...(imageUrl && { imageUrl }),
    };

    return await this.prisma.blog.update({
      where: {
        id: blogId,
      },
      data: blogData,
    });
  }

  async getBlog(blogId: number, userId: number): Promise<BlogModel | null> {
    const blog = await this.prisma.blog.findUnique({
      where: {
        id: blogId,
        status: "PUBLISHED",
      },
      include: {
        user: true,
        category: true,
        _count: {
          select: { views: true, likes: true, comments: true },
        },
      },
    });

    const userMadeLike = await this.prisma.like.findUnique({
      where: {
        UniqueBlogUserLike: {
          userId: userId,
          blogId: blogId,
        },
      },
    });

    // Declare blogWithUserLike outside the if statement
    let blogWithUserLike: BlogModel | null = null;
    if (blog) {
      // Check if userMadeLike exists and assign the appropriate value
      if (userMadeLike) {
        blogWithUserLike = {
          ...blog,
          userMadeLike: true,
        };
      } else {
        blogWithUserLike = {
          ...blog,
          userMadeLike: false,
        };
      }
    }

    return blogWithUserLike;
  }

  async getBlogs(
    offset: number = 0,
    limit: number = 10,
    status: Status | "ALL" = "ALL",
    categoryName: string | null = null
  ): Promise<{ blogs: BlogModel[]; total: number }> {
    let whereCondition = {};
    if (status !== "ALL") {
      whereCondition = {
        status: status,
      };
    }
    if (categoryName) {
      whereCondition = {
        ...whereCondition,
        category: {
          name: categoryName,
        },
      };
    }

    const [blogs, total] = await this.prisma.$transaction([
      this.prisma.blog.findMany({
        include: {
          user: true,
          category: true,
          _count: {
            select: { views: true, likes: true, comments: true },
          },
        },
        skip: offset,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        where: whereCondition,
      }),
      this.prisma.blog.count({
        where: whereCondition,
      }),
    ]);

    return {
      blogs: blogs,
      total: total,
    };
  }

  async getBlogsBySearchQuery(
    query: string | null = null,
    offset: number = 0,
    limit: number = 10,
    categoryName: string | null = null
  ): Promise<{ blogs: BlogModel[]; total: number }> {
    let whereCondition: Object = { status: "PUBLISHED" };

    if (query) {
      whereCondition = {
        ...whereCondition,
        title: {
          search: query,
        },
      };
    }
    if (categoryName) {
      whereCondition = {
        ...whereCondition,
        category: {
          name: categoryName,
        },
      };
    }

    const [blogs, total] = await this.prisma.$transaction([
      this.prisma.blog.findMany({
        include: {
          user: true,
          category: true,
          _count: {
            select: { views: true, likes: true, comments: true },
          },
        },
        skip: offset,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        where: whereCondition,
      }),
      this.prisma.blog.count({
        where: whereCondition,
      }),
    ]);

    return {
      blogs: blogs,
      total: total,
    };
  }

  async getTopThreePublishedBlogsBasedOnLikes(): Promise<BlogModel[]> {
    const blogs = await this.prisma.blog.findMany({
      where: {
        status: "PUBLISHED",
      },
      include: {
        user: true,
        category: true,
        _count: {
          select: { views: true, likes: true, comments: true },
        },
      },
      take: 3, // Get only the top 3 blogs
      skip: 0,
      orderBy: [
        {
          likes: {
            _count: "desc", // Primary ordering by likes
          },
        },
        {
          views: {
            _count: "desc", // Secondary ordering by views
          },
        },
      ],
    });

    return blogs;
  }

  async getBlogsByUser(userId: number): Promise<BlogModel[]> {
    return await this.prisma.blog.findMany({
      where: {
        userId: userId,
        status: "PUBLISHED",
      },
      include: {
        user: true,
        category: true,
        _count: {
          select: { views: true, likes: true, comments: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
