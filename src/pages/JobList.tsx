import { useState, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';
import JobFilters from '../components/JobFilters';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
}

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    lokasi: '',
    tipe: '',
    gajiMinimum: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'jobs'));
        const jobsArray: Job[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Job[];
        setJobs(jobsArray);
      } catch (error) {
        console.error('❌ Gagal mengambil data:', error);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    // Search filter
    const matchesSearch =
      searchTerm === '' ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    // Location filter
    const matchesLocation =
      filters.lokasi === '' ||
      job.location.toLowerCase().includes(filters.lokasi.toLowerCase());

    // Job type filter
    const matchesType =
      filters.tipe === '' ||
      job.type.toLowerCase() === filters.tipe.toLowerCase();

    // Salary filter
    let matchesSalary = true;
    if (filters.gajiMinimum) {
      const jobSalary = parseInt(job.salary.replace(/\D/g, ''));
      const minSalary = parseInt(filters.gajiMinimum);
      matchesSalary =
        !isNaN(jobSalary) && !isNaN(minSalary) && jobSalary >= minSalary;
    }

    return matchesSearch && matchesLocation && matchesType && matchesSalary;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setFilters({
      lokasi: '',
      tipe: '',
      gajiMinimum: '',
    });
  };

  const getActiveFilterLabel = () => {
    if (filters.lokasi && filters.tipe) {
      return `${filters.tipe} di ${filters.lokasi}`;
    }
    if (filters.lokasi) return `Lokasi: ${filters.lokasi}`;
    if (filters.tipe) return `Tipe: ${filters.tipe}`;
    if (filters.gajiMinimum)
      return `Gaji ≥ Rp${parseInt(filters.gajiMinimum).toLocaleString(
        'id-ID'
      )}`;
    return 'Terbaru';
  };

  return (
    <div className='min-h-screen  bg-gray-50 py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3'>
            Temukan <span className='text-blue-600'>Pekerjaan</span> Impian Anda
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Jelajahi ribuan lowongan kerja terbaru dari perusahaan terbaik
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className='mb-6'>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <FiSearch className='h-5 w-5 text-gray-400' />
            </div>
            <input
              type='text'
              className='block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base'
              placeholder='Cari pekerjaan, perusahaan, atau lokasi...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Mobile Filters - Inline instead of sidebar */}
          <div className='mt-4 md:hidden'>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`w-full flex items-center justify-between px-4 py-2 rounded-lg ${
                showFilters
                  ? 'bg-blue-50 text-blue-600'
                  : 'bg-white text-gray-700'
              } border border-gray-200`}
            >
              <span>Filter Pekerjaan</span>
              <svg
                className={`h-5 w-5 transform transition-transform ${
                  showFilters ? 'rotate-180' : ''
                }`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            {showFilters && (
              <div className='mt-2 bg-white p-4 rounded-lg border border-gray-200 shadow-sm'>
                <JobFilters filters={filters} setFilters={setFilters} />
                <button
                  onClick={resetFilters}
                  className='w-full mt-3 px-4 py-2 text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100'
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Desktop Filters */}
          <div className='hidden md:block md:w-1/4'>
            <div className='sticky top-6'>
              <JobFilters filters={filters} setFilters={setFilters} />
              <button
                onClick={resetFilters}
                className='w-full mt-4 px-4 py-2 text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100'
              >
                Reset Filter
              </button>
            </div>
          </div>

          {/* Job List */}
          <div className='lg:w-3/4'>
            <div className='bg-white rounded-xl shadow-xs overflow-hidden'>
              <div className='px-5 py-4 border-b border-gray-100 flex justify-between items-center'>
                <h2 className='text-base font-semibold text-gray-800'>
                  {filteredJobs.length} Lowongan Tersedia
                </h2>
                <div className='text-sm text-gray-500'>
                  Urutkan:{' '}
                  <span className='text-blue-600'>
                    {getActiveFilterLabel()}
                  </span>
                </div>
              </div>

              {filteredJobs.length > 0 ? (
                <div className='divide-y divide-gray-100'>
                  {filteredJobs.map((job) => (
                    <Link
                      to={`/jobs/${job.id}`}
                      key={job.id}
                      className='block hover:bg-gray-50 transition duration-150'
                    >
                      <JobCard job={job} />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className='px-5 py-12 text-center'>
                  <FiSearch className='mx-auto h-12 w-12 text-gray-300' />
                  <h3 className='mt-3 text-lg font-medium text-gray-900'>
                    Tidak ada hasil ditemukan
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>
                    Coba ubah kata kunci pencarian atau atur ulang filter Anda
                  </p>
                  <button
                    onClick={resetFilters}
                    className='mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700'
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
