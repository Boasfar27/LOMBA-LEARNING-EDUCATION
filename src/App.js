import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Halaman dan Komponen
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound'; // Halaman 404

// Menggunakan React.lazy untuk load halaman secara dinamis
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const GuruDashboard = React.lazy(() => import('./pages/GuruDashboard'));
const SiswaDashboard = React.lazy(() => import('./pages/SiswaDashboard'));
const Materi = React.lazy(() => import('./pages/Materi'));
const Forum = React.lazy(() => import('./pages/Forum'));
const Tugas = React.lazy(() => import('./pages/Tugas')); // Halaman Tugas untuk Guru
const Notifikasi = React.lazy(() => import('./pages/Notifikasi')); // Halaman Notifikasi untuk Guru

function App() {
  return (
    <Router>
      <Header /> {/* Menampilkan Header */}
      
      <div className="container mx-auto p-4">
        {/* Suspense untuk menangani loading saat halaman dimuat */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Routing untuk Halaman Umum */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Routing untuk Dashboard Guru */}
            <Route path="/guru-dashboard" element={<GuruDashboard />} />
            <Route path="/guru-dashboard/tugas" element={<Tugas />} />
            <Route path="/guru-dashboard/notifikasi" element={<Notifikasi />} />

            {/* Routing untuk Dashboard Siswa */}
            <Route path="/siswa-dashboard" element={<SiswaDashboard />} />

            {/* Routing untuk Materi Pembelajaran */}
            <Route path="/materi/:id" element={<Materi />} />
            
            {/* Routing untuk Forum Diskusi */}
            <Route path="/forum" element={<Forum />} />

            {/* Halaman 404 untuk route yang tidak dikenali */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer /> {/* Menampilkan Footer */}
    </Router>
  );
}

export default App;
