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
    <article className="hero-reveal group flex h-full flex-col overflow-hidden rounded-[40px] border border-neutral-100 bg-white shadow-2xl shadow-black/[0.02] transition-all duration-500 hover:-translate-y-2 hover:shadow-desa-blue-500/10">
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden sm:aspect-[16/10]">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#000418]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="absolute left-6 top-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/10 shadow-sm transition-colors group-hover:bg-[#FFC400] group-hover:text-[#000418] group-hover:border-[#FFC400]">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <h3 className="mb-4 font-timeless text-[22px] font-bold leading-tight text-[#040922] transition-colors group-hover:text-[#072ac8] md:text-[26px]">
          {item.name}
        </h3>
        
        <p className="mb-8 line-clamp-3 text-[14px] leading-relaxed text-[#040922]/50 font-medium">
          {item.shortDesc}
        </p>

        {/* Highlights */}
        <div className="mb-10 grid grid-cols-2 gap-6 rounded-[32px] bg-neutral-50 p-6 shadow-inner border border-neutral-100/50">
          {item.highlights.map((hl, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-300">{hl.label}</span>
              <span className="font-timeless text-[16px] font-black text-[#040922] md:text-[18px]">{hl.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-8">
          <Link 
            href={`/potensi/${item.slug}`}
            className="group/btn flex items-center gap-3 text-[13px] font-black uppercase tracking-widest text-[#040922] transition-all hover:text-[#072ac8]"
          >
            DETAIL POTENSI
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 transition-all group-hover/btn:bg-[#072ac8] group-hover/btn:text-white group-hover/btn:rotate-45">
              <ArrowUpRight size={16} strokeWidth={3} />
            </div>
          </Link>
          
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#040922] text-[#FFC400] shadow-xl transition-all group-hover:bg-[#072ac8] group-hover:text-white sm:h-14 sm:w-14">
            <Layers size={22} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </article>
  );
}
