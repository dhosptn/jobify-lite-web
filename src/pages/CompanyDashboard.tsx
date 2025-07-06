// src/pages/CompanyDashboard.tsx

import { FiBriefcase, FiUserPlus, FiClipboard } from 'react-icons/fi';

export default function CompanyDashboard() {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <header className='mb-6'>
        <h1 className='text-3xl font-bold text-gray-800'>
          Dashboard Perusahaan
        </h1>
        <p className='text-gray-600'>
          Selamat datang! Kelola lowongan dan pelamar di sini.
        </p>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition'>
          <div className='flex items-center mb-4'>
            <FiBriefcase className='text-indigo-600 text-2xl mr-3' />
            <h2 className='text-lg font-semibold text-gray-800'>
              Lowongan Saya
            </h2>
          </div>
          <p className='text-gray-600'>
            Kelola daftar pekerjaan yang Anda posting.
          </p>
        </div>

        <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition'>
          <div className='flex items-center mb-4'>
            <FiUserPlus className='text-indigo-600 text-2xl mr-3' />
            <h2 className='text-lg font-semibold text-gray-800'>Pelamar</h2>
          </div>
          <p className='text-gray-600'>
            Lihat siapa saja yang melamar ke lowongan Anda.
          </p>
        </div>

        <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition'>
          <div className='flex items-center mb-4'>
            <FiClipboard className='text-indigo-600 text-2xl mr-3' />
            <h2 className='text-lg font-semibold text-gray-800'>
              Profil Perusahaan
            </h2>
          </div>
          <p className='text-gray-600'>
            Perbarui profil dan informasi perusahaan Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
