'use client'

import React from 'react'
import * as LucideIcons from 'lucide-react'
import { SdgsGoal } from '../../types/infografis'

interface SdgsGoalsGridProps {
  goals: SdgsGoal[]
  onGoalClick: (id: number) => void
}

export function SdgsGoalsGrid({ goals, onGoalClick }: SdgsGoalsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {goals.map((goal, idx) => {
        const IconComponent = (LucideIcons as any)[goal.image] || LucideIcons.HelpCircle
        
        return (
          <button
            key={goal.id}
            onClick={() => onGoalClick(goal.id)}
            className="hero-reveal group relative flex flex-col items-center overflow-hidden rounded-[32px] bg-white p-6 shadow-lg border border-[#072ac8]/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ animationDelay: `${50 * idx}ms` }}
          >
            {/* Goal Number Badge */}
            <div 
              className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-bl-[20px] pt-1 pr-1 font-timeless text-xl font-black text-white shadow-lg"
              style={{ backgroundColor: goal.color }}
            >
              {goal.id}
            </div>

            <div 
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-inner group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundColor: goal.color }}
            >
              <IconComponent size={32} strokeWidth={2.5} />
            </div>

            <h4 className="mb-3 text-center text-xs font-bold leading-tight text-[#000418] group-hover:text-[#072ac8] transition-colors line-clamp-2 h-8">
              {goal.title}
            </h4>

            <div className="w-full space-y-2">
              <div className="flex items-center justify-between text-[10px] font-bold">
                <span className="text-[#000418]/40 uppercase tracking-widest">Capaian</span>
                <span style={{ color: goal.color }}>{goal.score}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#072ac8]/5">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${goal.score}%`, 
                    backgroundColor: goal.color,
                    animationDelay: `${idx * 50 + 500}ms`
                  }}
                />
              </div>
              
              <div className="flex justify-center">
                <span 
                  className={`rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-sm`}
                  style={{ backgroundColor: goal.status === 'Tercapai' ? '#10b981' : goal.status === 'Berkembang' ? '#f59e0b' : '#ef4444' }}
                >
                  {goal.status}
                </span>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
