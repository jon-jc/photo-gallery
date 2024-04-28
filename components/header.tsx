import { CameraIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm dark:bg-gray-950">
      <Link className="flex items-center gap-2" href="#">
        <CameraIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
        <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Photo Gallery
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Gallery
        </Link>
        <Link
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Contact
        </Link>
      </nav>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          className="w-full rounded-md border border-gray-200 bg-white px-10 py-2 text-sm shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-50 dark:focus:ring-gray-50"
          placeholder="Search photos..."
          type="search"
        />
      </div>
    </header>
  );
};

export default Header;
