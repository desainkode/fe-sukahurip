"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Search, Filter, Check, X, Calendar as CalendarIcon, Grid, LayoutGrid } from "lucide-react";
import { galleryCategories, mockGallery } from "../config/mock-data";
import { GaleriCard } from "./GaleriCard";

export function GaleriList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    return mockGallery.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "Semua" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
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
    <div id="gallery-content" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      {/* Integrated Search & Filter Bar (Matching News Page) */}
      <div className="sticky top-28 z-40 mb-12 md:mb-20 flex justify-center">
        <div className="relative flex w-full max-w-3xl items-center gap-1.5 rounded-[24px] border border-white/40 bg-white/70 p-2 shadow-[0_20px_50px_rgba(0,4,24,0.1)] backdrop-blur-2xl transition-all focus-within:bg-white focus-within:shadow-[0_25px_60px_rgba(0,4,24,0.15)] sm:gap-2 sm:rounded-full sm:p-2.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#000418] text-white sm:h-12 sm:w-12">
            <Search size={20} className="sm:size-5" />
          </div>
          
          <input
            type="text"
            placeholder="Cari dokumentasi kegiatan..."
            className="flex-1 bg-transparent px-2 text-[14px] font-bold text-black outline-none placeholder:text-[#000418]/30 sm:px-4 sm:text-[16px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="h-6 w-px bg-[#000418]/10 mx-1 sm:h-8" />
          
          <div className="relative" ref={filterRef}>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all sm:px-6 sm:py-3.5 sm:text-[12px] ${
                isFilterOpen || activeCategory !== "Semua"
                  ? "bg-[#072ac8] text-white shadow-lg"
                  : "bg-neutral-100 text-[#000418] hover:bg-[#000418]/5"
              }`}
            >
              <Filter size={16} className="sm:size-4" />
              <span className="hidden sm:inline">
                {activeCategory === "Semua" ? "Filter" : activeCategory}
              </span>
            </button>

            {/* Dropdown Popup */}
            {isFilterOpen && (
              <div className="absolute right-0 mt-4 w-64 overflow-hidden rounded-[28px] border border-white bg-white/95 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl animate-in zoom-in-95 fade-in duration-200 origin-top-right sm:rounded-[32px]">
                <div className="flex flex-col gap-1">
                  {galleryCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsFilterOpen(false);
                      }}
                      className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-left text-[13px] font-bold uppercase tracking-widest transition-all ${
                        activeCategory === cat
                          ? "bg-[#072ac8] text-white"
                          : "text-[#000418]/60 hover:bg-[#000418]/5 hover:text-[#000418]"
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && <Check size={18} strokeWidth={3} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
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
                className="group flex items-center gap-4 rounded-3xl bg-[#040922] px-10 py-5 text-[15px] font-black text-[#ffc600] shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl active:scale-95"
              >
                Muat Lebih Banyak
                <div className="h-2 w-2 rounded-full bg-[#ffc600] group-hover:animate-ping" />
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
          <p className="mt-2 text-[#000418]/50 max-w-xs font-medium text-[14px]">Maaf, kami tidak dapat menemukan momen yang Anda cari. Coba kata kunci lain.</p>
        </div>
      )}
    </div>
  );
}
