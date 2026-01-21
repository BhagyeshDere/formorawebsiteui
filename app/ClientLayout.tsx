"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="pt-20">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
