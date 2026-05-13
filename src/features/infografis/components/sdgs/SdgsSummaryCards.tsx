'use client'

import React from 'react'
import { CheckCircle2, TrendingUp, AlertCircle, PieChart } from 'lucide-react'

interface SdgsSummaryCardsProps {
  totalGoals: number
  overallScore: number
  counts: {
    tercapai: number
    berkembang: number
    belum: number
  }
}

export function SdgsSummaryCards({ totalGoals, overallScore, counts }: SdgsSummaryCardsProps) {
  const stats = [
    { label: 'Indeks SDGs', value: overallScore, icon: PieChart, color: 'text-[#072ac8]', bg: 'bg-[#072ac8]/10' },
    { label: 'Tujuan Tercapai', value: counts.tercapai, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Dalam Proses', value: counts.berkembang, icon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Belum Tercapai', value: counts.belum, icon: AlertCircle, color: 'text-rose-500', bg: 'bg-rose-50' },
  ]

  return (
    <div className="relative">
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-8 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0">
        {stats.map((stat, idx) => (
          <div 
            key={stat.label}
            className="hero-reveal relative flex w-[180px] shrink-0 snap-center flex-col items-center justify-center rounded-[28px] bg-white p-6 shadow-xl border border-[#072ac8]/5 text-center transition-all duration-300 hover:-translate-y-1 sm:w-[220px] lg:w-auto"
            style={{ animationDelay: `${100 * idx}ms` }}
          >
          <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg} ${stat.color}`}>
            <stat.icon size={24} />
          </div>
          <p className="font-timeless text-3xl font-black text-[#000418] md:text-4xl">
            {typeof stat.value === 'number' && stat.value < 100 ? stat.value.toString().replace('.', ',') : stat.value}
            {stat.label === 'Indeks SDGs' ? '' : ''}
          </p>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#000418]/50">
            {stat.label}
          </p>
        </div>
        ))}
      </div>

      {/* Mobile/Tablet Scroll Indicator */}
      <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
        <div className="h-1.5 w-6 rounded-full bg-[#072ac8]/30" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
      </div>
    </div>
  )
}
