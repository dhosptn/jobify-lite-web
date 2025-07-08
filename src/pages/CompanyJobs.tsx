import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import JobCard from '../components/JobCard';

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

export default function CompanyJobs() {
  const { companyName } = useParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'jobs'));
        const allJobs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Job[];

        const filtered = allJobs.filter(
          (job) =>
            job.company.toLowerCase() ===
            decodeURIComponent(companyName || '').toLowerCase()
        );

        setJobs(filtered);
      } catch (error) {
        console.error('❌ Gagal mengambil data job:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [companyName]);

  return (
    <div className='max-w-5xl mx-auto pb-10 pt-20 px-10'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>
        Lowongan dari {decodeURIComponent(companyName || '')}
      </h1>

      {loading ? (
        <p>Memuat lowongan...</p>
      ) : jobs.length === 0 ? (
        <p className='text-gray-500'>Tidak ada lowongan dari perusahaan ini.</p>
      ) : (
        <div className='space-y-4'>
          {jobs.map((job) => (
            <Link key={job.id} to={`/jobs/${job.id}`}>
              <JobCard job={job} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
