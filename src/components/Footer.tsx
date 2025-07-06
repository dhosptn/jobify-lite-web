import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* About */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Jobify Lite</h3>
            <p className='text-gray-400'>
              Platform pencarian kerja terbaik untuk menghubungkan talenta
              dengan perusahaan impian.
            </p>
            <div className='flex space-x-4 mt-4'>
              <a href='#' className='text-gray-400 hover:text-white'>
                <FiFacebook size={20} />
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <FiTwitter size={20} />
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <FiLinkedin size={20} />
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Tautan Cepat</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='text-gray-400 hover:text-white'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/jobs' className='text-gray-400 hover:text-white'>
                  Lowongan
                </Link>
              </li>
              <li>
                <Link to='/login' className='text-gray-400 hover:text-white'>
                  Login
                </Link>
              </li>
              <li>
                <Link to='/register' className='text-gray-400 hover:text-white'>
                  Daftar
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Sumber Daya</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Tips Karir
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  FAQ
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Kontak Kami</h3>
            <address className='text-gray-400 not-italic'>
              <p>Jl. Teknologi No. 123</p>
              <p>Jakarta, Indonesia</p>
              <p className='mt-2'>Email: info@jobifylite.com</p>
              <p>Telp: (021) 1234-5678</p>
            </address>
          </div>
        </div>

        <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} Jobify Lite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
