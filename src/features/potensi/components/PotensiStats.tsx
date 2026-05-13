import React from "react";
import { Store, Sprout, Users, Palmtree } from "lucide-react";
import { potensiStats } from "../config/mock-data";

const iconMap: Record<string, any> = {
  Store,
  Sprout,
  Users,
  Palmtree,
};

export function PotensiStats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {potensiStats.map((stat, idx) => {
        const Icon = iconMap[stat.icon];
        return (
          <div 
            key={idx}
            className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#000418]/5 bg-white p-4 sm:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#000418]/5 text-[#000418] transition-colors group-hover:bg-[#072ac8] group-hover:text-white">
              <Icon size={20} className="sm:size-6" />
            </div>
            <p className="text-[10px] sm:text-[12px] font-black uppercase tracking-widest text-[#000418]/30 group-hover:text-[#072ac8] transition-colors line-clamp-1">{stat.label}</p>
            <div className="mt-1 flex items-baseline gap-1 sm:gap-2">
              <h3 className="font-timeless text-2xl sm:text-3xl font-black text-[#000418]">{stat.value}</h3>
              <span className="text-[10px] sm:text-[12px] font-bold text-[#000418]/40 truncate">{stat.unit}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
