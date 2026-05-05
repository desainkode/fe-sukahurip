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
      className={`${indicator.color} relative overflow-hidden rounded-3xl p-6 text-white shadow-xl h-full flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl group border border-white/5`}
    >
      <div className={`absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 shadow-inner backdrop-blur-md transition-all group-hover:rotate-6 group-hover:scale-110">
          <Icon className="text-[#FFC400] size-6" />
        </div>
        
        <p className="font-timeless text-4xl font-black leading-none tracking-tighter sm:text-5xl">
          {indicator.value}
        </p>
        
        <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#a2d6f9] sm:text-[11px]">
          {indicator.label}
        </span>

        <p className="mt-4 text-[11px] font-medium leading-relaxed opacity-60 line-clamp-2 px-2 max-w-[200px]">
          {indicator.description}
        </p>
      </div>

      {/* Decorative background element */}
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-transform duration-700 group-hover:scale-150" />
    </div>
  )
}
