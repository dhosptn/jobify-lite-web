import {
  FiSearch,
  FiBriefcase,
  FiUserCheck,
  FiStar,
  FiArrowRight,
  FiMapPin,
  FiTrendingUp,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <section className='relative bg-white py-24 overflow-hidden'>
        {/* Modern geometric background */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-full opacity-5'>
            <svg
              className='w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
            >
              <pattern
                id='geometric-pattern'
                width='20'
                height='20'
                patternUnits='userSpaceOnUse'
                patternTransform='rotate(45)'
              >
                <rect width='10' height='10' fill='#4f46e5' />
                <rect x='10' y='10' width='10' height='10' fill='#6366f1' />
              </pattern>
              <rect width='100' height='100' fill='url(#geometric-pattern)' />
            </svg>
          </div>

          {/* Subtle floating elements */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, 30 * (i % 2 === 0 ? 1 : -1)],
                rotate: [0, 5 * (i % 2 === 0 ? 1 : -1)],
              }}
              transition={{
                duration: 8 + i * 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className={`absolute ${i % 2 === 0 ? 'top-1/4' : 'bottom-1/3'} ${
                i % 3 === 0 ? 'left-1/4' : 'right-1/3'
              } w-32 h-32 rounded-lg opacity-5`}
              style={{
                background: `linear-gradient(45deg, ${
                  ['#818cf8', '#a5b4fc', '#c7d2fe'][i % 3]
                }, transparent)`,
                filter: 'blur(30px)',
              }}
            />
          ))}
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
            {/* Text Content */}
            <motion.div
              initial='hidden'
              animate='show'
              variants={container}
              className='lg:w-1/2 text-center lg:text-left'
            >
              <motion.div variants={item} className='mb-6'>
                <span className='inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-600'>
                  Karir Masa Depan Dimulai Disini
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className='text-3xl xs:text-4xl sm:text-[2.7rem] md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight text-center md:text-left'
              >
                <div className='inline-block'>
                  <div className='block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 whitespace-nowrap py-1'>
                    Temukan Pekerjaan
                  </div>
                  <div className='block whitespace-nowrap relative px-1'>
                    <span className='relative z-10'>Yang Sesuai Passion</span>
                    <span className='absolute bottom-1 left-1 right-1 h-2.5 xs:h-3 bg-indigo-100/80 z-0'></span>
                  </div>
                </div>
              </motion.h1>

              <motion.p
                variants={item}
                className='text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0'
              >
                Platform pencarian kerja terdepan yang menghubungkan talenta
                terbaik dengan perusahaan berkualitas. Mulai perjalanan karir
                impian Anda hari ini.
              </motion.p>

              <motion.div
                variants={item}
                className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12'
              >
                <a
                  href='/jobs'
                  className='relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 rounded-xl group'
                >
                  <span className='absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4'>
                    <span className='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
                  </span>
                  <span className='absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-xl group-hover:to-indigo-500'></span>
                  <span className='relative w-full text-center text-white transition-colors duration-200 ease-in-out flex items-center justify-center gap-2'>
                    Cari Lowongan Sekarang
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 group-hover:translate-x-1 transition-transform'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </span>
                </a>

                <a
                  href='/companies'
                  className='px-8 py-4 font-medium text-indigo-600 transition-all duration-300 border-2 border-indigo-100 rounded-xl hover:border-indigo-200 hover:bg-indigo-50 flex items-center justify-center gap-2'
                >
                  Jelajahi Perusahaan
                </a>
              </motion.div>

              {/* Trust indicators - modern version */}
              <motion.div
                variants={item}
                className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6'
              >
                <div className='flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-gray-100'>
                  <div className='flex -space-x-3'>
                    {[1, 2, 3].map((item) => (
                      <motion.img
                        key={item}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * item }}
                        src={`https://randomuser.me/api/portraits/${
                          item % 2 === 0 ? 'women' : 'men'
                        }/${item}.jpg`}
                        className='w-9 h-9 rounded-full border-2 border-white hover:scale-110 transition-transform'
                        alt='User'
                      />
                    ))}
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-900'>
                      10K+ Talenta
                    </p>
                    <p className='text-xs text-gray-500'>Bergabung bulan ini</p>
                  </div>
                </div>

                <div className='flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-gray-100'>
                  <div className='flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 text-indigo-600'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-900'>100+</p>
                    <p className='text-xs text-gray-500'>
                      Perusahaan Terverifikasi
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Illustration - modern version */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='lg:w-1/2 relative'
            >
              <div className='relative'>
                <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-8 shadow-xl border border-gray-100'>
                  <img
                    src='/hero_job.svg' // Replace with your modern illustration
                    alt='Career Success Illustration'
                    className='w-full h-auto max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-500'
                  />

                  {/* Floating badge - modern design */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all'
                  >
                    <div className='flex items-center gap-3'>
                      <div className='bg-indigo-100 p-2 rounded-lg group'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 text-indigo-600 group-hover:rotate-12 transition-transform'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                      </div>
                      <div>
                        <p className='font-semibold text-gray-900'>
                          +50 Lowongan
                        </p>
                        <p className='text-sm text-gray-500'>
                          Ditambahkan hari ini
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className='absolute -top-6 -left-6 w-24 h-24 rounded-full bg-indigo-200/30 blur-xl'></div>
                <div className='absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-indigo-300/20 blur-xl'></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id='how-it-works' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            variants={container}
            className='text-center mb-12'
          >
            <motion.h2 variants={item} className='text-3xl font-bold mb-4'>
              Bagaimana Jobify Lite Bekerja Untuk Anda
            </motion.h2>
            <motion.p
              variants={item}
              className='text-gray-600 max-w-2xl mx-auto'
            >
              Dalam 3 langkah sederhana, Anda bisa menemukan pekerjaan yang
              sesuai dengan keahlian dan passion Anda.
            </motion.p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: <FiSearch className='text-blue-600' size={24} />,
                title: '1. Temukan Lowongan',
                description:
                  'Gunakan fitur pencarian canggih kami untuk menemukan pekerjaan yang sesuai dengan kriteria Anda.',
              },
              {
                icon: <FiBriefcase className='text-blue-600' size={24} />,
                title: '2. Lamar Seketika',
                description:
                  'Kirim lamaran Anda langsung melalui platform kami dengan sekali klik - tanpa ribet!',
              },
              {
                icon: <FiUserCheck className='text-blue-600' size={24} />,
                title: '3. Dapatkan Pekerjaan',
                description:
                  'Terhubung dengan perusahaan dan raih pekerjaan impian Anda dengan bantuan sistem kami.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={item}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white p-8 rounded-xl shadow-sm transition-all duration-300 ${
                  hoveredCard === index
                    ? 'shadow-lg border border-blue-100'
                    : 'hover:shadow-md'
                }`}
              >
                <div
                  className={`bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                    hoveredCard === index ? 'scale-110' : ''
                  }`}
                >
                  {step.icon}
                </div>
                <h3 className='text-xl font-semibold mb-3'>{step.title}</h3>
                <p className='text-gray-600'>{step.description}</p>
                <div
                  className={`mt-6 h-1 bg-gradient-to-r from-blue-100 to-blue-600 transition-all duration-500 ${
                    hoveredCard === index ? 'w-full' : 'w-0'
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 bg-gradient-to-br from-white to-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            variants={container}
            className='text-center mb-12'
          >
            <motion.h2 variants={item} className='text-3xl font-bold mb-4'>
              Apa Kata Mereka Tentang Jobify Lite
            </motion.h2>
            <motion.p
              variants={item}
              className='text-gray-600 max-w-2xl mx-auto'
            >
              Dengarkan dari para profesional yang telah mengubah karir mereka
            </motion.p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                initials: 'AS',
                name: 'Andi Setiawan',
                role: 'Software Engineer',
                quote:
                  '"Dalam 2 minggu menggunakan Jobify Lite, saya mendapatkan 5 panggilan interview dan akhirnya diterima di perusahaan impian!"',
                stars: 5,
              },
              {
                initials: 'SD',
                name: 'Siti Dewi',
                role: 'Marketing Manager',
                quote:
                  '"Sistem pencarian yang sangat intuitif. Saya bisa memfilter berdasarkan gaji, lokasi, dan benefit dengan mudah."',
                stars: 5,
              },
              {
                initials: 'RJ',
                name: 'Rizky Jaya',
                role: 'HR Manager',
                quote:
                  '"Sebagai perekrut, Jobify Lite membantu kami menemukan kandidat berkualitas dengan lebih efisien."',
                stars: 4,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={item}
                className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow'
              >
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mr-4'>
                    <span className='text-blue-600 font-bold'>
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className='font-semibold'>{testimonial.name}</h4>
                    <p className='text-gray-500 text-sm'>{testimonial.role}</p>
                  </div>
                </div>
                <p className='text-gray-600 italic mb-6'>{testimonial.quote}</p>
                <div className='flex'>
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={
                        i < testimonial.stars
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }
                      size={18}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h2 variants={item} className='text-3xl font-bold mb-6'>
              Siap Memulai Perjalanan Karir Anda?
            </motion.h2>
            <motion.p
              variants={item}
              className='text-xl mb-8 max-w-2xl mx-auto'
            >
              Bergabunglah dengan ribuan profesional yang telah menemukan
              pekerjaan impian mereka melalui Jobify Lite.
            </motion.p>
            <motion.div
              variants={item}
              className='flex flex-col sm:flex-row justify-center gap-4'
            >
              <a
                href='/jobs'
                className='relative group bg-white text-blue-600 px-8 py-3 rounded-lg font-medium text-lg overflow-hidden'
              >
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  Temukan Pekerjaan Sekarang
                  <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-100 group-hover:opacity-0 transition-opacity duration-300'></div>
                <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </a>
              <a
                href='/login'
                className='relative group border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg overflow-hidden'
              >
                <span className='relative z-10'>Masuk Sekarang</span>
                <div className='absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300'></div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
