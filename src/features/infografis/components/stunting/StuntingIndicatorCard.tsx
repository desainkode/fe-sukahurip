import { LucideIcon, User, TrendingDown, Activity, Target } from 'lucide-react'
import { StuntingIndicator } from '../../types/infografis'

const iconMap: Record<string, LucideIcon> = {
  User: User,
  TrendingDown: TrendingDown,
  Activity: Activity,
  Target: Target,
}

interface StuntingIndicatorCardProps {
  indicator: StuntingIndicator
}

export function StuntingIndicatorCard({ indicator }: StuntingIndicatorCardProps) {
  const Icon = indicator.icon ? iconMap[indicator.icon] : Activity

  return (
    <div
      className={`${indicator.color} relative overflow-hidden rounded-3xl p-6 text-white shadow-xl h-full flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl group/card`}
    >
      <div className={`absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100`} />
      
      <Icon className="mb-3 text-[#FFC400] size-6 sm:size-7" />
      
      <p className="mt-1 font-timeless text-[28px] font-bold leading-none sm:text-[32px] md:text-[36px] lg:text-[40px]">
        {indicator.value}
      </p>
      
      <span className="mt-2 text-[10px] font-bold uppercase tracking-tight text-white/60 sm:text-[11px]">
        {indicator.label}
      </span>

      <p className="mt-4 text-[9px] leading-relaxed opacity-40 line-clamp-2 px-2">
        {indicator.description}
      </p>

      {/* Decorative background element */}
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
    </div>
  )
}
