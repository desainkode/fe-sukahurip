"use client";

import { LucideIcon, HandHelping, Package, Banknote, HeartHandshake } from 'lucide-react';
import { BansosIndicator } from '../../types/infografis';

const iconMap: Record<string, LucideIcon> = {
  'Total Penerima Bansos': HandHelping,
  'Jenis Bantuan': Package,
  'Total Anggaran Tahunan': Banknote,
  'Jumlah Program Bantuan': HeartHandshake,
};

interface BansosIndicatorCardProps {
  indicator: BansosIndicator;
}

export function BansosIndicatorCard({ indicator }: BansosIndicatorCardProps) {
  const Icon = iconMap[indicator.label] || HandHelping;

  // Determine icon and text color based on background
  const isGoldBg = indicator.color.includes('#FFC400') || indicator.color.includes('#FCC100');
  const iconColor = isGoldBg ? 'text-[#072ac8]' : 'text-[#FFC400]';
  const labelColor = isGoldBg ? 'text-[#072ac8]' : 'text-white';
  const unitColor = isGoldBg ? 'text-[#072ac8]/60' : 'text-[#FFC400]/80';
  const descriptionColor = isGoldBg ? 'text-[#072ac8]/60' : 'text-white/60';
  const valueColor = isGoldBg ? 'text-[#072ac8]' : 'text-white';

  return (
    <div className={`relative overflow-hidden p-5 rounded-[24px] ${indicator.color} shadow-2xl group hover:-translate-y-1.5 transition-all duration-500 sm:rounded-3xl sm:p-6`}>
      {/* Premium Glass Overlay */}
      <div className={`absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      {/* Decorative background element */}
      <div className={`absolute -right-4 -top-4 h-20 w-20 rounded-full ${isGoldBg ? 'bg-black/5' : 'bg-white/5'} blur-2xl transition-transform group-hover:scale-150 sm:h-24 sm:w-24`} />
      
      <div className="relative z-10 flex flex-col h-full gap-5 sm:gap-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isGoldBg ? 'bg-black/5' : 'bg-white/10'} shadow-inner backdrop-blur-md transition-all group-hover:rotate-6 sm:h-14 sm:w-14 sm:rounded-2xl`}>
            <Icon 
              className={`size-5 sm:size-8 ${iconColor}`} 
            />
          </div>
          <h3 className={`text-[13px] font-black leading-tight tracking-tight font-timeless ${labelColor} sm:text-lg sm:leading-[1.1]`}>
            {indicator.label}
          </h3>
        </div>

        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-black tracking-tighter font-timeless ${valueColor} sm:text-6xl`}>
              {indicator.value}
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-widest sm:text-sm ${unitColor}`}>
              {indicator.unit}
            </span>
          </div>
          
          <p className={`text-[9px] font-medium leading-relaxed line-clamp-2 ${descriptionColor} sm:text-[11px]`}>
            {indicator.description}
          </p>
        </div>
      </div>
    </div>
  );
}
