import type { CategoryModel } from "../models";
import type { PrismaClient } from "@prisma/client/scripts/default-index";

export class CategoryAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
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
    return await this.prisma.category.findMany({
      cacheStrategy: { swr: 10, ttl: 60 },
    });
  }
}
