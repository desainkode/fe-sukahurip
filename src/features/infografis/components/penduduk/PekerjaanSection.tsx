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

        <div className="hero-reveal grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-5" style={{ animationDelay: "180ms" }}>
          {PEKERJAAN_TOP_CARDS.map((item, idx) => (
            <PekerjaanTopCard
              key={`${item.nama}-${idx}`}
              nama={item.nama}
              jumlah={item.jumlah}
              rank={item.rank}
              icon={item.icon}
              delayMs={120 + idx * 80}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="hero-reveal relative overflow-hidden rounded-[24px] bg-linear-to-br from-[#FFC400] to-[#DEAA00] p-6 sm:p-8 md:p-10" style={{ animationDelay: "260ms" }}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-black/5 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-[Georgia,serif] text-[28px] font-bold leading-[1.2] text-white md:text-[32px]">
                  Jenis
                  <br />
                  Pekerjaan
                </h3>
                <Link
                  href="/infografis/pekerjaan?section=pertanian"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-[12px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  View All <span>→</span>
                </Link>
              </div>

              <div className="space-y-3">
                {PEKERJAAN_KIRI_BAHASAN.map((item, idx) => (
                  <PekerjaanDetailCard
                    key={`kiri-${item.kode}-${idx}`}
                    kode={item.kode}
                    nama={item.nama}
                    jumlah={item.jumlah}
                    persentase={item.persentase}
                    bgColor="rgba(255, 255, 255, 0.15)"
                    textColor="#FEFEFE"
                    delayMs={200 + idx * 60}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hero-reveal relative overflow-hidden rounded-[24px] bg-linear-to-br from-[#072ac8] to-[#000F52] p-6 sm:p-8 md:p-10" style={{ animationDelay: "340ms" }}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-black/10 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-[Georgia,serif] text-[28px] font-bold leading-[1.2] text-white md:text-[32px]">
                  Jenis
                  <br />
                  Pekerjaan
                </h3>
                <Link
                  href="/infografis/pekerjaan?section=profesional"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-[12px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  View All <span>→</span>
                </Link>
              </div>

              <div className="space-y-3">
                {PEKERJAAN_KANAN_BAHASAN.map((item, idx) => (
                  <PekerjaanDetailCard
                    key={`kanan-${item.kode}-${idx}`}
                    kode={item.kode}
                    nama={item.nama}
                    jumlah={item.jumlah}
                    persentase={item.persentase}
                    bgColor="rgba(255, 255, 255, 0.12)"
                    textColor="#FEFEFE"
                    delayMs={200 + idx * 60}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
