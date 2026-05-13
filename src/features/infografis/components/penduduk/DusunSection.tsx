"use client";

import React from "react";
import { ChartNoAxesCombined } from "lucide-react";
import { sectionCardClass } from "../section-ui";
import { BERDASARKAN_DUSUN_CARDS } from "../../config/penduduk-data";
import { DusunInfoCard } from "./DusunInfoCard";
import { DusunPieChart } from "./DusunPieChart";
import { SectionHeader } from "../../../home/components/ui/SectionHeader";

export function DusunSection() {
  return (
    <section className={sectionCardClass + " bg-[#ffffff]"}>
      <div className="flex flex-col gap-7">
        <SectionHeader 
          title={["Berdasarkan", "Dusun"]}
          description="Berdasarkan Dusun merupakan penyajian data penduduk menurut rentang usia di setiap dusun yang disajikan secara transparan and akurat untuk mendukung perencanaan and pengambilan kebijakan secara tepat sasaran."
          showInfoButton
          icon={ChartNoAxesCombined}
        />

        <div className="relative overflow-hidden rounded-[24px] bg-linear-to-br from-[#00082B] via-[#000C42] to-[#00051A] px-5 py-8 sm:rounded-[32px] sm:px-10 sm:py-14 md:px-12 md:py-16">
          <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a2d6f9]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#0020B1]/10 blur-[110px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(30,150,252,0.05)_0%,transparent_70%)]" />

          <div className="relative z-10 flex flex-col gap-8 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center lg:grid-cols-[1fr_minmax(280px,0.6fr)] lg:gap-12 xl:gap-16">
            {/* Chart first on Mobile/Tablet */}
            <div className="order-1 flex flex-col items-center justify-center rounded-[24px] border border-white/5 bg-white/2 p-5 shadow-3xl backdrop-blur-md sm:rounded-[28px] sm:p-8 md:order-2 md:p-6 lg:p-8">
              <DusunPieChart delayMs={220} />
            </div>

            {/* Cards second on Mobile/Tablet */}
            <div className="order-2 md:order-1">
              <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 pt-8 sm:-mx-10 sm:px-10 md:-mx-12 md:px-12 lg:mx-0 lg:grid lg:grid-cols-2 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0 lg:gap-6 xl:gap-8">
                {BERDASARKAN_DUSUN_CARDS.map((item, idx) => (
                  <div key={`${item.kode}-${item.nama}`} className="w-[220px] shrink-0 snap-center sm:w-[260px] lg:w-auto">
                    <DusunInfoCard
                      kode={item.kode}
                      nama={item.nama}
                      deskripsi={item.deskripsi}
                      persentase={item.persentase}
                      delayMs={120 + idx * 70}
                    />
                  </div>
                ))}
              </div>

              {/* Mobile/Tablet Scroll Indicator */}
              <div className="mt-3 flex justify-center gap-1.5 lg:hidden">
                <div className="h-1.5 w-6 rounded-full bg-white/30" />
                <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
