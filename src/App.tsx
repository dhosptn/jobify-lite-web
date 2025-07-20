import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';
import Home from './pages/Home';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import JobApply from './pages/JobApply';
import CareerTips from './pages/CareerTips';
import CompanyList from './pages/CompanyList';
import AddJob from './pages/AddJob';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import SuccessApply from './pages/SuccessApply';
import MyApplications from './pages/MyApplications';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './context/AuthContext';
import CompanyJobs from './pages/CompanyJobs';

function App() {
  const { user, logout } = useAuth(); // ✅ hanya gunakan yang tersedia di context

  return (
    <BrowserRouter>
      <ScrollToTop />
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
            <Route path='/companies' element={<CompanyList />} />
            <Route path='/perusahaan/:companyName' element={<CompanyJobs />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

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
