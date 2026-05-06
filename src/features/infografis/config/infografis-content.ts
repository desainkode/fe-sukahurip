import type {
  InfografisTab,
  HeroContent,
  PendudukSectionContent,
  ApbdesSectionContent,
  BansosSectionContent,
  StuntingSectionContent,
  IdmSectionContent,
  SdgsSectionContent,
  InfografisKey,
} from '../types/infografis'

// ============================================================================
// TAB DEFINITIONS
// ============================================================================

export const infografisTabs: InfografisTab[] = [
  { key: 'penduduk', label: 'Penduduk' },
  { key: 'apbdes', label: 'APBDes' },
  { key: 'stunting', label: 'Stunting' },
  { key: 'bansos', label: 'Bansos' },
  { key: 'idm', label: 'IDM' },
  { key: 'sdgs', label: 'SDGs' },
]

// ============================================================================
// HERO CONTENT BY FEATURE
// ============================================================================

export const heroContentByFeature: Record<InfografisKey, HeroContent> = {
  penduduk: {
    eyebrow: 'Data Kependudukan',
    titleLines: ['Membangun Desa,', 'Penduduk Lebih', 'Tertata'],
    description:
      'Ringkasan data kependudukan yang rapi dan mudah dibaca untuk mendukung layanan publik, analisis usia, dan perencanaan pembangunan.',
    stats: [
      { label: 'Penduduk', value: '3.542' },
      { label: 'Kepala Keluarga', value: '1.087' },
      { label: 'Dusun', value: '4' },
    ],
    quoteName: 'Kepala Desa',
    quoteRole: 'Majang Dudi Budiana',
    quoteText:
      'Data penduduk yang akurat adalah fondasi perencanaan pembangunan yang tepat.',
  },
  apbdes: {
    eyebrow: 'Keuangan Desa',
    titleLines: ['Anggaran Desa,', 'Transparan &', 'Akuntabel'],
    description:
      'Penyajian APBDes secara detail untuk memastikan pengelolaan anggaran desa yang transparan dan sesuai dengan regulasi yang berlaku.',
    stats: [
      { label: 'Pendapatan', value: '3,54 M' },
      { label: 'Belanja', value: '3,10 M' },
      { label: 'SiLPA', value: '440 Jt' },
    ],
    quoteName: 'Bendahara Desa',
    quoteRole: 'Petugas Keuangan',
    quoteText:
      'Transparansi keuangan adalah komitmen kami kepada masyarakat desa.',
  },
  stunting: {
    eyebrow: 'WEBSITE RESMI PEMERINTAH DESA',
    titleLines: ['Data Stunting,', 'Pantau Tumbuh', 'Kembang Anak'],
    description:
      'Statistik Stunting Desa Sukahurip merupakan data jumlah dan persentase balita yang mengalami stunting sebagai gambaran kondisi gizi dan pertumbuhan anak.',
    stats: [
      { label: 'Balita', value: '3.542' },
      { label: 'Stunting', value: '3.542' },
      { label: 'Prevalensi', value: '3.542' },
    ],
    quoteName: 'Petugas Kesehatan',
    quoteRole: 'Puskesmas Desa',
    quoteText:
      'Anak yang sehat adalah investasi masa depan desa yang lebih baik.',
  },
  bansos: {
    eyebrow: 'Website Resmi Pemerintah Desa',
    titleLines: ['Bantuan Sosial,', 'Amanah &', 'Tepat Sasaran'],
    description:
      'Ringkasan Bantuan Sosial Desa Sukahurip merupakan data jumlah dan jenis bantuan sosial yang diterima masyarakat sebagai gambaran kondisi kesejahteraan warga serta dasar perencanaan dan penyaluran bantuan di desa.',
    stats: [
      { label: 'Penerima', value: '3.542' },
      { label: 'Kepala Keluarga', value: '1.087' },
      { label: 'Dusun', value: '4' },
    ],
    quoteName: 'Koordinator Bansos',
    quoteRole: 'Aparatur Desa',
    quoteText:
      'Setiap program bansos harus menyentuh mereka yang paling membutuhkan.',
  },
  idm: {
    eyebrow: 'Indeks Pembangunan',
    titleLines: ['Ukur Kemajuan,', 'Rencanakan', 'Masa Depan'],
    description:
      'Indeks Desa Membangun sebagai alat evaluasi komprehensif untuk mengetahui status pembangunan desa dan area yang perlu ditingkatkan.',
    stats: [
      { label: 'Status', value: 'Maju' },
      { label: 'Skor', value: '0,792' },
      { label: 'Fokus', value: 'Layanan' },
    ],
    quoteName: 'Kepala Desa',
    quoteRole: 'Majang Dudi Budiana',
    quoteText:
      'Dengan data IDM, kita tahu kemana desa harus berkembang ke depannya.',
  },
  sdgs: {
    eyebrow: 'Pembangunan Berkelanjutan',
    titleLines: ['SDGs Desa,', 'Komitmen untuk', 'Masa Depan'],
    description:
      'Pelacakan pencapaian SDGs di level desa untuk mendukung agenda pembangunan berkelanjutan dan meningkatkan kualitas hidup masyarakat.',
    stats: [
      { label: 'Indikator', value: '17' },
      { label: 'Prioritas', value: '6' },
      { label: 'Progress', value: '72%' },
    ],
    quoteName: 'Tim SDGs',
    quoteRole: 'Pendamping Desa',
    quoteText:
      'Pembangunan berkelanjutan adalah tanggung jawab bersama kita semua.',
  },
}

