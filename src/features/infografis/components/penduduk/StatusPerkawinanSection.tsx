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
            <div className="flex min-h-72 items-center justify-center border-b border-white/10 p-4 sm:p-6 lg:min-h-125 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-8">
              <div className="hero-reveal relative aspect-4/5 w-full max-w-90 overflow-hidden rounded-[24px] border border-white/15 bg-black/20 shadow-[0_24px_50px_rgba(0,0,0,0.28)] sm:rounded-[28px]" style={{ animationDelay: "160ms" }}>
                <img
                  src={STATUS_PERKAWINAN_IMAGE}
                  alt="Ilustrasi status perkawinan"
                  className="h-full w-full object-cover grayscale hero-zoom"
                />

                <div className="absolute inset-x-2.5 bottom-2.5 rounded-[16px] border border-white/20 bg-black/40 p-3 shadow-[0_8px_18px_rgba(0,0,0,0.2)] backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-5">
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div>
                      <p className="text-[13px] font-bold text-[#FFFFFF] sm:text-[16px]">
                        Data Perkawinan <span className="text-[#FFC400]">Desa Sukahurip</span>
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#a2d6f9] sm:text-[12px]">Total presentase kawin dan belum kawin</p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-[#1e96fc]/70 bg-[#1e96fc] px-2.5 py-1 text-[10px] font-bold text-white sm:self-center sm:px-3.5 sm:text-[12px]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FFC400]" />
                      83%
                    </div>
                  </div>
                  <p className="mt-2.5 hidden text-[10px] italic leading-relaxed text-white/70 sm:block sm:text-[11px]">
                    Data perkawinan Desa Sukahurip menampilkan persentase penduduk yang berstatus
                    kawin dan belum kawin sebagai gambaran kondisi sosial masyarakat.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-full items-center p-4 sm:p-8 lg:p-9">
              <div className="w-full space-y-3.5 sm:space-y-5">
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
