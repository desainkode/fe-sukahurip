'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SdgsProgram } from '../../types/infografis'

interface SdgsProgramsProps {
  programs: SdgsProgram[]
  onGoalClick: (id: number) => void
}

export function SdgsPrograms({ programs, onGoalClick }: SdgsProgramsProps) {
  return (
    <div className="hero-reveal space-y-6" style={{ animationDelay: '700ms' }}>
      <div className="flex items-center justify-between">
        <h4 className="font-timeless text-2xl font-bold text-[#000418]">Program Desa Terkait</h4>
        <span className="text-xs font-bold text-[#000418]/40 uppercase tracking-widest">Total {programs.length} Program</span>
      </div>

      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-2 lg:mx-0 lg:grid lg:grid-cols-2 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0">
        {programs.map((program, idx) => (
          <div 
            key={idx}
            className="group flex w-[280px] shrink-0 snap-center items-center justify-between gap-4 rounded-3xl bg-white p-5 shadow-lg border border-[#072ac8]/5 transition-all hover:border-[#072ac8]/20 hover:shadow-xl sm:w-[320px] lg:w-auto"
          >
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-[#000418]">{program.name}</h5>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => onGoalClick(program.goalId)}
                  className="text-[10px] font-black uppercase tracking-widest text-[#072ac8] hover:underline"
                >
                  SDGs Tujuan {program.goalId}
                </button>
                <span className="text-[10px] font-bold text-[#000418]/20">•</span>
                <span className={`text-[10px] font-black uppercase tracking-widest ${
                  program.status === 'Selesai' ? 'text-emerald-500' : 
                  program.status === 'Berjalan' ? 'text-blue-500' : 'text-amber-500'
                }`}>
                  {program.status}
                </span>
              </div>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#072ac8]/5 text-[#072ac8] transition-all group-hover:bg-[#072ac8] group-hover:text-white">
              <ArrowUpRight size={20} />
            </div>
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