// ============================================================================
// PENDUDUK SECTION DATA
// ============================================================================

export const pendudukContent: PendudukSectionContent = {
  title: 'Demografi Penduduk',
  description:
    'Data demografi desa yang lengkap dan akurat untuk mendukung perencanaan pembangunan yang tepat sasaran.',
  cards: [
    {
      label: 'Total\nPenduduk',
      value: '3.542',
      unit: 'jiwa',
      icon: 'Users',
    },
    {
      label: 'Total\nDusun',
      value: '4',
      unit: 'dusun',
      icon: 'House',
    },
    {
      label: 'Total\nKepala Keluarga',
      value: '1.087',
      unit: 'kk',
      icon: 'Building2',
    },
    {
      label: 'Total\nWilayah RT/RW',
      value: '12/5',
      unit: 'wilayah',
      icon: 'MapPinned',
    },
  ],
}

// ============================================================================
// APBDES SECTION DATA
// ============================================================================

export const apbdesContent: ApbdesSectionContent = {
  title: 'APBDes Tahun 2026',
  description:
    'Rincian Anggaran Pendapatan dan Belanja Desa untuk periode tahun anggaran 2026.',
  statistics: [
    { label: 'Pendapatan', value: '3,54 M' },
    { label: 'Belanja', value: '3,10 M' },
    { label: 'SiLPA', value: '440 Jt' },
  ],
}

// ============================================================================
// BANSOS SECTION DATA
// ============================================================================

