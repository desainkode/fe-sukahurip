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

        <div className="hero-reveal grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" style={{ animationDelay: "180ms" }}>
          {KARTU_JUMLAH_PENDUDUK.map((item, idx) => (
            <JumlahPendudukCard
              key={`${item.label}-${idx}`}
              label={item.label}
              angka={item.angka}
              tone={item.tone}
              icon={item.icon}
              delayMs={120 + idx * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
