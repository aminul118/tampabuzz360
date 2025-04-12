"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import navMenu from "@/lib/constants/navMenu";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 flex items-center justify-center bg-white dark:bg-slate-950 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 text-[#EA1C79] font-semibold">
        {/* Logo */}
        <div className="dark:hidden">
          <Link href="/">
            <Image
              src={"/logo.svg"}
              width={220}
              height={60}
              alt="logo of Tampabuzz 360"
              priority
            />
          </Link>
        </div>

        {/* Logo white */}
        <div className="dark:block hidden">
          <Link href="/">
            <Image
              src={"/logo-white.svg"}
              width={220}
              height={60}
              alt="logo of Tampabuzz 360"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {/* Menu mapping and show */}
            {navMenu.map((menu, i) => (
              <li key={i}>
                <Link href={menu.url} className="text-gray-800 dark:text-white">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <DarkModeToggle />
        </div>

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
          <ul className="flex flex-col items-center gap-2 py-4">
            {/* Menu mapping and show */}
            {navMenu.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.url}
                  className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-pink-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center pb-4 items-center gap-3">
            Theme <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
