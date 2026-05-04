"use client";

import React from "react";
import { ChartNoAxesCombined } from "lucide-react";
import { sectionCardClass } from "../section-ui";
import { DIAGRAM_KELOMPOK_UMUR } from "../../config/penduduk-data";
import { KelompokUmurChart } from "./KelompokUmurChart";
import { SectionHeader } from "../../../home/components/ui/SectionHeader";

export function KelompokUmurSection() {
  return (
    <section className={sectionCardClass + " bg-[#ffffff]"}>
      <div className="flex flex-col gap-7">
        <SectionHeader 
          title={["Berdasarkan", "Kelompok Umur"]}
          description="Kelompok Umur merupakan penyajian data penduduk berdasarkan rentang usia tertentu yang ditampilkan secara transparan, akurat, and terintegrasi guna mendukung proses perencanaan pembangunan, pengambilan kebijakan, serta evaluasi program secara tepat sasaran."
          showInfoButton
          icon={ChartNoAxesCombined}
        />

        <div className="hero-reveal grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-5" style={{ animationDelay: "180ms" }}>
          {DIAGRAM_KELOMPOK_UMUR.map((item, idx) => (
            <KelompokUmurChart
              key={`${item.title}-${idx}`}
              title={item.title}
              icon={item.icon}
              bars={item.bars}
              delayMs={120 + idx * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
