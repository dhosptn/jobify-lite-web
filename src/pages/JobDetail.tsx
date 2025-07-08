import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import {
  FiMapPin,
  FiDollarSign,
  FiClock,
  FiBriefcase,
  FiArrowLeft,
  FiUsers,
  FiBook,
  FiAward,
  FiLayers,
  FiGlobe,
  FiHeart,
  FiShare2,
  FiBookmark,
} from 'react-icons/fi';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  skills?: string[];
  workCulture?: string;
  aboutCompany?: string;
}

const JobDetail = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  const handleApply = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(`/jobs/${id}/apply`);
    }
  };

  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        if (!id) return;
        setIsLoading(true);
        const jobDoc = await getDoc(doc(db, 'jobs', id));
        if (jobDoc.exists()) {
          setJob({ id: jobDoc.id, ...jobDoc.data() } as Job);
        }
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='animate-pulse flex flex-col items-center'>
          <div className='h-16 w-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mb-6'></div>
          <div className='h-6 bg-gray-200 rounded w-64 mb-4'></div>
          <div className='h-4 bg-gray-200 rounded w-48'></div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='text-center p-8 bg-white rounded-2xl shadow-sm max-w-md'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>
            Lowongan tidak ditemukan
          </h2>
          <Link
            to='/jobs'
            className='inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-lg hover:shadow-md transition-all'
          >
            <FiArrowLeft className='mr-2' />
            Kembali ke daftar lowongan
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 py-12 mt-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Back Button */}
        <div className='mb-8'>
          <Link
            to='/jobs'
            className='inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group'
          >
            <FiArrowLeft className='mr-2 transition-transform group-hover:-translate-x-1' />
            <span className='font-medium'>Kembali ke Daftar Lowongan</span>
          </Link>
        </div>

        {/* Main Job Card */}
        <div className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100'>
          {/* Job Header */}
          <div className='p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50/50 to-indigo-50/50'>
            <div className='flex flex-col md:flex-row md:items-start gap-6'>
              {job.companyLogo && (
                <div className='flex-shrink-0'>
                  <div className='h-20 w-20 rounded-xl bg-white p-2 shadow-sm border border-gray-200 flex items-center justify-center'>
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className='h-full w-full object-contain'
                    />
                  </div>
                </div>
              )}

              <div className='flex-1'>
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4'>
                  <div>
                    <h1 className='text-3xl font-bold text-gray-900 leading-tight'>
                      {job.title}
                    </h1>
                    <p className='text-xl text-gray-700 mt-2'>{job.company}</p>

                    {/* Job Meta - Mobile */}
                    <div className='mt-4 grid grid-cols-2 gap-3 md:hidden'>
                      <div className='flex items-center text-gray-700'>
                        <FiMapPin className='mr-2 text-blue-500' />
                        <span>{job.location}</span>
                      </div>
                      <div className='flex items-center text-gray-700'>
                        <FiClock className='mr-2 text-purple-500' />
                        <span>{job.type}</span>
                      </div>
                      <div className='flex items-center text-gray-700'>
                        <FiDollarSign className='mr-2 text-green-500' />
                        <span>{job.salary}</span>
                      </div>
                      <div className='flex items-center text-gray-700'>
                        <FiBriefcase className='mr-2 text-orange-500' />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Meta - Desktop */}
                <div className='mt-6 hidden md:grid grid-cols-4 gap-4'>
                  <div className='flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm'>
                    <FiMapPin className='mr-3 text-blue-500 text-xl' />
                    <div>
                      <p className='text-sm text-gray-500'>Lokasi</p>
                      <p className='font-medium'>{job.location}</p>
                    </div>
                  </div>
                  <div className='flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm'>
                    <FiClock className='mr-3 text-purple-500 text-xl' />
                    <div>
                      <p className='text-sm text-gray-500'>Tipe</p>
                      <p className='font-medium'>{job.type}</p>
                    </div>
                  </div>
                  <div className='flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm'>
                    <FiDollarSign className='mr-3 text-green-500 text-xl' />
                    <div>
                      <p className='text-sm text-gray-500'>Gaji</p>
                      <p className='font-medium'>{job.salary}</p>
                    </div>
                  </div>
                  <div className='flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm'>
                    <FiBriefcase className='mr-3 text-orange-500 text-xl' />
                    <div>
                      <p className='text-sm text-gray-500'>Diposting</p>
                      <p className='font-medium'>{job.posted}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Content */}
          <div className='p-8'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {/* Main Content */}
              <div className='lg:col-span-2 space-y-8'>
                {/* About Job */}
                <section>
                  <div className='flex items-center mb-6'>
                    <div className='bg-blue-100 p-2 rounded-lg mr-4'>
                      <FiBook className='text-blue-600 text-xl' />
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900'>
                      Tentang Pekerjaan
                    </h2>
                  </div>
                  <div className='prose prose-blue max-w-none text-gray-700'>
                    <p>{job.description}</p>
                  </div>
                </section>

                {/* Responsibilities */}
                <section>
                  <div className='flex items-center mb-6'>
                    <div className='bg-blue-100 p-2 rounded-lg mr-4'>
                      <FiLayers className='text-blue-600 text-xl' />
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900'>
                      Tanggung Jawab
                    </h2>
                  </div>
                  <ul className='space-y-4'>
                    {job.responsibilities?.map((res, idx) => (
                      <li key={idx} className='flex items-start'>
                        <div className='flex-shrink-0 mt-1 mr-4'>
                          <div className='h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center'>
                            <span className='text-blue-600 text-sm'>✓</span>
                          </div>
                        </div>
                        <p className='text-gray-700'>{res}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Requirements */}
                <section>
                  <div className='flex items-center mb-6'>
                    <div className='bg-blue-100 p-2 rounded-lg mr-4'>
                      <FiAward className='text-blue-600 text-xl' />
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900'>
                      Persyaratan
                    </h2>
                  </div>
                  <ul className='space-y-4'>
                    {job.requirements?.map((req, idx) => (
                      <li key={idx} className='flex items-start'>
                        <div className='flex-shrink-0 mt-1 mr-4'>
                          <div className='h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center'>
                            <span className='text-blue-600 text-sm'>✓</span>
                          </div>
                        </div>
                        <p className='text-gray-700'>{req}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Sidebar */}
              <div className='lg:col-span-1 space-y-6'>
                {/* Skills */}
                {job.skills && job.skills.length > 0 && (
                  <section className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm'>
                    <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                      Keterampilan yang Dibutuhkan
                    </h2>
                    <div className='flex flex-wrap gap-2'>
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-blue-800 shadow-sm border border-blue-100'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                {/* Benefits */}
                <section className='bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-sm'>
                  <div className='flex items-center mb-4'>
                    <div className='bg-green-100 p-2 rounded-lg mr-3'>
                      <FiHeart className='text-green-600' />
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900'>
                      Benefit
                    </h2>
                  </div>
                  <ul className='space-y-3'>
                    {job.benefits?.map((b, idx) => (
                      <li key={idx} className='flex items-start'>
                        <div className='flex-shrink-0 mt-1 mr-3'>
                          <div className='h-5 w-5 rounded-full bg-green-100 flex items-center justify-center'>
                            <span className='text-green-600 text-xs'>✓</span>
                          </div>
                        </div>
                        <p className='text-gray-700'>{b}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* About Company */}
                {job.aboutCompany && (
                  <section className='bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-sm'>
                    <div className='flex items-center mb-4'>
                      <div className='bg-gray-100 p-2 rounded-lg mr-3'>
                        <FiGlobe className='text-gray-600' />
                      </div>
                      <h2 className='text-xl font-semibold text-gray-900'>
                        Tentang Perusahaan
                      </h2>
                    </div>
                    <p className='text-gray-700'>{job.aboutCompany}</p>
                  </section>
                )}
              </div>
            </div>

            {/* Work Culture */}
            {job.workCulture && (
              <section className='mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 shadow-sm'>
                <div className='flex items-center mb-6'>
                  <div className='bg-indigo-100 p-2 rounded-lg mr-4'>
                    <FiUsers className='text-indigo-600 text-xl' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900'>
                    Budaya Kerja
                  </h2>
                </div>
                <div className='prose prose-indigo max-w-none text-gray-700'>
                  <p>{job.workCulture}</p>
                </div>
              </section>
            )}

            {/* Bottom CTA */}
            <div className='mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6'>
              <div>
                <h3 className='text-xl font-bold text-gray-900'>
                  Tertarik dengan posisi ini?
                </h3>
                <p className='text-gray-600'>
                  Kirim lamaran Anda sekarang dan mulai petualangan karir baru!
                </p>
              </div>
              <button
                onClick={handleApply}
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap'
              >
                Lamar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
