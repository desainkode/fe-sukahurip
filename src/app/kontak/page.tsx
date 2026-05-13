"use client";

import React from "react";
import { Phone, Mail, ArrowRight, MessageSquare, MapPin, Clock, ShieldCheck, Landmark, Headphones, Send } from "lucide-react";
import { SectionHeader } from "@/features/home/components/ui/SectionHeader";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-[#F4F7FF]">
      {/* Hero Section - Immersive & Premium */}
      <section className="relative flex overflow-hidden bg-linear-to-b from-[#000E4F] via-[#000E4F] to-[#000418] pt-32 pb-48 text-[#F4F3EE] md:pt-44 md:pb-64">
        {/* Animated Background Gradients */}
        <div className="hero-float pointer-events-none absolute -right-32 -top-44 h-140 w-140 rounded-full bg-[#072ac8]/25 blur-[120px]" />
        <div className="hero-float pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#FFC400]/15 blur-[100px] [animation-delay:1200ms]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-10">
          <div className="max-w-3xl">
            <div className="hero-reveal inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#FFC400] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#a2d6f9]">
                Pusat Bantuan Desa
              </span>
            </div>
            
            <h1
              className="hero-reveal mt-8 text-[44px] font-black leading-[1.05] tracking-tight sm:text-[64px] md:text-[82px]"
              style={{ fontFamily: 'var(--font-timeless)' }}
            >
              <span className="block text-white">Hubungi Kami,</span>
              <span className="block text-[#FFC400]">Wujudkan Aspirasi.</span>
            </h1>
            
            <p className="hero-reveal mt-8 max-w-2xl text-base font-medium leading-relaxed text-[#a2d6f9]/80 md:text-xl">
              Kami berkomitmen memberikan layanan informasi yang transparan dan responsif bagi seluruh warga Desa Sukahurip.
            </p>

            <div className="hero-reveal mt-12 grid grid-cols-2 gap-4 lg:w-fit">
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-6 py-5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC400] text-[#000E4F] shadow-lg shadow-[#FFC400]/20">
                  <ShieldCheck size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#a2d6f9]/60">Data Warga</p>
                  <p className="font-timeless text-base font-black text-white">100% Aman</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-6 py-5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#072ac8] text-white shadow-lg shadow-[#072ac8]/20">
                  <Clock size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#a2d6f9]/60">Waktu Respons</p>
                  <p className="font-timeless text-base font-black text-white">Cepat & Tepat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-20 mx-auto -mt-36 max-w-7xl px-4 pb-20 md:-mt-52 md:px-10 lg:pb-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left: Contact Form */}
          <div className="hero-reveal lg:col-span-8" style={{ animationDelay: '200ms' }}>
            <div className="overflow-hidden rounded-[40px] bg-white shadow-[0_40px_80px_-20px_rgba(0,4,24,0.12)] border border-white">
              <div className="p-8 md:p-14">
                <SectionHeader 
                  title={["Sampaikan Pesan", "& Aspirasi Anda"]}
                  description="Formulir ini adalah kanal resmi untuk menyampaikan pertanyaan, saran, atau aspirasi langsung kepada Pemerintah Desa Sukahurip."
                  icon={MessageSquare}
                  showInfoButton
                />
                
                <form className="mt-12 space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                      <label className="ml-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#000418]/40">Nama Lengkap</label>
                      <input 
                        type="text" 
                        placeholder="Contoh: Heri Santoso"
                        className="w-full rounded-2xl border border-neutral-100 bg-neutral-50/50 px-6 py-4 text-sm font-bold text-[#000418] outline-none transition-all placeholder:text-neutral-400 focus:border-[#072ac8]/40 focus:bg-white focus:ring-8 focus:ring-[#072ac8]/5"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="ml-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#000418]/40">WhatsApp / HP</label>
                      <input 
                        type="tel" 
                        placeholder="0812 XXXX XXXX"
                        className="w-full rounded-2xl border border-neutral-100 bg-neutral-50/50 px-6 py-4 text-sm font-bold text-[#000418] outline-none transition-all placeholder:text-neutral-400 focus:border-[#072ac8]/40 focus:bg-white focus:ring-8 focus:ring-[#072ac8]/5"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="ml-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#000418]/40">Alamat Email (Opsional)</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      className="w-full rounded-2xl border border-neutral-100 bg-neutral-50/50 px-6 py-4 text-sm font-bold text-[#000418] outline-none transition-all placeholder:text-neutral-400 focus:border-[#072ac8]/40 focus:bg-white focus:ring-8 focus:ring-[#072ac8]/5"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="ml-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#000418]/40">Subjek Pesan</label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-2xl border border-neutral-100 bg-neutral-50/50 px-6 py-4 text-sm font-bold text-[#000418] outline-none transition-all focus:border-[#072ac8]/40 focus:bg-white focus:ring-8 focus:ring-[#072ac8]/5">
                        <option>Pertanyaan Layanan Publik</option>
                        <option>Aspirasi Pembangunan Desa</option>
                        <option>Laporan / Aduan Masyarakat</option>
                        <option>Lainnya</option>
                      </select>
                      <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-[#072ac8]">
                        <ArrowRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="ml-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#000418]/40">Detail Pesan / Aspirasi</label>
                    <textarea 
                      placeholder="Tuliskan detail aspirasi atau pertanyaan Anda di sini secara lengkap..."
                      rows={6}
                      className="w-full resize-none rounded-3xl border border-neutral-100 bg-neutral-50/50 px-6 py-5 text-sm font-bold text-[#000418] outline-none transition-all placeholder:text-neutral-400 focus:border-[#072ac8]/40 focus:bg-white focus:ring-8 focus:ring-[#072ac8]/5"
                    />
                  </div>

                  <button className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-[#072ac8] p-1.5 shadow-2xl shadow-[#072ac8]/20 transition-all hover:bg-[#000E4F] md:w-fit md:gap-20">
                    <span className="pl-8 text-[13px] font-black uppercase tracking-[0.25em] text-white">Kirim Aspirasi</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white transition-all group-hover:rotate-[-45deg] group-hover:bg-[#FFC400] group-hover:text-[#000E4F]">
                      <Send size={20} strokeWidth={2.5} />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right: Info Sidebar */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            
            {/* Direct Contact Card - Redesigned with Gradient */}
            <div className="hero-reveal group overflow-hidden rounded-[32px] bg-linear-to-br from-[#000E4F] to-[#000418] p-8 text-white shadow-2xl" style={{ animationDelay: '400ms' }}>
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
                  <Headphones className="text-[#FFC400]" size={28} />
                </div>
                <h4 className="font-timeless text-2xl font-black tracking-tight">Hubungi Kami</h4>
                <p className="mt-2 text-xs font-medium text-white/50 leading-relaxed">
                  Tim sekretariat desa siap membantu Anda pada jam kerja operasional.
                </p>

                <div className="mt-10 space-y-5">
                  <a href="tel:081389444493" className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 border border-white/5 transition-all hover:bg-white/10 hover:border-white/10">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFC400] text-[#000E4F]">
                      <Phone size={20} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/40">WhatsApp Center</span>
                      <span className="font-timeless text-lg font-bold">0813-8944-4493</span>
                    </div>
                  </a>
                  <a href="mailto:desa@sukahurip.id" className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 border border-white/5 transition-all hover:bg-white/10 hover:border-white/10">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#072ac8] text-white">
                      <Mail size={20} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Email Resmi</span>
                      <span className="font-timeless text-lg font-bold">desa@sukahurip.id</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#072ac8]/20 blur-3xl" />
            </div>

            {/* Location Card with Map Overlay */}
            <div className="hero-reveal overflow-hidden rounded-[32px] bg-white shadow-xl border border-[#072ac8]/5" style={{ animationDelay: '500ms' }}>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#072ac8]/10 text-[#072ac8]">
                    <MapPin size={20} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-timeless text-xl font-black text-[#000418]">Kantor Desa</h4>
                </div>
                <p className="text-sm font-medium text-[#000418]/60 leading-relaxed">
                  Jl. Raya Desa Sukahurip No. 12, Bekasi, Jawa Barat 17610.
                </p>
              </div>
              <div className="aspect-[4/3] w-full bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15867.756285863952!2d107.16432615!3d-6.13885235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a629b3b89069d%3A0x67399f187a41490!2sSukahurip%2C%20Kec.%20Sukatani%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1715606400000!5m2!1sid!2sid"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
                />
              </div>
            </div>

            {/* CTA Card: Layanan Mandiri */}
            <div className="hero-reveal group relative overflow-hidden rounded-[32px] bg-[#FFC400] p-8 shadow-2xl" style={{ animationDelay: '600ms' }}>
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#000E4F] text-[#FFC400]">
                  <Landmark size={28} />
                </div>
                <h4 className="font-timeless text-2xl font-black text-[#000E4F]">Layanan Mandiri</h4>
                <p className="mt-3 text-sm font-bold text-[#000E4F]/70 leading-relaxed">
                  Butuh layanan administrasi cepat? Gunakan platform digital kami.
                </p>
                <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#000E4F] py-4 text-[11px] font-black uppercase tracking-widest text-white shadow-xl transition-all hover:bg-[#072ac8] active:scale-95">
                  Buka Platform
                  <ArrowRight size={16} strokeWidth={3} />
                </button>
              </div>
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-white/20 blur-2xl transition-all group-hover:scale-150" />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}


   
