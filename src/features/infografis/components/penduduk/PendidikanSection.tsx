"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import { sectionCardClass } from "../section-ui";
import { PendidikanChart } from "./PendidikanChart";
import { SectionHeader } from "../../../home/components/ui/SectionHeader";

export function PendidikanSection() {
  return (
    <section className={sectionCardClass + " bg-[#ffffff]"}>
      <div className="flex flex-col gap-7">
        <SectionHeader 
          title={["Berdasarkan", "Pendidikan"]}
          description="Berdasarkan Pendidikan merupakan penyajian data penduduk menurut tingkat pendidikan terakhir yang disajikan secara transparan and akurat untuk mendukung perencanaan pembangunan desa."
          showInfoButton
          icon={GraduationCap}
        />

        <PendidikanChart delayMs={120} />
      </div>
    </section>
  );
}
