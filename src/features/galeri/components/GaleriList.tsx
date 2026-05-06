"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, Calendar as CalendarIcon, Grid, LayoutGrid } from "lucide-react";
import { galleryCategories, mockGallery } from "../config/mock-data";
import { GaleriCard } from "./GaleriCard";

export function GaleriList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [displayCount, setDisplayCount] = useState(6);

  const filteredItems = useMemo(() => {
    return mockGallery.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "Semua" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div id="gallery-content" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      {/* Search & Filter Bar */}
      <div className="mb-10 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex-1 max-w-2xl">
          <div className="group relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000418]/30 transition-colors group-focus-within:text-[#072ac8]" size={22} />
            <input
              type="text"
              placeholder="Cari dokumentasi kegiatan..."
              className="h-14 w-full rounded-[20px] border border-white bg-white pl-12 pr-6 text-[14px] font-medium text-black shadow-xl shadow-black/[0.03] outline-none ring-offset-2 transition-all focus:border-[#072ac8]/20 focus:ring-4 focus:ring-[#072ac8]/5 sm:h-16 sm:rounded-full sm:pl-14 sm:pr-8 sm:text-[15px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide sm:gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] font-bold transition-all sm:px-6 sm:py-3 sm:text-[13px] ${
                activeCategory === cat
                  ? "bg-[#072ac8] text-white shadow-lg shadow-[#072ac8]/20"
                  : "bg-white text-[#000418] border border-[#000418]/5 hover:bg-neutral-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {filteredItems.slice(0, displayCount).map((item) => (
              <div key={item.id} className="hero-reveal" style={{ animationDelay: '100ms' }}>
                <GaleriCard item={item} />
              </div>
            ))}
          </div>
          
          {displayCount < filteredItems.length && (
            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => setDisplayCount(prev => prev + 6)}
                className="group flex items-center gap-3 rounded-full border border-[#000418]/10 bg-white px-10 py-5 text-[14px] font-bold text-[#000418] transition-all hover:bg-[#000418] hover:text-white"
              >
                Muat Lebih Banyak
                <div className="h-2 w-2 rounded-full bg-[#072ac8] group-hover:bg-white" />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-[40px] border-2 border-dashed border-[#000418]/10 py-32 text-center bg-white/50 backdrop-blur-sm">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#000418]/5 text-[#000418]/20">
            <Search size={40} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-[#000418]">Dokumentasi Tidak Ditemukan</h3>
          <p className="mt-2 text-[#000418]/50 max-w-xs">Maaf, kami tidak dapat menemukan momen yang Anda cari. Coba kata kunci lain.</p>
        </div>
      )}
    </div>
  );
}
