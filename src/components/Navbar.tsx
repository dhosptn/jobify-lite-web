import { Link, NavLink } from 'react-router-dom';
import {
  Search,
  UserRound,
  LogIn,
  LogOut,
  BriefcaseBusiness,
  Home,
  ClipboardList,
  Bookmark,
  FileText,
  Menu,
  X,
  Building,
  Lightbulb,
  AlertCircle,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(false);
    logout();
    setMobileMenuOpen(false);
  };

  // Animation variants
  const navItemVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <nav className='backdrop-blur shadow-sm fixed top-0 left-0 w-full z-50 border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className='flex items-center'
          >
            <Link
              to='/'
              className='text-xl font-bold text-blue-600 flex items-center hover:text-blue-700 transition-colors'
            >
              <BriefcaseBusiness className='mr-2 h-5 w-5' />
              <span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                Jobify Lite
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6'>
            <motion.div
              variants={navItemVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `flex items-center px-1 pt-1 text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-500'
                      : 'text-gray-600 hover:text-blue-500'
                  }`
                }
              >
                <Home className='mr-2 h-4 w-4' />
                Home
              </NavLink>
            </motion.div>

            <motion.div
              variants={navItemVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <NavLink
                to='/jobs'
                className={({ isActive }) =>
                  `flex items-center px-1 pt-1 text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-500'
                      : 'text-gray-600 hover:text-blue-500'
                  }`
                }
              >
                <ClipboardList className='mr-2 h-4 w-4' />
                Lowongan
              </NavLink>
            </motion.div>

            <motion.div
              variants={navItemVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <NavLink
                to='/companies'
                className={({ isActive }) =>
                  `flex items-center px-1 pt-1 text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-500'
                      : 'text-gray-600 hover:text-blue-500'
                  }`
                }
              >
                <Building className='mr-2 h-4 w-4' />
                Perusahaan
              </NavLink>
            </motion.div>

            <motion.div
              variants={navItemVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <NavLink
                to='/career-tips'
                className={({ isActive }) =>
                  `flex items-center px-1 pt-1 text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-500'
                      : 'text-gray-600 hover:text-blue-500'
                  }`
                }
              >
                <Lightbulb className='mr-2 h-4 w-4' />
                Tips Karir
              </NavLink>
            </motion.div>

            {user && (
              <motion.div
                variants={navItemVariants}
                whileHover='hover'
                whileTap='tap'
              >
                <NavLink
                  to='/my-applications'
                  className={({ isActive }) =>
                    `flex items-center px-1 pt-1 text-sm font-medium transition-all ${
                      isActive
                        ? 'text-blue-600 border-b-2 border-blue-500'
                        : 'text-gray-600 hover:text-blue-500'
                    }`
                  }
                >
                  <FileText className='mr-2 h-4 w-4' />
                  Lamaran Saya
                </NavLink>
              </motion.div>
            )}
          </div>

          {/* User Actions - Desktop */}
          <div className='hidden md:flex items-center space-x-4'>
            {user ? (
              <motion.div
                className='flex items-center space-x-3'
                whileHover={{ scale: 1.02 }}
              >
                <motion.button
                  onClick={() => setShowLogoutConfirm(true)}
                  className='flex items-center space-x-1 text-gray-600 hover:text-blue-500 px-2 py-1 rounded hover:bg-gray-100 transition-all'
                  whileHover={{ x: 2 }}
                >
                  <LogOut className='h-5 w-5' />
                  <span className='text-sm'>Logout</span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                variants={navItemVariants}
                whileHover='hover'
                whileTap='tap'
              >
                <Link
                  to='/login'
                  className='flex items-center space-x-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md hover:shadow-md transition-all'
                >
                  <LogIn className='h-5 w-5' />
                  <span className='text-sm'>Login</span>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='inline-flex items-center justify-center p-2 bg-transparent rounded-md text-gray-600 hover:text-blue-500 hover:bg-gray-100 focus:outline-none transition-all'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className='md:hidden overflow-hidden'
      >
        <div className='pt-2 pb-3 space-y-1 bg-white border-t shadow-inner'>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <NavLink
              to='/'
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-base font-medium transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                }`
              }
            >
              <Home className='mr-3 h-5 w-5' />
              Home
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <NavLink
              to='/jobs'
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-base font-medium transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                }`
              }
            >
              <ClipboardList className='mr-3 h-5 w-5' />
              Lowongan
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <NavLink
              to='/companies'
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-base font-medium transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                }`
              }
            >
              <Building className='mr-3 h-5 w-5' />
              Perusahaan
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <NavLink
              to='/career-tips'
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-base font-medium transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                }`
              }
            >
              <Lightbulb className='mr-3 h-5 w-5' />
              Tips Karir
            </NavLink>
          </motion.div>

          {user && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <NavLink
                to='/my-applications'
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-base font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                  }`
                }
              >
                <FileText className='mr-3 h-5 w-5' />
                Lamaran Saya
              </NavLink>
            </motion.div>
          )}

          <div className='border-t border-gray-200 pt-2 pb-3'>
            {user ? (
              <motion.div
                className='flex items-center px-4 py-3'
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className='flex-1'>
                  <motion.button
                    onClick={() => setShowLogoutConfirm(true)} // Changed to show confirmation modal
                    className='flex items-center text-sm text-gray-600 hover:text-blue-500 mt-1'
                    whileHover={{ x: 2 }}
                  >
                    <LogOut className='mr-1 h-4 w-4' />
                    Logout
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to='/login'
                  onClick={() => setMobileMenuOpen(false)}
                  className='flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md mx-2 hover:shadow-md transition-all'
                >
                  <LogIn className='mr-3 h-5 w-5' />
                  Login
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Logout Confirmation Modal */}
      {/* Logout Confirmation Modal - Centered */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            className='fixed inset-0 z-[100] flex items-center justify-center p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 bg-black/30 backdrop-blur-sm'
              onClick={() => setShowLogoutConfirm(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Container - Centered */}
            <motion.div
              className='relative md:mt-auto bg-white rounded-xl shadow-2xl w-full max-w-md mx-4'
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: 'spring', stiffness: 300, damping: 25 },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
                transition: { duration: 0.2 },
              }}
            >
              <div className='p-6 text-center'>
                <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4'>
                  <LogOut className='h-5 w-5 text-red-600' />
                </div>

                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Konfirmasi Logout
                </h3>
                <p className='text-gray-500 mb-6'>
                  Apakah Anda yakin ingin keluar dari akun Anda?
                </p>

                <div className='flex gap-3'>
                  <motion.button
                    onClick={() => {
                      setShowLogoutConfirm(false);
                      setMobileMenuOpen(false);
                    }}
                    className='flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Batal
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className='flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-md transition-all'
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 4px 12px -2px rgba(239, 68, 68, 0.4)',
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Logout
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
