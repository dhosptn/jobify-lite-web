import { auth } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  FiBriefcase,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiPlus,
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiCalendar,
  FiDollarSign,
  FiMapPin,
  FiClock,
  FiEdit2,
  FiTrash2,
  FiChevronDown,
  FiFilter,
} from 'react-icons/fi';

export default function CompanyDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [jobListings, setJobListings] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [stats, setStats] = useState({
    totalJobs: 0,
    totalApplicants: 0,
    newApplicants: 0,
    interviewScheduled: 0,
  });

  // Mock data - in a real app, you would fetch this from your backend
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setJobListings([
        {
          id: 1,
          title: 'Frontend Developer',
          type: 'Full-time',
          salary: 'Rp 12.000.000 - Rp 18.000.000',
          location: 'Jakarta (Remote)',
          posted: '2 hari lalu',
          applicants: 24,
          status: 'active',
        },
        {
          id: 2,
          title: 'UX Designer',
          type: 'Contract',
          salary: 'Rp 10.000.000 - Rp 15.000.000',
          location: 'Bandung',
          posted: '1 minggu lalu',
          applicants: 15,
          status: 'active',
        },
        {
          id: 3,
          title: 'Backend Engineer',
          type: 'Full-time',
          salary: 'Rp 15.000.000 - Rp 22.000.000',
          location: 'Jakarta',
          posted: '3 minggu lalu',
          applicants: 42,
          status: 'closed',
        },
      ]);

      setApplicants([
        {
          id: 1,
          name: 'Budi Santoso',
          job: 'Frontend Developer',
          status: 'Baru',
          date: 'Hari ini',
          score: 85,
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          id: 2,
          name: 'Ani Wijaya',
          job: 'UX Designer',
          status: 'Interview',
          date: 'Besok',
          score: 92,
          avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
          id: 3,
          name: 'Rudi Hermawan',
          job: 'Backend Engineer',
          status: 'Diterima',
          date: '2 minggu lalu',
          score: 78,
          avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
          id: 4,
          name: 'Siti Rahayu',
          job: 'Frontend Developer',
          status: 'Ditolak',
          date: '3 hari lalu',
          score: 65,
          avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
      ]);

      setStats({
        totalJobs: 5,
        totalApplicants: 81,
        newApplicants: 12,
        interviewScheduled: 7,
      });
    }, 1000);
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handleCreateJob = () => {
    navigate('/company/jobs/new');
  };

  return (
    <div className='flex h-screen bg-gray-50'>
      {/* Sidebar */}
      <div className='hidden md:flex md:flex-shrink-0'>
        <div className='flex flex-col w-64 bg-white border-r border-gray-200'>
          <div className='flex items-center justify-center h-16 px-4 bg-indigo-600'>
            <h1 className='text-white font-bold text-xl'>
              Jobify<span className='text-indigo-200'>Perusahaan</span>
            </h1>
          </div>
          <div className='flex flex-col flex-grow px-4 py-6 overflow-y-auto'>
            <div className='flex items-center px-4 py-3 mb-6 bg-indigo-50 rounded-lg'>
              <div className='flex-shrink-0'>
                <img
                  className='w-10 h-10 rounded-full'
                  src='https://randomuser.me/api/portraits/men/5.jpg'
                  alt='Company Logo'
                />
              </div>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-700'>
                  PT. Teknologi Maju
                </p>
                <p className='text-xs text-gray-500'>Admin Perusahaan</p>
              </div>
            </div>

            <nav className='space-y-1'>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full ${
                  activeTab === 'dashboard'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiBarChart2 className='mr-3' />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full ${
                  activeTab === 'jobs'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiBriefcase className='mr-3' />
                Lowongan Pekerjaan
              </button>
              <button
                onClick={() => setActiveTab('applicants')}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full ${
                  activeTab === 'applicants'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiUsers className='mr-3' />
                Pelamar
                <span className='ml-auto bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded-full'>
                  {stats.newApplicants} baru
                </span>
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full ${
                  activeTab === 'messages'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiMessageSquare className='mr-3' />
                Pesan
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full ${
                  activeTab === 'settings'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiSettings className='mr-3' />
                Pengaturan
              </button>
            </nav>

            <div className='mt-auto pt-6'>
              <button
                onClick={handleLogout}
                className='flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg w-full hover:bg-gray-100'
              >
                <FiLogOut className='mr-3' />
                Keluar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col flex-1 overflow-hidden'>
        {/* Top Navigation */}
        <div className='flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200'>
          <div className='flex items-center'>
            <button className='md:hidden mr-4 text-gray-500'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
            <h1 className='text-xl font-semibold text-gray-800'>
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'jobs' && 'Lowongan Pekerjaan'}
              {activeTab === 'applicants' && 'Pelamar'}
              {activeTab === 'messages' && 'Pesan'}
              {activeTab === 'settings' && 'Pengaturan'}
            </h1>
          </div>

          <div className='flex items-center space-x-4'>
            <button className='p-1 text-gray-500 rounded-full hover:bg-gray-100'>
              <FiBell className='w-5 h-5' />
              <span className='sr-only'>Notifikasi</span>
            </button>
            <button className='p-1 text-gray-500 rounded-full hover:bg-gray-100'>
              <FiMessageSquare className='w-5 h-5' />
              <span className='sr-only'>Pesan</span>
            </button>
            <div className='relative'>
              <button className='flex items-center space-x-2'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://randomuser.me/api/portraits/men/5.jpg'
                  alt='User'
                />
                <span className='hidden md:inline-block text-sm font-medium text-gray-700'>
                  Admin
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className='flex-1 overflow-y-auto p-6 bg-gray-50'>
          {activeTab === 'dashboard' && (
            <div>
              {/* Stats Cards */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-500'>
                        Total Lowongan
                      </p>
                      <p className='text-2xl font-semibold text-gray-800 mt-1'>
                        {stats.totalJobs}
                      </p>
                    </div>
                    <div className='p-3 rounded-lg bg-blue-50 text-blue-600'>
                      <FiBriefcase className='w-6 h-6' />
                    </div>
                  </div>
                </div>

                <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-500'>
                        Total Pelamar
                      </p>
                      <p className='text-2xl font-semibold text-gray-800 mt-1'>
                        {stats.totalApplicants}
                      </p>
                    </div>
                    <div className='p-3 rounded-lg bg-green-50 text-green-600'>
                      <FiUsers className='w-6 h-6' />
                    </div>
                  </div>
                </div>

                <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-500'>
                        Pelamar Baru
                      </p>
                      <p className='text-2xl font-semibold text-gray-800 mt-1'>
                        {stats.newApplicants}
                      </p>
                    </div>
                    <div className='p-3 rounded-lg bg-yellow-50 text-yellow-600'>
                      <FiUsers className='w-6 h-6' />
                    </div>
                  </div>
                </div>

                <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-500'>
                        Interview
                      </p>
                      <p className='text-2xl font-semibold text-gray-800 mt-1'>
                        {stats.interviewScheduled}
                      </p>
                    </div>
                    <div className='p-3 rounded-lg bg-purple-50 text-purple-600'>
                      <FiCalendar className='w-6 h-6' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Applicants */}
              <div className='bg-white rounded-xl shadow-sm border border-gray-100 mb-8'>
                <div className='px-6 py-4 border-b border-gray-100'>
                  <h2 className='font-semibold text-gray-800'>
                    Pelamar Terbaru
                  </h2>
                </div>
                <div className='divide-y divide-gray-100'>
                  {applicants.slice(0, 4).map((applicant) => (
                    <div
                      key={applicant.id}
                      className='px-6 py-4 flex items-center'
                    >
                      <img
                        className='w-10 h-10 rounded-full mr-4'
                        src={applicant.avatar}
                        alt={applicant.name}
                      />
                      <div className='flex-1'>
                        <h3 className='font-medium text-gray-800'>
                          {applicant.name}
                        </h3>
                        <p className='text-sm text-gray-500'>{applicant.job}</p>
                      </div>
                      <div className='ml-4'>
                        <span
                          className={`px-3 py-1 text-xs rounded-full ${
                            applicant.status === 'Baru'
                              ? 'bg-blue-100 text-blue-800'
                              : applicant.status === 'Interview'
                              ? 'bg-yellow-100 text-yellow-800'
                              : applicant.status === 'Diterima'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {applicant.status}
                        </span>
                      </div>
                      <div className='ml-4 text-sm text-gray-500'>
                        {applicant.date}
                      </div>
                    </div>
                  ))}
                </div>
                <div className='px-6 py-3 border-t border-gray-100 text-center'>
                  <button className='text-sm font-medium text-indigo-600 hover:text-indigo-700'>
                    Lihat semua pelamar
                  </button>
                </div>
              </div>

              {/* Active Job Listings */}
              <div className='bg-white rounded-xl shadow-sm border border-gray-100'>
                <div className='px-6 py-4 border-b border-gray-100 flex items-center justify-between'>
                  <h2 className='font-semibold text-gray-800'>
                    Lowongan Aktif
                  </h2>
                  <button
                    onClick={handleCreateJob}
                    className='flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700'
                  >
                    <FiPlus className='mr-2' />
                    Buat Lowongan
                  </button>
                </div>
                <div className='divide-y divide-gray-100'>
                  {jobListings
                    .filter((job) => job.status === 'active')
                    .map((job) => (
                      <div key={job.id} className='px-6 py-4'>
                        <div className='flex items-start justify-between'>
                          <div>
                            <h3 className='font-medium text-gray-800'>
                              {job.title}
                            </h3>
                            <div className='flex flex-wrap mt-2 gap-2'>
                              <span className='flex items-center text-sm text-gray-500'>
                                <FiBriefcase className='mr-1' /> {job.type}
                              </span>
                              <span className='flex items-center text-sm text-gray-500'>
                                <FiDollarSign className='mr-1' /> {job.salary}
                              </span>
                              <span className='flex items-center text-sm text-gray-500'>
                                <FiMapPin className='mr-1' /> {job.location}
                              </span>
                              <span className='flex items-center text-sm text-gray-500'>
                                <FiClock className='mr-1' /> {job.posted}
                              </span>
                            </div>
                          </div>
                          <div className='flex items-center space-x-2'>
                            <button className='p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg'>
                              <FiEdit2 className='w-4 h-4' />
                            </button>
                            <button className='p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg'>
                              <FiTrash2 className='w-4 h-4' />
                            </button>
                          </div>
                        </div>
                        <div className='mt-3 flex items-center justify-between'>
                          <div className='flex items-center'>
                            <span className='text-sm font-medium text-gray-700'>
                              {job.applicants} pelamar
                            </span>
                          </div>
                          <button className='text-sm font-medium text-indigo-600 hover:text-indigo-700'>
                            Lihat detail
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'jobs' && (
            <div className='bg-white rounded-xl shadow-sm border border-gray-100'>
              <div className='px-6 py-4 border-b border-gray-100 flex items-center justify-between'>
                <h2 className='font-semibold text-gray-800'>Semua Lowongan</h2>
                <div className='flex space-x-3'>
                  <div className='relative'>
                    <input
                      type='text'
                      placeholder='Cari lowongan...'
                      className='pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                    />
                    <FiSearch className='absolute left-3 top-2.5 text-gray-400' />
                  </div>
                  <button
                    onClick={handleCreateJob}
                    className='flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700'
                  >
                    <FiPlus className='mr-2' />
                    Buat Lowongan
                  </button>
                </div>
              </div>
              <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Posisi
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Tipe
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Gaji
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Lokasi
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Pelamar
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Status
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {jobListings.map((job) => (
                      <tr key={job.id}>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='font-medium text-gray-900'>
                            {job.title}
                          </div>
                          <div className='text-sm text-gray-500'>
                            {job.posted}
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {job.type}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {job.salary}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {job.location}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800'>
                            {job.applicants} pelamar
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              job.status === 'active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {job.status === 'active' ? 'Aktif' : 'Ditutup'}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <button className='text-indigo-600 hover:text-indigo-900 mr-3'>
                            Edit
                          </button>
                          <button className='text-red-600 hover:text-red-900'>
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='px-6 py-4 border-t border-gray-100 flex items-center justify-between'>
                <div className='text-sm text-gray-500'>
                  Menampilkan <span className='font-medium'>1</span> sampai{' '}
                  <span className='font-medium'>3</span> dari{' '}
                  <span className='font-medium'>3</span> lowongan
                </div>
                <div className='flex space-x-2'>
                  <button className='px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'>
                    Sebelumnya
                  </button>
                  <button className='px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'>
                    Selanjutnya
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applicants' && (
            <div className='bg-white rounded-xl shadow-sm border border-gray-100'>
              <div className='px-6 py-4 border-b border-gray-100 flex items-center justify-between'>
                <h2 className='font-semibold text-gray-800'>Semua Pelamar</h2>
                <div className='flex space-x-3'>
                  <div className='relative'>
                    <input
                      type='text'
                      placeholder='Cari pelamar...'
                      className='pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                    />
                    <FiSearch className='absolute left-3 top-2.5 text-gray-400' />
                  </div>
                  <button className='flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50'>
                    <FiFilter className='mr-2' />
                    Filter
                    <FiChevronDown className='ml-1' />
                  </button>
                </div>
              </div>
              <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Nama
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Posisi
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Skor
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Status
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Tanggal
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {applicants.map((applicant) => (
                      <tr key={applicant.id}>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 h-10 w-10'>
                              <img
                                className='h-10 w-10 rounded-full'
                                src={applicant.avatar}
                                alt={applicant.name}
                              />
                            </div>
                            <div className='ml-4'>
                              <div className='font-medium text-gray-900'>
                                {applicant.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {applicant.job}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='w-10 h-2 bg-gray-200 rounded-full overflow-hidden'>
                              <div
                                className={`h-full ${
                                  applicant.score >= 80
                                    ? 'bg-green-500'
                                    : applicant.score >= 60
                                    ? 'bg-yellow-500'
                                    : 'bg-red-500'
                                }`}
                                style={{ width: `${applicant.score}%` }}
                              ></div>
                            </div>
                            <span className='ml-2 text-sm font-medium text-gray-700'>
                              {applicant.score}
                            </span>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              applicant.status === 'Baru'
                                ? 'bg-blue-100 text-blue-800'
                                : applicant.status === 'Interview'
                                ? 'bg-yellow-100 text-yellow-800'
                                : applicant.status === 'Diterima'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {applicant.status}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {applicant.date}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <button className='text-indigo-600 hover:text-indigo-900 mr-3'>
                            Detail
                          </button>
                          <button className='text-gray-600 hover:text-gray-900'>
                            CV
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='px-6 py-4 border-t border-gray-100 flex items-center justify-between'>
                <div className='text-sm text-gray-500'>
                  Menampilkan <span className='font-medium'>1</span> sampai{' '}
                  <span className='font-medium'>4</span> dari{' '}
                  <span className='font-medium'>4</span> pelamar
                </div>
                <div className='flex space-x-2'>
                  <button className='px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'>
                    Sebelumnya
                  </button>
                  <button className='px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'>
                    Selanjutnya
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center'>
              <FiMessageSquare className='mx-auto text-gray-400 text-4xl mb-4' />
              <h3 className='text-lg font-medium text-gray-900 mb-2'>
                Belum ada pesan
              </h3>
              <p className='text-gray-500 mb-6'>
                Anda belum memiliki pesan dari pelamar.
              </p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className='bg-white rounded-xl shadow-sm border border-gray-100'>
              <div className='px-6 py-4 border-b border-gray-100'>
                <h2 className='font-semibold text-gray-800'>
                  Pengaturan Perusahaan
                </h2>
              </div>
              <div className='p-6'>
                <div className='mb-8'>
                  <h3 className='text-lg font-medium text-gray-900 mb-4'>
                    Profil Perusahaan
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='company-name'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        Nama Perusahaan
                      </label>
                      <input
                        type='text'
                        id='company-name'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500'
                        defaultValue='PT. Teknologi Maju'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='industry'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        Industri
                      </label>
                      <input
                        type='text'
                        id='industry'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500'
                        defaultValue='Teknologi Informasi'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='website'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        Website
                      </label>
                      <input
                        type='text'
                        id='website'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500'
                        defaultValue='www.teknologimaju.com'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='company-size'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        Ukuran Perusahaan
                      </label>
                      <select
                        id='company-size'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500'
                      >
                        <option>1-50 karyawan</option>
                        <option>51-200 karyawan</option>
                        <option selected>201-500 karyawan</option>
                        <option>501-1000 karyawan</option>
                        <option>1000+ karyawan</option>
                      </select>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <label
                      htmlFor='about'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Tentang Perusahaan
                    </label>
                    <textarea
                      id='about'
                      rows={4}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500'
                      defaultValue='PT. Teknologi Maju adalah perusahaan pengembangan perangkat lunak terkemuka di Indonesia yang berfokus pada solusi digital untuk bisnis.'
                    ></textarea>
                  </div>
                </div>

                <div className='mb-8'>
                  <h3 className='text-lg font-medium text-gray-900 mb-4'>
                    Informasi Kontak
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500'
                        defaultValue='hrd@teknologimaju.com'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        Telepon
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500'
                        defaultValue='+62 21 12345678'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='address'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        Alamat
                      </label>
                      <input
                        type='text'
                        id='address'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500'
                        defaultValue='Jl. Sudirman No. 123, Jakarta Selatan'
                      />
                    </div>
                  </div>
                </div>

                <div className='flex justify-end'>
                  <button className='px-6 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 mr-3'>
                    Batal
                  </button>
                  <button className='px-6 py-2 bg-indigo-600 text-sm font-medium rounded-lg text-white hover:bg-indigo-700'>
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
