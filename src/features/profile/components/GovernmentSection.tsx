"use client";

import React, { useState } from "react";
import { Users2, Award, ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react";
import { GovernmentMember } from "../types";

export function GovernmentSection({ members }: { members: GovernmentMember[] }) {
  const [showOrgChart, setShowOrgChart] = useState(false);

  return (
    <section className="space-y-16">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#000418]/5 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-[#000418]">
          <Users2 size={24} />
          Struktur Pemerintahan
        </div>
        <h2 className="font-timeless text-[32px] font-bold text-[#000418] md:text-[42px]">Perangkat Desa Sukahurip</h2>
        <p className="max-w-2xl text-[15px] text-[#000418]/50">Melayani dengan integritas, transparansi, dan dedikasi untuk kemajuan bersama.</p>
      </div>

      {/* Apparatus Grid - Matching Home Page Style */}
      <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0">
        {members.map((item, index) => (
          <div
            key={item.name}
            className="hero-reveal group relative h-105 w-[280px] shrink-0 snap-center overflow-hidden rounded-[32px] bg-[#072ac8] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:h-120 sm:w-[320px] lg:w-full lg:shrink"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={item.photo}
              alt={item.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#072ac8] via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
            
            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex flex-col">
                <span className="mb-2 w-fit rounded-lg bg-[#ffc600]/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#ffc600] backdrop-blur-md">
                  {item.position}
                </span>
                <h4 className="font-timeless text-[22px] font-bold text-white md:text-[26px]">{item.name}</h4>
                <div className="mt-4 h-1 w-0 bg-[#FFC400] transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Org Chart Section */}
      <div className="flex flex-col items-center gap-6 border-t border-[#000418]/5 pt-12 md:gap-8 md:pt-16">
        <button 
          onClick={() => setShowOrgChart(!showOrgChart)}
          className="flex items-center gap-3 rounded-full bg-[#FFC400] px-8 py-4 text-[13px] font-bold text-[#000418] shadow-xl transition-all hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(240,177,0,0.3)] sm:px-10 sm:py-5 sm:text-[14px]"
        >
          <ImageIcon size={24} />
          <span className="max-w-[200px] truncate sm:max-w-none">
            {showOrgChart ? "Sembunyikan Bagan" : "Bagan Struktur Organisasi"}
          </span>
          {showOrgChart ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>

        {showOrgChart && (
          <div className="w-full max-w-5xl overflow-hidden rounded-[48px] border-8 border-white bg-white shadow-2xl animate-in fade-in zoom-in duration-500">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
              alt="Bagan Struktur Organisasi" 
              className="w-full h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
}

