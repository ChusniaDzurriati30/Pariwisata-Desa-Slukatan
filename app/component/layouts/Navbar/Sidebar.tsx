"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../../../public/image/1.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="relative">
      <div className="bg-white shadow-lg z-10 fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full max-w-64 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0">
        <Link
          href={"/"}
          className="px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700 flex items-center"
        >
          <div className="w-[50px] h-auto">
            <Image alt="ump-culinary" src={Logo} />
          </div>
          <h1 className="ml-1 text-lg font-bold transition-all duration-200 ">
            <span className="text-primary">CU On Top</span>{" "}
          </h1>
        </Link>

        <hr className="h-px mt-0 " />

        <div className="my-5 items-center block w-auto max-h-screen overflow-auto">
          <ul className="mx-2 space-y-2">
            <li>
              <Link
                href={"/dashboard/managecareer"}
                className={`block px-5 py-3 rounded-lg cursor-pointer ${
                  pathname === "/dashboard/managecareer" ? "bg-primary/10" : ""
                }`}
              >
                Kelola Karir
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/manageblog"}
                className={`block px-5 py-3 rounded-lg cursor-pointer ${
                  pathname === "/dashboard/manageblog" ? "bg-primary/10" : ""
                }`}
              >
                Kelola Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-0 left-0 right-0 mx-4 mb-4"></div>
      </div>
    </div>
  );
}
