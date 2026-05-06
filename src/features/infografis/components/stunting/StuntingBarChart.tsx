'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { StuntingTrendData } from '../../types/infografis'

interface StuntingBarChartProps {
  data: StuntingTrendData[]
}

export function StuntingBarChart({ data }: StuntingBarChartProps) {
  return (
    <div className="hero-reveal relative overflow-hidden rounded-[24px] border border-white/5 bg-linear-to-b from-[#000418] via-[#181F3C] to-[#000418] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 sm:rounded-3xl sm:p-8">
      {/* Background Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,196,0,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="relative h-[280px] w-full sm:h-[350px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 10, left: -15, bottom: 0 }}>
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFC400" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#FFC400" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFC400" />
                <stop offset="100%" stopColor="#FDC200" />
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              vertical={false} 
              stroke="rgba(255,255,255,0.03)" 
              strokeDasharray="4 4" 
            />
            
            <XAxis
              dataKey="year"
              axisLine={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}
              tickLine={false}
              tick={{ 
                fill: 'rgba(255,255,255,0.4)', 
                fontSize: 10, 
                fontWeight: 700,
                fontFamily: 'var(--font-timeless)'
              }}
              dy={15}
            />
            
            <YAxis
              axisLine={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}
              tickLine={false}
              tick={{ 
                fill: 'rgba(255,255,255,0.4)', 
                fontSize: 10, 
                fontWeight: 700,
                fontFamily: 'var(--font-timeless)'
              }}
              ticks={[0, 25, 50, 75, 100]}
              domain={[0, 100]}
              dx={-5}
            />
            
            <Tooltip
              cursor={{ stroke: '#FFC400', strokeWidth: 1, strokeDasharray: '4 4' }}
              contentStyle={{
                backgroundColor: '#000418',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                color: '#fff',
                fontSize: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
                padding: '12px 16px'
              }}
              itemStyle={{ color: '#FFC400', fontWeight: '900', fontSize: '14px' }}
              labelStyle={{ 
                color: 'rgba(255,255,255,0.5)', 
                marginBottom: '4px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
              formatter={(value) => [`${value}%`, 'Prevalensi Stunting']}
            />
            
            <Area
              type="monotone"
              dataKey="prevalence"
              stroke="url(#lineGradient)"
              strokeWidth={4}
              fill="url(#areaGradient)"
              animationDuration={2500}
              animationEasing="ease-in-out"
              activeDot={{ 
                r: 6, 
                fill: '#FFC400', 
                stroke: '#fff', 
                strokeWidth: 2,
                className: 'shadow-lg' 
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Chart Footer Info */}
      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 sm:mt-10">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-black uppercase tracking-widest text-white/30 sm:text-[10px]">Periode Data</span>
          <span className="font-timeless text-[12px] font-bold text-[#FFC400] sm:text-[14px]">2018 - 2027</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end gap-1 text-right">
            <span className="text-[9px] font-black uppercase tracking-widest text-white/30 sm:text-[10px]">Status Tren</span>
            <span className="font-timeless text-[12px] font-bold text-[#a2d6f9] sm:text-[14px]">Fluktuatif Positif</span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC400]/10 text-[#FFC400] sm:h-12 sm:w-12">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-5 sm:size-6">
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M17 7h4v4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
