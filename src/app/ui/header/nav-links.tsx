// nav-links.tsx
"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const links = [
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "Create Blog",
    href: "/create-blog",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },

  {
    name: "Logout",
    href: "/api/auth/logout",
  },
];

export default function NavLinks() {
  const { user, error, isLoading } = useUser();

  return (
    <>
      {links.map((link) => {
        if (link.name === "Dashboard" && user && user.role !== "ADMIN" || !user) {
          return null;
        }

        return (
          <li key={link.name} className="nav-item">
            <Link href={link.href} className="nav-link">
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
