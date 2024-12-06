"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center z-10">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Digiverse Solution</h1>

      {/* Hamburger Menu (visible below 1024px) */}
      <div
        className="flex flex-col justify-center gap-1 w-8 h-8 cursor-pointer lg:hidden"
        onClick={toggleMenu}
      >
        <span className="h-1 bg-white rounded-sm"></span>
        <span className="h-1 bg-white rounded-sm"></span>
        <span className="h-1 bg-white rounded-sm"></span>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row items-center gap-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent px-6 lg:px-0 py-4 lg:py-0 z-20`}
      >
        <Link href="/" className="text-white font-semibold hover:text-orange-500">
          Home
        </Link>
        <Link href="/about" className="text-white font-semibold hover:text-orange-500">
          About
        </Link>
        <Link href="/services" className="text-white font-semibold hover:text-orange-500">
          Services
        </Link>
        <Link href="/contact" className="text-white font-semibold hover:text-orange-500">
          Contact
        </Link>

        {/* Search Bar (Hidden on Small Screens) */}
        <div className="hidden lg:flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="w-64 h-10 px-4 text-sm text-gray-900 rounded-full border focus:outline-none focus:ring focus:ring-orange-500"
          />
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full">
            Search
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
