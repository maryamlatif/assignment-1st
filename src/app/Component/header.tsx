
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-slate-800 text-slate-100 p-4">
      <div>
        <h1 className="font-serif text-3xl">My Website</h1>
      </div>
      <nav>
        <ul className="flex gap-6">
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
      </nav>
    </header>
  );
}
