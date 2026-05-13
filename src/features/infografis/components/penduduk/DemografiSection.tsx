"use client";

import React from "react";
import { Info } from "lucide-react";
import { sectionCardClass } from "../section-ui";
import { KARTU_DEMOGRAFI } from "../../config/penduduk-data";
import { DemografiCard } from "./DemografiCard";
import { SectionHeader } from "../../../home/components/ui/SectionHeader";

export function DemografiSection() {
  return (
    <div className={sectionCardClass + " bg-white"}>
      <SectionHeader 
        title={["Demografi", "Penduduk"]}
        description="Demografi Penduduk merupakan penyajian data kependudukan yang transparan, akurat, and terintegrasi guna mendukung proses perencanaan pembangunan, pengambilan kebijakan, serta evaluasi program secara tepat sasaran."
        showInfoButton
        icon={Info}
      />

      <div className="mt-8">
        <div
          className="hero-reveal no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 md:-mx-7 md:px-7 lg:mx-0 lg:grid lg:grid-cols-4 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-10"
          style={{ animationDelay: "300ms" }}
        >
          {KARTU_DEMOGRAFI.map((item, idx) => (
            <div key={`${item.label}-${idx}`} className="w-[190px] shrink-0 snap-center sm:w-[230px] lg:w-auto">
              <DemografiCard
                label={item.label}
                angka={item.angka}
                bgColor={item.bgColor}
                textColor={item.textColor}
                labelColor={item.labelColor}
                icon={item.icon}
                delayMs={300 + idx * 100}
              />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Scroll Indicator */}
        <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
          <div className="h-1.5 w-6 rounded-full bg-[#072ac8]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
        </div>
      </div>
    </div>
  );
}
