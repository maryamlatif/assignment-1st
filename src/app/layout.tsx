import React from "react";
import Header from "./Component/header";
import Foot from "./Component/footer";

import "./globals.css"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main>{children}</main> {/* Wrapping the child pages */}
        <Foot />
      </body>
    </html>
  );
}

