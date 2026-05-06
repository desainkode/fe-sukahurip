"use client";

import React from "react";
import { CheckCircle2, CircleOff } from "lucide-react";

interface StatusPerkawinanStatCardProps {
  title: string;
  description: string;
  jumlah: string;
  icon: "kawin" | "belum";
  delayMs: number;
}

export function StatusPerkawinanStatCard({
  title,
  description,
  jumlah,
  icon,
  delayMs,
}: StatusPerkawinanStatCardProps) {
  return (
    <article
      className="hero-reveal group relative overflow-hidden rounded-[20px] border border-[#a2d6f9]/35 bg-[rgba(217,217,217,0.10)] px-4 py-4 shadow-[inset_26px_-26px_26px_rgba(165,165,165,0.08),inset_-26px_26px_26px_rgba(255,255,255,0.08),0_18px_38px_rgba(0,0,0,0.12)] backdrop-blur-[14px] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#a2d6f9]/55 hover:shadow-[inset_26px_-26px_26px_rgba(165,165,165,0.08),inset_-26px_26px_26px_rgba(255,255,255,0.08),0_24px_48px_rgba(0,0,0,0.16)] sm:px-6 sm:py-6"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="grid gap-3 sm:gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6">
        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFC400] text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-out group-hover:scale-105 sm:h-13 sm:w-13">
            {icon === "kawin" ? (
              <CheckCircle2 size={22} strokeWidth={2.2} className="sm:size-6" />
            ) : (
              <CircleOff size={22} strokeWidth={2.2} className="sm:size-6" />
            )}
          </div>

          <div className="min-w-0 pt-0.5">
            <h3 className="whitespace-pre-line font-timeless text-[20px] font-bold leading-[1.1] text-white sm:text-[30px]">
              {title}
            </h3>
            <p className="mt-1.5 max-w-[42ch] text-[10.5px] leading-relaxed text-white/70 sm:mt-2 sm:text-[13px]">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-white/10 pt-3.5 md:block md:border-t-0 md:pt-1 md:text-right">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.1em] text-white/80 md:mb-3 md:px-3 md:py-1 md:tracking-[0.18em]">
            Tercatat
          </div>
          <div className="text-right">
            <p
              className="text-[32px] font-timeless leading-none text-white sm:text-[48px]"
            >
              {jumlah}
            </p>
            <p className="mt-1 font-timeless text-[13px] font-bold leading-none text-white/60 sm:text-[20px]">
              Orang
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
