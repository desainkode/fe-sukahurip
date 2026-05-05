import { ArrowUpRight } from 'lucide-react'
import { BansosAllocation } from '../../types/infografis'

interface BansosAllocationCardProps {
  summary: BansosAllocation
}

export function BansosAllocationCard({ summary }: BansosAllocationCardProps) {
  const isGradient = summary.color.includes('via')

  return (
    <div className={`p-6 h-60 rounded-3xl shadow-xl text-white flex gap-5 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isGradient ? `bg-linear-to-bl ${summary.color}` : summary.color}`}>
      {/* Background Decorative Blob */}
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/5 blur-3xl transition-transform duration-700 group-hover:scale-150" />
      
      {/* Left Content */}
      <div className="flex flex-col justify-between flex-1 relative z-10">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-black leading-[1.1] tracking-tight font-timeless">
            {summary.label}
          </h3>
          <p className="text-[11px] font-medium opacity-70 leading-relaxed max-w-[160px]">
            {summary.description}
          </p>
        </div>
        
        <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:bg-[#FFC400] group-hover:text-[#000418] group-hover:rotate-45">
          <ArrowUpRight size={20} className="transition-transform" />
        </div>
      </div>

      {/* Right Content (Number Box) */}
      <div className="w-[45%] h-full bg-white/10 rounded-2xl flex flex-col items-center justify-center backdrop-blur-xl border border-white/10 relative z-10 p-4 transition-all duration-500 group-hover:bg-white/20">
        <div className="flex flex-col items-start w-full gap-1">
          {summary.unit === 'RP.' && (
            <span className="text-[10px] font-bold tracking-widest text-[#FFC400] font-timeless">RUPIAH</span>
          )}
          <span 
            className="text-5xl md:text-6xl font-black leading-none tracking-tighter font-timeless" 
          >
            {summary.value}
          </span>
          {summary.unit === 'Orang' && (
            <span className="text-[10px] font-bold tracking-widest text-[#FFC400] font-timeless uppercase">Jiwa</span>
          )}
        </div>
      </div>

      {/* Subtle spotlight for gradient cards */}
      {isGradient && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </div>
  )
}
