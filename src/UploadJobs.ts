// src/uploadJobs.ts
import { db } from './lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import jobsData from './data/jobs'; // ← pastikan file ini benar, ekstensi .ts tidak perlu ditulis

const uploadJobs = async () => {
  const jobsRef = collection(db, 'jobs');
  for (const job of jobsData) {
    try {
      await addDoc(jobsRef, job);
      console.log(`✅ Uploaded: ${job.title}`);
    } catch (error) {
      console.error('❌ Error uploading job:', error);
    }
  }
};

uploadJobs();
