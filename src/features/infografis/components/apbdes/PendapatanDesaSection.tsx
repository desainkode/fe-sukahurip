import { Landmark } from 'lucide-react'
import { PendapatanInfoCard } from './PendapatanInfoCard'
import { PendapatanChart } from './PendapatanChart'
import { pendapatanCards } from '../../config/apbdes-data'
import { SectionHeader } from '../../../home/components/ui/SectionHeader'

export function PendapatanDesaSection() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeader 
        title={["Pendapatan", "Desa"]}
        description="Pendapatan desa merupakan rangkuman sumber penerimaan yang digunakan untuk membiayai penyelenggaraan pemerintahan, pembangunan, pembinaan masyarakat, dan pemberdayaan warga secara berkelanjutan."
        showInfoButton
        icon={Landmark}
      />

      <div className="relative flex flex-col gap-8 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-12 xl:gap-16">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a2d6f9]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#0020B1]/10 blur-[110px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(30,150,252,0.05)_0%,transparent_70%)]" />

        {/* Chart first on Mobile/Tablet */}
        <div className="order-1 relative z-10 flex flex-col items-center justify-center rounded-[28px] border border-white/10 bg-[linear-gradient(160deg,rgba(0,14,79,0.98)_0%,rgba(7,42,200,0.96)_55%,rgba(0,4,24,0.99)_100%)] p-6 shadow-[0_14px_28px_rgba(0,0,0,0.14)] backdrop-blur-md sm:p-8 md:order-2 md:p-6 lg:p-8">
          <PendapatanChart delayMs={220} />
        </div>

        {/* Cards second on Mobile/Tablet */}
        <div className="order-2 relative z-10 md:order-1">
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:-mx-6 sm:px-6 md:-mx-7 md:px-7 lg:mx-0 lg:grid lg:grid-cols-2 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 lg:gap-5">
            {pendapatanCards.map((item, idx) => (
              <div key={item.nama} className="w-[260px] shrink-0 snap-center lg:w-auto">
                <PendapatanInfoCard
                  nama={item.nama}
                  deskripsi={item.deskripsi}
                  nominal={item.nominal}
                  persentase={item.persentase}
                  icon={item.icon}
                  delayMs={120 + idx * 70}
                />
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Scroll Indicator */}
          <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
            <div className="h-1.5 w-6 rounded-full bg-white/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
            <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  )
}
