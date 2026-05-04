import { ShoppingBag, Landmark, HardHat, Users, Sprout, ShieldAlert } from 'lucide-react'
import { BelanjaCardPrimary } from './BelanjaCardPrimary'
import { BelanjaCardSecondary } from './BelanjaCardSecondary'
import { SectionHeader } from '../../../home/components/ui/SectionHeader'

export function BelanjaDesaSection() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeader 
        title={["Belanja", "Desa"]}
        description="Belanja desa merupakan rincian pengeluaran dana yang dialokasikan untuk membiayai berbagai program prioritas, termasuk pembangunan infrastruktur, pelayanan publik, dan pemberdayaan masyarakat guna mewujudkan kemajuan desa."
        showInfoButton
        icon={ShoppingBag}
      />

      <div className="relative mt-4 grid items-stretch gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a2d6f9]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#0020B1]/10 blur-[110px]" />

        {/* Card 1: Primary (Green) */}
        <div className="hero-reveal relative z-10" style={{ animationDelay: '300ms' }}>
          <BelanjaCardPrimary />
        </div>

        {/* Card 2: Pemerintahan Desa */}
        <div className="hero-reveal relative z-10" style={{ animationDelay: '380ms' }}>
          <BelanjaCardSecondary
            title="Pemerintahan"
            value="Rp. 300.000"
            description="Penyelenggaraan tata praja pemerintahan, operasional, dan pelayanan administrasi publik desa."
            percentage={30}
            icon={<Landmark size={24} />}
          />
        </div>

        {/* Card 3: Pembangunan Desa */}
        <div className="hero-reveal relative z-10" style={{ animationDelay: '460ms' }}>
          <BelanjaCardSecondary
            title="Pembangunan"
            value="Rp. 400.000"
            description="Pengadaan infrastruktur dan fasilitas fisik berkelanjutan untuk kemajuan wilayah."
            percentage={40}
            icon={<HardHat size={24} />}
          />
        </div>

        {/* Card 4: Pembinaan Kemasyarakatan */}
        <div className="hero-reveal relative z-10" style={{ animationDelay: '540ms' }}>
          <BelanjaCardSecondary
            title="Pembinaan"
            value="Rp. 100.000"
            description="Pembinaan pemuda, kesenian, olahraga, dan kegiatan sosial untuk kerukunan warga."
            percentage={10}
            icon={<Users size={24} />}
          />
        </div>

        {/* Card 5: Pemberdayaan Masyarakat */}
        <div className="hero-reveal relative z-10" style={{ animationDelay: '620ms' }}>
          <BelanjaCardSecondary
            title="Pemberdayaan"
            value="Rp. 100.000"
            description="Peningkatan kapasitas keterampilan dan dukungan ekonomi produktif masyarakat."
            percentage={10}
            icon={<Sprout size={24} />}
          />
        </div>

        {/* Card 6: Penanggulangan Bencana */}
        <div className="hero-reveal relative z-10" style={{ animationDelay: '700ms' }}>
          <BelanjaCardSecondary
            title="Bencana/Darurat"
            value="Rp. 100.000"
            description="Dana cadangan untuk penanggulangan keadaan darurat dan bencana mendesak di desa."
            percentage={10}
            icon={<ShieldAlert size={24} />}
          />
        </div>
      </div>
    </div>
  )
}
