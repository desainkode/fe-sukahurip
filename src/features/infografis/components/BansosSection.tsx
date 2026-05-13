"use client";

import { bansosContent } from '../config/infografis-content'
import { BansosIndicatorCard } from './bansos/BansosIndicatorCard'
import { BansosAllocationCard } from './bansos/BansosAllocationCard'
import { BansosDistributionCard } from './bansos/BansosDistributionCard'
import { BansosBenefitTypeCard } from './bansos/BansosBenefitTypeCard'
import { CircleDollarSign, BarChart3, MapPin, LayoutGrid } from 'lucide-react'
import { SectionHeader } from '../../home/components/ui/SectionHeader'

export function BansosSection() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-4 py-6 sm:space-y-14 md:space-y-24 md:px-0 md:py-8">
      {/* 1. Ringkasan Bantuan Sosial */}
      <section className="space-y-6 sm:space-y-8 md:space-y-10">
        <SectionHeader 
          title={["Ringkasan", "Bantuan Sosial"]}
          description="Ringkasan Bantuan Sosial Desa Sukahurip merupakan data jumlah dan jenis bantuan sosial yang diterima masyarakat sebagai gambaran kondisi kesejahteraan warga."
          showInfoButton
          icon={CircleDollarSign}
        />

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-8 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0 md:gap-6">
          {bansosContent.indicators.map((indicator, index) => (
            <div key={index} className="hero-reveal w-[240px] shrink-0 snap-center sm:w-[280px] lg:w-auto" style={{ animationDelay: `${200 + index * 100}ms` }}>
              <BansosIndicatorCard indicator={indicator} />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Scroll Indicator */}
        <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
          <div className="h-1.5 w-6 rounded-full bg-[#072ac8]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
        </div>
      </section>

      {/* 2. Penerima Bantuan dan Alokasi */}
      <section className="space-y-6 sm:space-y-8 md:space-y-10">
        <SectionHeader 
          title={["Penerima Bantuan", "dan Alokasi"]}
          description="Statistik bantuan sosial Desa Sukahurip merupakan data jumlah penerima dan alokasi bantuan yang disalurkan kepada masyarakat."
          showInfoButton
          icon={BarChart3}
        />

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-8 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-2 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0 lg:gap-6">
          {bansosContent.summaries.map((summary, index) => (
            <div key={index} className="hero-reveal w-[300px] shrink-0 snap-center sm:w-[350px] lg:w-auto" style={{ animationDelay: `${300 + index * 100}ms` }}>
              <BansosAllocationCard summary={summary} />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Scroll Indicator */}
        <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
          <div className="h-1.5 w-6 rounded-full bg-[#072ac8]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
        </div>
      </section>

      {/* 3. Distribusi Bantuan per Dusun */}
      <section className="space-y-6 sm:space-y-8 md:space-y-10">
        <SectionHeader 
          title={["Distribusi Bantuan", "per Dusun"]}
          description="Distribusi Bantuan per Dusun adalah informasi mengenai penyebaran penerima bantuan sosial di setiap dusun untuk mengetahui pemerataan bantuan."
          showInfoButton
          icon={MapPin}
        />

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-8 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0 lg:gap-5">
          {bansosContent.distributions.map((dist, index) => (
            <div key={index} className="hero-reveal w-[240px] shrink-0 snap-center sm:w-[280px] lg:w-auto" style={{ animationDelay: `${400 + index * 100}ms` }}>
              <BansosDistributionCard data={dist} />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Scroll Indicator */}
        <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
          <div className="h-1.5 w-6 rounded-full bg-[#072ac8]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
        </div>
      </section>

      {/* 4. Penerima Bantuan per Jenis */}
      <section className="space-y-6 sm:space-y-8 md:space-y-10">
        <SectionHeader 
          title={["Penerima Bantuan", "per Jenis"]}
          description="Penerima Bantuan per Jenis adalah informasi jumlah warga yang menerima bantuan berdasarkan jenis program bantuan yang tersedia."
          showInfoButton
          icon={LayoutGrid}
        />

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-8 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0 md:gap-8">
          {bansosContent.benefitTypes.map((type, index) => (
            <div key={index} className="hero-reveal w-[240px] shrink-0 snap-center sm:w-[280px] lg:w-auto" style={{ animationDelay: `${500 + index * 100}ms` }}>
              <BansosBenefitTypeCard type={type} />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Scroll Indicator */}
        <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
          <div className="h-1.5 w-6 rounded-full bg-[#072ac8]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#072ac8]/10" />
        </div>
      </section>
    </div>
  )
}
