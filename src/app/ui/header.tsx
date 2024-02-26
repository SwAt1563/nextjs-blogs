"use client";

import React from "react";
import { FaBloggerB } from "react-icons/fa";
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

const Header = () => {
  const { user } = useUser();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container-fluid">
          <Link key="home" href="/" className="navbar-brand fs-3">
            <FaBloggerB />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {links.map((link) => {
                if (
                  (link.name === "Dashboard" &&
                    user &&
                    user.role !== "ADMIN") ||
                  !user
                ) {
                  return null;
                }

                return (
                  <li key={link.name} className="nav-item">
                    <Link
                      href={
                        link.name === "Profile"
                          ? link.href + "/" + user.id
                          : link.href
                      }
                      className="nav-link"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
