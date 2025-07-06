import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import {
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  FileText,
  Mail,
  Phone,
  User,
  Search,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const statusConfig = {
  'Belum Dilihat': { icon: Clock, color: 'bg-gray-100 text-gray-800' },
  Diproses: { icon: Eye, color: 'bg-blue-100 text-blue-800' },
  Diterima: { icon: CheckCircle, color: 'bg-emerald-100 text-emerald-800' },
  Ditolak: { icon: XCircle, color: 'bg-rose-100 text-rose-800' },
};

const MyApplications = () => {
  const [user] = useAuthState(auth);
  const [applications, setApplications] = useState<any[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState('Semua');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      if (!user) return;
      setIsLoading(true);

      try {
        const q = query(
          collection(db, 'job_applications'),
          where('userId', '==', user.uid)
        );
        const querySnapshot = await getDocs(q);
        const apps = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplications(apps);
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, [user]);

  const formatDate = (isoDate: string) => {
    if (!isoDate) return '-';
    const date = new Date(isoDate);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const toggleDetail = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredApps =
    selectedStatus === 'Semua'
      ? applications
      : applications.filter((app) => app.status === selectedStatus);

  const getStatusCount = (status: string) => {
    return applications.filter((app) => app.status === status).length;
  };

  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='mb-8'>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
          Lamaran Saya
        </h1>
        <p className='mt-2 text-sm sm:text-base text-gray-600'>
          Kelola dan pantau status lamaran pekerjaan Anda
        </p>
      </div>

      {/* Status Filter Cards - Improved Mobile Responsiveness */}
      <div className='mb-8'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3'>
          <div
            className={`p-3 rounded-lg border ${
              selectedStatus === 'Semua'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            } flex flex-col`}
            onClick={() => setSelectedStatus('Semua')}
          >
            <span className='text-sm font-medium text-gray-700 mb-1'>
              Semua
            </span>
            <span className='text-lg font-bold self-end'>
              {applications.length}
            </span>
          </div>

          {Object.entries(statusConfig).map(
            ([status, { icon: Icon, color }]) => (
              <div
                key={status}
                className={`p-3 rounded-lg border flex flex-col cursor-pointer transition-all ${
                  selectedStatus === status
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedStatus(status)}
              >
                <div className='flex items-center gap-1.5 mb-1'>
                  <Icon className={`w-4 h-4 ${color.split(' ')[2]}`} />
                  <span className='text-sm font-medium text-gray-700 truncate'>
                    {status}
                  </span>
                </div>
                <span className='text-lg font-bold self-end'>
                  {getStatusCount(status)}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Applications List */}
      <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
        {isLoading ? (
          <div className='p-8 text-center'>
            <div className='animate-pulse flex flex-col space-y-4'>
              {[...Array(3)].map((_, i) => (
                <div key={i} className='h-24 bg-gray-100 rounded-lg'></div>
              ))}
            </div>
          </div>
        ) : filteredApps.length === 0 ? (
          <div className='p-6 sm:p-8 text-center'>
            <div className='bg-gray-50 rounded-lg p-6 flex flex-col items-center'>
              <div className='w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4'>
                <Search className='w-6 h-6 text-blue-600' />
              </div>
              {applications.length === 0 ? (
                <>
                  <h3 className='text-lg font-medium text-gray-900 mb-2'>
                    Anda belum memiliki lamaran
                  </h3>
                  <p className='text-gray-500 mb-6 max-w-md'>
                    Mulai mencari lowongan pekerjaan yang sesuai dengan keahlian
                    dan minat Anda.
                  </p>
                  <button
                    onClick={() => navigate('/jobs')}
                    className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                  >
                    Cari Lowongan
                  </button>
                </>
              ) : (
                <>
                  <h3 className='text-lg font-medium text-gray-900 mb-2'>
                    Tidak ada lamaran dengan status "{selectedStatus}"
                  </h3>
                  <p className='text-gray-500 mb-6 max-w-md'>
                    {selectedStatus === 'Diterima'
                      ? 'Teruslah mencoba! Perbanyak lamaran untuk meningkatkan peluang diterima.'
                      : selectedStatus === 'Ditolak'
                      ? 'Jangan menyerah! Evaluasi lamaran Anda dan coba lagi.'
                      : 'Anda bisa melihat lamaran dengan status lain atau mencari lowongan baru.'}
                  </p>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <button
                      onClick={() => setSelectedStatus('Semua')}
                      className='px-4 bg-transparent py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
                    >
                      Lihat Semua Lamaran
                    </button>
                    <button
                      onClick={() => navigate('/jobs')}
                      className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                    >
                      Cari Lowongan Baru
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <ul className='divide-y divide-gray-100'>
            {filteredApps.map((app) => {
              const StatusIcon = statusConfig[app.status]?.icon || FileText;
              const statusColor =
                statusConfig[app.status]?.color || 'bg-gray-100 text-gray-800';

              return (
                <li key={app.id} className='hover:bg-gray-50 transition-colors'>
                  <div className='p-4 sm:p-6'>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-start gap-3 sm:gap-4'>
                          <div className='flex-shrink-0'>
                            <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center'>
                              <FileText className='w-4 h-4 sm:w-5 sm:h-5 text-blue-600' />
                            </div>
                          </div>
                          <div className='min-w-0'>
                            <h3 className='text-base sm:text-lg font-semibold text-gray-900 truncate'>
                              {app.title || 'Posisi Tidak Ditemukan'}
                            </h3>
                            <div className='flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs sm:text-sm'>
                              <span className='text-gray-600 truncate'>
                                {app.company}
                              </span>
                              {app.location && (
                                <span className='text-gray-500 before:content-["·"] before:mr-1.5'>
                                  {app.location}
                                </span>
                              )}
                              {app.type && (
                                <span className='text-gray-500 before:content-["·"] before:mr-1.5'>
                                  {app.type}
                                </span>
                              )}
                              {app.salary && (
                                <span className='text-green-600 font-medium'>
                                  {app.salary}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='flex flex-col sm:items-end gap-2'>
                        <div
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColor}`}
                        >
                          <StatusIcon className='w-3 h-3 mr-1.5' />
                          <span className='truncate'>{app.status}</span>
                        </div>
                        <span className='text-xs text-gray-500'>
                          {formatDate(app.appliedDate)}
                        </span>
                        <button
                          onClick={() => toggleDetail(app.id)}
                          className='bg-gray-300 text-blue-500 hover:text-blue-600 transition-colors text-sm whitespace-nowrap'
                        >
                          {expandedId === app.id ? (
                            <span className='flex items-center'>
                              <span className='sm:hidden'>Tutup</span>
                              <span className='hidden sm:inline'>
                                Sembunyikan
                              </span>
                              <ChevronUp className='ml-1 w-4 h-4 inline-block' />
                            </span>
                          ) : (
                            <span className='flex items-center'>
                              <span className='sm:hidden'>Detail</span>
                              <span className='hidden sm:inline'>
                                Detail Lamaran
                              </span>
                              <ChevronDown className='ml-1 w-4 h-4 inline-block' />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>

                    {expandedId === app.id && (
                      <div className='mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100'>
                        <h4 className='text-sm font-medium text-gray-900 mb-3 sm:mb-4'>
                          Detail Pelamar
                        </h4>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                          <div className='flex items-start gap-2 sm:gap-3'>
                            <div className='p-1.5 sm:p-2 rounded-lg bg-gray-50'>
                              <User className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600' />
                            </div>
                            <div>
                              <p className='text-xs sm:text-sm text-gray-500'>
                                Nama Lengkap
                              </p>
                              <p className='font-medium text-sm sm:text-base'>
                                {app.name || '-'}
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-2 sm:gap-3'>
                            <div className='p-1.5 sm:p-2 rounded-lg bg-gray-50'>
                              <Mail className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600' />
                            </div>
                            <div>
                              <p className='text-xs sm:text-sm text-gray-500'>
                                Email
                              </p>
                              <p className='font-medium text-sm sm:text-base truncate'>
                                {app.email || '-'}
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-2 sm:gap-3'>
                            <div className='p-1.5 sm:p-2 rounded-lg bg-gray-50'>
                              <Phone className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600' />
                            </div>
                            <div>
                              <p className='text-xs sm:text-sm text-gray-500'>
                                Telepon
                              </p>
                              <p className='font-medium text-sm sm:text-base'>
                                {app.phone || '-'}
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-2 sm:gap-3'>
                            <div className='p-1.5 sm:p-2 rounded-lg bg-gray-50'>
                              <FileText className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600' />
                            </div>
                            <div>
                              <p className='text-xs sm:text-sm text-gray-500'>
                                CV
                              </p>
                              {app.cvUrl ? (
                                <a
                                  href={app.cvUrl}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='text-blue-600 hover:underline font-medium text-sm sm:text-base'
                                >
                                  Download CV
                                </a>
                              ) : (
                                <p className='font-medium text-sm sm:text-base'>
                                  -
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        {app.coverLetter && (
                          <div className='mt-4 sm:mt-6'>
                            <h4 className='text-sm font-medium text-gray-900 mb-2'>
                              Surat Lamaran
                            </h4>
                            <div className='bg-gray-50 rounded-lg p-3 sm:p-4'>
                              <p className='text-gray-700 text-sm sm:text-base whitespace-pre-line'>
                                {app.coverLetter}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
