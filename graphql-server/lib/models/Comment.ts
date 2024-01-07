import { UserModel } from ".";

export type CommentModel = {
  id: number;
  content: string;
  blogId: number;
  userId?: number;
  user?: UserModel;
  createdAt: Date;
  updatedAt: Date;
};
