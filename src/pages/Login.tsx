import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Rocket, ShieldCheck, UserCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      await signInWithPopup(auth, googleProvider);
      navigate('/jobs');
    } catch (err: any) {
      console.error('Login error:', err);
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8'>
      {/* Main Card - Only animate the whole card entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100'
      >
        {/* Illustration Side */}
        <div className='md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-7 flex flex-col justify-center relative overflow-hidden'>
          {/* Animated decorative elements */}
          <motion.div
            className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10'
            animate={{
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className='relative z-10 space-y-8'>
            <motion.div
              whileHover={{ rotate: 5 }}
              className='p-2 bg-white/20 rounded-2xl hidden md:inline-flex items-center justify-center backdrop-blur-sm w-20 h-20'
            >
              <Rocket className='w-10 h-10 text-white' strokeWidth={1.5} />
            </motion.div>

            <div className='space-y-4'>
              <h1 className='text-4xl font-bold text-white leading-snug'>
                Akselerasi Perjalanan Karir Anda
              </h1>
              <p className='text-blue-100 text-lg max-w-md leading-relaxed'>
                Bergabunglah dengan ribuan profesional dalam menemukan peluang
                kerja impian
              </p>
            </div>

            <div className='md:flex hidden items-center space-x-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm max-w-xs'>
              <ShieldCheck className='w-6 h-6 text-white flex-shrink-0' />
              <p className='text-white font-medium'>
                Keamanan tingkat perusahaan
              </p>
            </div>
          </div>
        </div>

        {/* Login Side */}
        <div className='md:w-1/2 p-12 flex flex-col justify-center'>
          <div className='text-center mb-10 space-y-3'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='inline-flex items-center justify-center bg-blue-50 p-4 rounded-full mb-2'
            >
              <UserCircle className='w-8 h-8 text-blue-600' strokeWidth={1.5} />
            </motion.div>
            <h2 className='text-3xl font-bold text-gray-900'>
              Selamat Datang Kembali
            </h2>
            <p className='text-gray-600 text-lg'>
              Masuk untuk mengakses akun Anda
            </p>
          </div>

          {/* Main button with nice press animation */}
          <motion.button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center justify-between py-4 px-6 rounded-xl border transition-colors
              ${
                isLoading
                  ? 'bg-gray-100 cursor-not-allowed border-gray-200'
                  : 'bg-white hover:bg-gray-50 border-gray-300 hover:border-blue-400 shadow-xs'
              }`}
          >
            <div className='flex items-center'>
              <div
                className={`p-2 rounded-lg mr-4 ${
                  isLoading ? 'bg-gray-200' : 'bg-white'
                }`}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className='h-6 w-6 border-b-2 border-blue-600 rounded-full'
                  />
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='w-5 h-5'
                  >
                    <path
                      d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                      fill='#4285F4'
                    />
                    <path
                      d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                      fill='#34A853'
                    />
                    <path
                      d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                      fill='#FBBC05'
                    />
                    <path
                      d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                      fill='#EA4335'
                    />
                  </svg>
                )}
              </div>
              <span
                className={`font-medium ${
                  isLoading ? 'text-gray-500' : 'text-gray-700'
                } text-lg`}
              >
                Lanjutkan dengan Google
              </span>
            </div>
            {!isLoading && (
              <motion.div
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <FiArrowRight className='text-gray-400 text-xl' />
              </motion.div>
            )}
          </motion.button>

          {/* Footer */}
          <div className='mt-12 pt-6 border-t border-gray-200 space-y-4'>
            <div className='flex justify-center items-center text-sm text-gray-600'>
              <FiCheckCircle className='text-green-500 mr-2 flex-shrink-0' />
              <span>Dipercaya oleh profesional di seluruh dunia</span>
            </div>
            <div className='text-center text-xs text-gray-500'>
              Dengan melanjutkan, Anda menyetujui{' '}
              <a href='#' className='text-blue-600 hover:underline font-medium'>
                Syarat Layanan
              </a>{' '}
              dan{' '}
              <a href='#' className='text-blue-600 hover:underline font-medium'>
                Kebijakan Privasi
              </a>{' '}
              kami
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
