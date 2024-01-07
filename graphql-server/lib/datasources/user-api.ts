import type { PrismaClientAccelerated } from "@/prisma/db";
import bcrypt from "bcrypt";
import type { UserModel } from "../models";

export class UserAPI {
  prisma: PrismaClientAccelerated;

  constructor(prisma: PrismaClientAccelerated) {
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
  ): Promise<UserModel> {
    const hashedPassword = await this.hashPassword(password);

    const userData = {
      username: username,
      email: email,
      password: hashedPassword,
      // Conditionally include imageUrl only if provided
      ...(imageUrl && { imageUrl }),
    };

    return await this.prisma.user.create({
      data: userData,
    });
  }

  async getUserById(id: number): Promise<UserModel | null> {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async resetPassword(email: string, newPassword: string): Promise<UserModel> {
    const hashedPassword = await this.hashPassword(newPassword);

    return await this.prisma.user.update({
      where: {
        email: email,
      },
      data: {
        password: hashedPassword,
      },
    });
  }

  async loginUser(
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string; user?: UserModel }> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    const passwordMatch = await bcrypt.compare(password, user.password); // FUNCTION USE 10 ROUNDS OF SALT

    if (!passwordMatch) {
      return { success: false, error: "Incorrect password" };
    }

    return { success: true, user: user };
  }

  async updateImageUrl(userId: number, imageUrl: string): Promise<UserModel> {
    return await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        imageUrl: imageUrl,
      },
    });
  }
}
