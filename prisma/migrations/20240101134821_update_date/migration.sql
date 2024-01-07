/*
  Warnings:

  - Made the column `createdAt` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Like` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Like` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `View` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `View` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "View" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;