export const bansosContent: BansosSectionContent = {
  title: 'Bantuan Sosial',
  description: 'Ringkasan Bantuan Sosial Desa Sukahurip merupakan data jumlah and jenis bantuan sosial yang diterima masyarakat sebagai gambaran kondisi kesejahteraan warga serta dasar perencanaan and penyaluran bantuan di desa.',
  indicators: [
    {
      label: 'Total Penerima Bansos',
      value: '10',
      unit: 'Jiwa',
      description: 'Jumlah keseluruhan masyarakat yang menerima bantuan sosial di desa.',
      color: 'bg-linear-to-br from-[#072ac8] via-[#1e96fc] to-[#072ac8]',
    },
    {
      label: 'Jenis Bantuan',
      value: '10',
      unit: 'Program',
      description: 'Total program bantuan sosial yang dijalankan di desa.',
      color: 'bg-linear-to-br from-[#000418] via-[#072ac8] to-[#000418]',
    },
    {
      label: 'Total Anggaran Tahunan',
      value: '10',
      unit: 'Miliar',
      description: 'Jumlah dana dialokasikan untuk program bantuan sosial selama satu tahun.',
      color: 'bg-linear-to-br from-[#072ac8] via-[#FFC400] to-[#072ac8]',
    },
    {
      label: 'Jumlah Program Bantuan',
      value: '10',
      unit: 'Program',
      description: 'Jumlah keseluruhan masyarakat yang menerima bantuan sosial di desa.',
      color: 'bg-linear-to-br from-[#FFC400] via-[#FCC100] to-[#FFC400]',
    },
  ],
  summaries: [
    {
      label: 'Penerima Aktif',
      value: '3.542',
      unit: 'Orang',
      description: 'Jumlah warga yang masih terdaftar sebagai penerima bantuan sosial.',
      color: 'from-[#072ac8] via-[#000418] to-[#072ac8]',
    },
    {
      label: 'Penerima Baru',
      value: '3.542',
      unit: 'Orang',
      description: 'Jumlah warga yang baru terdaftar sebagai penerima bantuan.',
      color: 'from-[#000418] via-[#072ac8] to-[#000418]',
    },
    {
      label: 'Alokasi Bantuan',
      value: '3.542',
      unit: 'RP.',
      description: 'Jumlah anggaran bantuan yang dialokasikan untuk masyarakat.',
      color: 'from-[#072ac8] via-[#FFC400] to-[#072ac8]',
    },
    {
      label: 'Bantuan Tersalurkan',
      value: '3.542',
      unit: 'RP.',
      description: 'Jumlah bantuan yang telah disalurkan kepada penerima.',
      color: 'from-[#FFC400] via-[#FCC100] to-[#FFC400]',
    },
    {
      label: 'Sisa Alokasi Bantuan',
      value: '3.542',
      unit: 'RP.',
      description: 'Sisa anggaran bantuan yang belum disalurkan.',
      color: 'from-[#000418] via-[#1e96fc] to-[#000418]',
    },
    {
      label: 'Total Penerima',
      value: '3.542',
      unit: 'RP.',
      description: 'Jumlah keseluruhan warga yang menerima bantuan sosial.',
      color: 'from-[#072ac8] via-[#1e96fc] to-[#072ac8]',
    },
  ],
  distributions: [
    { 
      dusun: 'Darmacaang', 
      keluarga: 3542, 
      alokasi: 'Menampilkan jumlah penerima bantuan sosial yang berada di Dusun Darmacaang',
      color: 'from-[#072ac8] via-[#000418] to-[#072ac8]'
    },
    { 
      dusun: 'Mekarsari', 
      keluarga: 3542, 
      alokasi: 'Menampilkan jumlah penerima bantuan sosial yang berada di Dusun Mekarsari',
      color: 'from-[#000418] via-[#072ac8] to-[#000418]'
    },
    { 
      dusun: 'Cibiru', 
      keluarga: 3542, 
      alokasi: 'Menampilkan jumlah penerima bantuan sosial yang berada di Dusun Cibiru',
      color: 'from-[#072ac8] via-[#FFC400] to-[#072ac8]'
    },
    { 
      dusun: 'Sukamaju', 
      keluarga: 3542, 
      alokasi: 'Menampilkan jumlah penerima bantuan sosial yang berada di Dusun Sukamaju',
      color: 'from-[#FFC400] via-[#FCC100] to-[#FFC400]'
    },
    { 
      dusun: 'Dago', 
      keluarga: 3542, 
      alokasi: 'Menampilkan jumlah penerima bantuan sosial yang berada di Dusun Dago',
      color: 'from-[#000418] via-[#1e96fc] to-[#000418]'
    },
  ],
  benefitTypes: [
    { name: 'PKH', count: '3.542', color: 'bg-linear-to-br from-[#072ac8] via-[#000418] to-[#072ac8]' },
    { name: 'BPMT', count: '3.542', color: 'bg-linear-to-br from-[#FFC400] via-[#FCC100] to-[#FFC400]' },
    { name: 'BLT', count: '3.542', color: 'bg-linear-to-br from-[#000418] via-[#072ac8] to-[#000418]' },
    { name: 'Sembako', count: '3.542', color: 'bg-linear-to-br from-[#072ac8] via-[#1e96fc] to-[#072ac8]' },
    { name: 'Beasiswa', count: '3.542', color: 'bg-linear-to-br from-[#000418] via-[#1e96fc] to-[#000418]' },
    { name: 'Rutilahu', count: '3.542', color: 'bg-linear-to-br from-[#072ac8] via-[#FFC400] to-[#072ac8]' },
  ],
}

