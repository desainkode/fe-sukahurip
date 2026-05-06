"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Bookmark,
  Globe,
  Link as LinkIcon,
  Mail,
  ChevronLeft
} from "lucide-react";
import { mockNews } from "@/features/berita/config/mock-data";
import { CommentSection } from "@/features/berita/components/CommentSection";

export default function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const news = mockNews.find((item) => item.slug === slug);

  if (!news) {
    notFound();
  }

  const relatedNews = mockNews.filter((item) => item.id !== news.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-24">
      {/* Article Header & Hero */}
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-[#000418] sm:h-[70vh] sm:min-h-[600px]">
        <img 
          src={news.image} 
          alt={news.title} 
          className="h-full w-full object-cover opacity-60"
        />
        {/* Premium Gradients */}
        <div className="absolute inset-0 bg-linear-to-t from-[#040922] via-[#040922]/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 sm:pb-24">
            {/* Back Button - Integrated into Hero */}
            <Link
              href="/berita"
              className="group mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[12px] font-black uppercase tracking-widest text-white backdrop-blur-xl border border-white/10 transition-all hover:bg-[#FFC400] hover:text-[#040922] hover:border-[#FFC400] sm:mb-12 sm:px-6 sm:py-3 sm:text-[13px]"
            >
              <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              Kembali ke Berita
            </Link>

            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-[#072ac8] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl sm:px-5 sm:py-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#FFC400] animate-pulse" />
                {news.category.name}
              </div>
              
              <h1 className="max-w-4xl font-timeless text-[32px] font-black leading-[1.1] tracking-tight text-white sm:text-[56px] lg:text-[72px]">
                {news.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[11px] font-black uppercase tracking-[0.15em] text-white/50 sm:text-[12px]">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#FFC400]" />
                  <span>{news.publishedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#FFC400]" />
                  <span>{news.readingTime} MENIT BACA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:px-8 -mt-12 md:-mt-16 relative z-20">
        {/* Main Content Area */}
        <div className="flex-1 lg:max-w-3xl">
          <article className="rounded-[32px] sm:rounded-[48px] bg-white p-6 sm:p-10 md:p-12 lg:p-16 shadow-2xl shadow-black/[0.03] border border-white">
            {/* Author Meta Card */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-6 bg-neutral-50/50 p-6 rounded-[24px] border border-neutral-100">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-2xl border-2 border-white shadow-lg">
                  <img src={news.author.avatar} alt={news.author.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#072ac8]">Redaktur Berita</p>
                  <p className="font-timeless text-lg font-black text-[#040922] leading-tight mt-0.5">{news.author.name}</p>
                </div>
              </div>
              
              <div className="flex gap-2.5">
                {[Globe, Share2, LinkIcon].map((Icon, idx) => (
                  <button key={idx} className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#072ac8] shadow-sm border border-neutral-100 transition-all hover:bg-[#072ac8] hover:text-white hover:-translate-y-1">
                    <Icon size={16} strokeWidth={2.5} />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="prose prose-neutral max-w-none text-[17px] leading-[1.8] text-[#040922]/70 font-medium prose-headings:font-timeless prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#040922] prose-strong:text-[#040922] prose-p:mb-8">
              {/* Premium Excerpt Section */}
              <div className="relative pl-8 mb-12 py-2">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-full bg-[#FFC400]" />
                <div className="text-xl sm:text-2xl font-black leading-relaxed text-[#040922] font-timeless tracking-tight">
                  {news.excerpt}
                </div>
              </div>
              
              <div className="whitespace-pre-line">
                {news.content}
              </div>
            </div>

            {/* Save & Actions */}
            <div className="mt-16 flex flex-col gap-6 border-t border-neutral-100 pt-12 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-neutral-100 overflow-hidden shadow-md">
                      <img src={`https://i.pravatar.cc/150?u=${i + news.id}`} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[12px] font-bold text-[#040922]/40 uppercase tracking-widest">1.2k+ Pembaca</span>
              </div>
              
              <button className="flex items-center gap-3 rounded-2xl bg-[#040922] px-6 py-4 text-[12px] font-black text-white transition-all hover:bg-[#FFC400] hover:text-[#040922] uppercase tracking-widest group shadow-xl hover:-translate-y-1">
                <Bookmark size={16} strokeWidth={2.5} className="transition-transform group-hover:scale-110" />
                Simpan Artikel
              </button>
            </div>

            {/* Comments Section */}
            <div className="mt-16">
              <CommentSection />
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="w-full shrink-0 space-y-10 lg:w-[340px]">
          {/* Related News */}
          <div className="sticky top-28 space-y-8">
            <div className="px-2">
              <div className="h-1.5 w-10 rounded-full bg-[#FFC400] mb-3" />
              <h3 className="font-timeless text-2xl font-black text-[#040922] tracking-tight">Kabar Terkait</h3>
            </div>
            
            <div className="flex flex-col gap-6">
              {relatedNews.map((item, index) => (
                <Link key={item.id} href={`/berita/${item.slug}`} className="group flex items-center gap-5 rounded-[28px] border border-white bg-white p-4 shadow-xl shadow-black/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#072ac8]/10">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-neutral-50 shadow-inner">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col gap-1.5 pr-2">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#072ac8] leading-none">{item.category.name}</span>
                    <h4 className="line-clamp-2 font-timeless text-[14px] font-bold leading-tight text-[#040922] group-hover:text-[#072ac8] transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] font-black text-neutral-300 uppercase tracking-widest">
                      <Calendar size={12} strokeWidth={2.5} />
                      {item.publishedAt}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter Premium */}
            <div className="overflow-hidden rounded-[40px] bg-linear-to-br from-[#040922] to-[#000418] p-10 text-white shadow-2xl relative group border border-white/5">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-3xl transition-transform duration-1000 group-hover:scale-150" />
              
              <div className="relative z-10 text-center">
                <div className="mx-auto h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
                  <Mail size={28} className="text-[#FFC400]" strokeWidth={2} />
                </div>
                <h3 className="font-timeless text-2xl font-black tracking-tight">Warta Sukahurip</h3>
                <p className="mt-3 text-[13px] text-white/50 leading-relaxed font-medium">
                  Berlangganan info desa mingguan langsung ke email Anda.
                </p>
                <form className="mt-10 space-y-3">
                  <input
                    type="email"
                    placeholder="Alamat Email"
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 text-[14px] text-white outline-none focus:bg-white/10 focus:border-[#FFC400]/30 transition-all placeholder:text-white/20 font-bold"
                  />
                  <button className="w-full h-14 rounded-2xl bg-[#FFC400] text-[12px] font-black text-[#040922] uppercase tracking-[0.2em] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 active:scale-95">
                    GABUNG SEKARANG
                  </button>
                </form>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
