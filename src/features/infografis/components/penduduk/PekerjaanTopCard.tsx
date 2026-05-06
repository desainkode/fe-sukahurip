"use client";

import React from "react";

interface PekerjaanTopCardProps {
  nama: string;
  jumlah: string;
  rank: "TOP 1" | "TOP 2" | "TOP 3";
  icon: React.ComponentType<{
    size?: number | string;
    strokeWidth?: number;
    className?: string;
  }>;
  delayMs: number;
}

export function PekerjaanTopCard({
  nama,
  jumlah,
  rank,
  icon: Icon,
  delayMs,
}: PekerjaanTopCardProps) {
  return (
    <article
      className="hero-reveal group relative isolate h-52 overflow-hidden rounded-tl-[20px] rounded-br-[20px] bg-linear-to-br from-[#00061F] via-[#000933] to-[#000F52] p-4 text-[#F3F4F8] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:h-75 md:h-80 sm:p-6 sm:rounded-tl-[28px] sm:rounded-br-[28px]"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rotate-45 bg-[#FFFFFF] sm:-right-14 sm:-top-14 sm:h-28 sm:w-28" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-20 w-20 rotate-45 bg-[#FFFFFF] sm:-bottom-14 sm:-left-14 sm:h-28 sm:w-28" />

      <div className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/18 bg-[#000418]/48 text-[#E9ECF8] shadow-[0_6px_14px_rgba(0,4,24,0.12)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:-rotate-3 sm:h-11 sm:w-11">
        <Icon size={14} strokeWidth={2.1} className="sm:size-5" />
      </div>

      <div className="relative mt-3 flex h-[calc(100%-3rem)] flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 sm:mt-6 sm:h-[calc(100%-4.75rem)]">
        <div>
          <div className="mb-2 inline-flex items-center gap-1 rounded-lg bg-[#a2d6f9] px-2 py-0.5 text-[8px] leading-none font-bold text-[#000418] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] sm:mb-3 sm:gap-2 sm:px-3 sm:py-1 sm:text-[11px]">
            <span className="inline-block h-1 w-1 rounded-full bg-[#000418] sm:h-1.5 sm:w-1.5" />
            {rank}
          </div>

          <p
            className="text-[32px] font-bold font-timeless leading-[0.85] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 sm:text-[58px]"
          >
            {jumlah}
          </p>

          <h3 className="mt-1 font-timeless text-[14px] font-bold leading-[1.1] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 sm:mt-3 sm:text-[21px] md:text-[23px]">
            {nama}
          </h3>
        </div>

        <p className="self-end text-right text-[9px] leading-tight text-[#F5F5F7]/85 sm:text-[12px]">
          Terdata
          <br />
          oleh sistem
        </p>
      </div>
    </article>
  );
}
