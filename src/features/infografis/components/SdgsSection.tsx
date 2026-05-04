'use client'

import React, { useState } from 'react'
import { sdgsDetailData } from '../config/sdgs-data'
import { SdgsHeader } from './sdgs/SdgsHeader'
import { SdgsSummaryCards } from './sdgs/SdgsSummaryCards'
import { SdgsGoalsGrid } from './sdgs/SdgsGoalsGrid'
import { SdgsCharts } from './sdgs/SdgsCharts'
import { SdgsInsights } from './sdgs/SdgsInsights'
import { SdgsPrograms } from './sdgs/SdgsPrograms'
import { SdgsDetailView } from './sdgs/SdgsDetailView'
import { SectionHeader } from '../../home/components/ui/SectionHeader'
import * as LucideIcons from 'lucide-react'

export function SdgsSection() {
  const [selectedGoalId, setSelectedGoalId] = useState<number | null>(null)

  const counts = {
    tercapai: sdgsDetailData.goals.filter(g => g.status === 'Tercapai').length,
    berkembang: sdgsDetailData.goals.filter(g => g.status === 'Berkembang').length,
    belum: sdgsDetailData.goals.filter(g => g.status === 'Belum Tercapai').length,
  }

  const selectedGoal = selectedGoalId 
    ? sdgsDetailData.goals.find(g => g.id === selectedGoalId) 
    : null

  const relatedPrograms = selectedGoalId
    ? sdgsDetailData.programs.filter(p => p.goalId === selectedGoalId)
    : []

  const handleBack = () => setSelectedGoalId(null)

  return (
    <div className="flex flex-col gap-10">
      {/* 1. Header with Breadcrumbs */}
      <SdgsHeader 
        villageName={sdgsDetailData.villageName}
        district={sdgsDetailData.district}
        regency={sdgsDetailData.regency}
        year={sdgsDetailData.year}
        onBack={handleBack}
        currentGoal={selectedGoal?.title}
      />

      {selectedGoalId && selectedGoal ? (
        /* DETAIL VIEW */
        <SdgsDetailView 
          goal={selectedGoal}
          relatedPrograms={relatedPrograms}
          onBack={handleBack}
        />
      ) : (
        /* DASHBOARD VIEW */
        <>
          {/* 2. Summary Cards */}
          <SdgsSummaryCards 
            totalGoals={18}
            overallScore={sdgsDetailData.overallScore}
            counts={counts}
          />

          {/* 3. Goals Grid */}
          <div className="rounded-[32px] bg-white p-6 shadow-xl border border-[#072ac8]/5 md:p-10">
            <SectionHeader 
              title={['18 Tujuan', 'SDGs Desa']}
              description="SDGs Desa adalah upaya terpadu mewujudkan Desa tanpa kemiskinan dan kelaparan, Desa ekonomi tumbuh merata, Desa peduli kesehatan, Desa peduli lingkungan, Desa peduli pendidikan, Desa ramah perempuan, Desa berjejaring, dan Desa tanggap budaya."
              showInfoButton
              icon={LucideIcons.ListChecks}
            />
            <div className="mt-8">
              <SdgsGoalsGrid 
                goals={sdgsDetailData.goals} 
                onGoalClick={setSelectedGoalId} 
              />
            </div>
          </div>

          {/* 4. Data Visualization */}
          <div className="rounded-[32px] bg-white p-6 shadow-xl border border-[#072ac8]/5 md:p-10">
            <SectionHeader 
              title={['Visualisasi', 'Capaian SDGs']}
              description="Penyajian data capaian SDGs Desa dalam bentuk grafik untuk memudahkan pemantauan dan evaluasi progres pembangunan berkelanjutan di tingkat desa."
              showInfoButton
              icon={LucideIcons.BarChart3}
            />
            <div className="mt-8">
              <SdgsCharts goals={sdgsDetailData.goals} />
            </div>
          </div>

          {/* 5. Insights: Strengths & Challenges */}
          <div className="rounded-[32px] bg-white p-6 shadow-xl border border-[#072ac8]/5 md:p-10">
            <SectionHeader 
              title={['Ringkasan', 'Insight Strategis']}
              description="Analisis singkat mengenai kekuatan dan tantangan utama desa dalam mencapai tujuan pembangunan berkelanjutan berdasarkan data indikator SDGs."
              showInfoButton
              icon={LucideIcons.Lightbulb}
            />
            <div className="mt-8">
              <SdgsInsights 
                strengths={sdgsDetailData.insights.strengths}
                challenges={sdgsDetailData.insights.challenges}
              />
            </div>
          </div>

          {/* 6. Village Programs */}
          <div className="rounded-[32px] bg-white p-6 shadow-xl border border-[#072ac8]/5 md:p-10">
            <SectionHeader 
              title={['Program Desa', 'Pendukung SDGs']}
              description="Daftar program dan kegiatan pemerintah desa yang berkontribusi langsung terhadap pencapaian target-target SDGs Desa Sukahurip."
              showInfoButton
              icon={LucideIcons.Briefcase}
            />
            <div className="mt-8">
              <SdgsPrograms 
                programs={sdgsDetailData.programs} 
                onGoalClick={setSelectedGoalId}
              />
            </div>
          </div>

          {/* 7. Footer / Data Source */}
          <footer className="mt-4 border-t border-[#072ac8]/10 pt-8 text-center">
            <p className="text-xs font-bold text-[#000418]/30 uppercase tracking-[0.2em]">
              Sumber: {sdgsDetailData.source}
            </p>
          </footer>
        </>
      )}
    </div>
  )
}
