import { Link } from 'react-router-dom';
import { FiHome, FiSearch } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold text-blue-600'>404</h1>
        <h2 className='mt-4 text-3xl font-bold text-gray-900'>
          Halaman tidak ditemukan
        </h2>
        <p className='mt-4 text-lg text-gray-600'>
          Maaf, kami tidak dapat menemukan halaman yang Anda cari.
        </p>

        <div className='mt-8 flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            to='/'
            className='flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
          >
            <FiHome className='mr-2' /> Kembali ke Beranda
          </Link>
          <Link
            to='/jobs'
            className='flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200'
          >
            <FiSearch className='mr-2' /> Cari Lowongan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
