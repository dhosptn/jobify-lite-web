import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Link } from 'react-router-dom';
import {
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiTrendingUp,
} from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

interface CompanySummary {
  name: string;
  totalJobs: number;
  locations: Set<string>;
  latestJobs: Job[];
}

export default function CompanyList() {
  const [companies, setCompanies] = useState<CompanySummary[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<CompanySummary[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('Semua Lokasi');
  const [loading, setLoading] = useState(true);
  const [availableLocations, setAvailableLocations] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'jobs'));
        const jobs = snapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as Job)
        );

        const companyMap = new Map<string, CompanySummary>();
        const locationSet = new Set<string>();

        jobs.forEach((job) => {
          const companyName = job.company.trim();
          locationSet.add(job.location);

          if (!companyMap.has(companyName)) {
            companyMap.set(companyName, {
              name: companyName,
              totalJobs: 1,
              locations: new Set([job.location]),
              latestJobs: [job],
            });
          } else {
            const current = companyMap.get(companyName)!;
            current.totalJobs += 1;
            current.locations.add(job.location);
            // Simpan 3 lowongan terbaru
            if (current.latestJobs.length < 3) {
              current.latestJobs.push(job);
            }
          }
        });

        const result = Array.from(companyMap.values());
        setCompanies(result);
        setFilteredCompanies(result);
        setAvailableLocations([
          'Semua Lokasi',
          ...Array.from(locationSet).sort(),
        ]);
      } catch (error) {
        console.error('❌ Gagal memuat data perusahaan:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  useEffect(() => {
    let filtered = [...companies];

    // Filter pencarian
    if (searchTerm) {
      filtered = filtered.filter((company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter lokasi
    if (locationFilter !== 'Semua Lokasi') {
      filtered = filtered.filter((company) =>
        Array.from(company.locations).some((loc) =>
          loc.toLowerCase().includes(locationFilter.toLowerCase())
        )
      );
    }

    // Filter tambahan
    if (activeFilter === 'manyJobs') {
      filtered = filtered.filter((company) => company.totalJobs >= 5);
    } else if (activeFilter === 'recent') {
      // Asumsikan kita memiliki data tanggal posting
      filtered = filtered.sort((a, b) => {
        const latestA = a.latestJobs[0]?.posted || '';
        const latestB = b.latestJobs[0]?.posted || '';
        return latestB.localeCompare(latestA);
      });
    }

    setFilteredCompanies(filtered);
  }, [searchTerm, locationFilter, companies, activeFilter]);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
      {/* Hero Section */}
      <div className='text-center mb-16'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'
        >
          Temukan Perusahaan Impian Anda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-xl text-gray-600 max-w-3xl mx-auto'
        >
          Jelajahi perusahaan-perusahaan terbaik yang sedang membuka lowongan
          kerja. Temukan budaya kerja, benefit, dan peluang karier yang sesuai
          dengan aspirasi Anda.
        </motion.p>
      </div>

      {/* Stats Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'
        >
          <div className='flex items-center'>
            <div className='p-3 rounded-full bg-blue-50 text-blue-600 mr-4'>
              <FiBriefcase className='text-2xl' />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-gray-900'>
                {companies.length}+
              </h3>
              <p className='text-gray-600'>Perusahaan Terdaftar</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'
        >
          <div className='flex items-center'>
            <div className='p-3 rounded-full bg-green-50 text-green-600 mr-4'>
              <FiTrendingUp className='text-2xl' />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-gray-900'>
                {companies.reduce((acc, company) => acc + company.totalJobs, 0)}
                +
              </h3>
              <p className='text-gray-600'>Lowongan Tersedia</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'
        >
          <div className='flex items-center'>
            <div className='p-3 rounded-full bg-purple-50 text-purple-600 mr-4'>
              <FiClock className='text-2xl' />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-gray-900'>24 Jam</h3>
              <p className='text-gray-600'>Update Terbaru</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search & Filter Section */}
      <div className='mb-12'>
        <div className='flex flex-col md:flex-row gap-4 mb-8'>
          <div className='relative flex-grow'>
            <FiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder='Cari perusahaan (contoh: Gojek, Tokopedia, Traveloka)...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full bg-transparent border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none shadow-sm transition'
            />
          </div>
          <div className='w-full md:w-64'>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className='w-full bg-transparent border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none shadow-sm transition'
            >
              {availableLocations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='flex flex-wrap gap-3 mb-6'>
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Semua Perusahaan
          </button>
          <button
            onClick={() => setActiveFilter('manyJobs')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === 'manyJobs'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Banyak Lowongan (5+)
          </button>
          <button
            onClick={() => setActiveFilter('recent')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === 'recent'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Baru Posting
          </button>
        </div>
      </div>

      {/* Company List */}
      {loading ? (
        <div className='flex justify-center items-center py-20'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
        </div>
      ) : filteredCompanies.length === 0 ? (
        <div className='text-center py-20'>
          <div className='text-gray-400 mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16 mx-auto'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <h3 className='text-xl font-medium text-gray-900 mb-2'>
            Perusahaan tidak ditemukan
          </h3>
          <p className='text-gray-500 max-w-md mx-auto'>
            Maaf, kami tidak menemukan perusahaan yang sesuai dengan kriteria
            pencarian Anda. Coba gunakan kata kunci yang lebih umum atau filter
            yang berbeda.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setLocationFilter('Semua Lokasi');
              setActiveFilter('all');
            }}
            className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredCompanies.map((company) => (
            <motion.div
              key={company.name}
              whileHover={{ y: -5 }}
              className='bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100'
            >
              <div className='p-6'>
                <div className='flex items-start mb-4'>
                  <div className='bg-blue-100 text-blue-600 rounded-lg p-3 mr-4'>
                    <FiBriefcase className='text-xl' />
                  </div>
                  <div>
                    <h2 className='text-xl font-bold text-gray-900 mb-1'>
                      {company.name}
                    </h2>
                    <p className='text-sm text-gray-600 flex items-center'>
                      <FiMapPin className='mr-1' />
                      {Array.from(company.locations).join(', ')}
                    </p>
                  </div>
                </div>

                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-gray-500 mb-2'>
                    LOWONGAN TERBARU:
                  </h4>
                  <ul className='space-y-2'>
                    {company.latestJobs.slice(0, 3).map((job, index) => (
                      <li
                        key={index}
                        className='text-sm text-gray-700 truncate'
                      >
                        • {job.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-sm text-gray-700'>
                      Total lowongan:{' '}
                      <span className='font-bold text-blue-600'>
                        {company.totalJobs}
                      </span>
                    </p>
                  </div>
                  <Link
                    to={`/perusahaan/${encodeURIComponent(company.name)}`}
                    className='px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition flex items-center'
                  >
                    Lihat Detail
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 ml-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* CTA Section */}
    </div>
  );
}
