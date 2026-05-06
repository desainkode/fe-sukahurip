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
    <article className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white bg-white shadow-xl shadow-black/[0.03] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden sm:aspect-[16/10]">
        <img
          src={news.image}
          alt={news.title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000418]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
          <span className="rounded-full bg-[#FFC400] px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-[#000418] shadow-xl sm:px-5 sm:py-2 sm:text-[10px]">
            {news.category.name}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#072ac8]/40 sm:mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={14} strokeWidth={2.5} />
            {news.publishedAt}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} strokeWidth={2.5} />
            {news.readingTime} MIN
          </div>
        </div>

        <h3 className="mb-4 font-timeless text-[20px] font-bold leading-tight text-[#000418] transition-colors group-hover:text-[#072ac8] sm:mb-6 sm:text-[24px]">
          <Link href={`/berita/${news.slug}`}>
            {news.title}
          </Link>
        </h3>

        <p className="mb-8 line-clamp-2 text-[14px] leading-relaxed text-[#000418]/60 font-medium sm:line-clamp-3">
          {news.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[#000418]/5 pt-6 sm:pt-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl border-2 border-white bg-neutral-50 shadow-md sm:h-12 sm:w-12">
              <img src={news.author.avatar} alt={news.author.name} className="h-full w-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="font-timeless text-[14px] font-bold leading-none text-[#000418]">{news.author.name}</p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-[#000418]/40">{news.author.role}</p>
            </div>
          </div>

          <Link
            href={`/berita/${news.slug}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#000418] text-[#FFC400] shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 sm:h-12 sm:w-12"
          >
            <ArrowRight size={20} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </article>
  );
}
