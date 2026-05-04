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

        <div className="relative overflow-hidden rounded-[32px] bg-linear-to-br from-[#00082B] via-[#000C42] to-[#00051A] px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16">
          <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a2d6f9]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#0020B1]/10 blur-[110px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(30,150,252,0.05)_0%,transparent_70%)]" />

          <div className="relative z-10 grid items-stretch gap-10 xl:grid-cols-[1fr_minmax(280px,0.6fr)] xl:gap-16">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
              {BERDASARKAN_DUSUN_CARDS.map((item, idx) => (
                <DusunInfoCard
                  key={`${item.kode}-${item.nama}`}
                  kode={item.kode}
                  nama={item.nama}
                  deskripsi={item.deskripsi}
                  persentase={item.persentase}
                  delayMs={120 + idx * 70}
                />
              ))}
            </div>

            <div className="flex flex-col items-center justify-center rounded-[28px] border border-white/5 bg-white/2 p-6 shadow-3xl backdrop-blur-md sm:p-8">
              <DusunPieChart delayMs={220} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
