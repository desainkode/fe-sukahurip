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
      <div className="grid gap-6 md:grid-cols-3">
        {idmDetailData.dimensions.map((dim, idx) => (
          <IdmDimensionCard 
            key={dim.name} 
            dimension={dim} 
            delay={200 + idx * 100} 
          />
        ))}
      </div>

      {/* 3. Charts Visualization */}
      <IdmCharts data={idmDetailData} />

      {/* 4. Strategic Analysis & Details */}
      <IdmDetails data={idmDetailData} />
    </div>
  )
}
