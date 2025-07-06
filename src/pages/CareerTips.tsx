import {
  FaLightbulb,
  FaChartLine,
  FaUserTie,
  FaHandshake,
  FaBalanceScale,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function CareerTips() {
  const tips = [
    {
      icon: <FaUserTie className='w-6 h-6 text-blue-600' />,
      title: 'Membangun Personal Brand',
      content:
        'Di era digital, personal brand adalah aset berharga. Bangun reputasi profesional melalui LinkedIn, portofolio online, dan konten yang menunjukkan keahlian Anda.',
      tips: [
        'Optimalkan profil LinkedIn dengan foto profesional',
        'Tulis artikel atau buat konten terkait bidang Anda',
        'Bangun jaringan dengan profesional sejenis',
      ],
    },
    {
      icon: <FaChartLine className='w-6 h-6 text-green-600' />,
      title: 'Strategi Pengembangan Karir',
      content:
        'Karir yang sukses membutuhkan perencanaan matang. Tetapkan tujuan jangka pendek dan panjang, serta identifikasi keterampilan yang perlu dikembangkan.',
      tips: [
        'Buat peta karir 5 tahun',
        'Ikuti pelatihan dan sertifikasi relevan',
        'Cari mentor di bidang Anda',
      ],
    },
    {
      icon: <FaHandshake className='w-6 h-6 text-purple-600' />,
      title: 'Teknik Interview Sukses',
      content:
        'Interview adalah gerbang menuju pekerjaan impian. Persiapkan diri dengan matang untuk memberikan kesan terbaik.',
      tips: [
        'Pelajari budaya perusahaan',
        'Siapkan contoh pencapaian konkret',
        'Latihan dengan pertanyaan umum',
      ],
    },
    {
      icon: <FaBalanceScale className='w-6 h-6 text-orange-600' />,
      title: 'Work-Life Balance',
      content:
        'Produktivitas bukan berarti bekerja tanpa henti. Temukan keseimbangan untuk menjaga performa dan kesehatan mental.',
      tips: [
        'Tetapkan batasan kerja yang jelas',
        'Alokasikan waktu untuk pengembangan diri',
        'Jangan lupa istirahat dan rekreasi',
      ],
    },
  ];

  const successStories = [
    {
      quote:
        'Dengan menerapkan tips personal branding, saya mendapatkan 3 tawaran kerja dalam 2 bulan!',
      author: 'Andi, Digital Marketer',
    },
    {
      quote:
        'Strategi interview yang saya pelajari di sini membantu saya diterima di perusahaan impian.',
      author: 'Siti, Product Manager',
    },
  ];

  return (
    <div className='bg-gradient-to-b from-blue-50 to-white'>
      {/* Hero Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <div className='inline-flex items-center justify-center bg-blue-100 px-4 py-2 rounded-full mb-4'>
            <FaLightbulb className='text-yellow-500 mr-2' />
            <span className='font-medium text-blue-800'>Tips Profesional</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Akselerasi <span className='text-blue-600'>Perjalanan Karir</span>{' '}
            Anda
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Temukan wawasan dan strategi dari para ahli untuk membawa karir Anda
            ke level berikutnya.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        {/* Tips Grid */}
        <div className='grid md:grid-cols-2 gap-8 mb-20'>
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100'
            >
              <div className='p-8'>
                <div className='flex items-center mb-4'>
                  <div className='bg-blue-50 p-3 rounded-lg mr-4'>
                    {tip.icon}
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900'>
                    {tip.title}
                  </h2>
                </div>
                <p className='text-gray-600 mb-6'>{tip.content}</p>

                <h3 className='font-semibold text-gray-800 mb-3'>
                  Tips Praktis:
                </h3>
                <ul className='space-y-3'>
                  {tip.tips.map((item, i) => (
                    <li key={i} className='flex items-start'>
                      <div className='flex-shrink-0 mt-1'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                      </div>
                      <span className='text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* <button className='mt-6 inline-flex items-center text-blue-600 font-medium group'>
                  Pelajari lebih lanjut
                  <FiArrowRight className='ml-2 transition-transform group-hover:translate-x-1' />
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <div className='bg-blue-600 rounded-2xl p-8 md:p-12 mb-20'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold text-white mb-2'>Kisah Sukses</h2>
            <p className='text-blue-100 mb-8'>
              Bagaimana tips kami membantu profesional seperti Anda
            </p>

            <div className='grid md:grid-cols-2 gap-8'>
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className='bg-white p-6 rounded-lg shadow-md text-left'
                >
                  <p className='text-gray-700 italic mb-4'>"{story.quote}"</p>
                  <p className='font-medium text-gray-900'>— {story.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Siap Mengubah Karir Anda?
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-8'>
            Daftar sekarang untuk mendapatkan tips eksklusif dan panduan karir
            langsung ke inbox Anda.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className='px-8 py-4 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 shadow-sm hover:bg-blue-50 transition-colors'
            >
              Lihat Lowongan Kerja
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
