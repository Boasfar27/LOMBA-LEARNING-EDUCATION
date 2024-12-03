import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('siswa'); // Menyimpan tipe pengguna (guru atau siswa)
  const navigate = useNavigate();

  const handleLogin = () => {
    // Validasi login berdasarkan tipe pengguna
    if (userType === 'guru') {
      if (email === 'guru@example.com' && password === 'guru123') {
        localStorage.setItem('username', 'Guru'); // Simpan username di localStorage
        navigate('/guru-dashboard'); // Arahkan ke dashboard guru
      } else {
        alert('Email atau Password guru salah');
      }
    } else if (userType === 'siswa') {
      if (email === 'siswa@example.com' && password === 'siswa123') {
        localStorage.setItem('username', 'Siswa'); // Simpan username di localStorage
        navigate('/siswa-dashboard'); // Arahkan ke dashboard siswa
      } else {
        alert('Email atau Password siswa salah');
      }
    } else {
      alert('Pilih jenis pengguna terlebih dahulu');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      {/* Dropdown untuk memilih tipe pengguna */}
      <div className="mb-4">
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="siswa">Siswa</option>
          <option value="guru">Guru</option>
        </select>
      </div>

      {/* Input email */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-4"
        placeholder="Email"
      />

      {/* Input password */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
        placeholder="Password"
      />

      {/* Tombol login */}
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded-lg"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
