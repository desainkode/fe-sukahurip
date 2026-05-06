"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Play, Image as ImageIcon } from "lucide-react";
import { GaleriItem } from "../types";

interface GaleriCardProps {
  item: GaleriItem;
}

export function GaleriCard({ item }: GaleriCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white bg-white shadow-xl shadow-black/[0.03] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden sm:aspect-[4/3]">
        <img 
          src={item.image} 
          alt={item.title} 
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000418]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
          <span className="rounded-full bg-white/20 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/10 shadow-sm sm:px-4 sm:py-2 sm:text-[10px]">
            {item.category}
          </span>
        </div>

        {/* Media Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="flex h-14 w-14 scale-50 items-center justify-center rounded-full bg-[#FFC400] text-[#000418] shadow-2xl transition-all duration-500 group-hover:scale-100">
            {item.videoUrl ? <Play size={24} fill="currentColor" /> : <ImageIcon size={24} />}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#072ac8]/40 sm:mb-4">
          <Calendar size={14} strokeWidth={2.5} />
          {item.date}
        </div>

        <h3 className="mb-3 font-timeless text-[20px] font-bold leading-tight text-[#000418] transition-colors group-hover:text-[#072ac8] sm:mb-4 sm:text-[22px]">
          <Link href={`/galeri/${item.slug}`}>
            {item.title}
          </Link>
        </h3>

        <p className="mb-6 line-clamp-2 text-[14px] leading-relaxed text-[#000418]/60 sm:mb-8">
          {item.shortDesc}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[#000418]/5 pt-5 sm:pt-6">
          <Link 
            href={`/galeri/${item.slug}`}
            className="flex items-center gap-2 text-[13px] font-black text-[#000418] transition-all hover:text-[#072ac8] hover:translate-x-1"
          >
            DETAIL MOMEN
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
          
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#000418]/20">
            {item.photos.length} FOTO
          </span>
        </div>
      </div>
    </article>
  );
}
