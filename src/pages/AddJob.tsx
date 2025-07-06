import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salaryMin: '',
    salaryMax: '',
    description: '',
    requirements: '',
    responsibilities: '',
    benefits: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to an API
    console.log('Form submitted:', formData);
    alert('Lowongan berhasil ditambahkan!');
  };

  return (
    <div className='py-8'>
      <div className='max-w-4xl mx-auto px-4'>
        <Link
          to='/admin'
          className='flex items-center text-blue-600 hover:underline mb-6'
        >
          <FiArrowLeft className='mr-2' /> Kembali ke Dashboard
        </Link>

        <h1 className='text-2xl font-bold mb-6'>Tambah Lowongan Baru</h1>

        <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
          <form onSubmit={handleSubmit}>
            <div className='p-6 space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Judul Pekerjaan <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Nama Perusahaan <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    required
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Lokasi <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    name='location'
                    value={formData.location}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Tipe Pekerjaan <span className='text-red-500'>*</span>
                  </label>
                  <select
                    name='type'
                    value={formData.type}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    required
                  >
                    <option value='Full-time'>Full-time</option>
                    <option value='Part-time'>Part-time</option>
                    <option value='Kontrak'>Kontrak</option>
                    <option value='Freelance'>Freelance</option>
                    <option value='Remote'>Remote</option>
                  </select>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Gaji Minimum (Rp)
                  </label>
                  <input
                    type='number'
                    name='salaryMin'
                    value={formData.salaryMin}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Gaji Maksimum (Rp)
                  </label>
                  <input
                    type='number'
                    name='salaryMax'
                    value={formData.salaryMax}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Deskripsi Pekerjaan <span className='text-red-500'>*</span>
                </label>
                <textarea
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Persyaratan <span className='text-red-500'>*</span>
                </label>
                <textarea
                  name='requirements'
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Gunakan titik koma (;) untuk memisahkan poin-poin'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Tanggung Jawab
                </label>
                <textarea
                  name='responsibilities'
                  value={formData.responsibilities}
                  onChange={handleChange}
                  rows={4}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Gunakan titik koma (;) untuk memisahkan poin-poin'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Benefit
                </label>
                <textarea
                  name='benefits'
                  value={formData.benefits}
                  onChange={handleChange}
                  rows={4}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Gunakan titik koma (;) untuk memisahkan poin-poin'
                />
              </div>
            </div>

            <div className='px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end'>
              <button
                type='submit'
                className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium'
              >
                Simpan Lowongan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
