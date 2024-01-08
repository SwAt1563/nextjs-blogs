// Define the Role enum
export type Role = "USER" | "ADMIN";

// Define the UserModel type using the Role enum
export type UserModel = {
  id: number;
  username: string;
  email: string;
  role: Role;
  imageUrl?: string | null;
};
