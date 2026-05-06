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

      <div className="mt-8 px-1 sm:px-2">
        <div
          className="hero-reveal grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 xl:gap-10"
          style={{ animationDelay: "300ms" }}
        >
          {KARTU_DEMOGRAFI.map((item, idx) => (
            <DemografiCard
              key={`${item.label}-${idx}`}
              label={item.label}
              angka={item.angka}
              bgColor={item.bgColor}
              textColor={item.textColor}
              labelColor={item.labelColor}
              icon={item.icon}
              delayMs={300 + idx * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
