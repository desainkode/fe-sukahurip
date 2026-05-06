"use client";

import React from "react";

interface JumlahPendudukCardProps {
  label: string;
  angka: string;
  tone: "light" | "dark";
  icon: React.ComponentType<{
    size?: number | string;
    strokeWidth?: number;
    className?: string;
  }>;
  delayMs: number;
}

export function JumlahPendudukCard({
  label,
  angka,
  tone,
  icon: Icon,
  delayMs,
}: JumlahPendudukCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={`hero-reveal group relative isolate h-52 overflow-hidden rounded-tl-[20px] rounded-br-[20px] p-4 text-[#F3F4F8] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:h-75 md:h-80 sm:p-6 sm:rounded-tl-[28px] sm:rounded-br-[28px] ${
        isDark
          ? "bg-linear-to-br from-[#00061F] via-[#000933] to-[#000F52] text-[#F3F4F8]"
          : "bg-[#D9D9D9] text-[#070C10]"
      }`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rotate-45 bg-[#FFFFFF] sm:-right-14 sm:-top-14 sm:h-28 sm:w-28" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-20 w-20 rotate-45 bg-[#FFFFFF] sm:-bottom-14 sm:-left-14 sm:h-28 sm:w-28" />

      <div
        className={`relative inline-flex h-8 w-8 items-center justify-center rounded-full border shadow-[0_6px_14px_rgba(0,4,24,0.12)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 sm:h-11 sm:w-11 ${
          isDark
            ? "border-white/18 bg-[#000418]/48 text-[#E9ECF8]"
            : "border-[#000418]/8 bg-white/42 text-[#000418]"
        }`}
      >
        <Icon size={14} strokeWidth={2.1} className="sm:size-5" />
      </div>

      <div className="relative mt-3 flex h-[calc(100%-3rem)] flex-col justify-between sm:mt-6 sm:h-[calc(100%-4.75rem)]">
        <div>
          <div className="mb-2 inline-flex items-center gap-1 rounded-md bg-[#072ac8] px-1.5 py-0.5 sm:mb-3 sm:px-2 sm:py-1 text-white">
            <span className="h-1 w-1 rounded-full bg-[#FFC400] sm:h-1.5 sm:w-1.5" />
            <span className="text-[8px] leading-none sm:text-[11px] font-timeless">
              Jiwa
            </span>
          </div>

          <p
            className={`text-[32px] font-timeless leading-[0.85] sm:text-[58px] ${isDark ? "text-[#F3F4F8]" : "text-black"}`}
          >
            {angka}
          </p>

          <h3 className={`mt-1 font-timeless text-[14px] font-bold leading-[1.1] sm:mt-3 sm:text-[21px] md:text-[23px] ${isDark ? "text-[#F3F4F8]" : "text-black"}`}>
            {label}
          </h3>
        </div>

        <p className={`self-end text-right text-[9px] leading-tight sm:text-[12px] ${isDark ? "text-[#F5F5F7]/85" : "text-black"}`}>
          Terdata
          <br />
          oleh sistem
        </p>
      </div>
    </article>
  );
}
