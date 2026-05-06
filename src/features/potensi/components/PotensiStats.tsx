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
            className="group relative overflow-hidden rounded-[32px] border border-[#000418]/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#000418]/5 text-[#000418] transition-colors group-hover:bg-[#072ac8] group-hover:text-white">
              <Icon size={24} />
            </div>
            <p className="text-[12px] font-black uppercase tracking-widest text-[#000418]/30 group-hover:text-[#072ac8] transition-colors">{stat.label}</p>
            <div className="mt-1 flex items-baseline gap-2">
              <h3 className="font-timeless text-3xl font-black text-[#000418]">{stat.value}</h3>
              <span className="text-[12px] font-bold text-[#000418]/40">{stat.unit}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
