import type { PrismaClientAccelerated } from "@/prisma/db";
import type { CategoryModel } from "../models";

export class CategoryAPI {
  prisma: PrismaClientAccelerated;

  constructor(prisma: PrismaClientAccelerated) {
    this.prisma = prisma;
  }

  async createCategory(name: string): Promise<CategoryModel> {
    return await this.prisma.category.create({
      data: {
        name: name,
      },
    });
  }

  async getCategories(): Promise<CategoryModel[]> {
    return await this.prisma.category.findMany(
      {
      cacheStrategy: { swr: 10, ttl: 60 },
    }
    );
  }
}
