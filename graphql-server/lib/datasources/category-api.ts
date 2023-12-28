import { PrismaClient } from "@prisma/client";

export class CategoryAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createCategory(name: string) {
    return await this.prisma.category.create({
      data: {
        name: name,
      },
    });
  }

  async getCategories() {
    return await this.prisma.category.findMany();
  }
}
