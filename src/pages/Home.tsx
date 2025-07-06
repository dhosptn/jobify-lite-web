import {
  FiSearch,
  FiBriefcase,
  FiStar,
  FiUserCheck,
  FiTrendingUp,
} from 'react-icons/fi';

export default function Home() {
  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-50 to-indigo-50 py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6 leading-tight'>
            Temukan <span className='text-blue-600'>Pekerjaan Impian</span> Anda{' '}
            <br />
            Dalam Hitungan Menit
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Jobify Lite menghubungkan Anda dengan ribuan lowongan berkualitas
            dari perusahaan terpercaya. Mulai petualangan karir Anda hari ini!
          </p>
          <div className='flex justify-center gap-4 mb-16'>
            <a
              href='/jobs'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium text-lg transition-all hover:shadow-lg'
            >
              Jelajahi Lowongan
            </a>
            <a
              href='#how-it-works'
              className='border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-medium text-lg transition-all'
            >
              Pelajari Cara Kerjanya
            </a>
          </div>

          {/* Search Bar Preview */}
          <div className='max-w-2xl mx-auto bg-white p-2 rounded-lg shadow-lg'>
            <div className='flex items-center'>
              <FiSearch className='text-gray-400 ml-4 mr-2' size={20} />
              <input
                type='text'
                placeholder='Cari berdasarkan posisi, perusahaan, atau kata kunci...'
                className='flex-grow py-3 px-2 outline-none text-gray-700'
              />
              <button className='bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-medium'>
                Cari
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
            <div className='p-6'>
              <h3 className='text-4xl font-bold text-blue-600 mb-2'>10.000+</h3>
              <p className='text-gray-600'>Lowongan Tersedia</p>
            </div>
            <div className='p-6'>
              <h3 className='text-4xl font-bold text-blue-600 mb-2'>2.500+</h3>
              <p className='text-gray-600'>Perusahaan Terdaftar</p>
            </div>
            <div className='p-6'>
              <h3 className='text-4xl font-bold text-blue-600 mb-2'>95%</h3>
              <p className='text-gray-600'>Kepuasan Pengguna</p>
            </div>
            <div className='p-6'>
              <h3 className='text-4xl font-bold text-blue-600 mb-2'>
                30 detik
              </h3>
              <p className='text-gray-600'>Waktu Pendaftaran Rata-rata</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id='how-it-works' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-4'>
            Bagaimana Jobify Lite Bekerja Untuk Anda
          </h2>
          <p className='text-gray-600 text-center mb-12 max-w-2xl mx-auto'>
            Dalam 3 langkah sederhana, Anda bisa menemukan pekerjaan yang sesuai
            dengan keahlian dan passion Anda.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6'>
                <FiSearch className='text-blue-600' size={24} />
              </div>
              <h3 className='text-xl font-semibold mb-3'>
                1. Temukan Lowongan
              </h3>
              <p className='text-gray-600'>
                Gunakan fitur pencarian canggih kami untuk menemukan pekerjaan
                yang sesuai dengan kriteria Anda.
              </p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6'>
                <FiBriefcase className='text-blue-600' size={24} />
              </div>
              <h3 className='text-xl font-semibold mb-3'>2. Lamar Seketika</h3>
              <p className='text-gray-600'>
                Kirim lamaran Anda langsung melalui platform kami dengan sekali
                klik - tanpa ribet!
              </p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6'>
                <FiUserCheck className='text-blue-600' size={24} />
              </div>
              <h3 className='text-xl font-semibold mb-3'>
                3. Dapatkan Pekerjaan
              </h3>
              <p className='text-gray-600'>
                Terhubung dengan perusahaan dan raih pekerjaan impian Anda
                dengan bantuan sistem kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold'>Lowongan Unggulan</h2>
            <a
              href='/jobs'
              className='text-blue-600 hover:underline font-medium'
            >
              Lihat Semua
            </a>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Job Card 1 */}
            <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <div className='flex items-start justify-between mb-4'>
                <div>
                  <h3 className='text-xl font-semibold'>Frontend Developer</h3>
                  <p className='text-gray-600'>TechSolutions Inc.</p>
                </div>
                <FiStar className='text-yellow-400' size={20} />
              </div>
              <div className='flex gap-2 mb-4'>
                <span className='bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full'>
                  Full-time
                </span>
                <span className='bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full'>
                  Remote
                </span>
              </div>
              <p className='text-gray-600 mb-4'>
                Kami mencari developer berbakat untuk bergabung dengan tim
                inovasi kami.
              </p>
              <div className='flex justify-between items-center'>
                <span className='font-medium'>Rp12-18jt/bulan</span>
                <a href='/jobs/1' className='text-blue-600 hover:underline'>
                  Detail
                </a>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <div className='flex items-start justify-between mb-4'>
                <div>
                  <h3 className='text-xl font-semibold'>
                    Digital Marketing Specialist
                  </h3>
                  <p className='text-gray-600'>GrowthMarketing Co.</p>
                </div>
                <FiStar className='text-yellow-400' size={20} />
              </div>
              <div className='flex gap-2 mb-4'>
                <span className='bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full'>
                  Full-time
                </span>
                <span className='bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full'>
                  Hybrid
                </span>
              </div>
              <p className='text-gray-600 mb-4'>
                Bergabunglah dengan tim marketing dinamis kami untuk membantu
                brand berkembang.
              </p>
              <div className='flex justify-between items-center'>
                <span className='font-medium'>Rp10-15jt/bulan</span>
                <a href='/jobs/2' className='text-blue-600 hover:underline'>
                  Detail
                </a>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <div className='flex items-start justify-between mb-4'>
                <div>
                  <h3 className='text-xl font-semibold'>Data Analyst</h3>
                  <p className='text-gray-600'>DataInsight Ltd.</p>
                </div>
                <FiStar className='text-yellow-400' size={20} />
              </div>
              <div className='flex gap-2 mb-4'>
                <span className='bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full'>
                  Kontrak
                </span>
                <span className='bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full'>
                  Remote
                </span>
              </div>
              <p className='text-gray-600 mb-4'>
                Bantu perusahaan membuat keputusan berbasis data dengan analisis
                mendalam.
              </p>
              <div className='flex justify-between items-center'>
                <span className='font-medium'>Rp14-20jt/bulan</span>
                <a href='/jobs/3' className='text-blue-600 hover:underline'>
                  Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Apa Kata Mereka Tentang Jobify Lite
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-sm'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4'>
                  <span className='text-blue-600 font-bold'>AS</span>
                </div>
                <div>
                  <h4 className='font-semibold'>Andi Setiawan</h4>
                  <p className='text-gray-500 text-sm'>Software Engineer</p>
                </div>
              </div>
              <p className='text-gray-600 italic'>
                "Dalam 2 minggu menggunakan Jobify Lite, saya mendapatkan 5
                panggilan interview dan akhirnya diterima di perusahaan impian!"
              </p>
              <div className='flex mt-4'>
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className='text-yellow-400' size={18} />
                ))}
              </div>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-sm'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4'>
                  <span className='text-blue-600 font-bold'>SD</span>
                </div>
                <div>
                  <h4 className='font-semibold'>Siti Dewi</h4>
                  <p className='text-gray-500 text-sm'>Marketing Manager</p>
                </div>
              </div>
              <p className='text-gray-600 italic'>
                "Sistem pencarian yang sangat intuitif. Saya bisa memfilter
                berdasarkan gaji, lokasi, dan benefit dengan mudah."
              </p>
              <div className='flex mt-4'>
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className='text-yellow-400' size={18} />
                ))}
              </div>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-sm'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4'>
                  <span className='text-blue-600 font-bold'>RJ</span>
                </div>
                <div>
                  <h4 className='font-semibold'>Rizky Jaya</h4>
                  <p className='text-gray-500 text-sm'>HR Manager</p>
                </div>
              </div>
              <p className='text-gray-600 italic'>
                "Sebagai perekrut, Jobify Lite membantu kami menemukan kandidat
                berkualitas dengan lebih efisien."
              </p>
              <div className='flex mt-4'>
                {[...Array(4)].map((_, i) => (
                  <FiStar key={i} className='text-yellow-400' size={18} />
                ))}
                <FiStar className='text-gray-300' size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-blue-600 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>
            Siap Memulai Perjalanan Karir Anda?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Bergabunglah dengan ribuan profesional yang telah menemukan
            pekerjaan impian mereka melalui Jobify Lite.
          </p>
          <div className='flex justify-center gap-4'>
            <a
              href='/jobs'
              className='bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-medium text-lg transition-all hover:shadow-lg'
            >
              Temukan Pekerjaan Sekarang
            </a>
            <a
              href='/register'
              className='border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium text-lg transition-all'
            >
              Daftar Gratis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
