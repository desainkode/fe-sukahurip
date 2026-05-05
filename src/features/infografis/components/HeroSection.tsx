'use client'

import type { InfografisKey } from '../types/infografis'
import { heroContentByFeature, infografisTabs } from '../config/infografis-content'
import { TabButton } from './ui/TabButton'

const kepalaDesaImage = '/img/hero-kepala-desa.png'

interface HeroSectionProps {
  activeTab: InfografisKey
  onChangeTab: (key: InfografisKey) => void
}

export function HeroSection({ activeTab, onChangeTab }: HeroSectionProps) {
  const hero = heroContentByFeature[activeTab]
  const isStunting = activeTab === 'stunting'
  const isBansos = activeTab === 'bansos'
  const isCustomHero = isStunting || isBansos

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-transparent pt-16 text-[#F4F3EE] md:pt-32">
      <div className="hero-float pointer-events-none absolute -right-28 -top-44 h-130 w-130 rounded-full bg-[#001260]/30 blur-[110px]" />
      <div className="hero-float pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#FFC400]/16 blur-[90px] [animation-delay:900ms]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 md:grid md:grid-cols-1 md:items-center md:gap-5 md:px-10 md:py-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,400px)] lg:gap-10">
        <div className="max-w-155 pt-4 md:pt-1">
          <div className="hero-reveal inline-flex items-center rounded-full border border-[#001260] bg-[#000E4F]/55 px-3 py-1">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#FDC200]/70" />
            <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#a2d6f9] md:text-[10px]">
              {hero.eyebrow}
            </span>
          </div>

          <h1
            className="hero-reveal mt-2 max-w-132 text-[34px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[0.052em] [animation-delay:120ms]"
            style={{ fontFamily: 'var(--font-timeless)' }}
          >
            <span className="block">{hero.titleLines[0]}</span>
            <span className="relative mt-1 block text-[#ffc600]">
              {hero.titleLines[1]}
              <span className="absolute -bottom-1 left-[34%] h-0.75 w-[44%] rounded-full bg-[#FFC400] md:h-1" />
            </span>
            <span className="mt-1 block">{hero.titleLines[2]}</span>
          </h1>

          <p className="hero-reveal mt-3 max-w-140 text-[10.5px] font-light leading-5 text-[#a2d6f9]/80 sm:text-[11px] md:text-[13px] md:leading-6 [animation-delay:220ms]">
            {hero.description}
          </p>

          {/* Quick Stats Grid */}
          <div className="hero-reveal mt-6 grid grid-cols-3 gap-2 md:gap-4 [animation-delay:350ms]">
            {hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col rounded-xl border border-white/5 bg-white/2 p-2.5 backdrop-blur-sm transition-all hover:bg-white/5 md:rounded-2xl md:p-4">
                <span className="text-[7px] font-bold uppercase tracking-widest text-[#a2d6f9]/50 md:text-[9px]">{stat.label}</span>
                <span className="mt-0.5 text-base font-black text-white md:mt-1 md:text-2xl">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-reveal relative mx-auto mt-8 w-full max-w-sm [animation-delay:180ms] lg:mt-0 lg:pt-0">
          <div className="absolute -right-2 top-4 h-full w-full rotate-2 rounded-4xl bg-[#001260]/30" />
          <div className="absolute -left-3 -top-2 h-full w-full -rotate-2 rounded-4xl border border-[#00167A]/70" />

          <div className="relative h-64 overflow-hidden rounded-3xl bg-linear-to-b from-[#001260] to-[#000418] shadow-[0_18px_36px_-12px_rgba(0,0,0,0.25)] sm:h-88 md:h-112 md:rounded-4xl">
            <img
              src={kepalaDesaImage}
              alt="Kepala Desa"
              className="hero-zoom h-full w-full object-cover"
              loading="eager"
            />

            <div className="hero-pulse absolute bottom-3 left-3 right-3 rounded-2xl border border-white/20 bg-black/35 p-2.5 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] backdrop-blur-[2px] md:bottom-4 md:left-4 md:right-4 md:p-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[12px] font-bold leading-5 md:text-sm">
                    {hero.quoteName}
                  </p>
                  <p className="mt-1 text-[9px] text-[#a2d6f9] md:text-[11px]">
                    {hero.quoteRole}
                  </p>
                </div>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC400] text-xs font-bold text-[#000418] md:h-7 md:w-7">
                  &quot;
                </span>
              </div>
              <p className="mt-1 text-[9px] italic leading-4 text-[#d0e7ff]/80 md:mt-1.5 md:text-[10px]">
                &quot;{hero.quoteText}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="feature-tabs"
        className="relative mx-auto mt-auto w-full max-w-7xl px-4 md:mt-12 md:px-10 lg:px-12"
      >
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max min-w-full items-end justify-center gap-1 md:gap-2 transition-all duration-300">
            {infografisTabs.map((item) => (
              <TabButton
                key={item.key}
                item={item}
                active={activeTab === item.key}
                onClick={onChangeTab}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
