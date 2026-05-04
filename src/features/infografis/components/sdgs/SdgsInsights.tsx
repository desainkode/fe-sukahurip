'use client'

import React from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'

interface SdgsInsightsProps {
  strengths: string[]
  challenges: string[]
}

export function SdgsInsights({ strengths, challenges }: SdgsInsightsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Strengths */}
      <div className="hero-reveal flex flex-col gap-4 rounded-[32px] bg-emerald-50 p-6 border border-emerald-100" style={{ animationDelay: '500ms' }}>
        <div className="flex items-center gap-3 text-emerald-600">
          <CheckCircle2 size={24} />
          <h4 className="font-timeless text-xl font-bold uppercase tracking-wide">Kekuatan Utama</h4>
        </div>
        <ul className="space-y-3">
          {strengths.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-medium text-emerald-900/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Challenges */}
      <div className="hero-reveal flex flex-col gap-4 rounded-[32px] bg-amber-50 p-6 border border-amber-100" style={{ animationDelay: '600ms' }}>
        <div className="flex items-center gap-3 text-amber-600">
          <AlertCircle size={24} />
          <h4 className="font-timeless text-xl font-bold uppercase tracking-wide">Tantangan Utama</h4>
        </div>
        <ul className="space-y-3">
          {challenges.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-medium text-amber-900/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
