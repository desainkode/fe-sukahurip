import { stuntingContent } from '../config/infografis-content'
import { StuntingIndicatorCard } from './stunting/StuntingIndicatorCard'
import { StuntingAgeGroupCard } from './stunting/StuntingAgeGroupCard'
import { StuntingProgramCard } from './stunting/StuntingProgramCard'
import { StuntingBarChart } from './stunting/StuntingBarChart'
import { Activity, Share2, TrendingUp, ClipboardList } from 'lucide-react'
import { SectionHeader } from '../../home/components/ui/SectionHeader'

export function StuntingSection() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-4 py-6 md:space-y-24 md:px-0 md:py-8">
      {/* Statistik Stunting Section */}
      <section className="space-y-10">
        <SectionHeader 
          title={["Statistik", "Stunting"]}
          description={stuntingContent.description}
          showInfoButton
          icon={Activity}
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {stuntingContent.indicators.map((indicator, index) => (
            <div key={index} className="hero-reveal" style={{ animationDelay: `${200 + index * 100}ms` }}>
              <StuntingIndicatorCard indicator={indicator} />
            </div>
          ))}
        </div>
      </section>

      {/* Prevalensi Usia Section */}
      <section className="space-y-10">
        <SectionHeader 
          title={["Prevalensi", "Usia"]}
          description="Prevalensi Usia merupakan persentase kasus stunting yang dihitung berdasarkan kelompok usia tertentu, sebagai gambaran tingkat kejadian pada setiap rentang umur anak di suatu wilayah."
          showInfoButton
          icon={Share2}
        />

        <div className="overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 w-max min-w-full">
            {stuntingContent.prevalenceByAge?.map((data, index) => (
              <div key={index} className="hero-reveal w-[200px] shrink-0 sm:w-[260px]" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <StuntingAgeGroupCard data={data} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tren Stunting Section */}
      <section className="space-y-10">
        <SectionHeader 
          title={["Tren", "Stunting"]}
          description="Gambaran perubahan persentase stunting dalam suatu wilayah dari waktu ke waktu, yang menunjukkan peningkatan atau penurunan angka kejadian stunting."
          showInfoButton
          icon={TrendingUp}
        />

        {stuntingContent.trendData && (
          <div className="hero-reveal" style={{ animationDelay: "400ms" }}>
            <StuntingBarChart data={stuntingContent.trendData} />
          </div>
        )}
      </section>

      {/* Program Stunting Section */}
      <section className="space-y-10">
        <SectionHeader 
          title={["Program", "Stunting"]}
          description="Merupakan rangkaian kegiatan dan upaya yang dilaksanakan untuk mencegah dan menurunkan angka stunting melalui peningkatan gizi, pelayanan kesehatan, serta edukasi kepada masyarakat."
          showInfoButton
          icon={ClipboardList}
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {stuntingContent.programs?.map((program, index) => (
            <div key={index} className="hero-reveal" style={{ animationDelay: `${500 + index * 100}ms` }}>
              <StuntingProgramCard program={program} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