// ============================================================================
// STUNTING SECTION DATA
// ============================================================================

export const stuntingContent: StuntingSectionContent = {
  title: 'Statistik Stunting',
  description:
    'Statistik Stunting Desa Sukahurip merupakan data jumlah dan persentase balita yang mengalami stunting sebagai gambaran kondisi gizi dan pertumbuhan anak, yang menjadi dasar perencanaan program kesehatan dan pencegahan stunting di desa.',
  indicators: [
    {
      label: 'Total Anak',
      value: '3.542',
      description: 'Jumlah keseluruhan anak yang menjadi sasaran pendataan di desa.',
      icon: 'User',
      color: 'bg-linear-to-br from-[#072ac8] via-[#1e96fc] to-[#072ac8]',
    },
    {
      label: 'Anak Stunting',
      value: '3.542',
      description: 'Jumlah anak yang terdata mengalami stunting di desa.',
      icon: 'TrendingDown',
      color: 'bg-linear-to-br from-[#000418] via-[#072ac8] to-[#000418]',
    },
    {
      label: 'Prevalensi',
      value: '3.542',
      description: 'Anak stunting dibandingkan dengan total anak yang didata.',
      icon: 'Activity',
      color: 'bg-linear-to-br from-[#072ac8] via-[#FFC400] to-[#072ac8]',
    },
    {
      label: 'Target',
      value: '3.542',
      description: 'Target penurunan angka stunting dalam periode tertentu.',
      icon: 'Target',
      color: 'bg-linear-to-br from-[#FFC400] via-[#FCC100] to-[#FFC400]',
    },
  ],
  prevalenceByAge: [
    {
      ageGroup: '0-6 bulan',
      count: '3.542',
      targetPercentage: '14,0%',
      description: 'Kelompok usia bayi sejak lahir hingga 6 bulan.',
    },
    {
      ageGroup: '6-12 bulan',
      count: '3.542',
      targetPercentage: '14,0%',
      description: 'Kelompok usia bayi 6 bulan hingga 12 bulan.',
    },
    {
      ageGroup: '1-2 tahun',
      count: '3.542',
      targetPercentage: '14,0%',
      description: 'Kelompok usia bayi 1 tahun hingga 2 tahun.',
    },
    {
      ageGroup: '2-3 tahun',
      count: '3.542',
      targetPercentage: '14,0%',
      description: 'Kelompok usia bayi 2 tahun hingga 3 tahun.',
    },
    {
      ageGroup: '3-5 tahun',
      count: '3.542',
      targetPercentage: '14,0%',
      description: 'Kelompok usia bayi 3 tahun hingga 5 tahun.',
    },
  ],
  trendData: [
    { year: '2018', prevalence: 65 },
    { year: '2019', prevalence: 45 },
    { year: '2020', prevalence: 92 },
    { year: '2021', prevalence: 88 },
    { year: '2022', prevalence: 67 },
    { year: '2023', prevalence: 90 },
    { year: '2024', prevalence: 82 },
    { year: '2025', prevalence: 50 },
    { year: '2026', prevalence: 98 },
    { year: '2027', prevalence: 63 },
  ],
  programs: [
    {
      name: 'Posyandu Rutin Bulanan',
      coverage: 36,
      description: 'Pelayanan kesehatan ibu dan anak setiap bulan.',
      target: '275/227 sasaran',
    },
    {
      name: 'Tablet Tambah Darah',
      coverage: 66,
      description: 'Suplemen zat besi untuk mencegah dan mengatasi anemia.',
      target: '75/53 sasaran',
    },
    {
      name: 'Penyuluhan Gizi Keluarga',
      coverage: 26,
      description: 'Kegiatan edukasi tentang pemenuhan gizi seimbang bagi keluarga.',
      target: '147/118 sasaran',
    },
    {
      name: 'Program PMT Balita',
      coverage: 88,
      description: 'Pemberian Makanan Tambahan untuk menunjang gizi balita.',
      target: '312/275 sasaran',
    },
  ],
}

