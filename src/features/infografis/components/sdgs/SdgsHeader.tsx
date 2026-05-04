'use client'

import React from 'react'
import { MapPin, ChevronRight, Home } from 'lucide-react'

interface SdgsHeaderProps {
  villageName: string
  district: string
  regency: string
  year: number
  onBack?: () => void
  currentGoal?: string
}

export function SdgsHeader({ villageName, district, regency, year, onBack, currentGoal }: SdgsHeaderProps) {
  return (
    <div className="hero-reveal relative overflow-hidden rounded-[32px] bg-linear-to-br from-[#072ac8] via-[#1e96fc] to-[#072ac8] p-6 text-white shadow-2xl md:p-10">
      {/* Background patterns */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#FFC400]/10 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70">
          <button onClick={onBack} className="flex items-center gap-1 hover:text-white transition-colors">
            <Home size={14} />
            <span>Beranda</span>
          </button>
          <ChevronRight size={14} />
          <button onClick={onBack} className={`flex items-center gap-1 hover:text-white transition-colors ${!currentGoal ? 'text-white' : ''}`}>
            <span>SDGs Desa</span>
          </button>
          {currentGoal && (
            <>
              <ChevronRight size={14} />
              <span className="text-white">{currentGoal}</span>
            </>
          )}
        </nav>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/10">
            <MapPin size={16} className="text-[#FFC400]" />
            <span className="text-xs font-bold tracking-wider uppercase">{regency}</span>
          </div>
          <h1 className="font-timeless text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {currentGoal ? currentGoal : `Dashboard SDGs ${villageName}`}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-lg font-medium opacity-80">
            <span>{district}</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#FFC400]">Data Tahun {year}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
