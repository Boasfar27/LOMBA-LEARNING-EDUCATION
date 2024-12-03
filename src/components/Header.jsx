import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt, FaBookOpen } from 'react-icons/fa'; // Menambahkan ikon untuk user dan logout

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
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold">
          <FaBookOpen className="mr-2" />
          E-Learning
        </Link>

        {/* Navigasi */}
        <div className="flex items-center space-x-4">
          {username ? (
            <>
              <div className="flex items-center space-x-2">
                <FaUserCircle className="text-2xl" />
                <span>Hello, {username}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-700"
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:underline rounded-lg px-4 py-2 border border-transparent"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 hover:underline"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
