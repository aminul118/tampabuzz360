"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 h-16 flex items-center justify-center bg-white dark:bg-slate-950 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 text-[#EA1C79] font-semibold">
        {/* Logo */}
        <div className={`dark:hidden`}>
          <Image
            src={"/logo.svg"}
            width={220}
            height={60}
            alt="logo of Tampabuzz 360"
            priority
          />
        </div>
        {/* Logo White*/}
        <div className={`hidden dark:block`}>
          <Image
            src={"/logo-white.svg"}
            width={200}
            height={60}
            alt="logo of Tampabuzz 360"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-[#1F5781]">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Tampa Today
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-blue-600">
                Guides & Tips
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-blue-600">
                Events
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-blue-600">
                Trending Now
              </Link>
            </li>
          </ul>
        </nav>
        <DarkModeToggle />
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-slate-800 shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item === "Home" ? "" : item.toLowerCase()}`}
                  className="block p-2 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
