import React from "react";
import Link from "next/link";

export default function Projectpage() {
  return (
    <div className="p-6 bg-slate-200 ">
      <h1 className="text-4xl font-bold mb-4 ">My Projects</h1>
      <p className="text-lg mb-6 text-slate-600 bg-slate-200">
        Throughout my development journey, I have created various projects that
        reflect my skills and creativity. Notable projects include a Student
        Identification Card for GIAIC and a Next.js Todo List application,
        showcasing my proficiency with React. I have also participated in
        hackathons, resulting in innovative solutions, and developed an online
        class platform, an upgraded todo application, a currency converter, an
        ATM management system, and a calculator. Each project has contributed
        significantly to my growth as a full-stack developer.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside space-y-2 font-semibold">
          <li>
            <Link 
              href="https://student-identify-card-of-giaic.vercel.app" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Identify Card
            </Link>
          </li>
          <li>
            <Link 
              href="https://nextjs-todo-list-beige.vercel.app/" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Todo List
            </Link>
          </li>
          <li>
            <Link 
              href="https://vercel.com/maryams-projects-50f16e31/hackathon-project-01-maryamlatif" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hackathon Project 01
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">NPX Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>npx 23class-online-2nd-project</li>
          <li>npx currency-converter_with_maryam</li>
          <li>npx @m2h5m/calculator02</li>
          <li>npx todo_upgrade_with_maryam</li>
          <li>npx maryam3_atm</li>
        </ul>
      </div>
    </div>
  );
}
