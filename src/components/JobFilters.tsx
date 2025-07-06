import { FiBriefcase, FiMapPin, FiDollarSign } from 'react-icons/fi';

interface JobFiltersProps {
  filters: {
    lokasi: string;
    tipe: string;
    gajiMinimum: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      lokasi: string;
      tipe: string;
      gajiMinimum: string;
    }>
  >;
  onClose?: () => void;
}

const JobFilters = ({ filters, setFilters, onClose }: JobFiltersProps) => {
  const jobTypes = [
    { value: '', label: 'Semua Tipe' },
    { value: 'Full-time', label: 'Full-time' },
    { value: 'Part-time', label: 'Part-time' },
    { value: 'Remote', label: 'Remote/WFH' },
    { value: 'Kontrak', label: 'Kontrak' },
    { value: 'Magang', label: 'Magang' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='h-full flex flex-col bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
      {/* Filter Content */}
      <div className='flex-1 overflow-y-auto space-y-4'>
        {/* Filter Lokasi */}
        <div>
          <label
            htmlFor='lokasi'
            className='block text-sm font-medium text-gray-600 mb-1'
          >
            Lokasi
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <FiMapPin className='h-4 w-4 text-gray-400' />
            </div>
            <input
              type='text'
              id='lokasi'
              name='lokasi'
              value={filters.lokasi}
              onChange={handleInputChange}
              className='w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all bg-white'
              placeholder='Cari lokasi...'
            />
          </div>
        </div>

        {/* Filter Tipe Pekerjaan */}
        <div>
          <label
            htmlFor='tipe'
            className='block text-sm font-medium text-gray-600 mb-1'
          >
            Tipe Pekerjaan
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <FiBriefcase className='h-4 w-4 text-gray-400' />
            </div>
            <select
              id='tipe'
              name='tipe'
              value={filters.tipe}
              onChange={handleInputChange}
              className='w-full pl-9 pr-8 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all appearance-none bg-white'
            >
              {jobTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <svg
                className='h-4 w-4 text-gray-400'
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
            </div>
          </div>
        </div>

        {/* Filter Gaji Minimum */}
        <div>
          <label
            htmlFor='gajiMinimum'
            className='block text-sm font-medium text-gray-600 mb-1'
          >
            Gaji Minimum (per bulan)
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <FiDollarSign className='h-4 w-4 text-gray-400' />
            </div>
            <input
              type='number'
              id='gajiMinimum'
              name='gajiMinimum'
              value={filters.gajiMinimum}
              onChange={handleInputChange}
              className='w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all bg-white'
              placeholder='Minimum'
              min='0'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
