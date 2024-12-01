import React from 'react';
import { Link } from 'react-router-dom';

function DashboardNav({ role }) {
  return (
    <div className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-6">
          <li><Link to={role === 'guru' ? '/guru-dashboard' : '/siswa-dashboard'} className="hover:text-gray-300">Dashboard</Link></li>
          <li><Link to="/materi" className="hover:text-gray-300">Materi</Link></li>
          <li><Link to="/forum" className="hover:text-gray-300">Forum Diskusi</Link></li>
          {role === 'guru' && (
            <>
              <li><Link to="/tugas" className="hover:text-gray-300">Tugas</Link></li>
              <li><Link to="/notifikasi" className="hover:text-gray-300">Notifikasi</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default DashboardNav;
