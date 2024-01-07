import { PrismaClient } from "@prisma/client";
import type { CategoryModel } from "../models";

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
    return await this.prisma.category.findMany();
  }
}
