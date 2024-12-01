import React from 'react';
import DashboardNav from '../components/DashboardNav';

function SiswaDashboard() {
  return (
    <div>
      <DashboardNav role="siswa" />
      <h2 className="text-3xl font-bold mt-8">Dashboard Siswa</h2>
      <p>Selamat datang di dashboard siswa. Di sini Anda dapat mengakses materi, tugas, dan forum diskusi.</p>
    </div>
  );
}

export default SiswaDashboard;
