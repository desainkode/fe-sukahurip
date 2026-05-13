"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Search, Filter, X, ChevronRight, LayoutGrid, Check } from "lucide-react";
import { newsCategories, mockNews } from "../config/mock-data";
import { NewsCard } from "./NewsCard";

export function NewsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("semua");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredNews = useMemo(() => {
    return mockNews.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const isTerbaru = activeCategory === "terbaru" ? (item.publishedAt.includes("2026-04")) : true;
      const matchesCategory = activeCategory === "semua" || activeCategory === "terbaru" || item.category.slug === activeCategory;
      return matchesSearch && matchesCategory && isTerbaru;
    });
  }, [searchQuery, activeCategory]);

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="news-list" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 relative pt-12 md:pt-20">
      {/* Search & Filter Integrated Bar */}
      <div className="sticky top-24 z-40 mb-12 md:mb-20 flex justify-center px-2 sm:px-0">
        <div className="relative flex w-full max-w-3xl items-center gap-1.5 rounded-[24px] border border-white/40 bg-white/70 p-1.5 shadow-[0_20px_50px_rgba(0,4,24,0.1)] backdrop-blur-2xl transition-all focus-within:bg-white focus-within:shadow-[0_25px_60px_rgba(0,4,24,0.15)] sm:gap-2 sm:rounded-full sm:p-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#000418] text-white sm:h-12 sm:w-12">
            <Search size={18} className="sm:size-5" />
          </div>
          
          <input
            type="text"
            placeholder="Cari kabar desa..."
            className="flex-1 bg-transparent px-2 text-[13px] font-bold text-black outline-none placeholder:text-[#000418]/30 sm:px-4 sm:text-[16px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="h-6 w-px bg-[#000418]/10 mx-1 sm:h-8" />
          
          <div className="relative" ref={filterRef}>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-[10px] font-black uppercase tracking-widest transition-all sm:px-6 sm:py-3.5 sm:text-[12px] ${
                isFilterOpen || activeCategory !== "semua"
                  ? "bg-[#072ac8] text-white shadow-lg"
                  : "bg-neutral-100 text-[#000418] hover:bg-[#000418]/5"
              }`}
            >
              <Filter size={14} className="sm:size-4" />
              <span className="hidden xs:inline">
                {activeCategory === "semua" ? "Filter" : newsCategories.find(c => c.slug === activeCategory)?.name}
              </span>
            </button>

            {/* Minimalist Dropdown Popup */}
            {isFilterOpen && (
              <div className="absolute right-0 mt-4 w-64 overflow-hidden rounded-[28px] border border-white bg-white/95 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl animate-in zoom-in-95 fade-in duration-200 origin-top-right sm:rounded-[32px]">
                <div className="flex flex-col gap-1">
                  {newsCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.slug);
                        setIsFilterOpen(false);
                      }}
                      className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-left text-[13px] font-bold uppercase tracking-widest transition-all ${
                        activeCategory === category.slug
                          ? "bg-[#072ac8] text-white"
                          : "text-[#000418]/60 hover:bg-[#000418]/5 hover:text-[#000418]"
                      }`}
                    >
                      {category.name}
                      {activeCategory === category.slug && <Check size={18} strokeWidth={3} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* News Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((news, index) => (
            <div key={news.id} className="hero-reveal h-full" style={{ animationDelay: `${100 + index * 50}ms` }}>
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-[40px] border-2 border-dashed border-[#000418]/10 py-32 text-center bg-white/50 backdrop-blur-sm">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#000418]/5 text-[#000418]/20">
            <Search size={40} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-[#000418]">Berita Tidak Ditemukan</h3>
          <p className="mt-2 max-w-xs text-[14px] text-[#000418]/50 font-medium">
            Maaf, kami tidak dapat menemukan kabar yang Anda cari. Coba gunakan kata kunci lain.
          </p>
        </div>
      )}
    </section>
  );
}
