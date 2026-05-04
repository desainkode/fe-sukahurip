'use client'

import { Info, LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  title: string | string[]
  description: string
  showInfoButton?: boolean
  icon?: LucideIcon
  delay?: number
}

export function SectionHeader({
  title,
  description,
  showInfoButton = false,
  icon: Icon = Info,
  delay = 0,
}: SectionHeaderProps) {
  const titleLines = Array.isArray(title) ? title : [title]

  return (
    <div
      className="mb-6 border-b border-[#072ac8]/10 pb-6 md:mb-8 md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.45fr)_auto] md:items-start md:gap-6"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-4 md:contents">
        <h2 className="hero-reveal font-timeless text-[26px] font-bold leading-[1.08] tracking-[0.01em] text-[#000418] md:text-[30px] lg:text-[38px]">
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        {showInfoButton && (
          <button
            type="button"
            aria-label="Informasi"
            className="hero-reveal inline-flex h-11 w-11 shrink-0 items-center justify-center self-start rounded-full bg-[#072ac8] text-[#F3F4F8] shadow-[0_10px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_24px_rgba(0,0,0,0.2)] [animation-delay:180ms] md:order-last md:h-12 md:w-12 lg:h-14 lg:w-14"
          >
            <Icon size={24} strokeWidth={2.4} />
          </button>
        )}
      </div>

      <p className="hero-reveal mt-4 max-w-none pt-0.5 text-[12px] leading-6 text-[#000418]/82 md:mt-0 md:text-[13px] md:leading-7 [animation-delay:120ms]">
        {description}
      </p>
    </div>
  )
}
