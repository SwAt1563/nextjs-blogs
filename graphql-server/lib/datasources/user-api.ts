import type { PrismaClient } from "@prisma/client/scripts/default-index";
import type { UserModel } from "../models";

export class UserAPI {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createUser(
    username: string,
    email: string,
    imageUrl?: string
  ): Promise<UserModel> {

    const userData = {
      username: username,
      email: email,
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

  

  async loginUser(
    username: string,
  ): Promise<{ success: boolean; error?: string; user?: UserModel }> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }


    return { success: true, user: user };
  }

 
}
