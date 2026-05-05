import { LucideIcon, HandHelping, Package, Banknote, HeartHandshake } from 'lucide-react'
import { BansosIndicator } from '../../types/infografis'

const iconMap: Record<string, LucideIcon> = {
  'Total Penerima Bansos': HandHelping,
  'Jenis Bantuan': Package,
  'Total Anggaran Tahunan': Banknote,
  'Jumlah Program Bantuan': HeartHandshake,
}

interface BansosIndicatorCardProps {
  indicator: BansosIndicator
}

export function BansosIndicatorCard({ indicator }: BansosIndicatorCardProps) {
  const Icon = iconMap[indicator.label] || HandHelping

  return (
    <div className={`relative overflow-hidden p-6 rounded-3xl ${indicator.color} shadow-2xl text-white group hover:-translate-y-1.5 transition-all duration-500`}>
      {/* Decorative background element */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-transform group-hover:scale-150" />
      
      <div className="relative z-10 flex flex-col h-full gap-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 shadow-xl backdrop-blur-xl transition-all group-hover:rotate-6">
            <Icon 
              size={28} 
              className={indicator.label === 'Jumlah Program Bantuan' ? 'text-[#001260]' : 'text-[#FFC400]'} 
            />
          </div>
          <h3 className={`text-lg font-black leading-[1.1] tracking-tight font-timeless text-white`}>
            {indicator.label}
          </h3>
        </div>

        <div className={`flex flex-col gap-4 text-white`}>
          <div className="flex items-baseline gap-1">
            <span className="text-6xl font-black tracking-tighter font-timeless">
              {indicator.value}
            </span>
            <span className={`text-sm font-bold uppercase tracking-widest ${indicator.label === 'Jumlah Program Bantuan' ? 'text-[#001260]' : 'text-[#FFC400]/80'}`}>
              {indicator.unit}
            </span>
          </div>
          
          <p className={`text-[11px] font-medium leading-relaxed line-clamp-2 text-white/80`}>
            {indicator.description}
          </p>
        </div>
      </div>
    </div>
  )
}
