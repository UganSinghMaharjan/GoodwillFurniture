// app/layout.tsx
import "./globals.css"; // Your global CSS
import { ReactNode } from "react";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

// Optional: Metadata for <head>
export const metadata: Metadata = {
  title: "GOODWILL FURNITURE",
  description: "A beautiful Next.js creation",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
