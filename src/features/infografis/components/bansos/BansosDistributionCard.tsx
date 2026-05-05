import { User } from 'lucide-react'
import { BansosDistributionData } from '../../types/infografis'

interface BansosDistributionCardProps {
  data: BansosDistributionData
}

export function BansosDistributionCard({ data }: BansosDistributionCardProps) {
  return (
    <div className="p-5 bg-linear-to-bl from-neutral-900 via-[#000E4D] to-neutral-900 rounded-2xl shadow-xl text-white flex flex-col gap-4 relative overflow-hidden group h-full transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl border border-white/5">
      <div className="flex items-center gap-3 relative z-10">
        <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md border border-white/10 transition-all group-hover:bg-[#FFC400] group-hover:text-[#000418] group-hover:rotate-12">
          <User size={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a2d6f9]/60" style={{ fontFamily: 'var(--font-timeless)' }}>Dusun</span>
          <span className="text-[17px] font-black leading-tight" style={{ fontFamily: 'var(--font-timeless)' }}>{data.dusun}</span>
        </div>
      </div>

      <p className="text-[11px] font-medium opacity-50 leading-relaxed z-10 line-clamp-2">
        {data.alokasi}
      </p>

      <div className="flex justify-between items-end mt-auto relative z-10">
        <span className="text-[#FFC400] text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5">Penerima</span>
        <div className="flex flex-col items-end">
          <span 
            className="text-5xl font-black leading-none tracking-tighter" 
            style={{ fontFamily: 'var(--font-timeless)' }}
          >
            {data.keluarga}
          </span>
          <span className="text-[#FFC400]/80 text-[10px] font-bold uppercase tracking-widest">Orang</span>
        </div>
      </div>

      {/* Subtle spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.08)_0%,_transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
