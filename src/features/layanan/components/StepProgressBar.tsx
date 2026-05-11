'use client'

import React from 'react'
import { Check } from 'lucide-react'

interface StepProgressBarProps {
  currentStep: number
  steps: (string | { title: string, icon?: any })[]
}

export function StepProgressBar({ currentStep, steps }: StepProgressBarProps) {
  return (
    <div className="w-full py-6 md:py-10">
      <div className="grid grid-cols-4 gap-3 md:gap-6">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber === currentStep
          const isCompleted = stepNumber < currentStep
          const stepTitle = typeof step === 'string' ? step : step.title
          const Icon = typeof step === 'object' && step.icon ? step.icon : null

          return (
            <div key={index} className="relative group">
              {/* Step Card */}
              <div className={`relative flex flex-col items-center gap-3 rounded-[24px] md:rounded-[32px] p-3 md:p-6 transition-all duration-700 ${
                isActive 
                  ? 'bg-white dark:bg-white/5 shadow-[0_20px_50px_rgba(7,42,200,0.06)] dark:shadow-none ring-1 ring-desa-blue-900/10 dark:ring-white/10 -translate-y-2' 
                  : isCompleted 
                  ? 'bg-emerald-500/5 dark:bg-emerald-500/10' 
                  : 'bg-desa-blue-900/[0.02] dark:bg-white/[0.02]'
              }`}>
                {/* Step Icon/Number Circle */}
                <div className={`relative flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-[14px] md:rounded-[22px] transition-all duration-700 ${
                  isActive 
                    ? 'bg-desa-blue-900 text-white dark:bg-desa-yellow-500 dark:text-desa-blue-950 shadow-lg shadow-desa-blue-900/20 dark:shadow-desa-yellow-500/20' 
                    : isCompleted 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-desa-blue-900/10 dark:bg-white/10 text-desa-blue-950/40 dark:text-white/40'
                }`}>
                  {isCompleted ? (
                    <Check size={24} strokeWidth={3} className="animate-in zoom-in duration-500" />
                  ) : Icon ? (
                    <Icon size={isActive ? 28 : 22} strokeWidth={isActive ? 2.5 : 2} className="transition-all duration-700" />
                  ) : (
                    <span className="text-sm md:text-lg font-black">{stepNumber}</span>
                  )}

                  {/* Active Pulse ring */}
                  {isActive && (
                    <div className="absolute -inset-1.5 animate-pulse rounded-[18px] md:rounded-[26px] border border-desa-blue-900/20 dark:border-desa-yellow-500/20" />
                  )}
                </div>

                {/* Step Info */}
                <div className="flex flex-col items-center text-center overflow-hidden w-full">
                  <span className={`hidden md:block text-[9px] font-black uppercase tracking-[0.2em] mb-1 transition-colors ${
                    isActive ? 'text-desa-blue-900 dark:text-desa-yellow-500' : isCompleted ? 'text-emerald-600' : 'text-desa-blue-950/40 dark:text-white/40'
                  }`}>
                    {isCompleted ? 'Selesai' : isActive ? 'Sekarang' : `Step ${stepNumber}`}
                  </span>
                  <span className={`text-[10px] md:text-[13px] font-bold truncate w-full transition-colors ${
                    isActive ? 'text-desa-blue-950 dark:text-white' : isCompleted ? 'text-desa-blue-950/60 dark:text-white/60' : 'text-desa-blue-950/20 dark:text-white/20'
                  }`}>
                    {stepTitle}
                  </span>
                </div>

                {/* Progress bar at the bottom of the card */}
                <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden rounded-b-full">
                  <div className={`h-full transition-all duration-1000 ${
                    isActive ? 'bg-desa-blue-900 dark:bg-desa-yellow-500 w-full' : isCompleted ? 'bg-emerald-500 w-full' : 'bg-transparent w-0'
                  }`} />
                </div>
              </div>

              {/* Connecting Chevron/Arrow (Optional, hidden to keep it tidy) */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 md:-right-4 -translate-y-1/2 z-20 hidden md:block">
                  <div className={`h-2 w-2 rotate-45 border-t-2 border-r-2 transition-colors ${
                    isCompleted ? 'border-emerald-500/40' : 'border-desa-blue-900/10 dark:border-white/10'
                  }`} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
