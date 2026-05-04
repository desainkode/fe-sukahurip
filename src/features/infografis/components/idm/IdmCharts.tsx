'use client'

import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart
} from 'recharts'
import { IdmSectionContent } from '../../types/infografis'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

interface IdmChartsProps {
  data: IdmSectionContent
}

export function IdmCharts({ data }: IdmChartsProps) {
  const radarData = data.dimensions.map(d => ({
    subject: d.name.split('(')[1]?.replace(')', '') || d.name,
    score: d.score,
    fullMark: d.fullScore
  }))

  const trendData = data.trends

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Radar Chart: Dimension Comparison */}
      <div className="hero-reveal flex flex-col rounded-[32px] bg-[#000418] p-6 text-white shadow-xl md:p-8" style={{ animationDelay: '400ms' }}>
        <div className="mb-6 space-y-1">
          <h4 className="font-timeless text-xl font-bold">Analisis Dimensi</h4>
          <p className="text-sm opacity-60">Perbandingan skor antar 3 pilar utama IDM</p>
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
                dataKey="score"
                stroke="#FFC400"
                fill="#FFC400"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Area Chart: Progress Trend */}
      <div className="hero-reveal flex flex-col rounded-[32px] bg-white p-6 shadow-xl border border-[#072ac8]/5 md:p-8" style={{ animationDelay: '500ms' }}>
        <div className="mb-6 space-y-1">
          <h4 className="font-timeless text-xl font-bold text-[#000418]">Tren Kemajuan</h4>
          <p className="text-sm text-[#000418]/60">Perkembangan skor IDM dari tahun ke tahun</p>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#072ac8" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#072ac8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#000418', fontSize: 12, fontWeight: 700, className: 'font-timeless' }}
                dy={10}
              />
              <YAxis 
                domain={[0, 1]} 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#000418', fontSize: 12, fontWeight: 700, className: 'font-timeless' }}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                itemStyle={{ fontWeight: 700, color: '#072ac8' }}
              />
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke="#072ac8" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorScore)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
