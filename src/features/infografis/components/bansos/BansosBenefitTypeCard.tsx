import { Users } from 'lucide-react'
import { BansosBenefitType } from '../../types/infografis'

interface BansosBenefitTypeCardProps {
  type: BansosBenefitType
}

export function BansosBenefitTypeCard({ type }: BansosBenefitTypeCardProps) {
  const isDark = type.color.includes('emerald') || type.color.includes('teal') || type.color.includes('green') || type.color.includes('900') || type.color.includes('700') || type.color.includes('600')
  const textColor = isDark ? 'text-white' : 'text-black'
  const iconBg = isDark ? 'bg-white/10' : 'bg-black/5'

  return (
    <div className={`p-8 ${type.color} rounded-3xl rounded-tr-[100px] rounded-bl-[100px] shadow-2xl flex flex-col justify-between h-[400px] relative overflow-hidden group transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2`}>
      {/* Dynamic Background Elements */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-1000 group-hover:scale-150 group-hover:bg-white/20" />
      <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-black/10 blur-2xl transition-all duration-1000 group-hover:scale-150 group-hover:bg-black/20" />

      <div className="flex flex-col gap-8 relative z-10">
        <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-desa-yellow-500 group-hover:text-desa-blue-950`}>
          <Users size={28} className={textColor + " transition-colors duration-500 group-hover:text-desa-blue-950"} />
        </div>

        <div className="flex flex-col items-start gap-6">
          <div className="px-4 py-1.5 bg-[#000418] rounded-full flex items-center gap-2.5 shadow-lg">
            <div className="w-2.5 h-2.5 bg-[#FDC200] rounded-full animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white">Data Penerima</span>
          </div>
          
          <div className="flex flex-col gap-1">
            <span 
              className={`text-7xl md:text-8xl font-black leading-none tracking-tighter ${textColor} opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2`} 
              style={{ fontFamily: 'var(--font-timeless)' }}
            >
              {type.count}
            </span>
            <h3 className={`text-2xl md:text-3xl font-black tracking-tight ${textColor} leading-[1.1]`} style={{ fontFamily: 'var(--font-timeless)' }}>
              {type.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-auto text-right relative z-10">
        <div className={`inline-block border-r-4 border-desa-yellow-500 pr-3 transition-all duration-500 group-hover:pr-4`}>
          <p className={`text-[10px] leading-tight font-black uppercase tracking-widest opacity-60 ${textColor}`}>
            Terdata<br />Sistem Desa
          </p>
        </div>
      </div>
    </div>
  )
}
