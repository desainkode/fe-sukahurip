"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  TrendingUp, 
  Download, 
  Share2, 
  Info,
  ChevronRight,
  Globe,
  ChevronLeft,
  Camera
} from "lucide-react";
import { mockPotensi } from "@/features/potensi/config/mock-data";

export default function PotensiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const item = mockPotensi.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#F8F9FA] pb-24">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-[#000418] sm:h-[70vh] sm:min-h-[600px]">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-full w-full object-cover opacity-70"
        />
        {/* Premium Gradients */}
        <div className="absolute inset-0 bg-linear-to-t from-[#040922] via-[#040922]/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-10 lg:px-12 sm:pb-24">
            {/* Back Button - Integrated into Hero */}
            <Link
              href="/potensi"
              className="group mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-white backdrop-blur-xl border border-white/10 transition-all hover:bg-[#FFC400] hover:text-[#040922] hover:border-[#FFC400] sm:mb-12 sm:px-6 sm:py-3 sm:text-[13px]"
            >
              <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1 sm:size-20" />
              Kembali ke Potensi
            </Link>

            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-[#072ac8] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl sm:px-5 sm:py-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#FFC400] animate-pulse" />
                {item.category}
              </div>
              
              <h1 className="max-w-full font-timeless text-[32px] font-black leading-[1.1] tracking-tight text-white [overflow-wrap:anywhere] sm:text-[60px] lg:text-[80px]">
                {item.name}
              </h1>

              <div className="flex flex-wrap items-center gap-5 mt-2 text-white/50 text-[10px] font-black uppercase tracking-[0.2em] sm:gap-8 sm:text-[11px]">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#FFC400]" />
                  <span>Sektor Unggulan</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#FFC400]" />
                  <span>Potensi Investasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="mx-auto w-full max-w-7xl px-5 pt-12 sm:px-10 lg:px-12 relative overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
          
          {/* Main Content Area */}
          <div className="flex flex-col gap-12 sm:gap-16 max-w-full overflow-hidden">
            
            {/* Eksplorasi Potensi */}
            <div className="rounded-3xl sm:rounded-[40px] bg-white p-7 shadow-2xl shadow-black/[0.03] sm:p-10 md:p-12 border border-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1.5 w-10 rounded-full bg-[#FFC400]" />
                <h2 className="font-timeless text-2xl font-black text-[#040922] sm:text-3xl [overflow-wrap:anywhere]">Eksplorasi Potensi</h2>
              </div>
              <div className="prose prose-neutral max-w-none text-[16px] leading-[1.8] text-[#040922]/70 font-medium sm:text-[17px]">
                <p className="whitespace-pre-line break-words">{item.longDesc}</p>
              </div>
            </div>

            {/* Data Statistik */}
            <div className="rounded-3xl sm:rounded-[40px] bg-[#040922] p-7 shadow-2xl sm:p-10 md:p-12 border border-white/5">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="h-1.5 w-10 rounded-full bg-[#FFC400]" />
                  <h2 className="font-timeless text-2xl font-black text-white sm:text-3xl [overflow-wrap:anywhere]">Data Statistik</h2>
                </div>
                <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-[#FFC400] border border-white/10 shadow-inner">
                  <TrendingUp size={28} strokeWidth={2.5} />
                </div>
              </div>

              <div className="w-full overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative">
                <table className="w-full text-left min-w-[550px] table-fixed sm:table-auto">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 w-1/3">Sub Kategori</th>
                      <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 w-1/4">Kapasitas</th>
                      <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 w-1/4">Produksi</th>
                      <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 text-right w-1/4">Lokasi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {item.details.map((detail, idx) => (
                      <tr key={idx} className="group transition-all hover:bg-white/[0.02]">
                        <td className="py-6 sm:py-8 pr-4">
                          <span className="font-timeless text-base font-black text-white tracking-tight block break-words">{detail.subCategory}</span>
                        </td>
                        <td className="py-6 sm:py-8 px-4">
                          <span className="text-[14px] font-bold text-white/70 block whitespace-nowrap">{detail.amount}</span>
                        </td>
                        <td className="py-6 sm:py-8 px-4">
                          <span className="text-[14px] font-black text-[#FFC400] uppercase tracking-widest block whitespace-nowrap">{detail.production}</span>
                        </td>
                        <td className="py-6 sm:py-8 pl-4 text-right">
                          <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 text-[11px] font-bold text-white border border-white/10 transition-all group-hover:bg-[#FFC400] group-hover:text-[#040922] sm:px-4 sm:py-2 sm:text-[12px] whitespace-nowrap">
                            <MapPin size={14} strokeWidth={2.5} />
                            {detail.location}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dokumentasi Visual */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 px-2">
                <div className="h-1.5 w-10 rounded-full bg-[#FFC400]" />
                <h2 className="font-timeless text-2xl font-black text-[#040922] sm:text-3xl [overflow-wrap:anywhere]">Dokumentasi Visual</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                {item.gallery.map((img, idx) => (
                  <div key={idx} className="group aspect-video overflow-hidden rounded-[28px] sm:rounded-[36px] bg-neutral-100 shadow-xl border border-white relative">
                    <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white transform scale-50 group-hover:scale-100 transition-transform">
                        <Camera size={24} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="flex flex-col gap-10 max-w-full overflow-hidden">
            
            {/* Peluang Investasi */}
            <div className="rounded-3xl sm:rounded-[40px] bg-linear-to-br from-[#040922] to-[#000418] p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden group border border-white/5">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-transform group-hover:scale-150" />
              
              <div className="relative z-10 text-center">
                <div className="mx-auto h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/10">
                  <TrendingUp size={28} className="text-[#FFC400]" strokeWidth={2.5} />
                </div>
                <h3 className="mb-4 font-timeless text-2xl font-black tracking-tight [overflow-wrap:anywhere]">Peluang Investasi</h3>
                <p className="mb-10 text-[14px] leading-relaxed text-white/50 font-medium">
                  {item.investmentInfo}
                </p>
                <a 
                  href="/docs/profil-potensi-desa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#FFC400] py-5 text-[12px] font-black text-[#040922] shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(255,196,0,0.4)] uppercase tracking-[0.2em]"
                >
                  UNDUH PROPOSAL
                  <Download size={20} strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Aksesibilitas */}
            <div className="rounded-3xl sm:rounded-[40px] border border-white bg-white p-8 sm:p-10 shadow-2xl shadow-black/[0.03]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50 text-[#072ac8] shadow-inner border border-neutral-100">
                <Globe size={28} strokeWidth={2.5} />
              </div>
              <h3 className="mb-4 font-timeless text-xl font-black text-[#040922] [overflow-wrap:anywhere]">Aksesibilitas</h3>
              <p className="text-[14px] leading-[1.6] text-[#040922]/60 font-medium">
                {item.accessInfo}
              </p>
            </div>

            {/* Info Tambahan */}
            <div className="rounded-3xl sm:rounded-[40px] border border-white bg-white p-8 sm:p-10 shadow-2xl shadow-black/[0.03]">
              <div className="h-14 w-14 bg-neutral-50 rounded-2xl flex items-center justify-center mb-8 border border-neutral-100 shadow-inner">
                <Info size={28} className="text-[#040922]" strokeWidth={2.5} />
              </div>
              <h3 className="mb-6 font-timeless text-xl font-black text-[#040922] [overflow-wrap:anywhere]">Info Tambahan</h3>
              <ul className="space-y-5">
                {[
                  "Dikelola profesional oleh BUMDes",
                  "Potensi Sertifikasi Halal",
                  "Dukungan Penuh Dana Desa",
                  "Kemitraan Terbuka Swasta"
                ].map((info, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px] text-[#040922]/60 font-bold uppercase tracking-tight">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FFC400]" />
                    <span className="[overflow-wrap:anywhere]">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
