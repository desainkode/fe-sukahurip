'use client'

import type { BansosAllocation } from '../../types/infografis'

interface BansosAllocationProps {
    allocations: BansosAllocation[]
}

export function BansosAllocation({ allocations }: BansosAllocationProps) {
    return (
        <div className="rounded-3xl bg-white p-6">
            <h3 className="mb-6 text-xl font-bold text-[#000418]">Penerima Bantuan dan Alokasi</h3>

            <div className="grid gap-3 md:grid-cols-3">
                {allocations.map((alloc) => (
                    <div
                        key={alloc.label}
                        className="rounded-2xl p-6 text-white"
                        style={{ backgroundColor: alloc.color }}
                    >
                        <p className="text-sm font-medium opacity-90">{alloc.label}</p>
                        <p className="mt-4 text-[32px] font-bold leading-none">{alloc.value}</p>
                        <p className="mt-3 text-xs opacity-75">Total Penerima Bantuan</p>
                    </div>
                ))}
            </div>

            {/* Additional info */}
            <div className="mt-6 rounded-2xl border border-[#FFC400]/20 bg-[#FFFCF0] p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-[#000418]">Status Penyaluran</p>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div>
                        <p className="text-2xl font-bold text-[#000E4F]">91%</p>
                        <p className="mt-1 text-xs text-[#999]">Tersalurkan</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-[#FFC400]">9%</p>
                        <p className="mt-1 text-xs text-[#999]">Proses</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-[#000E4F]">100%</p>
                        <p className="mt-1 text-xs text-[#999]">Terverifikasi</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-[#0021B3]">Aktif</p>
                        <p className="mt-1 text-xs text-[#999]">Status Data</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
