import { SdgsSectionContent } from '../types/infografis'

export const sdgsDetailData: SdgsSectionContent = {
  title: 'SDGs Desa',
  description: 'Sustainable Development Goals (SDGs) Desa adalah upaya terpadu mewujudkan Desa tanpa kemiskinan dan kelaparan, Desa ekonomi tumbuh merata, Desa peduli kesehatan, Desa peduli lingkungan, Desa peduli pendidikan, Desa ramah perempuan, Desa berjejaring, dan Desa tanggap budaya untuk percepatan pencapaian Tujuan Pembangunan Berkelanjutan.',
  villageName: 'Desa Sukahurip',
  district: 'Kecamatan Cipatujah',
  regency: 'Kabupaten Tasikmalaya',
  year: 2025,
  overallScore: 74.5,
  goals: [
    {
      id: 1,
      title: 'Desa Tanpa Kemiskinan',
      score: 85.4,
      status: 'Tercapai',
      color: '#E5243B',
      image: 'TrendingDown',
      description: 'Menghilangkan kemiskinan di desa melalui berbagai program bantuan sosial dan pemberdayaan ekonomi.',
      indicators: [
        { name: 'Jumlah KK Miskin', value: '12 KK', status: 'Baik' },
        { name: 'Penerima BLT', value: '150 Jiwa', status: 'Baik' },
        { name: 'Akses Layanan Dasar', value: '98%', status: 'Baik' }
      ]
    },
    {
      id: 2,
      title: 'Desa Tanpa Kelaparan',
      score: 78.2,
      status: 'Berkembang',
      color: '#DDA63A',
      image: 'Utensils',
      description: 'Meningkatkan ketahanan pangan desa dan memastikan tidak ada warga yang kekurangan gizi.',
      indicators: [
        { name: 'Ketahanan Pangan', value: 'Cukup', status: 'Cukup' },
        { name: 'Balita Kurang Gizi', value: '5 Anak', status: 'Cukup' },
        { name: 'Produksi Pangan Lokal', value: '85%', status: 'Baik' }
      ]
    },
    {
      id: 3,
      title: 'Desa Sehat dan Sejahtera',
      score: 92.1,
      status: 'Tercapai',
      color: '#4C9F38',
      image: 'Activity',
      description: 'Menjamin kehidupan yang sehat dan meningkatkan kesejahteraan seluruh penduduk desa.',
      indicators: [
        { name: 'Akses Posyandu', value: '100%', status: 'Baik' },
        { name: 'Cakupan Imunisasi', value: '96%', status: 'Baik' },
        { name: 'Angka Harapan Hidup', value: '72 Thn', status: 'Baik' }
      ]
    },
    {
      id: 4,
      title: 'Pendidikan Desa Berkualitas',
      score: 65.8,
      status: 'Berkembang',
      color: '#C5192D',
      image: 'GraduationCap',
      description: 'Menjamin kualitas pendidikan yang inklusif dan merata serta meningkatkan kesempatan belajar.',
      indicators: [
        { name: 'Melek Huruf', value: '99%', status: 'Baik' },
        { name: 'Rata-rata Lama Sekolah', value: '9 Thn', status: 'Kurang' },
        { name: 'Fasilitas PAUD', value: '4 Unit', status: 'Cukup' }
      ]
    },
    {
      id: 5,
      title: 'Keterlibatan Perempuan Desa',
      score: 88.5,
      status: 'Tercapai',
      color: '#FF3A21',
      image: 'Users',
      description: 'Mencapai kesetaraan gender dan memberdayakan perempuan di seluruh tingkat pengambilan keputusan.',
      indicators: [
        { name: 'Keterlibatan di BPD', value: '30%', status: 'Baik' },
        { name: 'Kelompok Usaha Wanita', value: '8 Grup', status: 'Baik' },
        { name: 'Akses Pendidikan Perempuan', value: '100%', status: 'Baik' }
      ]
    },
    {
      id: 6,
      title: 'Desa Layak Air Bersih dan Sanitasi',
      score: 42.3,
      status: 'Belum Tercapai',
      color: '#26BDE2',
      image: 'Droplets',
      description: 'Menjamin ketersediaan dan pengelolaan air bersih serta sanitasi yang berkelanjutan bagi semua.',
      indicators: [
        { name: 'Akses Air Bersih', value: '45%', status: 'Kurang' },
        { name: 'Jamban Sehat', value: '60%', status: 'Cukup' },
        { name: 'Sistem Drainase', value: 'Buruk', status: 'Kurang' }
      ]
    },
    {
      id: 7,
      title: 'Desa Berenergi Bersih dan Terbarukan',
      score: 15.0,
      status: 'Belum Tercapai',
      color: '#FCC30B',
      image: 'Zap',
      description: 'Menjamin akses energi yang terjangkau, andal, berkelanjutan, dan modern bagi semua warga.',
      indicators: [
        { name: 'Penggunaan Solar Cell', value: '2 Unit', status: 'Kurang' },
        { name: 'Biogas Komunal', value: '0', status: 'Kurang' },
        { name: 'Efisiensi Energi', value: 'Rendah', status: 'Kurang' }
      ]
    },
    {
      id: 8,
      title: 'Pertumbuhan Ekonomi Desa Merata',
      score: 72.4,
      status: 'Berkembang',
      color: '#A21942',
      image: 'BarChart3',
      description: 'Mendukung pertumbuhan ekonomi yang inklusif dan berkelanjutan serta pekerjaan yang layak.',
      indicators: [
        { name: 'Pertumbuhan PDRB Desa', value: '4.2%', status: 'Cukup' },
        { name: 'Anggota BUMDes', value: '24 Orang', status: 'Cukup' },
        { name: 'Wisata Desa', value: '1 Unit', status: 'Cukup' }
      ]
    },
    {
      id: 9,
      title: 'Infrastruktur dan Inovasi Desa',
      score: 81.0,
      status: 'Tercapai',
      color: '#FD6925',
      image: 'Hammer',
      description: 'Membangun infrastruktur yang tangguh, mendukung industrialisasi inklusif dan mendorong inovasi.',
      indicators: [
        { name: 'Jalan Desa Mantap', value: '88%', status: 'Baik' },
        { name: 'Akses Internet', value: '95%', status: 'Baik' },
        { name: 'Inovasi Digital', value: '2 Program', status: 'Baik' }
      ]
    },
    {
      id: 10,
      title: 'Desa Tanpa Kesenjangan',
      score: 77.2,
      status: 'Berkembang',
      color: '#DD1367',
      image: 'Scale',
      description: 'Mengurangi kesenjangan pendapatan dan memastikan peluang yang sama bagi semua warga.',
      indicators: [
        { name: 'Indeks Gini Desa', value: '0.31', status: 'Baik' },
        { name: 'Penyandang Disabilitas Terdata', value: '100%', status: 'Baik' },
        { name: 'Bantuan Disabilitas', value: 'Cukup', status: 'Cukup' }
      ]
    },
    {
      id: 11,
      title: 'Kawasan Permukiman Desa Aman',
      score: 95.4,
      status: 'Tercapai',
      color: '#FD9D24',
      image: 'Home',
      description: 'Menjadikan desa dan permukiman inklusif, aman, tangguh, dan berkelanjutan.',
      indicators: [
        { name: 'Siskamling Aktif', value: '100%', status: 'Baik' },
        { name: 'Rumah Layak Huni', value: '92%', status: 'Baik' },
        { name: 'Ruang Terbuka Hijau', value: 'Ada', status: 'Baik' }
      ]
    },
    {
      id: 12,
      title: 'Konsumsi dan Produksi Sadar Lingkungan',
      score: 55.0,
      status: 'Berkembang',
      color: '#BF8B2E',
      image: 'Leaf',
      description: 'Menjamin pola konsumsi dan produksi yang berkelanjutan serta ramah lingkungan.',
      indicators: [
        { name: 'Pengelolaan Sampah', value: 'Belum Optimal', status: 'Kurang' },
        { name: 'Bank Sampah', value: '1 Unit', status: 'Cukup' },
        { name: 'Produk Eco-Friendly', value: 'Sedikit', status: 'Kurang' }
      ]
    },
    {
      id: 13,
      title: 'Desa Tanggap Perubahan Iklim',
      score: 62.1,
      status: 'Berkembang',
      color: '#3F7E44',
      image: 'ThermometerSun',
      description: 'Mengambil tindakan cepat untuk mengatasi perubahan iklim dan dampaknya di level desa.',
      indicators: [
        { name: 'Pohon Ditanam', value: '500 Batang', status: 'Baik' },
        { name: 'Tim Siaga Bencana', value: 'Aktif', status: 'Baik' },
        { name: 'Mitigasi Bencana', value: 'Ada', status: 'Cukup' }
      ]
    },
    {
      id: 14,
      title: 'Desa Peduli Lingkungan Laut',
      score: 98.0,
      status: 'Tercapai',
      color: '#0A97D9',
      image: 'Waves',
      description: 'Melestarikan dan memanfaatkan secara berkelanjutan sumber daya laut dan samudra.',
      indicators: [
        { name: 'Kebersihan Pantai', value: 'Sangat Baik', status: 'Baik' },
        { name: 'Hutan Mangrove', value: '2 Hektar', status: 'Baik' },
        { name: 'Kelompok Nelayan', value: '12 Grup', status: 'Baik' }
      ]
    },
    {
      id: 15,
      title: 'Desa Peduli Lingkungan Darat',
      score: 84.3,
      status: 'Tercapai',
      color: '#56C02B',
      image: 'Mountain',
      description: 'Melindungi, memulihkan, dan mendukung penggunaan berkelanjutan ekosistem daratan.',
      indicators: [
        { name: 'Luas Hutan Desa', value: '45 Hektar', status: 'Baik' },
        { name: 'Konservasi Lahan', value: 'Baik', status: 'Baik' },
        { name: 'Satwa Dilindungi', value: 'Terjaga', status: 'Baik' }
      ]
    },
    {
      id: 16,
      title: 'Desa Damai Berkeadilan',
      score: 100.0,
      status: 'Tercapai',
      color: '#00689D',
      image: 'ShieldCheck',
      description: 'Mendukung masyarakat yang damai dan inklusif serta menyediakan akses keadilan bagi semua.',
      indicators: [
        { name: 'Angka Kriminalitas', value: '0%', status: 'Baik' },
        { name: 'Konflik Sosial', value: 'Nihil', status: 'Baik' },
        { name: 'Akses Bantuan Hukum', value: 'Tersedia', status: 'Baik' }
      ]
    },
    {
      id: 17,
      title: 'Kemitraan untuk Pembangunan Desa',
      score: 75.6,
      status: 'Berkembang',
      color: '#19486A',
      image: 'Handshake',
      description: 'Memperkuat sarana implementasi dan merevitalisasi kemitraan untuk pembangunan berkelanjutan.',
      indicators: [
        { name: 'Kerjasama Antar Desa', value: '2 Program', status: 'Cukup' },
        { name: 'Kemitraan Swasta', value: '1 PT', status: 'Cukup' },
        { name: 'Gotong Royong', value: 'Tinggi', status: 'Baik' }
      ]
    },
    {
      id: 18,
      title: 'Kelembagaan Desa Dinamis',
      score: 88.9,
      status: 'Tercapai',
      color: '#01558A',
      image: 'Building',
      description: 'Mewujudkan kelembagaan desa yang dinamis dan budaya desa yang adaptif terhadap perubahan.',
      indicators: [
        { name: 'Sistem Informasi Desa', value: 'Aktif', status: 'Baik' },
        { name: 'Lembaga Adat', value: 'Terdaftar', status: 'Baik' },
        { name: 'Perdes Inovatif', value: '3 Produk', status: 'Baik' }
      ]
    }
  ],
  insights: {
    strengths: [
      'Kesehatan masyarakat terjamin dengan akses Posyandu 100%',
      'Keamanan dan ketertiban desa sangat terjaga (Zero Crime)',
      'Kelestarian lingkungan darat dan laut menjadi prioritas utama'
    ],
    challenges: [
      'Akses air bersih dan sanitasi layak masih perlu ditingkatkan',
      'Pemanfaatan energi terbarukan masih sangat rendah',
      'Rata-rata lama sekolah perlu ditingkatkan melalui program kejar paket'
    ]
  },
  programs: [
    { name: 'Pembangunan Sumur Bor Komunal', goalId: 6, status: 'Berjalan' },
    { name: 'Program Desa Terang Solar Cell', goalId: 7, status: 'Direncanakan' },
    { name: 'Pelatihan Digital Marketing UMKM', goalId: 8, status: 'Selesai' },
    { name: 'Restorasi Terumbu Karang', goalId: 14, status: 'Selesai' }
  ],
  source: 'Kemendesa PDTT / SDGs Desa (Tahun 2025)'
}
