"use client";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const menuItems = [
  {
    name: "Board",
    href: "/trello",
  },
  {
    name: "Profile",
    href: "/",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export default function Header() {
  const { authStatus } = useAuth();
  return (
    <div className="relative w-full py-2 bg-white">
      <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link href={"/"} className="inline-block w-full max-w-[150px]">
            <Logo />
          </Link>
        </div>
        <div className="items-start hidden grow lg:flex">
          <ul className="inline-flex ml-12 space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          <Link
            href={authStatus ? "/profile" : "/signup"}
            className="px-3 py-2 text-sm font-semibold bg-transparent rounded-md text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {authStatus ? "Profile" : "Sign up"}
          </Link>
          <Link
            href={authStatus ? "/logout" : "/login"}
            className="px-3 py-2 text-sm font-semibold border rounded-md shadow-sm border-primary text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {authStatus ? "Logout" : "Log In"}
          </Link>
        </div>
      </div>
    </div>
  );
}
