"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Sprout, Store, Mountain } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { mockPotensi } from "../../potensi/config/mock-data";

const categoryMap: Record<string, { icon: any; accent: string }> = {
  "Sumber Daya Alam": { icon: Sprout, accent: "#072ac8" },
  "Ekonomi & UMKM": { icon: Store, accent: "#FFC400" },
  "Wisata": { icon: Mountain, accent: "#072ac8" },
};

export default function PotensiSection() {
  return (
    <section className="bg-white px-6 py-8 md:px-10 md:py-12 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:gap-8">
        <div className="flex items-end justify-between">
          <SectionHeader 
            title={["Potensi Desa", "Sukahurip"]}
            description="Menampilkan sebagian potensi desa seperti pertanian, UMKM, dan daya tarik alam sebagai preview sebelum melihat detail lengkap."
            showInfoButton
          />
        </div>


        <div className="relative -mx-6 overflow-hidden px-6 lg:mx-0 lg:px-0">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:pt-0">
            {mockPotensi.map((item, index) => {
              const { icon: Icon, accent } = categoryMap[item.category] || { icon: Sparkles, accent: "#072ac8" };
              
              return (
                <Link
                  key={item.id}
                  href={`/potensi/${item.slug}`}
                  className="hero-reveal group relative flex h-full min-h-[520px] w-[290px] shrink-0 snap-start flex-col overflow-hidden rounded-[40px] bg-[#040922] p-7 text-left shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[#072ac8]/20 border border-white/5 md:w-[350px] lg:w-full"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  {/* Background Accent */}
                  <div 
                    className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-10 blur-[100px] transition-opacity group-hover:opacity-25"
                    style={{ backgroundColor: accent }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white/80 transition-all group-hover:bg-[#FFC400] group-hover:text-[#040922]">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ffc600]/50 group-hover:text-[#ffc600] transition-colors">
                        {item.category}
                      </span>
                    </div>

                    <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-white/5 shadow-inner">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#040922]/60 via-transparent to-transparent opacity-60" />
                    </div>

                    <h3 className="font-timeless text-[22px] font-bold leading-tight text-white md:text-[26px]">
                      {item.name}
                    </h3>

                    <p className="mt-4 text-[14px] leading-relaxed text-[#d0e7ff]/40 line-clamp-2">
                      {item.shortDesc}
                    </p>

                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Detail</span>
                        <span className="text-[13px] font-black uppercase tracking-tight text-[#ffc600]">Eksplorasi</span>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-[#FFC400] border border-white/10 transition-all group-hover:bg-[#FFC400] group-hover:text-[#040922] group-hover:rotate-45">
                        <ArrowRight size={20} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          
          {/* Extra Spacer for mobile scroll-end */}
          <div className="w-12 shrink-0 lg:hidden" />
        </div>
      </div>

        <div className="flex justify-center pt-2">
          <Link
            href="/potensi"
            className="group inline-flex items-center gap-3 rounded-2xl border border-[#040922]/10 bg-[#F4F3EE] px-10 py-4 text-[15px] font-black text-[#040922] transition-all hover:bg-[#040922] hover:text-[#ffc600] hover:shadow-xl active:scale-95"
          >
            Lihat Potensi Lainnya
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
