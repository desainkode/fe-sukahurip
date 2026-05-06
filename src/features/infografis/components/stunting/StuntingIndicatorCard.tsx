"use client";

import { LucideIcon, User, TrendingDown, Activity, Target } from 'lucide-react';
import { StuntingIndicator } from '../../types/infografis';

const iconMap: Record<string, LucideIcon> = {
  User: User,
  TrendingDown: TrendingDown,
  Activity: Activity,
  Target: Target,
};

interface StuntingIndicatorCardProps {
  indicator: StuntingIndicator;
}

export function StuntingIndicatorCard({ indicator }: StuntingIndicatorCardProps) {
  const Icon = indicator.icon ? iconMap[indicator.icon] : Activity;

  // Determine icon and text color based on background
  const isGoldBg = indicator.color.includes('#FFC400') || indicator.color.includes('#FCC100');
  const iconColor = isGoldBg ? 'text-[#072ac8]' : 'text-[#FFC400]';
  const labelColor = isGoldBg ? 'text-[#072ac8]/60' : 'text-[#a2d6f9]';
  const descriptionColor = isGoldBg ? 'text-[#072ac8]/60' : 'text-white/60';
  const valueColor = isGoldBg ? 'text-[#072ac8]' : 'text-white';

  return (
    <div
      className={`${indicator.color} relative overflow-hidden rounded-[24px] p-5 shadow-xl h-full flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl group border border-white/5 sm:rounded-3xl sm:p-6`}
    >
      {/* Premium Glass Overlay */}
      <div className={`absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className={`mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl ${isGoldBg ? 'bg-black/5' : 'bg-white/10'} shadow-inner backdrop-blur-md transition-all group-hover:rotate-6 group-hover:scale-110 sm:mb-4 sm:h-12 sm:w-12`}>
          <Icon className={`${iconColor} size-5 sm:size-6`} />
        </div>
        
        <p className={`font-timeless text-3xl font-black leading-none tracking-tighter ${valueColor} sm:text-5xl`}>
          {indicator.value}
        </p>
        
        <span className={`mt-1.5 text-[9px] font-bold uppercase tracking-[0.15em] ${labelColor} sm:mt-2 sm:text-[11px]`}>
          {indicator.label}
        </span>

        <p className={`mt-3 text-[10px] font-medium leading-relaxed ${descriptionColor} line-clamp-2 px-1 max-w-[180px] sm:mt-4 sm:text-[11px] sm:px-2 sm:max-w-[200px]`}>
          {indicator.description}
        </p>
      </div>

      {/* Decorative background element */}
      <div className={`absolute -bottom-6 -right-6 h-20 w-20 rounded-full ${isGoldBg ? 'bg-black/5' : 'bg-white/5'} blur-2xl transition-transform duration-700 group-hover:scale-150 sm:h-24 sm:w-24`} />
    </div>
  );
}
