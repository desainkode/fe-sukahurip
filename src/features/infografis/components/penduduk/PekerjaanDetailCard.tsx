"use client";

import React from "react";

interface PekerjaanDetailCardProps {
  kode: string;
  nama: string;
  jumlah: string;
  persentase: number;
  bgColor: string;
  textColor: string;
  delayMs: number;
}

export function PekerjaanDetailCard({
  kode,
  nama,
  jumlah,
  persentase,
  bgColor,
  textColor,
  delayMs,
}: PekerjaanDetailCardProps) {
  return (
    <article
      className="hero-reveal group relative overflow-hidden rounded-[20px] border border-white/15 p-4 shadow-[0_14px_30px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:rounded-[22px] sm:p-6"
      style={{ backgroundColor: bgColor, animationDelay: `${delayMs}ms` }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-18 blur-xl transition-opacity group-hover:opacity-30"
        style={{ backgroundColor: textColor }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-white/15" />

      <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
            <div className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-black text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 sm:h-17 sm:w-17 sm:rounded-2xl">
              <span
                className="block text-[18px] font-bold font-timeless sm:text-[24px]"
              >
                {kode}
              </span>
            </div>
            <div className="min-w-0 pt-0.5">
              <h3
                className="font-timeless text-[16px] font-bold leading-[1.1] sm:text-[19px]"
                style={{ color: textColor }}
              >
                {nama}
              </h3>
              <p
                className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-white/60 sm:mt-1.5 sm:line-clamp-none sm:text-[12px]"
                style={{ color: textColor }}
              >
                Data ringkasan kategori pekerjaan utama penduduk Desa Sukahurip.
              </p>
            </div>
          </div>
          <div className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/20 bg-[#000418] px-2.5 py-1 text-[10px] font-bold text-white/92 backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 sm:gap-1.5 sm:px-3.5 sm:py-1.5 sm:text-[11px]">
            <span className="h-1 w-1 rounded-full bg-[#a2d6f9] sm:h-1.5 sm:w-1.5" />
            {persentase}%
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-white/12 pt-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 sm:mt-5 sm:pt-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.1em] opacity-60 sm:text-[11px] sm:tracking-[0.14em]" style={{ color: textColor }}>
              Jumlah penduduk
            </p>
            <p
              className="mt-0.5 text-[26px] font-bold leading-none font-timeless sm:mt-1 sm:text-[36px]"
              style={{ color: textColor }}
            >
              {jumlah}
            </p>
          </div>
          <div className="rounded-full border border-white/15 bg-black/16 px-2.5 py-1.5 text-[10px] font-semibold text-white/80 sm:px-3 sm:py-2 sm:text-[11px]">
            Detail
          </div>
        </div>
      </div>
    </article>
  );
}
