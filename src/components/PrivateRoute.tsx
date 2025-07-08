import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const { user } = useAuth();

  // Jika belum login, arahkan ke halaman login
  if (!user) {
    return <Navigate to='/login' replace />;
  }

  // Jika sudah login, tampilkan komponen anak (protected route)
  return <Outlet />;
};

export default PrivateRoute;
