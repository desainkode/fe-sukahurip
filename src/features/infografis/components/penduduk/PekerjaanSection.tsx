"use client";

import React from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { sectionCardClass } from "../section-ui";
import { 
  PEKERJAAN_TOP_CARDS, 
  PEKERJAAN_KIRI_BAHASAN, 
  PEKERJAAN_KANAN_BAHASAN 
} from "../../config/penduduk-data";
import { PekerjaanTopCard } from "./PekerjaanTopCard";
import { PekerjaanDetailCard } from "./PekerjaanDetailCard";
import { SectionHeader } from "../../../home/components/ui/SectionHeader";

export function PekerjaanSection() {
  return (
    <section className={sectionCardClass + " bg-[#ffffff]"}>
      <div className="flex flex-col gap-7">
        <SectionHeader 
          title={["Berdasarkan", "Pekerjaan"]}
          description="Kelompok Berdasarkan Pekerjaan merupakan penyajian data penduduk menurut jenis atau bidang pekerjaan yang disajikan secara transparan and akurat untuk mendukung perencanaan serta pengambilan kebijakan secara tepat sasaran."
          showInfoButton
          icon={Briefcase}
        />

        <div className="hero-reveal no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 md:-mx-7 md:px-7 lg:mx-0 lg:grid lg:grid-cols-3 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0" style={{ animationDelay: "180ms" }}>
          {PEKERJAAN_TOP_CARDS.map((item, idx) => (
            <div key={`${item.nama}-${idx}`} className="w-[280px] shrink-0 snap-center lg:w-auto">
              <PekerjaanTopCard
                nama={item.nama}
                jumlah={item.jumlah}
                rank={item.rank}
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="hero-reveal relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-linear-to-br from-[#FFC400] to-[#DEAA00] p-5 sm:p-8 md:p-10" style={{ animationDelay: "260ms" }}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-black/5 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between sm:mb-8">
                <h3 className="font-timeless text-[22px] font-bold leading-[1.2] text-white sm:text-[28px] md:text-[32px]">
                  Jenis
                  <br />
                  Pekerjaan
                </h3>
                <Link
                  href="/infografis/pekerjaan?section=pertanian"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:px-5 sm:py-2.5 sm:text-[12px]"
                >
                  View All <span>→</span>
                </Link>
              </div>

              {/* Horizontal Scroll on Mobile/Tablet */}
              <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 md:-mx-7 md:px-7 lg:mx-0 lg:block lg:snap-none lg:space-y-3 lg:overflow-visible lg:px-0 lg:pb-0">
                {PEKERJAAN_KIRI_BAHASAN.map((item, idx) => (
                  <div key={`kiri-${item.kode}-${idx}`} className="w-[280px] shrink-0 snap-center lg:w-auto">
                    <PekerjaanDetailCard
                      kode={item.kode}
                      nama={item.nama}
                      jumlah={item.jumlah}
                      persentase={item.persentase}
                      bgColor="rgba(255, 255, 255, 0.18)"
                      textColor="#FEFEFE"
                      delayMs={200 + idx * 60}
                    />
                  </div>
                ))}
              </div>

              {/* Mobile/Tablet Scroll Indicator */}
              <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
                <div className="h-1.5 w-6 rounded-full bg-white/40" />
                <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          <div className="hero-reveal relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-linear-to-br from-[#072ac8] to-[#000F52] p-5 sm:p-8 md:p-10" style={{ animationDelay: "340ms" }}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-black/10 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between sm:mb-8">
                <h3 className="font-timeless text-[22px] font-bold leading-[1.2] text-white sm:text-[28px] md:text-[32px]">
                  Jenis
                  <br />
                  Pekerjaan
                </h3>
                <Link
                  href="/infografis/pekerjaan?section=profesional"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:px-5 sm:py-2.5 sm:text-[12px]"
                >
                  View All <span>→</span>
                </Link>
              </div>

              {/* Horizontal Scroll on Mobile/Tablet */}
              <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 md:-mx-7 md:px-7 lg:mx-0 lg:block lg:snap-none lg:space-y-3 lg:overflow-visible lg:px-0 lg:pb-0">
                {PEKERJAAN_KANAN_BAHASAN.map((item, idx) => (
                  <div key={`kanan-${item.kode}-${idx}`} className="w-[280px] shrink-0 snap-center lg:w-auto">
                    <PekerjaanDetailCard
                      kode={item.kode}
                      nama={item.nama}
                      jumlah={item.jumlah}
                      persentase={item.persentase}
                      bgColor="rgba(255, 255, 255, 0.12)"
                      textColor="#FEFEFE"
                      delayMs={200 + idx * 60}
                    />
                  </div>
                ))}
              </div>

              {/* Mobile/Tablet Scroll Indicator */}
              <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
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
