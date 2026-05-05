import { ArrowUpRight, Briefcase, ChevronRight } from 'lucide-react'

export function BelanjaCardSplit() {
  return (
    <article className="hero-reveal group relative flex h-full flex-col rounded-[28px] bg-[linear-gradient(160deg,rgba(0,14,79,0.98)_0%,rgba(7,42,200,0.96)_55%,rgba(0,4,24,0.99)_100%)] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.2)]">
      <div className="pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-[#a2d6f9]/10 blur-3xl transition-all duration-500 group-hover:bg-[#a2d6f9]/18" />

      {/* Top Section (Light) */}
      <div className="relative z-10 flex flex-col rounded-[22px] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4F5F8] text-[#000418]">
              <Briefcase size={24} strokeWidth={2.4} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E9ECF8] px-2.5 py-1 text-[11px] font-bold text-[#001EA1]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a2d6f9]" />
                Realisasi: Rp. 500.000 (50%)
              </div>
              <h3 className="mt-1.5 font-[Georgia,serif] text-[20px] font-bold text-[#000418] sm:text-[22px]">
                Belanja per Bidang
              </h3>
            </div>
          </div>
          
          <button
            type="button"
            aria-label="Detail belanja per bidang"
            className="inline-flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full bg-[#000418] text-[#a2d6f9] shadow-[0_4px_10px_rgba(0,4,24,0.3)] transition-transform duration-300 hover:scale-105"
          >
            <ArrowUpRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-auto flex items-end gap-2 pt-4">
          <p className="text-[28px] font-bold leading-none tracking-tight text-[#000418] sm:text-[32px]" style={{ fontFamily: 'var(--font-timeless)' }}>
            Rp. 1.000.000
          </p>
          <span className="mb-1 text-[12px] font-bold uppercase tracking-wider text-[#000418]/50">Total</span>
        </div>
      </div>

      {/* Bottom Section (Dark) */}
      <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[13px] leading-relaxed text-white/80">
          Pembiayaan tiap bidang difokuskan pada prioritas pembangunan dan kebutuhan desa.
        </p>
        
        <button className="group/btn mt-auto inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 pt-4 text-[12px] font-bold text-white transition-all hover:bg-white/10 hover:pr-3">
          Lihat selengkapnya
          <ChevronRight size={24} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </article>
  )
}
