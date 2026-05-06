"use client";

import React from "react";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { NewsItem } from "../types";

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[40px] border border-neutral-100 bg-white shadow-2xl shadow-black/[0.02] transition-all duration-500 hover:-translate-y-2 hover:shadow-desa-blue-500/10">
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden sm:aspect-[16/10]">
        <img
          src={news.image}
          alt={news.title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#000418]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-6 top-6">
          <span className="rounded-full bg-[#FFC400] px-5 py-2 text-[10px] font-black uppercase tracking-widest text-[#000418] shadow-xl">
            {news.category.name}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <div className="mb-5 flex flex-wrap items-center gap-5 text-[10px] font-black uppercase tracking-widest text-[#072ac8]/40">
          <div className="flex items-center gap-2">
            <Calendar size={14} strokeWidth={2.5} />
            {news.publishedAt}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} strokeWidth={2.5} />
            {news.readingTime} MIN READ
          </div>
        </div>

        <h3 className="mb-5 font-timeless text-[22px] font-bold leading-tight text-[#000418] transition-colors group-hover:text-[#072ac8] md:text-[26px]">
          <Link href={`/berita/${news.slug}`}>
            {news.title}
          </Link>
        </h3>

        <p className="mb-10 line-clamp-3 text-[14px] leading-relaxed text-[#000418]/50 font-medium">
          {news.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-7 sm:pt-9">
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 overflow-hidden rounded-2xl border-2 border-white bg-neutral-50 shadow-md sm:h-13 sm:w-13">
              <img src={news.author.avatar} alt={news.author.name} className="h-full w-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="font-timeless text-[14px] font-bold leading-none text-[#000418]">{news.author.name}</p>
              <p className="mt-1.5 text-[10px] font-black uppercase tracking-widest text-[#000418]/30">{news.author.role}</p>
            </div>
          </div>

          <Link
            href={`/berita/${news.slug}`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000418] text-[#FFC400] shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group-hover:bg-[#072ac8] group-hover:text-white sm:h-14 sm:w-14"
          >
            <ArrowRight size={22} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </article>
  );
}
