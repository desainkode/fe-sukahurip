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
    <>
      <header
        className={`fixed top-0 z-50 w-full px-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:px-10 ${
          isScrolled || isMenuOpen
            ? "py-3 border-b border-white/5 bg-desa-blue-950/95 backdrop-blur-2xl shadow-2xl"
            : "py-6 border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group relative z-50 flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-95"
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
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-black tracking-tight text-white transition-colors group-hover:text-desa-yellow-500">
                SUKAHURIP
              </span>
              <span className="mt-1 text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] text-desa-yellow-500/80 group-hover:text-white transition-colors">
                Digital Portal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-[13px] font-black uppercase tracking-widest transition-all duration-300 group/nav ${
                    isActive
                      ? "text-desa-yellow-500"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className={`absolute inset-0 rounded-xl bg-white/5 opacity-0 scale-90 transition-all duration-300 group-hover/nav:opacity-100 group-hover/nav:scale-100 ${isActive ? 'opacity-100 scale-100' : ''}`} />
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-desa-yellow-500 transition-all duration-500 ${isActive ? 'w-4' : 'w-0 group-hover:w-4'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              href={user ? "/layanan/dashboard" : "/auth/login"}
              className="group relative hidden sm:flex items-center gap-3 overflow-hidden rounded-2xl bg-desa-yellow-500 px-7 py-3.5 text-[11px] font-black uppercase tracking-widest text-desa-blue-950 shadow-xl transition-all hover:bg-white active:scale-95"
            >
              {user ? <UserIcon size={16} /> : <LogIn size={16} />}
              <span>{user ? "Portal Warga" : "Masuk"}</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all active:scale-90 md:hidden z-50 ${
                isMenuOpen
                  ? "bg-white text-desa-blue-950"
                  : "bg-desa-yellow-500/10 text-desa-yellow-500 border border-desa-yellow-500/20 backdrop-blur-md shadow-lg"
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer - Moved outside header for absolute top layering */}
      <div
        className={`fixed inset-0 z-[999] md:hidden transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Solid Background Base */}
        <div
          className={`absolute inset-0 bg-[#010830] transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Drawer Content */}
        <div
          className={`absolute inset-y-0 right-0 w-full shadow-2xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) z-[1000] bg-[#072ac8] bg-gradient-to-b from-[#072ac8] to-[#010830] !opacity-100 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Branded Header inside Drawer */}
          <div className="flex h-24 items-center justify-between px-8 border-b border-white/10 relative z-20">
            <div className="flex flex-col">
              <span className="text-sm font-black text-white tracking-widest">MENU</span>
              <span className="text-[8px] font-bold text-desa-yellow-500 uppercase tracking-[0.4em] mt-1">
                Navigasi Portal
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex h-full flex-col p-6 pt-4 relative z-10">
            <div className="flex flex-col gap-0.5">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between rounded-xl px-5 py-3 transition-all duration-300 ${
                      isActive 
                        ? "bg-white text-desa-blue-950 shadow-md" 
                        : "text-white/40 hover:text-white hover:bg-white/5"
                    } ${isMenuOpen ? "animate-in fade-in slide-in-from-right-8" : ""}`}
                    style={{ transitionDelay: `${i * 15}ms`, animationDelay: `${i * 60}ms` }}
                  >
                    <span
                      className={`text-[13px] font-black uppercase tracking-[0.15em] transition-transform duration-500 ${isActive ? '' : 'group-hover:translate-x-1'}`}
                    >
                      {item.label}
                    </span>
                    {isActive ? (
                      <div className="h-1 w-1 rounded-full bg-desa-blue-950" />
                    ) : (
                      <ChevronRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    )}
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-auto pb-6 space-y-4">
              <Link
                href={user ? "/layanan/dashboard" : "/auth/login"}
                onClick={closeMenu}
                className={`flex w-full items-center justify-center gap-4 rounded-2xl py-6 text-sm font-black uppercase tracking-widest transition-all active:scale-95 ${
                  user
                    ? "bg-desa-yellow-500 text-desa-blue-950 shadow-2xl shadow-desa-yellow-500/20"
                    : "bg-white text-desa-blue-950 shadow-xl"
                } ${isMenuOpen ? "animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500" : ""}`}
              >
                {user ? <UserIcon size={20} /> : <LogIn size={20} />}
                {user ? "Portal Warga" : "Login Portal"}
              </Link>
              <div className="text-center space-y-2">
                <div className="h-px w-16 bg-white/10 mx-auto" />
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
                  Sukahurip Digital Portal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
