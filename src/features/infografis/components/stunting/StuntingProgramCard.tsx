import { CheckCircle2 } from 'lucide-react'
import { StuntingProgramData } from '../../types/infografis'

interface StuntingProgramCardProps {
  program: StuntingProgramData
}

export function StuntingProgramCard({ program }: StuntingProgramCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/40 bg-linear-to-br from-[#E0E0E0] to-[#C0C0C0] p-6 shadow-xl shadow-black/5">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold leading-tight text-[#000418] max-w-[160px]">
          {program.name}
        </h3>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc600]/20 text-[#ffc600]">
          <CheckCircle2 size={24} />
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <p className="text-[10px] leading-relaxed text-[#000418]/60 max-w-[140px]">
          {program.description}
        </p>
        <div className="text-right">
          <div className="flex items-baseline justify-end gap-0.5">
            <span className="text-4xl font-bold text-[#000418] font-timeless">
              {program.coverage}
            </span>
            <span className="text-2xl font-bold text-[#000418]">%</span>
          </div>
          <p className="text-[8px] font-medium uppercase tracking-wider text-[#000418]/40">
            Cakupan
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-[9px] font-semibold text-[#000418]/50">
          {program.target}
        </p>
        <div className="h-2 w-full overflow-hidden rounded-full bg-black/5">
          <div
            className="h-full bg-linear-to-r from-[#5666AD] via-[#FFC400] to-[#FDC200]"
            style={{ width: `${program.coverage}%` }}
          />
        </div>
      </div>
    </div>
  )
}
