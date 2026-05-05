import { User } from 'lucide-react'
import { StuntingPrevalenceData } from '../../types/infografis'

interface StuntingAgeGroupCardProps {
  data: StuntingPrevalenceData
}

export function StuntingAgeGroupCard({ data }: StuntingAgeGroupCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-[#000418] to-[#000E4F] p-6 text-white shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl border border-white/5 group">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 transition-all group-hover:rotate-6 group-hover:bg-[#FFC400] group-hover:text-[#000418]">
          <User size={20} className="transition-colors" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a2d6f9]/60">Kelompok</span>
          <span className="text-[15px] font-black leading-tight tracking-tight uppercase">
            {data.ageGroup}
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span
            className="text-5xl font-black leading-none tracking-tighter font-timeless"
          >
            {data.count}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC400]">Jiwa</span>
        </div>
        <p className="text-[11px] font-medium leading-relaxed opacity-50 max-w-[120px] mb-1">
          {data.description}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full bg-linear-to-r from-[#FFC400] to-[#FDC200] transition-all duration-1000 group-hover:opacity-80"
            style={{ width: '75%' }}
          />
        </div>
        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
          <span className="text-[#a2d6f9]/50">Target Pemerintah</span>
          <span className="text-[#FFC400]">{data.targetPercentage}</span>
        </div>
      </div>
    </div>
  )
}
