"use client";

import React from "react";
import { Info } from "lucide-react";
import { sectionCardClass } from "../section-ui";
import { KARTU_JUMLAH_PENDUDUK } from "../../config/penduduk-data";
import { JumlahPendudukCard } from "./JumlahPendudukCard";
import { SectionHeader } from "../../../home/components/ui/SectionHeader";

export function JumlahPendudukSection() {
  return (
    <section className={sectionCardClass + " bg-[#FFFFFF]"}>
      <div className="flex flex-col gap-7">
        <SectionHeader 
          title={["Jumlah", "Penduduk"]}
          description="Jumlah Penduduk merupakan penyajian data mengenai total populasi yang ditampilkan secara transparan, akurat, and terintegrasi guna mendukung proses perencanaan pembangunan, pengambilan kebijakan, serta evaluasi program secara tepat sasaran."
          showInfoButton
          icon={Info}
        />

        <div className="hero-reveal no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 md:-mx-7 md:px-7 lg:mx-0 lg:grid lg:grid-cols-3 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0" style={{ animationDelay: "180ms" }}>
          {KARTU_JUMLAH_PENDUDUK.map((item, idx) => (
            <div key={`${item.label}-${idx}`} className="w-[280px] shrink-0 snap-center lg:w-auto">
              <JumlahPendudukCard
                label={item.label}
                angka={item.angka}
                tone={item.tone}
                icon={item.icon}
                delayMs={120 + idx * 80}
              />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Scroll Indicator */}
        <div className="mt-[-12px] flex justify-center gap-1.5 lg:hidden">
          <div className="h-1.5 w-6 rounded-full bg-[#072ac8]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
        </div>
      </div>
    </section>
  );
}
