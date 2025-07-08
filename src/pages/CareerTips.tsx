import {
  FaLightbulb,
  FaChartLine,
  FaUserTie,
  FaHandshake,
  FaBalanceScale,
  FaQuoteLeft,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function CareerTips() {
  const tips = [
    {
      icon: <FaUserTie className='w-6 h-6' />,
      title: 'Membangun Personal Brand',
      content:
        'Di era digital, personal brand adalah aset berharga. Bangun reputasi profesional melalui LinkedIn, portofolio online, dan konten yang menunjukkan keahlian Anda.',
      tips: [
        'Optimalkan profil LinkedIn dengan foto profesional',
        'Tulis artikel atau buat konten terkait bidang Anda',
        'Bangun jaringan dengan profesional sejenis',
      ],
      color: 'blue',
    },
    {
      icon: <FaChartLine className='w-6 h-6' />,
      title: 'Strategi Pengembangan Karir',
      content:
        'Karir yang sukses membutuhkan perencanaan matang. Tetapkan tujuan jangka pendek dan panjang, serta identifikasi keterampilan yang perlu dikembangkan.',
      tips: [
        'Buat peta karir 5 tahun',
        'Ikuti pelatihan dan sertifikasi relevan',
        'Cari mentor di bidang Anda',
      ],
      color: 'green',
    },
    {
      icon: <FaHandshake className='w-6 h-6' />,
      title: 'Teknik Interview Sukses',
      content:
        'Interview adalah gerbang menuju pekerjaan impian. Persiapkan diri dengan matang untuk memberikan kesan terbaik.',
      tips: [
        'Pelajari budaya perusahaan',
        'Siapkan contoh pencapaian konkret',
        'Latihan dengan pertanyaan umum',
      ],
      color: 'purple',
    },
    {
      icon: <FaBalanceScale className='w-6 h-6' />,
      title: 'Work-Life Balance',
      content:
        'Produktivitas bukan berarti bekerja tanpa henti. Temukan keseimbangan untuk menjaga performa dan kesehatan mental.',
      tips: [
        'Tetapkan batasan kerja yang jelas',
        'Alokasikan waktu untuk pengembangan diri',
        'Jangan lupa istirahat dan rekreasi',
      ],
      color: 'orange',
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardHover = {
    y: -8,
    boxShadow:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const colorMap = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-300',
      gradient: 'from-blue-600 to-blue-500',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      hover: 'hover:border-green-300',
      gradient: 'from-green-600 to-green-500',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:border-purple-300',
      gradient: 'from-purple-600 to-purple-500',
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      hover: 'hover:border-orange-300',
      gradient: 'from-orange-600 to-orange-500',
    },
  };

  return (
    <div className='bg-gradient-to-b pt-10 from-blue-50 to-white min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
          <div className='absolute top-0 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
          <div className='absolute bottom-0 left-1/2 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={fadeIn}
            className='text-center'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='inline-flex items-center justify-center bg-blue-100 px-4 py-2 rounded-full mb-4'
            >
              <FaLightbulb className='text-yellow-500 mr-2' />
              <span className='font-medium text-blue-800'>
                Tips Profesional
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'
            >
              Akselerasi{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
                Perjalanan Karir
              </span>{' '}
              Anda
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className='text-xl text-gray-600 max-w-3xl mx-auto'
            >
              Temukan wawasan dan strategi dari para ahli untuk membawa karir
              Anda ke level berikutnya.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        {/* Tips Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='grid md:grid-cols-2 gap-8 mb-20'
        >
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHover}
              className={`bg-white rounded-2xl overflow-hidden border ${
                colorMap[tip.color].border
              } ${colorMap[tip.color].hover} transition-all duration-300 group`}
            >
              <div className='p-8 h-full flex flex-col'>
                <div className='flex items-center mb-4'>
                  <div
                    className={`${
                      colorMap[tip.color].bg
                    } p-3 rounded-lg mr-4 transition-all duration-300 group-hover:scale-110`}
                  >
                    {tip.icon}
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900'>
                    {tip.title}
                  </h2>
                </div>
                <p className='text-gray-600 mb-6 flex-grow'>{tip.content}</p>

                <div>
                  <h3 className='font-semibold text-gray-800 mb-3'>
                    Tips Praktis:
                  </h3>
                  <ul className='space-y-3'>
                    {tip.tips.map((item, i) => (
                      <motion.li
                        key={i}
                        className='flex items-start'
                        whileHover={{ x: 5 }}
                      >
                        <div className='flex-shrink-0 mt-1'>
                          <div
                            className={`w-2 h-2 ${
                              colorMap[tip.color].bg
                            } rounded-full mr-3`}
                          ></div>
                        </div>
                        <span className='text-gray-700'>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          variants={fadeIn}
          initial='hidden'
          animate='visible'
          className='relative mb-20'
        >
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl overflow-hidden'>
            <div className='absolute inset-0 opacity-10 bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+")]'></div>
            <div className='absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-16 -translate-y-16'></div>
            <div className='absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full transform -translate-x-16 translate-y-16'></div>
          </div>

          <div className='relative max-w-6xl mx-auto p-8 md:p-12'>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className='text-center mb-12'
            >
              <h2 className='text-3xl font-bold text-white mb-2'>
                Kisah Sukses
              </h2>
              <p className='text-blue-100'>
                Bagaimana tips kami membantu profesional seperti Anda
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 gap-8'>
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className='bg-white p-6 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-90'
                >
                  <div className='flex flex-col h-full'>
                    <FaQuoteLeft className='text-blue-500 text-2xl mb-4 opacity-30' />
                    <p className='text-gray-700 italic mb-4 flex-grow'>
                      "{story.quote}"
                    </p>
                    <p className='font-medium text-gray-900'>
                      — {story.author}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn}
          initial='hidden'
          animate='visible'
          className='text-center'
        >
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Siap Mengubah Karir Anda?
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-8'>
            Daftar sekarang untuk mendapatkan tips eksklusif dan panduan karir
            langsung ke inbox Anda.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link to='/jobs' className='inline-block'>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className='px-8 py-4 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:border-blue-300 shadow-sm relative overflow-hidden group'
              >
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  Lihat Lowongan Kerja
                  <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
                </span>
                <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
