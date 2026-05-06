"use client";

import React from "react";

interface AgamaStatCardProps {
  nama: string;
  deskripsi: string;
  jumlah: string;
  persentase: number;
  tema: "yellow" | "green";
  icon: React.ComponentType<{
    size?: number | string;
    strokeWidth?: number;
    className?: string;
  }>;
  delayMs: number;
}

export function AgamaStatCard({
  nama,
  deskripsi,
  jumlah,
  persentase,
  tema,
  icon: Icon,
  delayMs,
}: AgamaStatCardProps) {
  const isYellow = tema === "yellow";

  return (
    <article
      className="hero-reveal group relative h-64 w-[280px] shrink-0 snap-start overflow-hidden rounded-[32px] text-white transition-transform duration-500 ease-out hover:-translate-y-1 sm:h-69 sm:w-78 sm:rounded-[41px]"
      style={{
        animationDelay: `${delayMs}ms`,
        backgroundImage: isYellow
          ? "linear-gradient(180deg, #FFC400 0%, #D9A600 100%)"
          : "linear-gradient(180deg, #001EA5 0%, #072ac8 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-2.5 rounded-[26px] border border-white/12 bg-white/5 shadow-[inset_4px_-4px_18px_rgba(255,255,255,0.08),inset_-4px_4px_18px_rgba(0,0,0,0.08)] backdrop-blur-xs sm:inset-2.75 sm:rounded-[33px]" />
      <div className="pointer-events-none absolute -right-12 top-7 h-28 w-28 rounded-full bg-black/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

      <div className="relative z-10 flex h-full flex-col px-4.5 pb-4.5 pt-4.5 sm:px-6 sm:pt-6">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#000418] text-white shadow-[0_10px_18px_rgba(0,0,0,0.18),inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-105 sm:h-17 sm:w-17">
            <Icon size={20} strokeWidth={2.2} className="sm:size-6" />
          </div>

          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#002AE3] bg-[#000418] px-2.5 py-1 text-white shadow-[0_8px_16px_rgba(0,0,0,0.18)] sm:px-3">
            <span className="size-1.5 rounded-full bg-[#FD0000]/70 sm:size-2" />
            <span className="text-[10px] font-medium uppercase tracking-[0.6px] sm:text-[12px]">{persentase}%</span>
          </div>
        </div>

        <div className="mt-2 flex items-start justify-between gap-3 sm:mt-2.5">
          <div className="min-w-0">
            <p className="font-timeless text-[46px] leading-[0.82] text-white sm:text-[58px]">
              {jumlah}
            </p>
            <p className="mt-0.5 font-timeless text-[13px] leading-none text-white sm:text-[16px]">
              Orang
            </p>
          </div>
        </div>

        <div className="mt-3 grid gap-1.5 pt-0 sm:mt-4 sm:gap-2">
          <h3 className="font-timeless text-[18px] leading-[1.05] text-white sm:text-[22px]">
            {nama}
          </h3>
          <p className="max-w-52 text-[10.5px] leading-[1.3] text-[#EBEFFE] sm:max-w-56 sm:text-[12px]">
            {deskripsi}
          </p>
        </div>
      </div>
    </article>
  );
}
