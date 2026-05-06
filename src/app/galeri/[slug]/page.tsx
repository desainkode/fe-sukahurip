"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Users, 
  Target,
  Info,
  Play,
  Image as ImageIcon,
  Share2,
  Camera,
  ChevronLeft
} from "lucide-react";
import { mockGallery } from "@/features/galeri/config/mock-data";

export default function GaleriDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const item = mockGallery.find((g) => g.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-24">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden sm:h-[70vh] sm:min-h-[600px]">
        <img 
          src={item.image} 
          alt={item.title} 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#040922] via-[#040922]/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 sm:pb-24">
            {/* Back Button - Integrated into Hero */}
            <Link
              href="/galeri"
              className="group mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[12px] font-black uppercase tracking-widest text-white backdrop-blur-xl border border-white/10 transition-all hover:bg-[#FFC400] hover:text-[#040922] hover:border-[#FFC400] sm:mb-12 sm:px-6 sm:py-3 sm:text-[13px]"
            >
              <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              Kembali ke Galeri
            </Link>

            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFC400] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#040922] shadow-xl sm:px-5 sm:py-2 sm:text-[11px]">
                <Camera size={14} />
                {item.category}
              </div>
              
              <h1 className="max-w-4xl font-timeless text-[36px] font-black leading-[1.1] tracking-tight text-white sm:text-[56px] lg:text-[80px]">
                {item.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto -mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 sm:-mt-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Story Card */}
            <div className="rounded-[32px] sm:rounded-[48px] border border-white bg-white p-6 shadow-2xl shadow-black/[0.03] md:p-12">
              <div className="mb-8 flex flex-wrap gap-6 border-b border-neutral-100 pb-8 sm:mb-10 sm:gap-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-50 text-[#072ac8] shadow-inner">
                    <Calendar size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-300">Waktu Pelaksanaan</p>
                    <p className="font-timeless text-[17px] font-bold text-[#040922]">{item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-50 text-[#072ac8] shadow-inner">
                    <MapPin size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-300">Lokasi Kegiatan</p>
                    <p className="font-timeless text-[17px] font-bold text-[#040922]">{item.location}</p>
                  </div>
                </div>
              </div>

              <h2 className="mb-6 font-timeless text-2xl font-black text-[#040922] sm:text-3xl">Tentang Kegiatan</h2>
              <div className="prose prose-lg max-w-none text-[16px] leading-[1.8] text-[#040922]/70 sm:text-[18px]">
                <p className="whitespace-pre-line">{item.longDesc}</p>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="rounded-[32px] sm:rounded-[48px] border border-white bg-white p-6 shadow-2xl shadow-black/[0.03] md:p-12">
              <div className="mb-8 flex items-center justify-between sm:mb-10">
                <div>
                  <h2 className="font-timeless text-2xl font-black text-[#040922] sm:text-3xl">Koleksi Dokumentasi</h2>
                  <p className="mt-1 text-[13px] font-medium text-neutral-400">Momen berharga yang berhasil diabadikan</p>
                </div>
                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-[#072ac8]/5 text-[#072ac8] font-bold text-[13px]">
                  {item.photos.length}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                {item.photos.map((img, idx) => (
                  <div key={idx} className="group relative aspect-video overflow-hidden rounded-3xl bg-neutral-100 shadow-lg">
                    <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Highlights Card */}
            <div className="rounded-[32px] sm:rounded-[40px] bg-[#040922] p-8 text-white shadow-2xl sm:p-10">
              <h3 className="mb-8 font-timeless text-xl font-black tracking-tight">Informasi Detil</h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-[#072ac8] shadow-inner border border-white/5">
                    <Users size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.15em] text-white/30 mb-1.5">Peserta Terlibat</p>
                    <p className="text-[15px] font-bold leading-relaxed font-timeless text-white/90">{item.participants}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-[#FFC400] shadow-inner border border-white/5">
                    <Target size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.15em] text-white/30 mb-1.5">Tujuan Utama</p>
                    <p className="text-[15px] font-bold leading-relaxed font-timeless text-white/90">{item.objective}</p>
                  </div>
                </div>
              </div>

              <button className="group mt-12 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#072ac8] py-5 text-[14px] font-black uppercase tracking-widest text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-[#FFC400] hover:text-[#040922]">
                <Share2 size={20} className="transition-transform group-hover:rotate-12" />
                Bagikan Momen
              </button>
            </div>

            {/* Help Widget */}
            <div className="rounded-[32px] sm:rounded-[40px] border border-white bg-white p-8 shadow-2xl shadow-black/[0.03] sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50 text-[#040922] shadow-inner border border-neutral-100">
                <Info size={28} strokeWidth={2.5} />
              </div>
              <h3 className="mb-4 font-timeless text-xl font-black text-[#040922]">Layanan Dokumentasi</h3>
              <p className="text-[14px] leading-[1.6] text-[#040922]/60 font-medium">
                Butuh dokumentasi kegiatan ini dalam resolusi tinggi untuk keperluan publikasi resmi? Hubungi bagian sekretariat desa.
              </p>
              <Link href="/kontak" className="group mt-8 inline-flex items-center gap-2 text-[14px] font-black uppercase tracking-widest text-[#072ac8] hover:text-[#040922] transition-colors">
                Hubungi Kami
                <ArrowLeft size={16} className="rotate-180 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
