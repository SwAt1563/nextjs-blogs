// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

import { generateUsers } from "../data/users";
import { blogs } from "../data/blogs";
import { categories } from "../data/categories";
import { comments } from "../data/comments";
import { views } from "../data/views";
import { likes } from "../data/likes";

const prisma = new PrismaClient();

async function main() {
  const users = await generateUsers();

  // the order of the following operations is important
  // because blogs depend on users and categories
  // and comment, like or view depend on blogs and users
  await prisma.user.createMany({
    data: users,
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.blog.createMany({
    data: blogs,
  });

  await prisma.comment.createMany({
    data: comments,
  });

  await prisma.view.createMany({
    data: views,
  });

  await prisma.like.createMany({
    data: likes,
  });

  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
