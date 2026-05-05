"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Map, Users, LayoutGrid } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh lg:h-svh w-full flex-col items-center justify-center bg-[#000418] text-[#F4F3EE] overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50 brightness-[0.8] contrast-[1.05]"
        >
          <source src="/video/thumbnail.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-[#000418]/40 via-[#000418]/20 to-[#000418]/90" />
        
        {/* Subtle Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Decorative Blobs */}
      <div className="hero-float pointer-events-none absolute -right-20 -top-20 z-0 h-80 w-80 rounded-full bg-desa-yellow-500/20 blur-[100px] md:h-130 md:w-130 md:blur-[120px]" />
      <div className="hero-float pointer-events-none absolute -bottom-20 -left-20 z-0 h-60 w-60 rounded-full bg-[#FFC400]/10 blur-[80px] [animation-delay:1.5s] md:h-100 md:w-100 md:blur-[100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 pt-20 pb-8 md:px-10 lg:flex-row lg:items-center lg:gap-12 lg:pt-28 lg:pb-0">
        {/* Content Column */}
        <div className="flex flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left">
          <div className="hero-reveal inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="mr-2.5 h-2 w-2 animate-pulse rounded-full bg-[#FFC400]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-desa-yellow-500 md:text-[11px]">
              Website Resmi Pemerintah Desa
            </span>
          </div>

          <h1 className="hero-reveal mt-1.5 font-timeless text-[28px] font-bold leading-[0.95] tracking-tight sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[72px] [animation-delay:150ms]">
            <span className="block opacity-90">Membangun Desa,</span>
            <span className="relative block text-transparent bg-clip-text bg-linear-to-r from-desa-blue-400 to-desa-blue-200 py-1">
              Mensejahterakan
              <span className="absolute bottom-0 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-[#FFC400] lg:left-0 lg:translate-x-0 lg:w-24" />
            </span>
            <span className="block opacity-90">Warga</span>
          </h1>

          <p className="hero-reveal mt-1.5 max-w-xl text-[12px] font-medium leading-relaxed text-desa-blue-100/60 sm:text-[16px] [animation-delay:250ms] lg:max-w-lg">
            Selamat datang di portal digital Desa Sukahurip. Transformasi tata kelola desa yang transparan, modern, dan melayani sepenuh hati.
          </p>

          <div className="hero-reveal mt-3 flex w-full flex-col sm:flex-row items-center gap-3 [animation-delay:350ms] lg:w-auto lg:items-start sm:gap-4">
            <Link
              href="/layanan/dashboard"
              className="group relative flex h-11 w-full sm:w-auto items-center justify-center overflow-hidden rounded-2xl bg-[#FFC400] px-8 text-[14px] font-black text-[#000418] shadow-[0_15px_30px_rgba(240,177,0,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(240,177,0,0.3)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Layanan Mandiri <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            
            <div className="flex w-full sm:w-auto items-center gap-2">
              <Link
                href="/auth/login"
                className="flex h-11 flex-1 sm:flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-[13px] font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
              >
                Masuk
              </Link>
              <Link
                href="/auth/register"
                className="flex h-11 flex-1 sm:flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-[13px] font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
              >
                Daftar
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="hero-reveal mt-3 grid w-full grid-cols-3 gap-2 [animation-delay:450ms] lg:max-w-xl lg:gap-4">
            {[
              { label: "Luas Wilayah", value: "12.5", unit: "km²", icon: Map },
              { label: "Total Penduduk", value: "3.5k", unit: "+", icon: Users },
              { label: "Potensi Desa", value: "8", unit: "Sekt.", icon: LayoutGrid },
            ].map((stat, i) => (
              <div key={i} className="group flex flex-col items-center rounded-xl border border-white/5 bg-white/2 px-1 py-2 backdrop-blur-sm transition-all hover:bg-white/5 sm:rounded-2xl sm:px-4 sm:py-5 lg:items-start">
                <div className="mb-1.5 flex h-5 w-5 items-center justify-center rounded-lg bg-desa-yellow-500/10 text-desa-yellow-500 transition-colors group-hover:bg-desa-yellow-500 group-hover:text-[#000418] sm:mb-3 sm:h-8 sm:w-8">
                  <stat.icon size={20} className="sm:size-4" />
                </div>
                <div className="flex items-baseline gap-0.5 sm:gap-1">
                  <span className="text-[13px] font-black text-white sm:text-2xl">{stat.value}</span>
                  <span className="text-[7px] font-bold text-desa-yellow-500/60 uppercase tracking-tighter sm:text-[10px]">{stat.unit}</span>
                </div>
                <span className="mt-0.5 text-[6px] font-bold uppercase tracking-tight text-white/30 sm:text-[10px] sm:tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image / Card Column */}
        <div className="hero-reveal relative mx-auto w-full max-w-48 [animation-delay:200ms] sm:max-w-72 lg:max-w-xs xl:max-w-sm">
          {/* Decorative Frames */}
          <div className="hero-float absolute -right-4 top-6 h-full w-full rotate-3 rounded-[40px] bg-desa-blue-500/10 backdrop-blur-3xl [animation-delay:0.5s]" />
          <div className="hero-float absolute -left-4 -top-4 h-full w-full -rotate-2 rounded-[40px] border border-white/5 [animation-delay:1s]" />

          <div className="hero-float group relative aspect-4/5 overflow-hidden rounded-[40px] bg-linear-to-b from-desa-blue-900 to-[#000418] shadow-2xl [animation-delay:0s]">
            <Image
              src="/img/hero-kepala-desa.png"
              alt="Kepala Desa Sukahurip"
              fill
              className="hero-zoom object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              priority
            />

            {/* Floating Info Badge */}
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/10 bg-black/40 p-3 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
              <div className="flex items-start justify-between">
                <div className="max-w-[70%]">
                  <h3 className="text-[12px] md:text-base font-black leading-tight text-white truncate">Majang Dudi B.</h3>
                  <p className="mt-0.5 text-[7px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-desa-yellow-500">Kepala Desa</p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FFC400] text-sm font-black text-[#000418] sm:h-8 sm:w-8 sm:rounded-xl sm:text-lg">
                  &quot;
                </div>
              </div>
              <p className="mt-2 text-[9px] italic leading-tight text-desa-blue-100/80 sm:mt-3 sm:text-[11px] sm:leading-relaxed">
                &quot;Melayani dengan hati, membangun dengan inovasi untuk kemajuan bersama.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
