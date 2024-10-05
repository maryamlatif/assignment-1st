import Link from "next/link";
import React from "react";

export default function Home() {
  return (
   
      <header className="flex justify-between bg-black text-slate-200">
        <div >
          <h1 className="font-serif  text-3xl mt-2 mr-4">My Website</h1>
        </div>
        <nav >
          <ul className="flex justify-between gap-4 mt-2 mr-9 text-justify ">
            <li>
              <Link className="hover:bg-slate-800" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:bg-slate-800" href="/About">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:bg-slate-800" href="/Education">
                Education
              </Link>
            </li>
            <li>
              <Link className="hover:bg-slate-800" href="/Project">
                Project
              </Link>
              
            </li>
          </ul>
        </nav>
      </header>
     
  );
}
