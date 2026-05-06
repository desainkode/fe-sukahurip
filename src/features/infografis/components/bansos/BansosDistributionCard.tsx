"use client";

import { User } from 'lucide-react';
import { BansosDistributionData } from '../../types/infografis';

interface BansosDistributionCardProps {
  data: BansosDistributionData;
}

export function BansosDistributionCard({ data }: BansosDistributionCardProps) {
  const isGoldBg = data.color?.includes('#FFC400') || data.color?.includes('#FCC100');
  const iconColor = isGoldBg ? 'text-[#072ac8]' : 'text-[#FFC400]';
  const labelColor = isGoldBg ? 'text-[#072ac8]/60' : 'text-[#a2d6f9]/60';
  const dusunColor = isGoldBg ? 'text-[#072ac8]' : 'text-white';
  const descriptionColor = isGoldBg ? 'text-[#072ac8]/60' : 'text-white/50';
  const receiverLabelColor = isGoldBg ? 'text-[#072ac8]/80' : 'text-[#FFC400]';
  const unitColor = isGoldBg ? 'text-[#072ac8]/60' : 'text-[#FFC400]/80';
  const countColor = isGoldBg ? 'text-[#072ac8]' : 'text-white';

  return (
    <div className={`p-5 bg-linear-to-bl ${data.color || 'from-neutral-900 via-[#000E4D] to-neutral-900'} rounded-[24px] shadow-xl flex flex-col gap-4 relative overflow-hidden group h-full transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl border border-white/5 sm:rounded-3xl`}>
      {/* Premium Glass Overlay */}
      <div className={`absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      <div className="flex items-center gap-3 relative z-10">
        <div className={`p-2.5 ${isGoldBg ? 'bg-black/5' : 'bg-white/10'} rounded-xl backdrop-blur-md border border-white/10 transition-all group-hover:bg-[#FFC400] group-hover:text-[#000418] group-hover:rotate-12`}>
          <User size={18} className={`${iconColor} sm:w-5 sm:h-5`} />
        </div>
        <div className="flex flex-col">
          <span className={`text-[9px] font-bold uppercase tracking-widest ${labelColor} font-timeless sm:text-[10px]`}>Dusun</span>
          <span className={`text-[15px] font-black leading-tight ${dusunColor} font-timeless sm:text-[17px]`}>{data.dusun}</span>
        </div>
      </div>

      <p className={`text-[10px] font-medium leading-relaxed z-10 line-clamp-2 ${descriptionColor} sm:text-[11px]`}>
        {data.alokasi}
      </p>

      <div className="flex justify-between items-end mt-auto relative z-10">
        <span className={`${receiverLabelColor} text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5 sm:text-[10px]`}>Penerima</span>
        <div className="flex flex-col items-end">
          <span 
            className={`text-4xl font-black leading-none tracking-tighter ${countColor} font-timeless sm:text-5xl`} 
          >
            {data.keluarga}
          </span>
          <span className={`${unitColor} text-[9px] font-bold uppercase tracking-widest sm:text-[10px]`}>Orang</span>
        </div>
      </div>

      {/* Subtle spotlight */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_${isGoldBg ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)'}_0%,_transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </div>
  );
}
