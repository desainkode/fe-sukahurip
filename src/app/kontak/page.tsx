"use client";

import React from "react";
import { User, Phone, Mail, ArrowRight, MessageSquare } from "lucide-react";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Consistency with Infografis */}
      {/* Hero Section - Consistency with Infografis & Homepage */}
      <section className="relative flex min-h-[90dvh] flex-col overflow-hidden bg-linear-to-b from-[#000E4F] via-[#000E4F] to-[#000418] pt-24 pb-32 text-[#F4F3EE] md:pt-32">
        <div className="hero-float pointer-events-none absolute -right-28 -top-44 h-130 w-130 rounded-full bg-[#001260]/30 blur-[110px]" />
        <div className="hero-float pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#FFC400]/16 blur-[90px] [animation-delay:900ms]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 md:grid md:grid-cols-1 md:items-center md:gap-5 md:px-10 md:py-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,400px)] lg:gap-10">
          <div className="max-w-155 pt-4 md:pt-1">
            <div className="hero-reveal inline-flex items-center rounded-full border border-[#001260] bg-[#000E4F]/55 px-3 py-1">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#FDC200]/70" />
              <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#a2d6f9] md:text-[10px]">
                HUBUNGI KAMI SEKARANG
              </span>
            </div>
            
            <h1
              className="hero-reveal mt-2 max-w-132 text-[34px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[0.052em] [animation-delay:120ms]"
              style={{ fontFamily: 'var(--font-timeless)' }}
            >
              <span className="block text-white">Sampaikan,</span>
              <span className="relative mt-1 block text-[#ffc600]">
                Aspirasi
                <span className="absolute -bottom-1 left-[34%] h-0.75 w-[44%] rounded-full bg-[#FFC400] md:h-1" />
              </span>
              <span className="mt-1 block text-white">Anda Sekarang</span>
            </h1>
            
            <p className="hero-reveal mt-3 max-w-140 text-[10.5px] font-light leading-5 text-[#a2d6f9]/80 sm:text-[11px] md:text-[13px] md:leading-6 [animation-delay:220ms]">
              Kami siap mendengarkan setiap aspirasi, pertanyaan, maupun masukan Anda demi kemajuan Desa Sukahurip yang lebih baik melalui layanan komunikasi terpadu.
            </p>

            {/* Quick Stats Grid - Consistent with Infografis */}
            <div className="hero-reveal mt-6 grid grid-cols-3 gap-2 md:gap-4 [animation-delay:350ms]">
              {[
                { label: 'Respons Cepat', value: '24/7' },
                { label: 'Layanan Aktif', value: '99%' },
                { label: 'Aduan Masuk', value: '1.2k' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col rounded-xl border border-white/5 bg-white/2 p-2.5 backdrop-blur-sm transition-all hover:bg-white/5 md:rounded-2xl md:p-4">
                  <span className="text-[7px] font-bold uppercase tracking-widest text-[#a2d6f9]/50 md:text-[9px]">{stat.label}</span>
                  <span className="mt-0.5 text-base font-black text-white md:mt-1 md:text-2xl">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-reveal relative mx-auto mt-8 w-full max-w-sm [animation-delay:180ms] lg:mt-0 lg:pt-0">
            <div className="absolute -right-2 top-4 h-full w-full rotate-2 rounded-4xl bg-[#001260]/30" />
            <div className="absolute -left-3 -top-2 h-full w-full -rotate-2 rounded-4xl border border-[#00167A]/70" />

            <div className="relative h-64 overflow-hidden rounded-3xl bg-linear-to-b from-[#001260] to-[#000418] shadow-[0_18px_36px_-12px_rgba(0,0,0,0.25)] sm:h-88 md:h-112 md:rounded-4xl">
              <img
                src="/img/hero-kepala-desa.png"
                alt="Kepala Desa"
                className="hero-zoom h-full w-full object-cover"
                loading="eager"
              />

              <div className="hero-pulse absolute bottom-3 left-3 right-3 rounded-2xl border border-white/20 bg-black/35 p-2.5 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] backdrop-blur-[2px] md:bottom-4 md:left-4 md:right-4 md:p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[12px] font-bold leading-5 md:text-sm">
                      Drs. Heri Santoso
                    </p>
                    <p className="mt-1 text-[9px] text-[#a2d6f9] md:text-[11px]">
                      Kepala Desa Sukahurip
                    </p>
                  </div>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC400] text-xs font-bold text-[#000418] md:h-7 md:w-7">
                    &quot;
                  </span>
                </div>
                <p className="mt-1 text-[9px] italic leading-4 text-[#d0e7ff]/80 md:mt-1.5 md:text-[10px]">
                  &quot;Kami melayani dengan sepenuh hati demi kemajuan desa.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section: Form & Image */}
      {/* Main Content Section: Form & Image */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-12 md:py-20 lg:px-16 -mt-12 md:-mt-24 relative z-20">
        <div className="hero-reveal bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-6 md:rounded-[48px] md:p-12 lg:p-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start border border-desa-blue-50/50">
          {/* Form Side */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-8 rounded-full bg-desa-yellow-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-desa-blue-600">HUBUNGI KAMI</span>
              </div>
              <h2 className="text-3xl font-black text-[#000418] md:text-4xl tracking-tight font-timeless">Kirim Pesan <span className="text-desa-blue-600">Langsung</span></h2>
              <p className="text-sm text-neutral-500 font-medium">Tim kami akan merespons pesan Anda dalam waktu maksimal 24 jam kerja.</p>
            </div>

            <form className="flex flex-col gap-5 md:gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#000418]/60 ml-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Heri Santoso"
                    className="w-full bg-neutral-50/50 border border-neutral-200/60 rounded-2xl py-4 px-6 text-neutral-900 text-sm placeholder:text-neutral-400 focus:ring-4 focus:ring-desa-blue-500/10 focus:border-desa-blue-500/30 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#000418]/60 ml-1">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    placeholder="0812 XXXX XXXX"
                    className="w-full bg-neutral-50/50 border border-neutral-200/60 rounded-2xl py-4 px-6 text-neutral-900 text-sm placeholder:text-neutral-400 focus:ring-4 focus:ring-desa-blue-500/10 focus:border-desa-blue-500/30 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#000418]/60 ml-1">Alamat Email</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-neutral-50/50 border border-neutral-200/60 rounded-2xl py-4 px-6 text-neutral-900 text-sm placeholder:text-neutral-400 focus:ring-4 focus:ring-desa-blue-500/10 focus:border-desa-blue-500/30 focus:bg-white transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#000418]/60 ml-1">Pesan / Aspirasi</label>
                <textarea 
                  placeholder="Tuliskan pesan atau masukan Anda di sini..."
                  rows={5}
                  className="w-full bg-neutral-50/50 border border-neutral-200/60 rounded-2xl py-5 px-6 text-neutral-900 text-sm placeholder:text-neutral-400 focus:ring-4 focus:ring-desa-blue-500/10 focus:border-desa-blue-500/30 focus:bg-white transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button className="group mt-2 flex items-center justify-between bg-[#001260] hover:bg-desa-yellow-500 rounded-2xl p-1.5 pr-2 transition-all duration-500 w-full md:w-fit md:gap-12 shadow-xl shadow-desa-blue-900/10 hover:shadow-desa-yellow-500/20 active:scale-95">
                <span className="pl-6 font-black text-white group-hover:text-[#000418] text-base transition-colors uppercase tracking-widest">Kirim Sekarang</span>
                <div className="h-11 w-11 bg-white/10 rounded-xl flex items-center justify-center text-white transition-all group-hover:bg-[#000418]/10 group-hover:text-[#000418]">
                  <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </form>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" 
                alt="Kantor Desa Sukahurip"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#000418]/60 via-transparent to-transparent opacity-60" />
              
              {/* Floating badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-2xl flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Sistem Online</span>
                </div>
              </div>
            </div>
            
            {/* Contact quick info overlay - Redesigned */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-linear-to-br from-[#001260] to-[#000418] p-8 rounded-[40px] text-white shadow-2xl max-w-xs border border-white/10 overflow-hidden group/info">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-3xl transition-all group-hover/info:scale-150" />
              
              <div className="relative z-10">
                <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                  <MessageSquare className="text-desa-yellow-500" />
                </div>
                <h3 className="text-xl font-black mb-3 font-timeless tracking-tight">Butuh Bantuan Cepat?</h3>
                <p className="text-[12px] text-white/60 mb-8 leading-relaxed font-medium">
                  Tim layanan mandiri kami siap membantu Anda setiap hari kerja pukul 08:00 - 16:00 WIB.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group/item">
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center transition-all group-hover/item:bg-desa-yellow-500 group-hover/item:text-[#000418]">
                      <Phone size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Telepon</span>
                      <span className="text-[15px] font-black font-timeless">0813-8944-4493</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group/item">
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center transition-all group-hover/item:bg-desa-yellow-500 group-hover/item:text-[#000418]">
                      <Mail size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email Resmi</span>
                      <span className="text-[15px] font-black font-timeless">desa@sukahurip.id</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
   
