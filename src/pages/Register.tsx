import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/jobs'); // redirect setelah register
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className='max-w-md mx-auto py-20 px-4'>
      <h2 className='text-2xl font-bold mb-4'>Buat Akun Baru</h2>
      <form onSubmit={handleRegister} className='space-y-4'>
        <input
          type='email'
          className='w-full p-2 border rounded'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          className='w-full p-2 border rounded'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type='submit'
          className='w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
        >
          Daftar
        </button>
      </form>
    </div>
  );
}
