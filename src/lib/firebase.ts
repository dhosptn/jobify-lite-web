// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Ganti dengan konfigurasi dari Firebase Console
const firebaseConfig = {
  apiKey: 'AIzaSyAf9COrUueFU-RojBMY2n3EyrpObBFGFEI',
  authDomain: 'jobify-lite.firebaseapp.com',
  projectId: 'jobify-lite',
  storageBucket: 'jobify-lite.firebasestorage.app',
  messagingSenderId: '595133722181',
  appId: '1:595133722181:web:f34ab52e639fb20c307d2c',
  measurementId: 'G-J3DT2VX6MG',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
