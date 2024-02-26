// npm i bcrypt
// npm i @types/bcrypt

import bcrypt from "bcrypt";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

type UserSeed = {
  email: string;
  username: string;
  // password: string;
  imageUrl: string;
  role: Role;
};

// // Function to hash passwords
// async function hashPassword(password: string): Promise<string> {
//   const saltRounds = 10;
//   return bcrypt.hash(password, saltRounds);
// }

export async function generateUsers(): Promise<UserSeed[]> {
  // const password = await hashPassword("123");

  const users: UserSeed[] = [
    {
      email: "admin@example.com",
      username: "qutaiba",
      // password: password,
      imageUrl: "https://picsum.photos/id/1005/400/400",
      role: Role.ADMIN,
    },
    {
      email: "user1@example.com",
      username: "omar",
      // password: password,
      imageUrl: "https://picsum.photos/id/883/400/400",
      role: Role.USER,
    },
    {
      email: "user2@example.com",
      username: "samer",
      // password: password,
      imageUrl: "https://picsum.photos/id/1074/400/400",
      role: Role.USER,
    },
  ];

  return users;
}
