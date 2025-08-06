import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="w-full bg-primary border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-cinzel text-dark tracking-widest"
        >
          GOODWILL
        </Link>

        <div className="hidden md:flex space-x-6  text-dark font-cinzel">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/products" className="hover:text-primary transition">
            Products
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
        </div>

        <div className="md:hidden"></div>
      </div>
    </nav>
  );
};

export default NavBar;
