// header.tsx
import React from "react";
import NavLinks from "./nav-links";
import { FaBloggerB } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
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
              <NavLinks />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
