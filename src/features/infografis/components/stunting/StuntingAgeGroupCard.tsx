import { User } from 'lucide-react'
import { StuntingPrevalenceData } from '../../types/infografis'

interface StuntingAgeGroupCardProps {
  data: StuntingPrevalenceData
}

export function StuntingAgeGroupCard({ data }: StuntingAgeGroupCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-linear-to-b from-[#000418] to-[#000E4F] p-5 text-white shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
          <User size={24} className="opacity-90" />
        </div>
        <span className="text-[11px] font-semibold opacity-90 uppercase tracking-widest">
          {data.ageGroup}
        </span>
      </div>

      <div className="flex items-end justify-between gap-4">
        <span
          className="text-4xl font-bold leading-none tracking-tight font-timeless"
        >
          {data.count}
        </span>
        <p className="text-[9px] leading-relaxed opacity-60 max-w-[100px] mb-1">
          {data.description}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-linear-to-r from-[#1e96fc] to-[#001EA3]"
            style={{ width: '75%' }}
          />
        </div>
        <div className="flex items-center justify-between text-[10px] font-medium">
          <span className="text-[#FFC400]">Target : {data.targetPercentage}</span>
        </div>
      </div>
    </div>
  )
}
