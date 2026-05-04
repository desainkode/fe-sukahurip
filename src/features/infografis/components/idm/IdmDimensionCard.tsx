'use client'

import React from 'react'
import { IdmDimension } from '../../types/infografis'

interface IdmDimensionCardProps {
  dimension: IdmDimension
  delay?: number
}

export function IdmDimensionCard({ dimension, delay = 0 }: IdmDimensionCardProps) {
  const percentage = (dimension.score / dimension.fullScore) * 100

  return (
    <div 
      className="hero-reveal relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-white p-6 shadow-xl border border-[#072ac8]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div 
            className="h-2 w-12 rounded-full" 
            style={{ backgroundColor: dimension.color }}
          />
          <span className="font-timeless text-sm font-bold text-[#000418]/40 uppercase tracking-widest">
            {dimension.fullScore.toFixed(1)} MAX
          </span>
        </div>
        
        <h4 className="font-timeless text-lg font-bold leading-tight text-[#000418]">
          {dimension.name}
        </h4>
      </div>

      <div className="mt-8 space-y-3">
        <div className="flex items-baseline justify-between">
          <span className="font-timeless text-4xl font-black text-[#000418]">
            {dimension.score.toString().replace('.', ',')}
          </span>
          <span className="text-sm font-bold text-[#000418]/60">
            {percentage.toFixed(1)}%
          </span>
        </div>

        <div className="h-3 w-full overflow-hidden rounded-full bg-[#072ac8]/5">
          <div 
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: `${percentage}%`,
              backgroundColor: dimension.color,
              animationDelay: `${delay + 300}ms`
            }}
          />
        </div>
      </div>
    </div>
  )
}
