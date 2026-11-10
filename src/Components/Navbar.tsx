"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link className="logo" href="#home" onClick={closeMenu}>
          THETINY.SITE
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`navbar-menu${isMenuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          <nav className="nav-links" aria-label="Main navigation">
            <Link className="active-link" href="#home" onClick={closeMenu}>Home</Link>
            <Link href="#premium" onClick={closeMenu}>About</Link>
            <Link href="#pricing" onClick={closeMenu}>Pricing</Link>
            <Link href="#blog" onClick={closeMenu}>Blog</Link>
            <Link href="#terms" onClick={closeMenu}>Terms</Link>
          </nav>

          <div className="nav-buttons">
            <Link className="login-button" href="#login" onClick={closeMenu}>Log In</Link>
            <Link className="start-button" href="#signup" onClick={closeMenu}>Get Started Free</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
