"use client";

import React from "react";
import { Paperclip } from "lucide-react";
import { sectionCardClass } from "../section-ui";
import { AGAMA_CARDS } from "../../config/penduduk-data";
import { AgamaStatCard } from "./AgamaStatCard";
import { SectionHeader } from "../../../home/components/ui/SectionHeader";

export function AgamaSection() {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const paginationRef = React.useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const updateActiveIndex = React.useCallback((scrollLeft: number, scrollWidth: number, clientWidth: number) => {
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    const progress = scrollLeft / maxScroll;
    const nextIndex = Math.round(progress * (AGAMA_CARDS.length - 1));

    setActiveIndex(nextIndex);

    const pagination = paginationRef.current;

    if (pagination) {
      pagination.dataset.activeIndex = String(nextIndex);
      Array.from(pagination.querySelectorAll<HTMLSpanElement>("span")).forEach((dot, index) => {
        const isActive = index === nextIndex;

        dot.className = isActive
          ? "h-2 rounded-full transition-all duration-300 ease-out w-8 bg-[#000418] shadow-[0_0_0_4px_rgba(0,4,24,0.08)]"
          : "h-2 rounded-full transition-all duration-300 ease-out w-2.5 bg-[#000418]/20";
      });
    }
  }, []);

  return (
    <section className={sectionCardClass + " bg-[#ffffff]"}>
      <div className="flex flex-col gap-7">
        <SectionHeader 
          title={["Berdasarkan", "Agama"]}
          description="Kelompok Berdasarkan Agama merupakan penyajian data penduduk menurut agama yang dianut, guna memberikan gambaran komposisi keagamaan masyarakat di suatu wilayah."
          showInfoButton
          icon={Paperclip}
        />

        <div
          ref={scrollRef}
          onScroll={(event) => {
            const element = event.currentTarget;
            updateActiveIndex(element.scrollLeft, element.scrollWidth, element.clientWidth);
          }}
          className="overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max min-w-full snap-x snap-mandatory gap-4 pr-1 sm:gap-4.25">
            {AGAMA_CARDS.map((item, idx) => (
              <AgamaStatCard
                key={`${item.nama}-${idx}`}
                nama={item.nama}
                deskripsi={item.deskripsi}
                jumlah={item.jumlah}
                persentase={item.persentase}
                tema={item.tema}
                icon={item.icon}
                delayMs={120 + idx * 70}
              />
            ))}
          </div>
        </div>

        <div ref={paginationRef} className="flex items-center justify-center gap-2 pt-1" data-active-index={activeIndex}>
          {AGAMA_CARDS.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <span
                key={`agama-pagination-${item.nama}`}
                className={`h-2 rounded-full transition-all duration-300 ease-out ${isActive
                  ? "w-8 bg-[#000418] shadow-[0_0_0_4px_rgba(0,4,24,0.08)]"
                  : "w-2.5 bg-[#000418]/20"
                  }`}
                aria-hidden="true"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
