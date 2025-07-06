import { Link } from 'react-router-dom';
import { FiPlus, FiEdit, FiTrash2, FiUsers, FiBriefcase } from 'react-icons/fi';

const AdminDashboard = () => {
  // In a real app, you would fetch these from an API
  const stats = [
    { title: 'Total Lowongan', value: 42, icon: <FiBriefcase /> },
    { title: 'Total Pelamar', value: 156, icon: <FiUsers /> },
  ];

  const recentJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechSolutions',
      applicants: 24,
      posted: '2 hari lalu',
    },
    {
      id: 2,
      title: 'UX Designer',
      company: 'Creative Studio',
      applicants: 18,
      posted: '5 hari lalu',
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'DataInsight',
      applicants: 12,
      posted: '1 minggu lalu',
    },
  ];

  return (
    <div className='py-8'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-2xl font-bold'>Dashboard Admin</h1>
          <Link
            to='/admin/add-job'
            className='flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
          >
            <FiPlus className='mr-2' /> Tambah Lowongan
          </Link>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'
            >
              <div className='flex justify-between'>
                <div>
                  <p className='text-gray-600'>{stat.title}</p>
                  <p className='text-3xl font-bold mt-2'>{stat.value}</p>
                </div>
                <div className='text-blue-600 text-3xl'>{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Jobs */}
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
          <div className='px-6 py-4 border-b border-gray-200'>
            <h2 className='text-lg font-semibold'>Lowongan Terbaru</h2>
          </div>

          <div className='divide-y divide-gray-200'>
            {recentJobs.map((job) => (
              <div key={job.id} className='p-6 hover:bg-gray-50'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h3 className='font-medium text-lg'>{job.title}</h3>
                    <p className='text-gray-600'>{job.company}</p>
                  </div>
                  <div className='text-sm text-gray-500'>{job.posted}</div>
                </div>

                <div className='mt-4 flex justify-between items-center'>
                  <span className='text-sm text-gray-600'>
                    {job.applicants} pelamar
                  </span>
                  <div className='flex space-x-2'>
                    <Link
                      to={`/admin/edit-job/${job.id}`}
                      className='flex items-center text-blue-600 hover:text-blue-800'
                    >
                      <FiEdit className='mr-1' /> Edit
                    </Link>
                    <button className='flex items-center text-red-600 hover:text-red-800'>
                      <FiTrash2 className='mr-1' /> Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='px-6 py-4 border-t border-gray-200 text-center'>
            <Link to='/admin/jobs' className='text-blue-600 hover:underline'>
              Lihat semua lowongan →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
