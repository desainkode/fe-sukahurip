"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, User as UserIcon, LogIn, ChevronRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Potensi", href: "/potensi" },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
  { label: "Infografis", href: "/infografis" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 z-50 w-full px-4 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] md:px-10 ${
        isScrolled || isMenuOpen
          ? "py-3 border-b border-white/10 bg-linear-to-r from-desa-blue-950/90 to-desa-blue-900/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,4,24,0.4)]"
          : "py-6 border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={closeMenu}
          className="group relative z-50 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
        >
          <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-white p-2 shadow-xl shadow-desa-blue-900/20 transition-all group-hover:rotate-6">
            <img
              src="/img/image.png"
              alt="Logo Desa Sukahurip"
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none transition-all duration-500 group-hover:translate-x-1">
            <span className="text-lg md:text-xl font-black tracking-tight text-white transition-all duration-500 group-hover:text-desa-yellow-500">
              SUKAHURIP
            </span>
            <span className="mt-1 text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] text-desa-yellow-500 group-hover:text-white transition-all duration-500">
              Digital Portal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-[0.82rem] font-black uppercase tracking-[0.12em] transition-all duration-500 ease-out group/nav ${isActive
                    ? "text-desa-yellow-500"
                    : "text-white/60 hover:text-white"
                  }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`absolute inset-0 rounded-xl bg-white/5 opacity-0 scale-90 transition-all duration-500 ease-out group-hover/nav:opacity-100 group-hover/nav:scale-100 ${isActive ? 'opacity-100 scale-100' : ''}`} />
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-desa-yellow-500 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isActive ? 'w-4' : 'w-0 group-hover:w-4'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href={user ? "/layanan/dashboard" : "/auth/login"}
            className="group relative hidden sm:flex items-center gap-3 overflow-hidden rounded-2xl bg-desa-yellow-500 px-7 py-3.5 text-[0.82rem] font-black uppercase tracking-widest text-desa-blue-950 shadow-xl shadow-desa-yellow-500/20 transition-all hover:bg-white hover:shadow-white/10 active:scale-95"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            {user ? <UserIcon size={18} /> : <LogIn size={18} />}
            <span>{user ? "Portal Warga" : "Masuk"}</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all active:scale-90 md:hidden ${
              isMenuOpen ? "bg-white text-desa-blue-950" : "bg-white/10 text-white backdrop-blur-md"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-linear-to-br from-desa-blue-950/95 to-desa-blue-900/95 backdrop-blur-3xl transition-all duration-700 cubic-bezier(0.23,1,0.32,1) md:hidden ${
          isMenuOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-full opacity-0 scale-105"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-8">
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`group flex items-center gap-4 text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${
                    isActive ? "text-desa-yellow-500 scale-110" : "text-white/40 hover:text-white hover:scale-105"
                  } ${isMenuOpen ? 'animate-in fade-in slide-in-from-bottom-8' : ''}`}
                  style={{ transitionDelay: `${i * 50}ms`, animationDelay: `${i * 100}ms` }}
                >
                  {isActive && <div className="h-2 w-8 bg-desa-yellow-500 rounded-full animate-pulse" />}
                  {item.label}
                </Link>
              );
            })}
          </div>
          
          <div className="mt-12 flex w-full flex-col gap-4 max-w-sm">
            <Link
              href={user ? "/layanan/dashboard" : "/auth/login"}
              onClick={closeMenu}
              className={`flex w-full items-center justify-center gap-4 rounded-[32px] py-6 text-xl font-black uppercase tracking-widest transition-all active:scale-95 ${
                user ? "bg-white text-desa-blue-950" : "bg-desa-yellow-500 text-desa-blue-950 shadow-2xl shadow-desa-yellow-500/20"
              }`}
            >
              {user ? <UserIcon size={24} /> : <LogIn size={24} />}
              {user ? "Portal Warga" : "Login Portal"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
