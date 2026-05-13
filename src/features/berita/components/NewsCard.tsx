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
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] sm:rounded-[40px] border border-neutral-100 bg-white shadow-2xl shadow-black/[0.02] transition-all duration-500 hover:-translate-y-2 hover:shadow-desa-blue-500/10">
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
      <div className="flex flex-1 flex-col p-6 sm:p-9">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#072ac8]/40">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" strokeWidth={2.5} />
            {news.publishedAt}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={2.5} />
            {news.readingTime} MIN
          </div>
        </div>

        <h3 className="mb-4 font-timeless text-[20px] font-bold leading-tight text-[#000418] transition-colors group-hover:text-[#072ac8] md:text-[26px]">
          <Link href={`/berita/${news.slug}`}>
            {news.title}
          </Link>
        </h3>

        <p className="mb-8 line-clamp-3 text-[14px] leading-relaxed text-[#000418]/50 font-medium">
          {news.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-6 sm:pt-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 shadow-sm">
              <img src={news.author.avatar} alt={news.author.name} className="h-full w-full object-cover" />
            </div>
            <div className="hidden xs:block">
              <p className="font-timeless text-[12px] font-bold leading-none text-[#000418]">{news.author.name}</p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-widest text-[#000418]/30">{news.author.role}</p>
            </div>
          </div>

          <Link
            href={`/berita/${news.slug}`}
            className="group/btn flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-[#000418] transition-all hover:text-[#072ac8]"
          >
            BACA BERITA
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 transition-all group-hover/btn:bg-[#072ac8] group-hover/btn:text-white group-hover/btn:translate-x-1">
              <ArrowRight className="h-4 w-4" strokeWidth={3} />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
