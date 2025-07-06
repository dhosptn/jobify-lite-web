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

  const handleApply = () => {
    if (!user) {
      navigate('/login'); // Redirect ke login jika belum login
    } else {
      navigate(`/jobs/${id}/apply`); // Redirect ke form apply jika sudah login
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
      <div className='min-h-screen flex items-center justify-center'>
        <div className='animate-pulse flex flex-col items-center'>
          <div className='h-12 w-12 bg-blue-200 rounded-full mb-4'></div>
          <div className='h-4 bg-gray-200 rounded w-1/4 mb-2'></div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            Lowongan tidak ditemukan
          </h2>
          <Link
            to='/jobs'
            className='text-blue-600 hover:underline inline-flex items-center'
          >
            <FiArrowLeft className='mr-1' /> Kembali ke daftar lowongan
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Back Button */}
        <div className='mb-6'>
          <Link
            to='/jobs'
            className='inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors'
          >
            <FiArrowLeft className='mr-2' />
            <span>Kembali ke Daftar Lowongan</span>
          </Link>
        </div>

        {/* Main Job Card */}
        <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
          {/* Job Header */}
          <div className='p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50'>
            <div className='flex flex-col sm:flex-row sm:items-start'>
              {job.companyLogo && (
                <div className='mb-4 sm:mb-0 sm:mr-6 flex-shrink-0'>
                  <img
                    src={job.companyLogo}
                    alt={job.company}
                    className='h-16 w-16 rounded-lg object-contain border border-gray-200 bg-white p-1'
                  />
                </div>
              )}

              <div className='flex-1'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                  <div>
                    <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                      {job.title}
                    </h1>
                    <p className='text-lg text-gray-700 mt-1'>{job.company}</p>
                  </div>
                  <div className='mt-4 sm:mt-0'>
                    <button
                      onClick={handleApply}
                      className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium inline-block mt-6'
                    >
                      Lamar Posisi Ini
                    </button>
                  </div>
                </div>

                {/* Job Meta */}
                <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
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
                    <span>Diposting {job.posted}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Content */}
          <div className='p-6 sm:p-8'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {/* Main Content */}
              <div className='lg:col-span-2'>
                {/* About Job */}
                <section className='mb-8'>
                  <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                    <FiBook className='mr-2 text-blue-600' />
                    Tentang Pekerjaan
                  </h2>
                  <p className='text-gray-700 leading-relaxed'>
                    {job.description}
                  </p>
                </section>

                {/* Responsibilities */}
                <section className='mb-8'>
                  <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                    <FiLayers className='mr-2 text-blue-600' />
                    Tanggung Jawab
                  </h2>
                  <ul className='space-y-3'>
                    {job.responsibilities?.map((res, idx) => (
                      <li key={idx} className='flex items-start'>
                        <span className='flex-shrink-0 mt-1 mr-2 text-blue-500'>
                          •
                        </span>
                        <span className='text-gray-700'>{res}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Requirements */}
                <section className='mb-8'>
                  <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                    <FiAward className='mr-2 text-blue-600' />
                    Persyaratan
                  </h2>
                  <ul className='space-y-3'>
                    {job.requirements?.map((req, idx) => (
                      <li key={idx} className='flex items-start'>
                        <span className='flex-shrink-0 mt-1 mr-2 text-blue-500'>
                          •
                        </span>
                        <span className='text-gray-700'>{req}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Sidebar */}
              <div className='lg:col-span-1'>
                {/* Skills */}
                {job.skills && job.skills.length > 0 && (
                  <section className='mb-8 bg-blue-50 rounded-lg p-5'>
                    <h2 className='text-lg font-semibold text-gray-900 mb-3'>
                      Keterampilan yang Dibutuhkan
                    </h2>
                    <div className='flex flex-wrap gap-2'>
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                {/* Benefits */}
                <section className='mb-8 bg-green-50 rounded-lg p-5'>
                  <h2 className='text-lg font-semibold text-gray-900 mb-3 flex items-center'>
                    <FiHeart className='mr-2 text-green-600' />
                    Benefit
                  </h2>
                  <ul className='space-y-2'>
                    {job.benefits?.map((b, idx) => (
                      <li key={idx} className='flex items-start'>
                        <span className='flex-shrink-0 mt-1 mr-2 text-green-500'>
                          ✓
                        </span>
                        <span className='text-gray-700'>{b}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* About Company */}
                {job.aboutCompany && (
                  <section className='bg-gray-50 rounded-lg p-5'>
                    <h2 className='text-lg font-semibold text-gray-900 mb-3 flex items-center'>
                      <FiGlobe className='mr-2 text-gray-600' />
                      Tentang Perusahaan
                    </h2>
                    <p className='text-gray-700'>{job.aboutCompany}</p>
                  </section>
                )}
              </div>
            </div>

            {/* Work Culture */}
            {job.workCulture && (
              <section className='mt-8 bg-indigo-50 rounded-lg p-6'>
                <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                  <FiUsers className='mr-2 text-indigo-600' />
                  Budaya Kerja
                </h2>
                <p className='text-gray-700'>{job.workCulture}</p>
              </section>
            )}

            {/* Apply Button */}
          </div>
        </div>

        {/* Similar Jobs Section */}
      </div>
    </div>
  );
};

export default JobDetail;
