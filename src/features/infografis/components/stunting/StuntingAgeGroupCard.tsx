"use client";

import { User, ArrowUpRight } from 'lucide-react';
import { StuntingPrevalenceData } from '../../types/infografis';

interface StuntingAgeGroupCardProps {
  data: StuntingPrevalenceData;
}

export function StuntingAgeGroupCard({ data }: StuntingAgeGroupCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-linear-to-b from-[#000418] to-[#000E4F] p-4 text-white shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl border border-white/5 group sm:rounded-3xl sm:p-6">
      <div className="flex items-center gap-3 mb-5 sm:gap-4 sm:mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 transition-all group-hover:rotate-6 group-hover:bg-[#FFC400] group-hover:text-[#000418] sm:h-12 sm:w-12 sm:rounded-2xl">
          <User size={18} className="transition-colors sm:size-20" />
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#a2d6f9]/60 sm:text-[10px]">Kelompok</span>
          <span className="text-[12px] font-black leading-tight tracking-tight uppercase sm:text-[15px]">
            {data.ageGroup}
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between gap-3 sm:gap-4">
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <span
            className="text-4xl font-black leading-none tracking-tighter font-timeless sm:text-5xl"
          >
            {data.count}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#FFC400] sm:text-[10px]">Jiwa</span>
        </div>
        <p className="hidden text-[10px] font-medium leading-relaxed opacity-50 max-w-[80px] mb-1 sm:block sm:text-[11px] sm:max-w-[120px]">
          {data.description}
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:mt-8">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5 sm:h-2">
          <div
            className="h-full bg-linear-to-r from-[#FFC400] via-[#FDC200] to-[#FFC400] shadow-[0_0_12px_rgba(255,196,0,0.3)] transition-all duration-1000 group-hover:opacity-80"
            style={{ width: data.targetPercentage }}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[8px] font-bold uppercase tracking-widest text-[#a2d6f9]/50 sm:text-[10px]">Target Pemerintah</span>
            <div className="flex items-center gap-1">
              <span className="font-timeless text-[13px] font-black text-[#FFC400] sm:text-[15px]">{data.targetPercentage}</span>
              <ArrowUpRight size={10} className="text-[#FFC400] opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
