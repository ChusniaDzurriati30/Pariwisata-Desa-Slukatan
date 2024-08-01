"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/image/logoo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-white");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const changeNavbarBgOnScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg("bg-gray-100");
      } else {
        setNavbarBg("bg-white");
      }
    };

    window.addEventListener("scroll", changeNavbarBgOnScroll);
    return () => {
      window.removeEventListener("scroll", changeNavbarBgOnScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 border-b border-gray-200 transition-colors duration-300 ${navbarBg}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="#Hero"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={Logo} alt="Career Upgrade" className="h-16 w-auto" />
        </Link>
        <div className="hidden md:flex space-x-14 items-center text-gray-400">
          <Link href="#Hero" className="text-lg font-medium hover:text-primary">
            Home
          </Link>
          <Link
            className="text-lg font-medium hover:text-primary"
            href="#About"
          >
            About Us
          </Link>
          <Link
            className="text-lg font-medium hover:text-primary"
            href="#destination"
          >
            Destination
          </Link>
          <Link
            className="text-lg font-medium hover:text-primary"
            href="https://slukatan-mojotengah.wonosobokab.go.id/"
          >
            Contact
          </Link>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="p-4 space-y-2">
            <Link
              className="block text-lg font-medium text-gray-400 hover:text-primary"
              href="#Hero"
            >
              Home
            </Link>
            <Link
              className="block text-lg font-medium text-gray-400 hover:text-primary"
              href="#About"
            >
              About Us
            </Link>
            <Link
              className="block text-lg font-medium text-gray-400 hover:text-primary"
              href="#destination"
            >
              Destination
            </Link>
            <Link
              className="block text-lg font-medium text-gray-400 hover:text-primary"
              href="https://slukatan-mojotengah.wonosobokab.go.id/"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
