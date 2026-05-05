'use client'

import React from 'react'
import { Check } from 'lucide-react'

interface StepProgressBarProps {
  currentStep: number
  steps: (string | { title: string, icon?: any })[]
}

export function StepProgressBar({ currentStep, steps }: StepProgressBarProps) {
  return (
    <div className="w-full py-4 md:py-8">
      <div className="relative flex justify-between">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 h-0.5 w-full bg-desa-blue-900/10 dark:bg-white/10 z-0" />
        <div 
          className="absolute top-5 left-0 h-0.5 bg-desa-blue-900 dark:bg-desa-yellow-500 transition-all duration-500 z-0" 
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
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                  isActive 
                    ? 'border-desa-blue-900 bg-white text-desa-blue-900 dark:border-desa-yellow-500 dark:bg-desa-blue-950 dark:text-desa-yellow-500 shadow-lg' 
                    : isCompleted 
                    ? 'border-desa-blue-900 bg-desa-blue-900 text-white dark:border-desa-yellow-500 dark:bg-desa-yellow-500 dark:text-desa-blue-950' 
                    : 'border-desa-blue-900/10 bg-white text-desa-blue-900/20 dark:border-white/10 dark:bg-desa-blue-950 dark:text-white/20'
                }`}
              >
                {isCompleted ? <Check size={18} /> : <span className="text-xs font-black">{stepNumber}</span>}
              </div>
              <span 
                className={`mt-3 text-[10px] font-black uppercase tracking-widest transition-all duration-500 hidden md:block ${
                  isActive ? 'text-desa-blue-900 dark:text-white' : 'text-desa-blue-900/30 dark:text-white/20'
                }`}
              >
                {stepTitle}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
