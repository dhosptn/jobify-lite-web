import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Briefcase } from 'lucide-react';

const SuccessApply = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4'>
      <div className='bg-white p-8 sm:p-10 rounded-2xl shadow-xl max-w-md w-full border border-gray-100 transform transition-all hover:shadow-2xl'>
        <div className='flex justify-center mb-6'>
          <div className='bg-green-50 p-4 rounded-full'>
            <CheckCircle
              className='w-12 h-12 text-green-600'
              strokeWidth={1.5}
            />
          </div>
        </div>

        <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center'>
          Lamaran Terkirim dengan Sukses!
        </h1>

        <p className='text-gray-600 mb-6 text-center leading-relaxed'>
          Selamat! Lamaran Anda untuk posisi tersebut telah kami terima. Tim
          rekruter kami akan segera memproses aplikasi Anda.
        </p>

        <div className='bg-blue-50 rounded-lg p-4 mb-6'>
          <div className='flex items-start'>
            <Briefcase className='w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
            <p className='text-sm text-gray-700'>
              <span className='font-medium'>Pro Tip:</span> Sambil menunggu
              respon, Anda bisa melamar lowongan lainnya untuk meningkatkan
              peluang mendapatkan pekerjaan.
            </p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Link
            to='/my-applications'
            className='flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-md transition-all duration-300 font-medium'
          >
            Lacak Status Lamaran
            <ArrowRight className='w-4 h-4' />
          </Link>

          <Link
            to='/jobs'
            className='flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium'
          >
            Cari Lowongan Lain
          </Link>
        </div>

        <p className='text-xs text-gray-400 mt-6 text-center'>
          Biasanya membutuhkan waktu 3-5 hari kerja untuk mendapatkan balasan
          dari perusahaan.
        </p>
      </div>
    </div>
  );
};

export default SuccessApply;
