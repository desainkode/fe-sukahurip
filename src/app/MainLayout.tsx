"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLayananPage = pathname.startsWith('/auth') || pathname.startsWith('/layanan');

  return (
    <>
      {!isLayananPage && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isLayananPage && <Footer />}
      {!isLayananPage && <ScrollToTop />}
    </>
  );
}
