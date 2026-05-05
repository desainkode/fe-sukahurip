import React from "react";
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
  Globe
} from "lucide-react";
import { mockPotensi } from "@/features/potensi/config/mock-data";

export default async function PotensiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = mockPotensi.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-[#000418]">
        <img 
          src={item.image} 
          alt={item.name} 
          className="hero-zoom h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#000418] via-[#000418]/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-[#000418]/40 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
            <Link
              href="/potensi"
              className="hero-reveal mb-10 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-2.5 text-[13px] font-black text-white backdrop-blur-xl border border-white/10 transition-all hover:bg-[#FFC400] hover:text-[#000418] uppercase tracking-widest"
            >
              <ArrowLeft size={18} />
              Kembali ke Potensi
            </Link>
            
            <div className="hero-reveal flex flex-col gap-6 [animation-delay:150ms]">
              <div className="inline-flex w-fit rounded-xl bg-desa-blue-600/80 px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-xl backdrop-blur-md">
                {item.category}
              </div>
              
              <h1 className="max-w-5xl text-[48px] font-black leading-[1.05] text-white sm:text-[64px] lg:text-[80px] tracking-tight font-timeless">
                {item.name}
              </h1>

              <div className="flex flex-wrap items-center gap-8 mt-4 text-[#a2d6f9]/80 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFC400]" />
                  <span>Sektor Unggulan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFC400]" />
                  <span>Potensi Investasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* Main Content */}
          <div className="space-y-16">
            {/* Description Card */}
            <div className="hero-reveal rounded-[48px] bg-white p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] md:p-16 border border-desa-blue-50/50 [animation-delay:300ms]">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1.5 w-10 rounded-full bg-desa-yellow-500" />
                <h2 className="text-2xl md:text-3xl font-black text-desa-blue-950 font-timeless tracking-tight">Eksplorasi Potensi</h2>
              </div>
              <div className="prose prose-blue max-w-none">
                <p className="text-[17px] leading-[1.8] text-desa-blue-900/70 font-medium">
                  {item.longDesc}
                </p>
              </div>
            </div>

            {/* Detailed Table */}
            <div className="hero-reveal rounded-[48px] bg-[#000418] p-10 shadow-2xl md:p-16 overflow-hidden border border-white/5 [animation-delay:450ms]">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-10 rounded-full bg-[#FFC400]" />
                  <h2 className="text-2xl md:text-3xl font-black text-white font-timeless tracking-tight">Data Statistik</h2>
                </div>
                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[#FFC400] border border-white/10">
                  <TrendingUp size={24} />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-6 text-[11px] font-black uppercase tracking-[0.2em] text-[#a2d6f9]/40">Sub Kategori</th>
                      <th className="pb-6 text-[11px] font-black uppercase tracking-[0.2em] text-[#a2d6f9]/40">Kapasitas / Luas</th>
                      <th className="pb-6 text-[11px] font-black uppercase tracking-[0.2em] text-[#a2d6f9]/40">Produksi</th>
                      <th className="pb-6 text-[11px] font-black uppercase tracking-[0.2em] text-[#a2d6f9]/40">Lokasi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {item.details.map((detail, idx) => (
                      <tr key={idx} className="group transition-all hover:bg-white/[0.02]">
                        <td className="py-8">
                          <span className="text-lg font-black text-white font-timeless tracking-tight">{detail.subCategory}</span>
                        </td>
                        <td className="py-8">
                          <span className="text-[15px] font-bold text-[#a2d6f9]/70">{detail.amount}</span>
                        </td>
                        <td className="py-8">
                          <span className="text-[15px] font-bold text-[#FFC400]">{detail.production}</span>
                        </td>
                        <td className="py-8">
                          <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-[12px] font-bold text-white border border-white/10 group-hover:bg-[#FFC400] group-hover:text-[#000418] transition-all">
                            <MapPin size={16} />
                            {detail.location}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Gallery */}
            <div className="hero-reveal space-y-8 [animation-delay:600ms]">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-10 rounded-full bg-desa-yellow-500" />
                <h2 className="text-2xl md:text-3xl font-black text-desa-blue-950 font-timeless tracking-tight">Dokumentasi Visual</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {item.gallery.map((img, idx) => (
                  <div key={idx} className="group aspect-video overflow-hidden rounded-[32px] shadow-lg border border-white relative">
                    <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-desa-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white">
                        <Share2 size={24} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Investment Info */}
            <div className="hero-reveal rounded-[48px] bg-linear-to-br from-[#001260] to-[#000418] p-10 text-white shadow-2xl relative overflow-hidden group border border-white/5 [animation-delay:300ms]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-transform group-hover:scale-150" />
              
              <div className="relative z-10">
                <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/10">
                  <TrendingUp size={28} className="text-[#FFC400]" />
                </div>
                <h3 className="mb-4 text-2xl font-black font-timeless tracking-tight">Peluang Investasi</h3>
                <p className="mb-10 text-[15px] leading-relaxed text-[#a2d6f9]/70 font-medium">
                  {item.investmentInfo}
                </p>
                <a 
                  href="/docs/profil-potensi-desa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#FFC400] py-4.5 text-[14px] font-black text-[#000418] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(255,196,0,0.4)] uppercase tracking-widest"
                >
                  Unduh Proposal
                  <Download size={20} />
                </a>
              </div>
            </div>

            {/* Access Info */}
            <div className="hero-reveal rounded-[48px] bg-white p-10 shadow-xl border border-desa-blue-50/50 [animation-delay:450ms]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-desa-blue-50 text-desa-blue-600">
                <Globe size={28} />
              </div>
              <h3 className="mb-4 text-2xl font-black text-desa-blue-950 font-timeless tracking-tight">Aksesibilitas</h3>
              <p className="text-[15px] leading-relaxed text-desa-blue-900/60 font-medium">
                {item.accessInfo}
              </p>
            </div>

            {/* Support Info */}
            <div className="hero-reveal rounded-[48px] bg-white p-10 shadow-xl border border-desa-blue-50/50 [animation-delay:600ms]">
              <div className="h-14 w-14 bg-desa-yellow-500/10 rounded-2xl flex items-center justify-center mb-8">
                <Info size={28} className="text-desa-yellow-600" />
              </div>
              <h3 className="mb-6 text-2xl font-black text-desa-blue-950 font-timeless tracking-tight">Info Tambahan</h3>
              <ul className="space-y-5">
                {[
                  "Dikelola secara profesional oleh BUMDes",
                  "Potensi Sertifikasi & Standarisasi Halal",
                  "Dukungan Penuh Dana Desa Anggaran 2026",
                  "Kemitraan Terbuka untuk Sektor Swasta"
                ].map((info, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[14px] text-desa-blue-900/60 font-bold">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-desa-yellow-500" />
                    {info}
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
