import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Validasi login sederhana
    if (email === 'guru@example.com') {
      localStorage.setItem('username', 'Guru'); // Simpan username di localStorage
      navigate('/guru-dashboard'); // Arahkan ke dashboard guru
    } else if (email === 'siswa@example.com') {
      localStorage.setItem('username', 'Siswa'); // Simpan username di localStorage
      navigate('/siswa-dashboard'); // Arahkan ke dashboard siswa
    } else {
      alert('Email atau Password salah');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-4"
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
        placeholder="Password"
      />
      <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded-lg">
        Login
      </button>
    </div>
  );
}

export default Login;
