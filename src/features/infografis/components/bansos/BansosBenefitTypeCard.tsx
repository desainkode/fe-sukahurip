"use client";

import { LayoutGrid } from 'lucide-react';
import { BansosBenefitType } from '../../types/infografis';

interface BansosBenefitTypeCardProps {
  type: BansosBenefitType;
}

export function BansosBenefitTypeCard({ type }: BansosBenefitTypeCardProps) {
  const isGoldBg = type.color.includes('#FFC400') || type.color.includes('#FCC100');
  const iconColor = isGoldBg ? 'text-[#072ac8]' : 'text-[#FFC400]';
  const nameColor = isGoldBg ? 'text-[#072ac8]' : 'text-white';
  const labelColor = isGoldBg ? 'text-[#072ac8]/60' : 'text-[#a2d6f9]/60';
  const countColor = isGoldBg ? 'text-[#072ac8]' : 'text-white';
  const unitColor = isGoldBg ? 'text-[#072ac8]/60' : 'text-[#FFC400]/80';

  return (
    <div className={`p-5 rounded-[24px] shadow-xl flex flex-col gap-4 relative overflow-hidden group h-full transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl border border-white/5 ${type.color} sm:rounded-3xl sm:p-6`}>
      {/* Premium Glass Overlay */}
      <div className={`absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 ${isGoldBg ? 'bg-black/5' : 'bg-white/10'} rounded-xl backdrop-blur-md border border-white/10 transition-all group-hover:rotate-12`}>
            <LayoutGrid size={18} className={`${iconColor} sm:size-20`} />
          </div>
          <h3 className={`text-[15px] font-black leading-tight tracking-tight font-timeless ${nameColor} sm:text-xl`}>
            {type.name}
          </h3>
        </div>
      </div>

      <div className="flex justify-between items-end mt-auto relative z-10 pt-2">
        <div className="flex flex-col">
          <span className={`${labelColor} text-[9px] font-bold uppercase tracking-widest sm:text-[10px]`}>Total Penerima</span>
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-black leading-none tracking-tighter ${countColor} font-timeless sm:text-5xl`}>
              {type.count}
            </span>
            <span className={`${unitColor} text-[10px] font-bold uppercase tracking-widest sm:text-xs`}>Orang</span>
          </div>
        </div>
      </div>

      {/* Subtle spotlight */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_${isGoldBg ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)'}_0%,_transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </div>
  );
}
