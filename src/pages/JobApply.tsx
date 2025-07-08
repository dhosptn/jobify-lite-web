import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UploadCloud, User, Phone, FileText, Loader2 } from 'lucide-react';

const JobApply = () => {
  const [user] = useAuthState(auth);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [jobData, setJobData] = useState<any>(null);
  const [fileName, setFileName] = useState('');

  const { id: jobId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId) return;

      const jobRef = doc(db, 'jobs', jobId);
      const jobSnap = await getDoc(jobRef);
      if (jobSnap.exists()) {
        setJobData(jobSnap.data());
      } else {
        console.error('Job tidak ditemukan.');
      }
    };

    fetchJob();
  }, [jobId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cvFile) {
      alert('Mohon upload file CV terlebih dahulu.');
      return;
    }

    try {
      setIsUploading(true);

      // Upload ke Cloudinary
      const formData = new FormData();
      formData.append('file', cvFile);
      formData.append('upload_preset', 'jobify_cv');
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/ddwity2xb/auto/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.json();
      const uploadedUrl = data.secure_url;

      // Simpan ke Firestore
      await addDoc(collection(db, 'job_applications'), {
        userId: user?.uid,
        name: fullName,
        email: user?.email,
        phone,
        coverLetter,
        cvUrl: uploadedUrl,
        appliedDate: new Date().toISOString(),
        createdAt: serverTimestamp(),
        status: 'Belum Dilihat',
        jobId,
        title: jobData?.title || '',
        company: jobData?.company || '',
        location: jobData?.location || '',
        type: jobData?.type || '',
        salary: jobData?.salary || '',
      });

      navigate('/success-apply');
    } catch (error) {
      console.error('Error saat mengirim lamaran:', error);
      alert('Gagal mengirim lamaran. Silakan coba lagi.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
          {/* Header Section */}
          <div className='bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-center'>
            <h1 className='text-2xl sm:text-3xl font-bold text-white mb-2'>
              Lamar Posisi: {jobData?.title || ''}
            </h1>
            <p className='text-blue-100'>
              Di {jobData?.company || 'Perusahaan Ini'} •{' '}
              {jobData?.location || ''}
            </p>
          </div>

          {/* Form Section */}
          <div className='p-6 sm:p-8'>
            <div className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Lengkapi Data Diri Anda
              </h2>
              <p className='text-gray-600'>
                Pastikan informasi yang Anda berikan akurat dan terkini untuk
                proses seleksi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Field */}
              <div className='space-y-1'>
                <label className='block text-sm font-medium text-gray-700 flex items-center'>
                  <User className='w-4 h-4 mr-2 text-gray-500' />
                  Nama Lengkap
                </label>
                <input
                  type='text'
                  className='w-full bg-transparent px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder='Masukkan nama lengkap sesuai KTP'
                />
              </div>

              {/* Phone Field */}
              <div className='space-y-1'>
                <label className='block text-sm font-medium text-gray-700 flex items-center'>
                  <Phone className='w-4 h-4 mr-2 text-gray-500' />
                  Nomor Telepon/WhatsApp
                </label>
                <input
                  type='tel'
                  className='w-full bg-transparent px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder='Contoh: 081234567890'
                />
              </div>

              {/* Cover Letter Field */}
              <div className='space-y-1'>
                <label className='block text-sm font-medium text-gray-700 flex items-center'>
                  <FileText className='w-4 h-4 mr-2 text-gray-500' />
                  Surat Lamaran (Opsional)
                </label>
                <textarea
                  className='w-full bg-transparent px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  rows={5}
                  placeholder='Ceritakan mengapa Anda cocok untuk posisi ini (maksimal 500 kata)'
                />
                <p className='text-xs text-gray-500 mt-1'>
                  Tips: Sertakan pencapaian relevan dan alasan Anda tertarik
                  dengan perusahaan ini.
                </p>
              </div>

              {/* CV Upload Field */}
              <div className='space-y-1'>
                <label className='block text-sm font-medium text-gray-700 flex items-center'>
                  <UploadCloud className='w-4 h-4 mr-2 text-gray-500' />
                  Upload CV/Resume
                </label>
                <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg'>
                  <div className='space-y-1 text-center'>
                    {fileName ? (
                      <p className='text-sm text-gray-600'>{fileName}</p>
                    ) : (
                      <>
                        <div className='flex text-sm text-gray-600 justify-center'>
                          <label className='relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none'>
                            <span>Upload file</span>
                            <input
                              type='file'
                              accept='.pdf,.doc,.docx'
                              onChange={handleFileChange}
                              className='sr-only'
                              required
                            />
                          </label>
                          <p className='pl-1'>atau drag and drop</p>
                        </div>
                        <p className='text-xs text-gray-500'>
                          Format PDF, DOC, atau DOCX (maks. 5MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className='pt-4'>
                <button
                  type='submit'
                  disabled={isUploading || !user}
                  className='w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition-all duration-200'
                >
                  {isUploading ? (
                    <>
                      <Loader2 className='animate-spin mr-2 h-5 w-5' />
                      Mengirim Lamaran...
                    </>
                  ) : (
                    'Kirim Lamaran Sekarang'
                  )}
                </button>
                <p className='text-xs text-gray-500 mt-2 text-center'>
                  Dengan mengirim lamaran, Anda menyetujui pemrosesan data Anda
                  sesuai kebijakan kami.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
