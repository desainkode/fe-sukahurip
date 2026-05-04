'use client'

import React from 'react'
import { MapPin, Calendar, Award, TrendingUp } from 'lucide-react'
import { IdmSectionContent } from '../../types/infografis'

interface IdmHeroCardProps {
  data: IdmSectionContent
}

export function IdmHeroCard({ data }: IdmHeroCardProps) {
  return (
    <div className="hero-reveal relative overflow-hidden rounded-[32px] bg-linear-to-br from-[#072ac8] via-[#1e96fc] to-[#072ac8] p-6 text-white shadow-2xl md:p-10">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#ffc600]/10 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Village Identity */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <MapPin size={16} className="text-[#FFC400]" />
              <span className="text-xs font-bold tracking-wider uppercase">{data.regency}</span>
            </div>
            <h3 className="font-timeless text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {data.villageName}
            </h3>
            <p className="text-lg font-medium opacity-80">{data.district}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC400] text-[#072ac8]">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Tahun Data</p>
                <p className="font-timeless text-xl font-bold">{data.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Score & Status */}
        <div className="relative flex flex-col items-center justify-center rounded-[40px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl lg:min-w-[320px]">
          <div className="absolute -top-4 rounded-full bg-[#FFC400] px-6 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#072ac8] shadow-lg">
            SKOR IDM
          </div>
          
          <div className="mt-2 space-y-1">
            <p className="font-timeless text-7xl font-bold tracking-tighter md:text-8xl">
              {data.currentScore.toString().replace('.', ',')}
            </p>
            <div 
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-2 shadow-xl"
              style={{ backgroundColor: data.statusColor }}
            >
              <Award size={20} className="text-white" />
              <span className="font-timeless text-xl font-bold uppercase tracking-widest text-white">
                {data.status}
              </span>
            </div>
          </div>
          
          <p className="mt-6 text-sm font-medium opacity-70">
            Status kemandirian desa berdasarkan klasifikasi Kemendesa PDTT
          </p>
        </div>
      </div>
    </div>
  )
}
