'use client'

import React from 'react'
import { HelpCircle, ChevronRight, MessageSquare, Phone, Mail } from 'lucide-react'

export default function BantuanPage() {
  const faqs = [
    { q: 'Bagaimana cara mengajukan surat domisili?', a: 'Pilih menu Pengajuan Surat, lalu pilih Surat Keterangan Domisili dan lengkapi data serta dokumen yang diminta.' },
    { q: 'Berapa lama proses pembuatan surat?', a: 'Normalnya proses memakan waktu 1-3 hari kerja tergantung kelengkapan data dan antrean.' },
    { q: 'Apakah saya bisa mengambil surat fisik di kantor desa?', a: 'Ya, setelah status pengajuan Selesai, Anda bisa mengambil surat fisik dengan membawa KTP asli.' },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-10">
      <div className="hero-reveal space-y-2">
        <h2 className="font-timeless text-3xl font-black text-desa-blue-950 dark:text-white">Pusat Bantuan</h2>
        <p className="text-sm font-medium text-desa-blue-900/50 dark:text-white/40 uppercase tracking-widest">Panduan dan dukungan layanan masyarakat</p>
      </div>

      {/* Contact Cards */}
      <div className="hero-reveal grid gap-6 md:grid-cols-3" style={{ animationDelay: '100ms' }}>
        {[
          { label: 'WhatsApp', value: '0812-3456-7890', icon: MessageSquare, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
          { label: 'Telepon', value: '(0265) 123456', icon: Phone, color: 'text-desa-blue-900 dark:text-desa-blue-400', bg: 'bg-desa-blue-50 dark:bg-white/5' },
          { label: 'Email', value: 'desa@sukahurip.id', icon: Mail, color: 'text-desa-blue-600 dark:text-desa-blue-400', bg: 'bg-desa-blue-50 dark:bg-white/5' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center rounded-3xl bg-white dark:bg-desa-blue-900/40 p-8 text-center shadow-lg border border-desa-blue-900/5 dark:border-white/5 hover:bg-desa-blue-50/50 dark:hover:bg-white/10 transition-all">
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} ${item.color} shadow-sm`}>
              <item.icon size={24} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-desa-blue-950/40 dark:text-white/40">{item.label}</span>
            <span className="mt-1 font-bold text-desa-blue-950 dark:text-white">{item.value}</span>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="hero-reveal space-y-6" style={{ animationDelay: '200ms' }}>
        <h3 className="font-timeless text-2xl font-black text-desa-blue-950 dark:text-white flex items-center gap-3">
          <HelpCircle className="text-desa-blue-900 dark:text-desa-yellow-500" /> Tanya Jawab Umum
        </h3>
        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl border border-desa-blue-900/5 dark:border-white/5 bg-white dark:bg-desa-blue-900/40 transition-all hover:border-desa-blue-900/20 dark:hover:border-white/20 shadow-sm">
              <button className="flex w-full items-center justify-between p-6 text-left">
                <span className="font-bold text-desa-blue-950 dark:text-white group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors">{faq.q}</span>
                <ChevronRight size={20} className="text-desa-blue-950/20 dark:text-white/20 group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-all" />
              </button>
              <div className="px-6 pb-6 text-sm font-medium text-desa-blue-950/60 dark:text-white/60 leading-relaxed">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
