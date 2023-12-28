import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export class UserAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async createUser(
    email: string,
    username: string,
    password: string,
    imageUrl?: string
  ) {
    const hashedPassword = await this.hashPassword(password);

    const userData = {
      username,
      email,
      password: hashedPassword,
      // Conditionally include imageUrl only if provided
      ...(imageUrl && { imageUrl }),
    };

    return await this.prisma.user.create({
      data: userData,
    });
  }

  async getUserById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
}
