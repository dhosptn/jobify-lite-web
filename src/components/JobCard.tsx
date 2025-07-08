import {
  FiMapPin,
  FiDollarSign,
  FiClock,
  FiBriefcase,
  FiArrowRight,
} from 'react-icons/fi';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    posted: string;
    description: string;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className='bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300'>
      <div className='flex flex-col sm:flex-row sm:items-start justify-between gap-4'>
        <div className='flex-1'>
          <div className='flex items-center gap-3'>
            <div className='flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600'>
              <FiBriefcase className='w-5 h-5' />
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-800'>
                {job.title}
              </h3>
              <p className='text-sm text-gray-600 mt-1'>{job.company}</p>
            </div>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            <div className='flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg'>
              <FiMapPin className='mr-1.5 text-blue-400' />
              {job.location}
            </div>
            <div className='flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg'>
              <FiClock className='mr-1.5 text-green-400' />
              {job.type}
            </div>
            <div className='flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg'>
              <FiDollarSign className='mr-1.5 text-purple-400' />
              {job.salary}
            </div>
          </div>

          <p className='mt-4 text-gray-600 text-sm line-clamp-2'>
            {job.description}
          </p>
        </div>

        <div className='flex sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-2'>
          <span className='text-xs text-gray-400'>{job.posted}</span>
          <button className='flex items-center text-sm font-medium text-blue-500 hover:text-blue-400 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors duration-200'>
            Lihat Detail <FiArrowRight className='ml-1.5' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
