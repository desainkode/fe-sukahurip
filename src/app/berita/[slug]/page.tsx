import React from "react";
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
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { mockNews } from "@/features/berita/config/mock-data";
import { CommentSection } from "@/features/berita/components/CommentSection";
import { NewsCard } from "@/features/berita/components/NewsCard";

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = mockNews.find((item) => item.slug === slug);

  if (!news) {
    notFound();
  }

  const relatedNews = mockNews.filter((item) => item.id !== news.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Article Header & Hero */}
      <section className="relative h-[55vh] min-h-[450px] w-full overflow-hidden bg-[#000418]">
        <img 
          src={news.image} 
          alt={news.title} 
          className="hero-zoom h-full w-full object-cover opacity-70"
        />
        {/* Advanced Gradient & Spotlight */}
        <div className="absolute inset-0 bg-radial-at-t from-desa-blue-600/20 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-linear-to-t from-[#000418] via-[#000418]/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-[#000418]/40 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <Link
              href="/berita"
              className="hero-reveal mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-[12px] font-black text-white backdrop-blur-xl border border-white/10 transition-all hover:bg-[#FFC400] hover:text-[#000418] uppercase tracking-widest"
            >
              <ArrowLeft size={16} />
              Kembali
            </Link>
            
            <div className="hero-reveal flex flex-col gap-4 [animation-delay:150ms]">
              <div className="inline-flex w-fit items-center gap-2 rounded-lg bg-desa-blue-600 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl">
                <div className="h-1 w-1 rounded-full bg-desa-yellow-500 animate-pulse" />
                {news.category.name}
              </div>
              
              <h1 className="max-w-4xl text-[32px] font-black leading-[1.1] text-white sm:text-[48px] lg:text-[56px] tracking-tight font-timeless">
                {news.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mt-2 text-[#a2d6f9]/80 text-[11px] font-bold uppercase tracking-[0.1em]">
                <div className="flex items-center gap-2 group">
                  <Calendar size={14} className="text-desa-yellow-500" />
                  <span>{news.publishedAt}</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Clock size={14} className="text-desa-yellow-500" />
                  <span>{news.readingTime} Menit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:px-8 -mt-16 md:-mt-20 relative z-20">
        {/* Main Content Area */}
        <div className="flex-1 lg:max-w-3xl">
          <article className="hero-reveal rounded-[32px] sm:rounded-[40px] bg-white p-6 sm:p-10 md:p-12 lg:p-16 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] border border-desa-blue-50/50 [animation-delay:300ms]">
            {/* Author Meta Card */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-6 bg-desa-blue-50/20 p-5 rounded-[20px] border border-desa-blue-50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-[14px] border-2 border-white shadow-md">
                  <img src={news.author.avatar} alt={news.author.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-desa-blue-600">Diterbitkan Oleh</p>
                  <p className="text-base font-black text-desa-blue-950 font-timeless tracking-tight leading-tight">{news.author.name}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                {[Globe, Share2, LinkIcon].map((Icon, idx) => (
                  <button key={idx} className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-desa-blue-600 shadow-sm border border-desa-blue-50 transition-all hover:bg-desa-blue-600 hover:text-white">
                    <Icon size={14} />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="prose prose-blue max-w-none text-[16px] sm:text-[17px] leading-[1.8] text-desa-blue-900/70 font-medium prose-headings:font-timeless prose-headings:font-black prose-headings:tracking-tight prose-headings:text-desa-blue-950 prose-strong:text-desa-blue-950 prose-p:mb-6">
              {/* Premium Excerpt Section */}
              <div className="relative pl-6 mb-10 py-2">
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-desa-yellow-500" />
                <div className="text-lg sm:text-xl font-black leading-relaxed text-desa-blue-950 font-timeless tracking-tight">
                  {news.excerpt}
                </div>
              </div>
              
              <div className="prose-p:last:mb-0">
                {news.content.split(/\n\s*\n/).map((paragraph, idx) => (
                  <p key={idx}>
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Save & Actions */}
            <div className="mt-12 flex flex-col gap-6 border-t border-desa-blue-50 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-9 w-9 rounded-full border-2 border-white bg-desa-blue-100 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i + news.id}`} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[11px] font-bold text-desa-blue-900/40 tracking-tight">Terbaca 1.2k+ kali</span>
              </div>
              
              <button className="flex items-center gap-2 rounded-xl bg-desa-blue-950 px-4 py-2.5 text-[11px] font-black text-white transition-all hover:bg-desa-yellow-500 hover:text-[#000418] uppercase tracking-widest group shadow-lg">
                <Bookmark size={12} className="transition-transform group-hover:scale-110" />
                SIMPAN BERITA
              </button>
            </div>

            {/* Comments Section */}
            <CommentSection />
          </article>
        </div>

        {/* Sidebar */}
        <aside className="w-full shrink-0 space-y-10 lg:w-[340px]">
          {/* Related News */}
          <div className="sticky top-28 space-y-6">
            <div className="px-2">
              <div className="h-1 w-8 rounded-full bg-desa-yellow-500 mb-2" />
              <h3 className="text-xl font-black text-desa-blue-950 font-timeless tracking-tight">Berita Terkait</h3>
            </div>
            
            <div className="flex flex-col gap-5">
              {relatedNews.map((item, index) => (
                <Link key={item.id} href={`/berita/${item.slug}`} className="hero-reveal group flex items-center gap-4 rounded-[24px] border border-white bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-desa-blue-100" style={{ animationDelay: `${400 + index * 100}ms` }}>
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[16px] bg-desa-blue-50">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col gap-1 pr-2">
                    <span className="text-[8px] font-black uppercase tracking-widest text-desa-blue-600 leading-none">{item.category.name}</span>
                    <h4 className="line-clamp-2 text-[13px] font-black leading-tight text-desa-blue-950 font-timeless group-hover:text-desa-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-desa-blue-900/30 uppercase tracking-tighter">
                      <Calendar size={10} />
                      {item.publishedAt}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter Premium */}
            <div className="hero-reveal overflow-hidden rounded-[40px] bg-linear-to-br from-[#001260] to-[#000418] p-8 text-white shadow-2xl relative group border border-white/5 [animation-delay:600ms]">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-3xl transition-transform duration-1000 group-hover:scale-150" />
              
              <div className="relative z-10">
                <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md">
                  <Mail size={20} className="text-desa-yellow-500" />
                </div>
                <h3 className="text-xl font-black font-timeless tracking-tight">Tetap Terhubung</h3>
                <p className="mt-3 text-[12px] text-[#a2d6f9]/60 leading-relaxed font-medium">
                  Dapatkan kabar terbaru Desa Sukahurip langsung di email Anda.
                </p>
                <form className="mt-8 space-y-3">
                  <input
                    type="email"
                    placeholder="Email Aktif"
                    className="w-full h-11 rounded-xl bg-white/5 border border-white/10 px-4 text-[12px] text-white outline-none focus:bg-white/10 transition-all placeholder:text-white/30"
                  />
                  <button className="w-full h-11 rounded-xl bg-[#FFC400] text-[11px] font-black text-[#000418] uppercase tracking-widest transition-all duration-500 hover:shadow-xl active:scale-95">
                    Langganan
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
