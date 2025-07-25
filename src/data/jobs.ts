const jobsData = [
  {
    title: 'System Administrator',
    company: 'NetSolutions',
    location: 'Bandung',
    type: 'Full-time',
    salary: 'Rp10,000,000 - Rp14,000,000',
    posted: '5 hari lalu',
    description:
      'Membutuhkan SysAdmin untuk mengelola infrastruktur IT perusahaan.',
    requirements: [
      'Pengalaman dengan Linux/Windows Server',
      'Menguasai virtualization',
      'Memahami jaringan komputer',
    ],
    responsibilities: ['Maintenance server', 'Manajemen user', 'Backup data'],
    benefits: [
      'On-call allowance',
      'Training rutin',
      'Perangkat kerja disediakan',
    ],
  },
  {
    title: 'QA Engineer',
    company: 'QualityFirst',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp9,000,000 - Rp13,000,000',
    posted: '1 minggu lalu',
    description:
      'Mencari QA Engineer untuk memastikan kualitas produk software.',
    requirements: [
      'Pengalaman testing manual/otomatis',
      'Menguasai Selenium/Jest',
      'Memahami SDLC',
    ],
    responsibilities: [
      'Membuat test case',
      'Melakukan regression testing',
      'Melaporkan bug',
    ],
    benefits: [
      'Health insurance',
      'Pengembangan karir',
      'Lingkungan kerja kolaboratif',
    ],
  },
  {
    title: 'Business Analyst',
    company: 'StrategyPlus',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp12,000,000 - Rp17,000,000',
    posted: '3 hari lalu',
    description:
      'Mencari Business Analyst untuk membantu pengambilan keputusan bisnis.',
    requirements: [
      'Pengalaman analisis data bisnis',
      'Menguasai SQL & Excel',
      'Memahami business intelligence',
    ],
    responsibilities: [
      'Membuat laporan analisis',
      'Riset pasar',
      'Rekomendasi strategi',
    ],
    benefits: ['Bonus kinerja', 'Fleksibel WFH', 'Paket data'],
  },
  {
    title: 'Graphic Designer',
    company: 'DesignHub',
    location: 'Remote',
    type: 'Freelance',
    salary: 'Rp6,000,000 - Rp9,000,000',
    posted: '1 hari lalu',
    description: 'Membutuhkan desainer grafis untuk konten digital dan cetak.',
    requirements: [
      'Menguasai Adobe Photoshop/Illustrator',
      'Portfolio kreatif',
      'Memahami branding',
    ],
    responsibilities: [
      'Membuat desain visual',
      'Social media assets',
      'Branding materials',
    ],
    benefits: [
      'Proyek bervariasi',
      'Jadwal fleksibel',
      'Pembayaran tepat waktu',
    ],
  },
  {
    title: 'HR Specialist',
    company: 'PeopleFirst',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp8,000,000 - Rp12,000,000',
    posted: '1 minggu lalu',
    description: 'Mencari HR Specialist untuk manajemen talent dan rekrutmen.',
    requirements: [
      'Pengalaman di HR operations',
      'Memahami UU Ketenagakerjaan',
      'Kemampuan interpersonal',
    ],
    responsibilities: [
      'Proses rekrutmen',
      'Employee engagement',
      'Training & development',
    ],
    benefits: [
      'BPJS Ketenagakerjaan',
      'Program kesehatan mental',
      'Career path jelas',
    ],
  },
  {
    title: 'Sales Executive',
    company: 'TradeMaster',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp7,000,000 + Komisi',
    posted: '2 hari lalu',
    description: 'Membutuhkan sales executive untuk produk teknologi B2B.',
    requirements: [
      'Pengalaman sales B2B',
      'Kemampuan negosiasi',
      'Target oriented',
    ],
    responsibilities: [
      'Mencari klien baru',
      'Presentasi produk',
      'Mencapai target penjualan',
    ],
    benefits: ['Komisi tanpa batas', 'Kendaraan operasional', 'Incentive trip'],
  },
  {
    title: 'Customer Support',
    company: 'ServicePlus',
    location: 'Remote',
    type: 'Full-time',
    salary: 'Rp5,000,000 - Rp7,000,000',
    posted: '4 hari lalu',
    description: 'Mencari customer support untuk layanan 24/7 produk digital.',
    requirements: [
      'Kemampuan komunikasi baik',
      'Pengalaman CS (plus)',
      'Bisa bahasa Inggris',
    ],
    responsibilities: [
      'Menangani keluhan pelanggan',
      'Live chat support',
      'Ticketing system',
    ],
    benefits: ['Shift allowance', 'Work from home', 'Bonus kinerja'],
  },
  {
    title: 'Network Engineer',
    company: 'ConnectNet',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp13,000,000 - Rp18,000,000',
    posted: '1 minggu lalu',
    description:
      'Membutuhkan network engineer untuk desain dan implementasi jaringan.',
    requirements: [
      'Sertifikasi CCNA/CCNP',
      'Pengalaman jaringan enterprise',
      'Menguasai routing protocols',
    ],
    responsibilities: [
      'Maintenance jaringan',
      'Troubleshooting',
      'Security jaringan',
    ],
    benefits: [
      'On-call allowance',
      'Training sertifikasi',
      'Perangkat jaringan disediakan',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'InsightAnalytics',
    location: 'Remote',
    type: 'Full-time',
    salary: 'Rp11,000,000 - Rp15,000,000',
    posted: '3 hari lalu',
    description:
      'Mencari data analyst untuk transformasi data menjadi insight bisnis.',
    requirements: [
      'Menguasai SQL & Python/R',
      'Pengalaman dengan BI tools',
      'Kemampuan visualisasi data',
    ],
    responsibilities: [
      'Membuat dashboard',
      'Analisis tren data',
      'Laporan rutin',
    ],
    benefits: ['Remote work', 'Akses data premium', 'Laptop spek tinggi'],
  },
  {
    title: 'Legal Consultant',
    company: 'LawTrust',
    location: 'Jakarta',
    type: 'Contract',
    salary: 'Rp15,000,000 - Rp20,000,000',
    posted: '5 hari lalu',
    description: 'Membutuhkan konsultan hukum untuk perusahaan teknologi.',
    requirements: [
      'Lulusan hukum berpengalaman',
      'Memahami hukum IT & bisnis',
      'Kemampuan riset hukum',
    ],
    responsibilities: [
      'Review kontrak',
      'Legal advisory',
      'Compliance monitoring',
    ],
    benefits: [
      'Fee project-based',
      'Fleksibel jam kerja',
      'Networking profesional',
    ],
  },
  {
    title: '3D Artist',
    company: 'VisualCreators',
    location: 'Remote',
    type: 'Freelance',
    salary: 'Rp8,000,000 - Rp12,000,000',
    posted: '2 hari lalu',
    description: 'Mencari 3D artist untuk proyek game dan animasi.',
    requirements: [
      'Menguasai Blender/Maya',
      'Portfolio 3D karya sebelumnya',
      'Memahami texturing & lighting',
    ],
    responsibilities: [
      'Membuat aset 3D',
      'Character modeling',
      'Environment design',
    ],
    benefits: ['Proyek kreatif', 'Pembayaran per proyek', 'Tim internasional'],
  },
  {
    title: 'Content Writer',
    company: 'WordCraft',
    location: 'Remote',
    type: 'Part-time',
    salary: 'Rp5,000,000 - Rp8,000,000',
    posted: '2 hari lalu',
    description:
      'Membutuhkan penulis konten untuk artikel teknologi dan bisnis.',
    requirements: [
      'Portfolio tulisan sebelumnya',
      'Memahami SEO content',
      'Kemampuan riset yang baik',
    ],
    responsibilities: [
      'Menulis artikel/blog post',
      'Melakukan optimasi SEO',
      'Content planning',
    ],
    benefits: [
      'Flexible hours',
      'Bonus berdasarkan traffic',
      'Akses ke tools premium',
    ],
  },
  {
    title: 'Cybersecurity Analyst',
    company: 'SecureNet',
    location: 'Remote',
    type: 'Full-time',
    salary: 'Rp16,000,000 - Rp22,000,000',
    posted: '3 hari lalu',
    description:
      'Mencari analis keamanan siber untuk melindungi infrastruktur digital.',
    requirements: [
      'Sertifikasi CISSP/CEH (plus)',
      'Pengalaman dengan tools pentesting',
      'Memahami sistem keamanan jaringan',
    ],
    responsibilities: [
      'Monitoring ancaman keamanan',
      'Melakukan security audit',
      'Mengimplementasikan solusi keamanan',
    ],
    benefits: [
      'Remote work',
      'Budget sertifikasi',
      'Perangkat keamanan khusus',
    ],
  },
  {
    title: 'Product Manager',
    company: 'TechInnovate',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp18,000,000 - Rp25,000,000',
    posted: '1 minggu lalu',
    description:
      'Membutuhkan Product Manager untuk memimpin pengembangan produk digital.',
    requirements: [
      'Pengalaman 4+ tahun di product management',
      'Memahami agile methodology',
      'Kemampuan analisis pasar',
    ],
    responsibilities: [
      'Mendefinisikan roadmap produk',
      'Koordinasi antar tim',
      'Analisis kompetitor',
    ],
    benefits: ['Profit sharing', 'Paket liburan tahunan', 'Stock options'],
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'GrowthAgency',
    location: 'Jakarta (Hybrid)',
    type: 'Full-time',
    salary: 'Rp7,000,000 - Rp10,000,000',
    posted: '4 hari lalu',
    description:
      'Mencari specialist digital marketing untuk meningkatkan brand awareness.',
    requirements: [
      'Pengalaman 2+ tahun di digital marketing',
      'Menguasai Google Ads & Meta Ads',
      'Memahami SEO & content marketing',
    ],
    responsibilities: [
      'Mengelola kampanye iklan',
      'Menganalisis performa campaign',
      'Membuat strategi konten',
    ],
    benefits: [
      'Komisi berdasarkan performa',
      'Work from anywhere policy',
      'Budget iklan tambahan',
    ],
  },
  {
    title: 'Mobile Developer',
    company: 'AppWorks',
    location: 'Surabaya',
    type: 'Full-time',
    salary: 'Rp11,000,000 - Rp16,000,000',
    posted: '2 hari lalu',
    description:
      'Membutuhkan Flutter Developer untuk pengembangan aplikasi cross-platform.',
    requirements: [
      'Pengalaman 2+ tahun dengan Flutter',
      'Memahami state management',
      'Pengalaman dengan API integration',
    ],
    responsibilities: [
      'Mengembangkan aplikasi mobile',
      'Debugging dan testing',
      'Kolaborasi dengan backend team',
    ],
    benefits: [
      'Bonus kinerja',
      'Fleksibel jam kerja',
      'Dana pengembangan skill',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp15,000,000 - Rp20,000,000',
    posted: '5 hari lalu',
    description:
      'Membutuhkan Data Scientist untuk pengembangan model prediktif.',
    requirements: [
      'Pengalaman Python/R dan library data science',
      'Memahami machine learning',
      'Pengalaman dengan big data tools',
    ],
    responsibilities: [
      'Membangun model analitik',
      'Membersihkan dan menganalisis data',
      'Membuat visualisasi data',
    ],
    benefits: ['Laptop spek tinggi', 'Asuransi keluarga', 'Budget conference'],
  },
  {
    title: 'DevOps Engineer',
    company: 'CloudSystems',
    location: 'Remote',
    type: 'Full-time',
    salary: 'Rp14,000,000 - Rp19,000,000',
    posted: '1 minggu lalu',
    description: 'Mencari DevOps Engineer untuk mengelola infrastruktur cloud.',
    requirements: [
      'Pengalaman dengan AWS/Azure',
      'Menguasai Docker & Kubernetes',
      'Memahami CI/CD pipelines',
    ],
    responsibilities: [
      'Mengotomatisasi deployment',
      'Memantau sistem',
      'Mengoptimalkan infrastruktur',
    ],
    benefits: [
      'Remote full-time',
      'Sertifikasi cloud gratis',
      'Perangkat kerja premium',
    ],
  },
  {
    title: 'UI/UX Designer',
    company: 'CreativeHub',
    location: 'Remote',
    type: 'Contract',
    salary: 'Rp8,000,000 - Rp12,000,000',
    posted: '3 hari lalu',
    description: 'Membutuhkan UI/UX Designer untuk proyek aplikasi fintech.',
    requirements: [
      'Portfolio kuat di Figma/Adobe XD',
      'Pengalaman 2+ tahun di UX research',
      'Memahami prinsip desain responsif',
    ],
    responsibilities: [
      'Membuat wireframe dan prototype',
      'Melakukan user testing',
      'Berkoordinasi dengan developer',
    ],
    benefits: [
      'Proyek jangka panjang',
      'Perangkat desain disediakan',
      'Fee project bonus',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'DataSolutions',
    location: 'Bandung (Hybrid)',
    type: 'Full-time',
    salary: 'Rp12,000,000 - Rp18,000,000',
    posted: '1 hari lalu',
    description:
      'Mencari Backend Developer berpengalaman dengan Node.js dan database SQL/NoSQL.',
    requirements: [
      'Pengalaman 3+ tahun dengan Node.js/Express',
      'Menguasai PostgreSQL/MongoDB',
      'Familiar dengan API development',
    ],
    responsibilities: [
      'Membangun dan memelihara sistem backend',
      'Optimasi query database',
      'Kolaborasi dengan tim frontend',
    ],
    benefits: ['Bonus tahunan', 'Fleksibel WFH', 'Pelatihan berkala'],
  },
  {
    title: 'Pilot Commercial',
    company: 'GarudaSky Airlines',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp45,000,000 - Rp70,000,000',
    posted: '1 minggu lalu',
    description:
      'Membutuhkan pilot berpengalaman untuk rute domestik dan internasional.',
    requirements: [
      'Lisensi ATPL',
      'Pengalaman 3000+ jam terbang',
      'Rating Boeing 737/Airbus A320',
      'Medical Class 1 valid',
    ],
    responsibilities: [
      'Mengoperasikan pesawat secara aman',
      'Koordinasi dengan ATC',
      'Pre-flight inspection',
      'Kepemimpinan kru',
    ],
    benefits: [
      'Asuransi keluarga premium',
      'Tunjangan penerbangan',
      'Paket liburan gratis',
      'Pensiun dini',
    ],
  },
  {
    title: 'Marine Engineer',
    company: 'OceanTech Shipping',
    location: 'Surabaya',
    type: 'Full-time',
    salary: 'Rp25,000,000 - Rp35,000,000',
    posted: '3 hari lalu',
    description: 'Membutuhkan marine engineer untuk kapal kargo internasional.',
    requirements: [
      'Sertifikasi STCW',
      'Pengalaman 5+ tahun di mesin kapal',
      'Menguasai sistem propulsi diesel',
      'Bersedia kerja di laut',
    ],
    responsibilities: [
      'Maintenance mesin utama',
      'Perbaikan sistem kelistrikan',
      'Manajemen bahan bakar',
      'Keselamatan mesin',
    ],
    benefits: [
      'Kontrak 6 bulan kerja/2 bulan libur',
      'Asuransi pelaut internasional',
      'Bonus akhir kontrak',
      'Akomodasi lengkap',
    ],
  },
  {
    title: 'Forensic Accountant',
    company: 'Integrity Financial',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp30,000,000 - Rp45,000,000',
    posted: '5 hari lalu',
    description:
      'Spesialis investigasi keuangan untuk kasus fraud dan pencucian uang.',
    requirements: [
      'Gelar akuntansi + sertifikasi CFE',
      'Pengalaman 5+ tahun forensic accounting',
      'Menguasai ACL/SAS',
      'Memahami regulasi keuangan',
    ],
    responsibilities: [
      'Analisis transaksi mencurigakan',
      'Rekonstruksi catatan keuangan',
      'Persiapan bukti hukum',
      'Testimoni ahli',
    ],
    benefits: [
      'Bonus investigasi sukses',
      'Proteksi identitas',
      'Training internasional',
      'Asuransi profesional',
    ],
  },
  {
    title: 'Robotics Engineer',
    company: 'FutureAutomation',
    location: 'Bandung',
    type: 'Full-time',
    salary: 'Rp28,000,000 - Rp40,000,000',
    posted: '2 hari lalu',
    description: 'Mengembangkan sistem robotika industri dan service robot.',
    requirements: [
      'Gelar teknik robotika/elektro',
      'Pengalaman ROS (Robot Operating System)',
      'Menguasai Python/C++',
      'Portfolio proyek robotika',
    ],
    responsibilities: [
      'Desain sistem mekatronika',
      'Pemrograman kontrol robot',
      'Testing dan kalibrasi',
      'Integrasi AI',
    ],
    benefits: [
      'Lab robotika canggih',
      'Patent bonus',
      'Konferensi internasional',
      'Profit sharing',
    ],
  },
  {
    title: 'Sommelier',
    company: 'GrandVino Restaurant',
    location: 'Bali',
    type: 'Full-time',
    salary: 'Rp20,000,000 - Rp30,000,000',
    posted: '1 minggu lalu',
    description: 'Spesialis wine untuk restoran mewah bintang 5.',
    requirements: [
      'Sertifikasi sommelier internasional',
      'Pengetahuan mendalam wine dunia',
      'Pengalaman 3+ tahun di F&B premium',
      'Bisa bahasa Inggris & Prancis dasar',
    ],
    responsibilities: [
      'Rekomendasi wine pairing',
      'Manajemen cellar',
      'Training staf',
      'Wine purchasing',
    ],
    benefits: [
      'Tip tinggi',
      'Kunjungan vineyard',
      'Makan gratis',
      'Akomodasi untuk ekspatriat',
    ],
  },
  {
    title: 'Ethical Hacker',
    company: 'CyberShield',
    location: 'Remote',
    type: 'Contract',
    salary: 'Rp35,000,000 - Rp50,000,000',
    posted: '3 hari lalu',
    description:
      'Melakukan penetration testing untuk sistem klien kelas enterprise.',
    requirements: [
      'Sertifikasi OSCP/CEH',
      'Pengalaman bug bounty',
      'Menguasai Metasploit/Burp Suite',
      'Memahami OWASP Top 10',
    ],
    responsibilities: [
      'Penetration testing',
      'Vulnerability assessment',
      'Social engineering test',
      'Laporan teknis',
    ],
    benefits: [
      'Project-based payment',
      'Legal protection',
      'Tools premium',
      'Anonymity guarantee',
    ],
  },
  {
    title: 'Crane Operator',
    company: 'MegaConstruction',
    location: 'Kalimantan',
    type: 'Full-time',
    salary: 'Rp18,000,000 - Rp25,000,000',
    posted: '1 minggu lalu',
    description: 'Operator crane untuk proyek konstruksi skala besar.',
    requirements: [
      'Sertifikasi operator crane',
      'Pengalaman 3+ tahun di proyek konstruksi',
      'Menguasai crane tower/mobile',
      'Kesehatan fisik prima',
    ],
    responsibilities: [
      'Pengoperasian crane aman',
      'Pre-use inspection',
      'Koordinasi dengan rigger',
      'Laporan harian',
    ],
    benefits: [
      'Tunjangan proyek',
      'Asuransi kecelakaan',
      'Akomodasi di lokasi',
      'Overtime pay',
    ],
  },
  {
    title: 'AI Researcher',
    company: 'DeepMind Indonesia',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp40,000,000 - Rp60,000,000',
    posted: '2 hari lalu',
    description: 'Peneliti AI untuk pengembangan model bahasa besar (LLM).',
    requirements: [
      'PhD/Master di AI/ML',
      'Publikasi di NeurIPS/ICML',
      'Pengalaman PyTorch/TensorFlow',
      'Memahami Transformer architecture',
    ],
    responsibilities: [
      'Riset model AI',
      'Training model besar',
      'Paper writing',
      'Kolaborasi internasional',
    ],
    benefits: [
      'Dana riset unlimited',
      'Komputasi cloud premium',
      'Konferensi global',
      'Patent royalty',
    ],
  },
  {
    title: 'Professional Diver',
    company: 'OceanExploration',
    location: 'Raja Ampat',
    type: 'Contract',
    salary: 'Rp25,000,000 - Rp35,000,000',
    posted: '5 hari lalu',
    description:
      'Penyelam profesional untuk proyek underwater photography dan konservasi.',
    requirements: [
      'Sertifikasi PADI Divemaster+',
      'Pengalaman 100+ dive logs',
      'Kemampuan underwater photography',
      'Fisik prima',
    ],
    responsibilities: [
      'Underwater documentation',
      'Marine life monitoring',
      'Dive safety management',
      'Equipment maintenance',
    ],
    benefits: [
      'Liveaboard facility',
      'Diving gear provided',
      'Kontrak 4 bulan kerja',
      'Pelatihan gratis',
    ],
  },
  {
    title: 'Culinary Scientist',
    company: 'FoodInnovation Lab',
    location: 'Bogor',
    type: 'Full-time',
    salary: 'Rp22,000,000 - Rp32,000,000',
    posted: '1 minggu lalu',
    description: 'Peneliti pengembangan produk makanan inovatif.',
    requirements: [
      'Gelar food technology/nutrisi',
      'Pengalaman R&D makanan',
      'Menguasai analisis sensori',
      'Memahami food safety',
    ],
    responsibilities: [
      'Formulasi produk baru',
      'Shelf-life testing',
      'Analisis nutrisi',
      'Prototyping',
    ],
    benefits: [
      'Lab canggih',
      'Bonus produk sukses',
      'Food exhibition',
      'Kantin gratis',
    ],
  },
  {
    title: 'Crisis Management Specialist',
    company: 'RiskGuard Consulting',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp35,000,000 - Rp45,000,000',
    posted: '3 hari lalu',
    description: 'Spesialis penanganan krisis untuk perusahaan multinasional.',
    requirements: [
      'Pengalaman 5+ tahun manajemen krisis',
      'Pelatihan disaster response',
      'Kemampuan komunikasi kritis',
      'Bisa bekerja under pressure',
    ],
    responsibilities: [
      'Penyusunan crisis plan',
      'Simulasi emergency',
      'Koordinasi tim krisis',
      'Public statement',
    ],
    benefits: [
      'Tunjangan krisis',
      'Asuransi khusus',
      'Pelatihan internasional',
      'Fasilitas komunikasi premium',
    ],
  },
  {
    title: 'Voice Actor',
    company: 'SoundMagic Studio',
    location: 'Remote',
    type: 'Freelance',
    salary: 'Rp5,000,000 - Rp15,000,000 per project',
    posted: '2 hari lalu',
    description: 'Pengisi suara untuk iklan, animasi, dan konten digital.',
    requirements: [
      'Portfolio demo reel',
      'Studio pribadi (minimum standard)',
      'Vokal karakteristik',
      'Bisa berbagai aksen',
    ],
    responsibilities: [
      'Voice recording',
      'Character development',
      'Script interpretation',
      'Sound editing dasar',
    ],
    benefits: [
      'Royalty untuk proyek berulang',
      'Fleksibel waktu',
      'Proyek bervariasi',
      'Exposure luas',
    ],
  },
  {
    title: 'Industrial Designer',
    company: 'DesignCraft Manufacturing',
    location: 'Semarang',
    type: 'Full-time',
    salary: 'Rp18,000,000 - Rp25,000,000',
    posted: '1 minggu lalu',
    description: 'Desainer produk untuk peralatan medis dan industri.',
    requirements: [
      'Gelar desain produk',
      'Menguasai SolidWorks/Rhino',
      'Memahami manufacturing process',
      'Portfolio produk nyata',
    ],
    responsibilities: [
      'Concept development',
      '3D modeling',
      'Prototyping',
      'User testing',
    ],
    benefits: [
      'Workshop lengkap',
      'Patent incentive',
      'Pameran industri',
      'Profit sharing produk',
    ],
  },
  {
    title: 'Veterinary Surgeon',
    company: 'PetCare Specialist Hospital',
    location: 'Jakarta',
    type: 'Full-time',
    salary: 'Rp28,000,000 - Rp38,000,000',
    posted: '4 hari lalu',
    description: 'Dokter hewan spesialis bedah untuk klinik hewan premium.',
    requirements: [
      'Gelar dokter hewan + sertifikasi bedah',
      'Pengalaman 3+ tahun bedah hewan',
      'Menguasai mikroskop bedah',
      'Sertifikasi anestesi hewan',
    ],
    responsibilities: [
      'Operasi rutin (sterilisasi dll)',
      'Emergency surgery',
      'Post-op care',
      'Edukasi pemilik',
    ],
    benefits: [
      'Alat bedah lengkap',
      'Continuing education',
      'Asuransi kesehatan',
      'Bonus kesuksesan operasi',
    ],
  },
  {
    title: 'Blockchain Architect',
    company: 'CryptoInnovate',
    location: 'Remote',
    type: 'Full-time',
    salary: 'Rp50,000,000 - Rp75,000,000',
    posted: '1 hari lalu',
    description: 'Arsitek sistem blockchain untuk solusi enterprise.',
    requirements: [
      'Pengalaman 5+ tahun pengembangan blockchain',
      'Menguasai Solidity/Rust',
      'Memahami berbagai consensus mechanism',
      'Portfolio proyek DeFi/NFT',
    ],
    responsibilities: [
      'Desain arsitektur blockchain',
      'Smart contract development',
      'Security audit',
      'Tim leadership',
    ],
    benefits: [
      'Token equity',
      'Remote full-time',
      'Konferensi global',
      'Hardware wallet',
    ],
  },
  {
    title: 'Drone Mapping Pilot',
    company: 'AeroSurvey Indonesia',
    location: 'Kalimantan',
    type: 'Contract',
    salary: 'Rp15,000,000 - Rp22,000,000',
    posted: '1 minggu lalu',
    description: 'Operator drone untuk pemetaan pertambangan dan perkebunan.',
    requirements: [
      'Sertifikasi drone pilot (dari Kemenhub)',
      'Pengalaman photogrammetry',
      'Menguasai DJI M300/P4RTK',
      'Bersedia lokasi terpencil',
    ],
    responsibilities: [
      'Perencanaan flight path',
      'Data acquisition',
      'Basic processing',
      'Equipment maintenance',
    ],
    benefits: [
      'Tunjangan lapangan',
      'Drone training',
      'Akomodasi lengkap',
      'Bonus proyek',
    ],
  },
  {
    title: 'Music Therapist',
    company: 'Harmony Healing Center',
    location: 'Yogyakarta',
    type: 'Full-time',
    salary: 'Rp12,000,000 - Rp18,000,000',
    posted: '3 hari lalu',
    description: 'Terapis musik untuk rehabilitasi pasien khusus.',
    requirements: [
      'Sertifikasi music therapy',
      'Kemampuan musik multi-instrument',
      'Pengalaman klinis',
      'Empati tinggi',
    ],
    responsibilities: [
      'Assesmen pasien',
      'Program terapi individu',
      'Progress evaluation',
      'Laporan medis',
    ],
    benefits: [
      'Instrumen disediakan',
      'Pelatihan berkala',
      'Lingkungan healing',
      'Asuransi kesehatan',
    ],
  },
  {
    title: 'Vertical Farming Specialist',
    company: 'UrbanGreens',
    location: 'Tangerang',
    type: 'Full-time',
    salary: 'Rp15,000,000 - Rp23,000,000',
    posted: '5 hari lalu',
    description:
      'Ahli pertanian vertikal untuk sistem hidroponik skala industri.',
    requirements: [
      'Gelar agrikultur/hidroponik',
      'Pengalaman vertical farming',
      'Memahami IoT farming',
      'Pengetahuan nutrisi tanaman',
    ],
    responsibilities: [
      'Manajemen produksi',
      'Optimasi sistem',
      'Quality control',
      'Penelitian varietas',
    ],
    benefits: [
      'Bonus produksi',
      'Konsumsi produk gratis',
      'Pelatihan luar negeri',
      'Bekerja dengan teknologi canggih',
    ],
  },
  {
    title: 'Sign Language Interpreter',
    company: 'InclusionConnect',
    location: 'Jakarta',
    type: 'Freelance',
    salary: 'Rp10,000,000 - Rp15,000,000 per bulan',
    posted: '2 hari lalu',
    description: 'Juru bahasa isyarat untuk acara resmi dan pendidikan.',
    requirements: [
      'Sertifikasi BISINDO',
      'Pengalaman 2+ tahun interpretasi',
      'Kosakata luas',
      'Bisa lip-reading',
    ],
    responsibilities: [
      'Real-time interpretation',
      'Event preparation',
      'Konsultasi aksesibilitas',
      'Community workshop',
    ],
    benefits: [
      'Jadwal fleksibel',
      'Proyek bervariasi',
      'Kontribusi sosial',
      'Networking luas',
    ],
  },
  {
    title: 'Space Systems Engineer',
    company: 'Indonesia Space Agency',
    location: 'Bogor',
    type: 'Full-time',
    salary: 'Rp40,000,000 - Rp55,000,000',
    posted: '1 minggu lalu',
    description: 'Rekayasa sistem untuk satelit dan misi antariksa.',
    requirements: [
      'Gelar aerospace engineering',
      'Pengalaman sistem satelit',
      'Menguasai MATLAB/STK',
      'Memahami orbital mechanics',
    ],
    responsibilities: [
      'Desain sistem satelit',
      'Mission analysis',
      'Testing lingkungan',
      'Kolaborasi internasional',
    ],
    benefits: [
      'Fasilitas penelitian canggih',
      'Beasiswa S3',
      'Konferensi antariksa',
      'Tunjangan khusus',
    ],
  },
  // Tambahkan 10 lagi jika kamu ingin (bisa aku lanjutkan)
];

export default jobsData;
