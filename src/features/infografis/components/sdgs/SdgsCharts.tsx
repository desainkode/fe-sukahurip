'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Cell
} from 'recharts'
import { SdgsGoal } from '../../types/infografis'

interface SdgsChartsProps {
  goals: SdgsGoal[]
}

export function SdgsCharts({ goals }: SdgsChartsProps) {
  // Sector mapping
  const socialIds = [1, 2, 3, 4, 5, 11]
  const economyIds = [8, 9, 10, 17]
  const environmentIds = [6, 7, 12, 13, 14, 15]
  const governanceIds = [16, 18]

  const getAvg = (ids: number[]) => {
    const scores = goals.filter(g => ids.includes(g.id)).map(g => g.score)
    return scores.length ? +(scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : 0
  }

  const radarData = [
    { subject: 'Sosial', A: getAvg(socialIds), fullMark: 100 },
    { subject: 'Ekonomi', A: getAvg(economyIds), fullMark: 100 },
    { subject: 'Lingkungan', A: getAvg(environmentIds), fullMark: 100 },
    { subject: 'Tata Kelola', A: getAvg(governanceIds), fullMark: 100 },
  ]

  const barData = goals.map(g => ({
    name: `Tujuan ${g.id}`,
    score: g.score,
    color: g.color
  }))

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Radar Chart: Perbandingan Sektor */}
      <div className="hero-reveal flex flex-col rounded-[32px] bg-[#000418] p-6 text-white shadow-xl md:p-8" style={{ animationDelay: '300ms' }}>
        <div className="mb-6 space-y-1">
          <h4 className="font-timeless text-xl font-bold">Perbandingan Sektor</h4>
          <p className="text-sm opacity-60">Rata-rata capaian berdasarkan 4 pilar utama</p>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 600 }}
              />
              <Radar
                name="Skor"
                dataKey="A"
                stroke="#FFC400"
                fill="#FFC400"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart: Capaian Tiap Tujuan */}
      <div className="hero-reveal flex flex-col rounded-[32px] bg-white p-6 shadow-xl border border-[#072ac8]/5 md:p-8" style={{ animationDelay: '400ms' }}>
        <div className="mb-6 space-y-1">
          <h4 className="font-timeless text-xl font-bold text-[#000418]">Capaian Tiap Tujuan</h4>
          <p className="text-sm text-[#000418]/60">Persentase keberhasilan 18 indikator SDGs Desa</p>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#000418', fontSize: 10, fontWeight: 700, className: 'font-timeless' }}
                interval={1}
              />
              <YAxis 
                domain={[0, 100]} 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#000418', fontSize: 12, fontWeight: 700, className: 'font-timeless' }}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                itemStyle={{ fontWeight: 700 }}
                formatter={(value: any) => [`${value}%`, 'Capaian']}
              />
              <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
