import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-slate-800 text-slate-100 p-4">
      <div>
        <h1 className="font-serif text-2xl">My Website</h1>
      </div>

      <nav>
        <ul className="flex gap-2 lg:flex-row flex-col lg:items-center lg:gap-6 lg:h-auto bg-slate-800 p-1 lg:p-6 absolute lg:relative w-30 lg:w-auto top-2 right-0 lg:top-0 transition-all ease-in-out duration-300">
          <li>
            <Link className="hover:text-blue-400 transition" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400 transition" href="/About">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400 transition" href="/Education">
              Education
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400 transition" href="/Project">
              Project
            </Link>
          </li>
        </ul>

        <div className="lg:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="block cursor-pointer">
            <div className="block w-6 h-1 bg-white mb-1"></div>
            <div className="block w-6 h-1 bg-white mb-1"></div>
            <div className="block w-6 h-1 bg-white"></div>
          </label>
        </div>
      </nav>
    </header>
  );
}
