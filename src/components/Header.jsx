import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [username, setUsername] = useState(null); // Menyimpan nama pengguna
  const navigate = useNavigate();

  // Periksa status login saat komponen dimuat
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername); // Mengambil username dari localStorage jika ada
    }
  }, []);

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    localStorage.removeItem('username'); // Menghapus username dari localStorage
    setUsername(null); // Menghapus username di state
    navigate('/login'); // Arahkan pengguna ke halaman login setelah logout
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">E-Learning</Link>
        <div>
          {username ? (
            <div className="flex items-center">
              <span className="mr-4">Hello, {username}</span>
              <button 
                onClick={handleLogout} 
                className="bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="mr-4">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
