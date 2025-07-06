import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import JobApply from './pages/JobApply';
import CareerTips from './pages/CareerTips';
import AdminDashboard from './pages/AdminDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import AddJob from './pages/AddJob';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import SuccessApply from './pages/SuccessApply';
import MyApplications from './pages/MyApplications';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './context/AuthContext';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-gray-600 text-lg'>Memuat aplikasi...</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/jobs' element={<JobList />} />
            <Route path='/jobs/:id' element={<JobDetail />} />
            <Route path='/jobs/:id/apply' element={<JobApply />} />
            <Route path='/success-apply' element={<SuccessApply />} />
            <Route path='/my-applications' element={<MyApplications />} />
            <Route path='/career-tips' element={<CareerTips />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            {/* Admin Routes */}
            <Route element={<PrivateRoute roles={['admin']} />}>
              <Route path='/admin' element={<AdminDashboard />} />
              <Route path='/admin/add-job' element={<AddJob />} />
            </Route>

            {/* Company Routes */}
            <Route element={<PrivateRoute roles={['company']} />}>
              <Route path='/company/dashboard' element={<CompanyDashboard />} />
            </Route>

            {/* 404 Page */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
