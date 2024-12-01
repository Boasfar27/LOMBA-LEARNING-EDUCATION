import React from 'react';
import DashboardNav from '../components/DashboardNav';

function GuruDashboard() {
  return (
    <div>
      <DashboardNav role="guru" />
      <h2 className="text-3xl font-bold mt-8">Dashboard Guru</h2>
      <p>Selamat datang di dashboard guru. Anda dapat mengelola tugas, materi, dan memberikan notifikasi kepada siswa.</p>
    </div>
  );
}

export default GuruDashboard;
