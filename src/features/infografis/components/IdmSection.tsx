'use client'

import React from 'react'
import { SectionHeader } from '../../home/components/ui/SectionHeader'
import { idmDetailData } from '../config/idm-data'
import { IdmHeroCard } from './idm/IdmHeroCard'
import { IdmDimensionCard } from './idm/IdmDimensionCard'
import { IdmCharts } from './idm/IdmCharts'
import { IdmDetails } from './idm/IdmDetails'
import { Award } from 'lucide-react'

export function IdmSection() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeader
        title={['Indeks Desa', 'Membangun']}
        description={idmDetailData.description}
        showInfoButton
        icon={Award}
      />

      {/* 1. Main IDM Card */}
      <IdmHeroCard data={idmDetailData} />

      {/* 2. Dimension Scores Grid */}
      <div className="relative">
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-8 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0 lg:gap-6">
          {idmDetailData.dimensions.map((dim, idx) => (
            <div key={dim.name} className="w-[280px] shrink-0 snap-center lg:w-auto">
              <IdmDimensionCard 
                dimension={dim} 
                delay={200 + idx * 100} 
              />
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

      {/* 3. Charts Visualization */}
      <IdmCharts data={idmDetailData} />

      {/* 4. Strategic Analysis & Details */}
      <IdmDetails data={idmDetailData} />
    </div>
  )
}
