"use client";

import { CheckCircle2 } from 'lucide-react';
import { StuntingProgramData } from '../../types/infografis';

interface StuntingProgramCardProps {
  program: StuntingProgramData;
}

export function StuntingProgramCard({ program }: StuntingProgramCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/5 bg-linear-to-br from-[#000418] to-[#000E4F] p-5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group sm:rounded-3xl sm:p-6">
      <div className="flex items-start justify-between relative z-10">
        <h3 className="text-[15px] font-black leading-[1.15] tracking-tight text-white max-w-[140px] font-timeless sm:text-lg sm:max-w-[180px] md:text-xl">
          {program.name}
        </h3>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-[#FFC400] border border-white/10 transition-all group-hover:rotate-12 group-hover:bg-[#FFC400] group-hover:text-[#000418] sm:h-10 sm:w-10">
          <CheckCircle2 size={18} className="sm:size-20" />
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between relative z-10 sm:mt-8">
        <p className="text-[10px] font-medium leading-relaxed text-[#a2d6f9]/60 max-w-[100px] sm:text-[11px] sm:max-w-[150px]">
          {program.description}
        </p>
        <div className="text-right">
          <div className="flex items-baseline justify-end gap-0.5">
            <span className="text-4xl font-black text-white font-timeless tracking-tighter transition-transform duration-500 group-hover:scale-110 sm:text-5xl">
              {program.coverage}
            </span>
            <span className="text-lg font-black text-[#FFC400] sm:text-xl">%</span>
          </div>
          <p className="text-[8px] font-black uppercase tracking-widest text-[#a2d6f9]/40 sm:text-[9px]">
            Cakupan
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2.5 relative z-10 sm:mt-8 sm:space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-black uppercase tracking-widest text-[#FFC400]/80 sm:text-[9px]">
            {program.target}
          </p>
          <span className="text-[9px] font-black text-white/40 sm:text-[10px]">{program.coverage}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5 border border-white/5 sm:h-2">
          <div
            className="h-full bg-linear-to-r from-[#FFC400] via-[#FDC200] to-[#FFC400] transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(255,196,0,0.4)]"
            style={{ width: `${program.coverage}%` }}
          />
        </div>
      </div>

      {/* Decorative background spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
