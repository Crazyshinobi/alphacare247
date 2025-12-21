import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import PolicyPage from './pages/PolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage1 from './pages/BlogDetailPage1';
import BlogDetailPage2 from './pages/BlogDetailPage2';
import BlogDetailPage3 from './pages/BlogDetailPage3';
import Sections from './pages/Sections';
import Locations from './pages/Locations';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sections" element={<Sections />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/home-blood-test-services-in-delhi" element={<BlogDetailPage1 />} />
        <Route path="/blog/benefits-of-booking-health-checkup" element={<BlogDetailPage2 />} />
        <Route path="/blog/onsite-blood-testing-saves-time" element={<BlogDetailPage3 />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;