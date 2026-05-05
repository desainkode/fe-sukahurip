"use client";

import React from "react";
import { PotensiHero } from "@/features/potensi/components/PotensiHero";
import { PotensiList } from "@/features/potensi/components/PotensiList";
import { ArrowRight, Download } from "lucide-react";

export default function PotensiPage() {
  return (
    <main className="min-h-screen bg-[#F6F6F8]">
      <PotensiHero />
      
      <div className="relative z-20 py-12">
        <PotensiList />
      </div>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[48px] bg-linear-to-br from-[#000418] to-[#001260] p-10 text-white shadow-2xl md:p-16 lg:p-24 group">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-desa-blue-600/20 blur-[100px] transition-transform duration-1000 group-hover:scale-150" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-desa-yellow-500/10 blur-[100px] transition-transform duration-1000 group-hover:scale-150" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#FFC400] mr-3 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a2d6f9]">Kemitraan & Investasi</span>
            </div>

            <h2 className="max-w-4xl text-3xl font-black leading-[1.1] sm:text-5xl lg:text-6xl tracking-tight font-timeless">
              Tertarik Berkolaborasi <br /> Mengembangkan <span className="text-[#FFC400]">Potensi Desa?</span>
            </h2>
            
            <p className="mt-8 max-w-2xl text-[14px] md:text-[16px] text-[#a2d6f9]/70 leading-relaxed font-medium">
              Pemerintah Desa Sukahurip membuka peluang kemitraan strategis dan investasi bagi siapa saja yang ingin berkontribusi dalam memajukan ekonomi lokal melalui pemanfaatan potensi desa yang berkelanjutan.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="/kontak"
                className="group/btn relative h-16 w-full sm:w-auto px-12 rounded-2xl bg-[#FFC400] text-[15px] font-black text-[#000418] shadow-[0_15px_30px_-10px_rgba(255,196,0,0.3)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(255,196,0,0.4)] flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-500 group-hover/btn:translate-y-0" />
                <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest">
                  Hubungi Kami
                  <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-1" />
                </span>
              </a>

              <a 
                href="/docs/profil-potensi-desa.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/dl h-16 w-full sm:w-auto px-10 rounded-2xl border border-white/10 bg-white/5 text-[15px] font-black text-white backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 flex items-center justify-center gap-3 uppercase tracking-widest"
              >
                <Download size={20} className="text-[#FFC400] transition-transform group-hover/dl:translate-y-1" />
                Unduh Profil Potensi (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