// ============================================================================
// IDM SECTION DATA
// ============================================================================

export const idmContent: IdmSectionContent = {
  title: 'Indeks Desa Membangun',
  description:
    'Ringkasan status perkembangan desa berdasarkan skor IDM, kategori kemajuan, dan ruang perbaikan utama yang perlu ditindaklanjuti.',
  villageName: 'Sukahurip',
  district: 'Cigedug',
  regency: 'Garut',
  year: 2024,
  currentScore: 0.792,
  status: 'Maju',
  statusColor: 'desa-blue-500',
  indicators: [
    { label: 'Status Desa', value: 'Maju' },
    { label: 'Skor IDM', value: '0,792' },
    { label: 'Ruang Perbaikan', value: 'Layanan' },
  ],
  dimensions: [
    { name: 'IKS', score: 0.82, fullScore: 1.0, color: '#072ac8' },
    { name: 'IKE', score: 0.71, fullScore: 1.0, color: '#ffc600' },
    { name: 'IKL', score: 0.85, fullScore: 1.0, color: '#10b981' },
  ],
  trends: [
    { year: 2021, score: 0.654 },
    { year: 2022, score: 0.712 },
    { year: 2023, score: 0.792 },
  ],
  interpretation: 'Desa Sukahurip menunjukkan tren peningkatan signifikan dalam aspek ketahanan sosial dan lingkungan.',
  source: 'Kementerian Desa, PDT, dan Transmigrasi',
}

// ============================================================================
// SDGS SECTION DATA
// ============================================================================

export const sdgsContent: SdgsSectionContent = {
  title: 'SDGs Desa',
  description:
    'Menampilkan progres indikator pembangunan berkelanjutan yang dipantau desa dalam satu panel ringkas dan mudah dibaca.',
  villageName: 'Sukahurip',
  district: 'Cigedug',
  regency: 'Garut',
  year: 2024,
  overallScore: 72,
  goals: [
    {
      id: 1,
      title: 'Desa Tanpa Kemiskinan',
      score: 85,
      status: 'Tercapai',
      color: '#e11d48',
      image: '/img/sdgs/sdg1.png',
      description: 'Menjamin tidak ada warga yang hidup di bawah garis kemiskinan.',
      indicators: [
        { name: 'Penerima Bansos', value: '100%', status: 'Baik' },
      ],
    },
    {
      id: 2,
      title: 'Desa Tanpa Kelaparan',
      score: 78,
      status: 'Berkembang',
      color: '#d97706',
      image: '/img/sdgs/sdg2.png',
      description: 'Mewujudkan kemandirian pangan dan kecukupan gizi warga.',
      indicators: [
        { name: 'Konsumsi Pangan', value: '92%', status: 'Baik' },
      ],
    },
  ],
  insights: {
    strengths: ['Pendidikan Dasar Terjamin', 'Akses Air Bersih Layak'],
    challenges: ['Pertumbuhan Ekonomi Digital', 'Pengolahan Limbah Terpadu'],
  },
  programs: [
    { name: 'Peningkatan UMKM Lokal', goalId: 8, status: 'Berjalan' },
    { name: 'Sanitasi Lingkungan Sehat', goalId: 6, status: 'Selesai' },
  ],
  source: 'Sistem Informasi Desa Sukahurip',
}
