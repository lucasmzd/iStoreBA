"use client";
import React, { useState, useEffect } from "react";
import { IUserSession } from "@/interfaces/types";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  const [userData, setUserData] = useState<IUserSession>();
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, [pathname]);

  return (
    <nav className="inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-lg md:max-w-screen-xl lg:max-w-[1200px] border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl">
        <div className="px-4 flex items-center justify-between">
          <div className="flex shrink-0">
            <Link aria-current="page" className="flex items-center" href="/">
              <img
                className="h-12 w-auto"
                src="https://i.imgur.com/UFkZ1rk.png"
                alt=""
              />
              <p className="sr-only">iStore BA</p>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="/"
            >
              Home
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="/about"
            >
              About
            </Link>
          </div>
          {userData?.user.email ? (
            <div className="flex items-center justify-end gap-3">
              <Link
                className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                href="/dashboard">
                Profile
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/cart">
                Cart
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-end gap-3">
              <Link
                className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                href="/register">
                Sign up
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login">
                Login
              </Link>
            </div>
          )}
        </div>
    </nav>
  );
};
export default NavBar;
