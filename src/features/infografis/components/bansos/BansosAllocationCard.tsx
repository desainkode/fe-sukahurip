"use client";

import { ArrowUpRight } from 'lucide-react';
import { BansosAllocation } from '../../types/infografis';

interface BansosAllocationCardProps {
  summary: BansosAllocation;
}

export function BansosAllocationCard({ summary }: BansosAllocationCardProps) {
  const isGradient = summary.color.includes('via');

  return (
    <div className={`p-5 h-56 rounded-[24px] shadow-xl text-white flex gap-4 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-6 sm:h-60 sm:rounded-3xl sm:gap-5 ${isGradient ? `bg-linear-to-bl ${summary.color}` : summary.color}`}>
      {/* Background Decorative Blob */}
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/5 blur-3xl transition-transform duration-700 group-hover:scale-150 sm:h-32 sm:w-32" />
      
      {/* Left Content */}
      <div className="flex flex-col justify-between flex-1 relative z-10">
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-xl font-black leading-[1.1] tracking-tight font-timeless sm:text-2xl md:text-3xl">
            {summary.label}
          </h3>
          <p className="text-[10px] font-medium opacity-60 leading-relaxed max-w-[140px] line-clamp-3 sm:text-[11px] sm:max-w-[160px] sm:line-clamp-none">
            {summary.description}
          </p>
        </div>
        
        <div className="w-9 h-9 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:bg-[#FFC400] group-hover:text-[#000418] group-hover:rotate-45 sm:w-11 sm:h-11">
          <ArrowUpRight size={18} className="transition-transform sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Right Content (Number Box) */}
      <div className="w-[45%] h-full bg-white/5 rounded-2xl flex flex-col items-center justify-center backdrop-blur-xl border border-white/10 relative z-10 p-4 transition-all duration-500 group-hover:bg-white/10">
        <div className="flex flex-col items-start w-full gap-1">
          {summary.unit === 'RP.' && (
            <span className="text-[9px] font-black tracking-[0.2em] text-[#FFC400] font-timeless sm:text-[10px]">RUPIAH</span>
          )}
          <span 
            className="text-4xl font-black leading-none tracking-tighter font-timeless sm:text-5xl md:text-6xl" 
          >
            {summary.value}
          </span>
          {summary.unit === 'Orang' && (
            <span className="text-[9px] font-black tracking-[0.2em] text-[#FFC400] font-timeless uppercase sm:text-[10px]">JIWA</span>
          )}
        </div>
      </div>

      {/* Subtle spotlight for gradient cards */}
      {isGradient && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.1)_0%,_transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </div>
  );
}
