"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path ? "navlink active" : "navlink";
  };

  return (
    <nav className="bg-leaf-50 border-gray-200 relative z-50">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto sm:px-12 py-4 px-4">
        <Link
          href="/"
          className="flex items-center space-x-3 relogo"
          onClick={closeMenu}
        >
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-leaf-900">
            Resapling
          </span>
        </Link>

        <button
          type="button"
          className={`navtoggle md:hidden focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white transition-shadow`}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <i className={`bx text-4xl ${isMenuOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto navcon p-2`}
          id="navbar-default"
        >
          <ul className="navlist">
            <li>
              <Link href="/" className={isActive("/")} onClick={closeMenu}>
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={isActive("/about")}
                onClick={closeMenu}
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                href="/update"
                className={isActive("/update")}
                onClick={closeMenu}
              >
                Update
              </Link>
            </li>
            <li>
              <Link
                href="/campaign"
                className={isActive("/campaign")}
                onClick={closeMenu}
              >
                Donasi
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className={isActive("/login")}
                onClick={closeMenu}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
