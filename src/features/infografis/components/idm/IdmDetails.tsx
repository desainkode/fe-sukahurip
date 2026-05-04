'use client'

import React from 'react'
import { Info, ExternalLink, ChevronDown, FileText } from 'lucide-react'
import { IdmSectionContent } from '../../types/infografis'

interface IdmDetailsProps {
  data: IdmSectionContent
}

export function IdmDetails({ data }: IdmDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Interpretation Card */}
      <div className="hero-reveal flex flex-col gap-6 rounded-[32px] bg-[#f8faff] p-6 md:p-10 border border-[#072ac8]/10" style={{ animationDelay: '600ms' }}>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#072ac8] text-white shadow-lg">
            <Info size={24} />
          </div>
          <h4 className="font-timeless text-2xl font-bold text-[#000418]">Analisis Strategis</h4>
        </div>

        <p className="text-lg leading-relaxed text-[#000418]/80">
          {data.interpretation}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button className="group inline-flex items-center gap-2 rounded-2xl bg-[#072ac8] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#072ac8]/90 hover:shadow-xl">
            <FileText size={18} />
            Download Laporan Lengkap
            <ExternalLink size={14} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
          </button>
          
          <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-[#000418]/60 border border-[#072ac8]/10">
            Sumber: <span className="text-[#072ac8]">{data.source}</span>
          </div>
        </div>
      </div>

      {/* Accordion / Details Indicator (Optional requirement 9) */}
      <div className="hero-reveal space-y-4" style={{ animationDelay: '700ms' }}>
        <div className="group overflow-hidden rounded-3xl border border-[#072ac8]/10 bg-white transition-all hover:border-[#072ac8]/30">
          <button className="flex w-full items-center justify-between p-6 text-left">
            <span className="font-timeless text-lg font-bold text-[#000418]">Detail Indikator Penyusun</span>
            <ChevronDown size={20} className="text-[#072ac8] transition-transform group-hover:rotate-180" />
          </button>
          <div className="max-h-0 overflow-hidden bg-[#f8faff]/50 transition-all duration-500 group-focus-within:max-h-[500px]">
            <div className="p-6 pt-0 text-sm leading-relaxed text-[#000418]/60">
              <p>IDM dikembangkan berdasarkan konsepsi bahwa untuk menuju Desa Mandiri diperlukan ketahanan sosial, ekonomi, dan ekologi secara berkelanjutan. Kebijakan IDM diarahkan untuk memperkuat pencapaian target RPJMN dan SDGs Desa.</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>IKS: Pendidikan, Kesehatan, Modal Sosial, dan Permukiman.</li>
                <li>IKE: Keragaman Produksi Masyarakat, Akses Pusat Perdagangan, Pasar, dan Lembaga Ekonomi.</li>
                <li>IKL: Kualitas Lingkungan, Potensi Bencana, dan Tanggap Bencana.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
