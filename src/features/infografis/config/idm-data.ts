import { IdmSectionContent } from '../types/infografis'

export const idmDetailData: IdmSectionContent = {
  title: 'Indeks Desa Membangun',
  description: 'Indeks Desa Membangun (IDM) adalah indeks komposit yang dibentuk dari Indeks Ketahanan Sosial, Indeks Ketahanan Ekonomi, dan Indeks Ketahanan Ekologi Desa. IDM digunakan untuk menetapkan status kemajuan dan kemandirian desa.',
  villageName: 'Desa Sukahurip',
  district: 'Kecamatan Cipatujah',
  regency: 'Kabupaten Tasikmalaya',
  year: 2026,
  currentScore: 0.8924,
  status: 'Mandiri',
  statusColor: '#00C853', // Green for Mandiri
  indicators: [
    { label: 'Status Desa', value: 'Mandiri', icon: 'Award' },
    { label: 'Skor IDM', value: '0.8924', icon: 'TrendingUp' },
    { label: 'Tahun Data', value: '2026', icon: 'Calendar' },
  ],
  dimensions: [
    { name: 'Indeks Ketahanan Sosial (IKS)', score: 0.912, fullScore: 1.0, color: '#2196F3' },
    { name: 'Indeks Ketahanan Ekonomi (IKE)', score: 0.845, fullScore: 1.0, color: '#FFC107' },
    { name: 'Indeks Ketahanan Lingkungan (IKL)', score: 0.820, fullScore: 1.0, color: '#4CAF50' },
  ],
  trends: [
    { year: 2022, score: 0.712 },
    { year: 2023, score: 0.756 },
    { year: 2024, score: 0.792 },
    { year: 2025, score: 0.845 },
    { year: 2026, score: 0.892 },
  ],
  interpretation: 'Desa Sukahurip di Kecamatan Cipatujah saat ini menyandang status Desa Mandiri dengan skor IDM 0.8924. Capaian ini menunjukkan bahwa desa telah memiliki kemampuan melaksanakan pembangunan desa untuk peningkatan kualitas hidup dan sebesar-besarnya kesejahteraan masyarakat desa dengan ketahanan sosial, ketahanan ekonomi, dan ketahanan ekologi secara berkelanjutan.',
  source: 'Kemendesa PDTT (Tahun Data 2026)',
}
