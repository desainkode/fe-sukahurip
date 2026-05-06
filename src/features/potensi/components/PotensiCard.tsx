"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Layers } from "lucide-react";
import { PotensiItem } from "../types";

interface PotensiCardProps {
  item: PotensiItem;
}

export function PotensiCard({ item }: PotensiCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white bg-white shadow-xl shadow-black/[0.03] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden sm:aspect-[16/10]">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000418]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
          <span className="rounded-full bg-white/20 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/10 shadow-sm sm:px-4 sm:py-2 sm:text-[10px]">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
        <h3 className="mb-3 font-timeless text-[20px] font-black leading-tight text-[#040922] transition-colors group-hover:text-[#072ac8] sm:mb-4 sm:text-[24px]">
          {item.name}
        </h3>
        
        <p className="mb-6 line-clamp-2 text-[14px] leading-relaxed text-[#040922]/60 font-medium sm:mb-8 sm:line-clamp-3">
          {item.shortDesc}
        </p>

        {/* Highlights */}
        <div className="mb-8 grid grid-cols-2 gap-3 rounded-2xl bg-neutral-50 p-4 sm:mb-10 sm:gap-6 sm:rounded-[28px] sm:p-6 shadow-inner">
          {item.highlights.map((hl, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="text-[9px] font-black uppercase tracking-widest text-neutral-300 sm:text-[10px]">{hl.label}</span>
              <span className="font-timeless text-[15px] font-bold text-[#040922] sm:text-[18px]">{hl.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-6 sm:pt-8">
          <Link 
            href={`/potensi/${item.slug}`}
            className="flex items-center gap-2 text-[13px] font-black uppercase tracking-widest text-[#040922] transition-all hover:text-[#072ac8] hover:translate-x-1"
          >
            DETAIL POTENSI
            <ArrowUpRight size={18} strokeWidth={2.5} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
          
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#040922] text-[#FFC400] shadow-lg transition-all group-hover:rotate-12 group-hover:bg-[#072ac8] group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
            <Layers size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </article>
  );
}
