import { UserModel, CategoryModel } from ".";
export type Status = "DRAFT" | "PUBLISHED";

export type BlogModel = {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  imageUrl?: string | null;
  userId: number;
  categoryId: number;
  user?: UserModel;
  category?: CategoryModel;
  _count?: {
    views: number;
    likes: number;
  };
};
