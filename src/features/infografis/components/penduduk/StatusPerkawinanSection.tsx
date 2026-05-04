"use client";

import React from "react";
import { HeartHandshake } from "lucide-react";
import { sectionCardClass } from "../section-ui";
import { STATUS_PERKAWINAN_IMAGE, STATUS_PERKAWINAN_CARDS } from "../../config/penduduk-data";
import { StatusPerkawinanStatCard } from "./StatusPerkawinanStatCard";
import { SectionHeader } from "../../../home/components/ui/SectionHeader";

export function StatusPerkawinanSection() {
  return (
    <section className={sectionCardClass + " bg-[#ffffff]"}>
      <div className="flex flex-col gap-7">
        <SectionHeader 
          title={["Berdasarkan", "Status Perkawinan"]}
          description="Kelompok Berdasarkan Status Perkawinan merupakan penyajian data penduduk menurut status perkawinan, seperti belum kawin, kawin, cerai hidup, atau cerai mati, untuk memberikan gambaran kondisi sosial masyarakat di suatu wilayah."
          showInfoButton
          icon={HeartHandshake}
        />

        <div className="relative overflow-hidden rounded-[24px] bg-linear-to-br from-[#072ac8] to-[#1e96fc]">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.88fr)_minmax(0,1.12fr)] lg:items-center">
            <div className="flex min-h-90 items-center justify-center border-b border-white/10 p-4 sm:p-6 lg:min-h-125 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-8">
              <div className="hero-reveal relative aspect-4/5 w-full max-w-90 overflow-hidden rounded-[28px] border border-white/15 bg-black/20 shadow-[0_24px_50px_rgba(0,0,0,0.28)]" style={{ animationDelay: "160ms" }}>
                <img
                  src={STATUS_PERKAWINAN_IMAGE}
                  alt="Ilustrasi status perkawinan"
                  className="h-full w-full object-cover grayscale hero-zoom"
                />

                <div className="absolute inset-x-3 bottom-3 rounded-[14px] border border-white/20 bg-black/35 p-3 shadow-[0_8px_18px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <div>
                      <p className="font-bold text-[#FFFFFF] sm:text-[15px]">
                        Data Perkawinan <span className="text-[#FFC400]">Desa Sukahurip</span>
                      </p>
                      <p className="mt-1 text-[12px] text-[#a2d6f9]">Total presentase kawin dan belum kawin</p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-[#1e96fc]/70 bg-[#1e96fc] px-3 py-1 text-[12px] font-medium text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
                      83%
                    </div>
                  </div>
                  <p className="mt-3 text-[10.5px] italic leading-[1.35] text-[#d0e7ffCC] sm:text-[11px]">
                    Data perkawinan Desa Sukahurip menampilkan persentase penduduk yang berstatus
                    kawin dan belum kawin sebagai gambaran kondisi sosial masyarakat.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-full items-center p-4 sm:p-6 md:p-8 lg:p-9">
              <div className="w-full space-y-4 sm:space-y-5">
                {STATUS_PERKAWINAN_CARDS.map((item, idx) => (
                  <StatusPerkawinanStatCard
                    key={`${item.title}-${idx}`}
                    title={item.title}
                    description={item.description}
                    jumlah={item.jumlah}
                    icon={item.icon}
                    delayMs={140 + idx * 80}
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
