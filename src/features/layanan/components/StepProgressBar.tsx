'use client'

import React from 'react'
import { Check } from 'lucide-react'

interface StepProgressBarProps {
  currentStep: number
  steps: (string | { title: string, icon?: any })[]
}

export function StepProgressBar({ currentStep, steps }: StepProgressBarProps) {
  return (
    <div className="w-full py-6 md:py-12">
      <div className="relative flex justify-between">
        {/* Progress Line */}
        <div className="absolute top-6 left-0 h-1 w-full bg-desa-blue-900/5 dark:bg-white/5 z-0 rounded-full" />
        <div 
          className="absolute top-6 left-0 h-1 bg-desa-blue-900 dark:bg-desa-yellow-500 transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1) z-0 rounded-full shadow-[0_0_20px_rgba(7,42,200,0.3)] dark:shadow-[0_0_20px_rgba(255,198,0,0.2)]" 
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber === currentStep
          const isCompleted = stepNumber < currentStep
          const stepTitle = typeof step === 'string' ? step : step.title

          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <div 
                className={`flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-[20px] border-4 transition-all duration-700 ease-out ${
                  isActive 
                    ? 'border-desa-blue-900 bg-white text-desa-blue-900 dark:border-desa-yellow-500 dark:bg-desa-blue-950 dark:text-desa-yellow-500 shadow-[0_15px_35px_rgba(7,42,200,0.2)] scale-110' 
                    : isCompleted 
                    ? 'border-desa-blue-900 bg-desa-blue-900 text-white dark:border-desa-yellow-500 dark:bg-desa-yellow-500 dark:text-desa-blue-950 shadow-lg' 
                    : 'border-desa-blue-900/5 bg-white text-desa-blue-900/20 dark:border-white/5 dark:bg-white/5 dark:text-white/20'
                }`}
              >
                {isCompleted ? (
                  <Check size={24} strokeWidth={3} className="animate-in zoom-in duration-500" />
                ) : (
                  <span className="text-sm font-black tracking-tight">{stepNumber}</span>
                )}
              </div>
              <div className="absolute -bottom-10 md:-bottom-12 flex flex-col items-center whitespace-nowrap">
                <span 
                  className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-700 ${
                    isActive ? 'text-desa-blue-900 dark:text-desa-yellow-500 scale-110' : isCompleted ? 'text-desa-blue-950/60 dark:text-white/60' : 'text-desa-blue-950/20 dark:text-white/20'
                  }`}
                >
                  {stepTitle}
                </span>
                {isActive && (
                  <div className="h-1.5 w-1.5 rounded-full bg-desa-blue-900 dark:bg-desa-yellow-500 mt-2 animate-pulse" />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
