import React from "react";
import { History, Milestone } from "lucide-react";

export function HistorySection({ history, establishedYear }: { history: string, establishedYear: string }) {
  return (
    <section className="mx-auto max-w-5xl py-4 md:py-8">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 md:sticky md:top-32">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFC400]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-[#FFC400]">
              <History size={24} />
              Sejarah Desa
            </div>
            <h2 className="font-timeless text-[28px] font-bold leading-tight text-[#000418] sm:text-[32px]">
              Jejak Langkah Sejak <span className="text-[#FFC400]">{establishedYear}</span>
            </h2>
            <div className="h-1 w-20 bg-[#FFC400]" />
            <div className="relative aspect-video overflow-hidden rounded-[24px] shadow-lg sm:aspect-square sm:rounded-[32px]">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop" 
                alt="Sejarah Desa" 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="relative border-l-2 border-[#000418]/5 pl-6 space-y-12 sm:pl-8">
            <div className="relative">
              <div className="absolute -left-[33px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#000418] ring-4 ring-[#F6F6F8] sm:-left-[41px] sm:h-5 sm:w-5 sm:ring-8" />
              <div className="prose prose-lg max-w-none text-[15px] leading-relaxed text-[#000418]/70 sm:text-[17px]">
                <p>{history}</p>
              </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[32px] bg-white p-8 shadow-sm border border-[#000418]/5">
                <Milestone size={24} className="mb-4 text-[#072ac8]" />
                <h4 className="font-bold text-[#000418]">Asal Usul Nama</h4>
                <p className="mt-2 text-[14px] text-[#000418]/50 leading-relaxed">
                  Berasal dari kata "Sukahurip" yang berarti hidup sejahtera bagi para pedagang kuno.
                </p>
              </div>
              <div className="rounded-[32px] bg-white p-8 shadow-sm border border-[#000418]/5">
                <Milestone size={24} className="mb-4 text-[#072ac8]" />
                <h4 className="font-bold text-[#000418]">Titik Balik</h4>
                <p className="mt-2 text-[14px] text-[#000418]/50 leading-relaxed">
                  Tahun 1945, Desa Sukahurip menjadi basis pertahanan pejuang di wilayah selatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
