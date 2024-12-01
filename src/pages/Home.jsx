import React from 'react';
import { Helmet } from 'react-helmet';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
// Mendaftarkan elemen yang dibutuhkan di Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Home() {
  // Data untuk grafik, bisa Anda sesuaikan dengan data pendidikan yang relevan
  const chartData = {
    labels: ['2018', '2019', '2020', '2021', '2022'], // Tahun
    datasets: [
      {
        label: 'Jumlah Siswa di Indonesia',
        data: [50, 55, 60, 65, 70], // Data jumlah siswa (dalam juta)
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Jumlah Guru di Indonesia',
        data: [2, 2.2, 2.5, 2.7, 3], // Data jumlah guru (dalam juta)
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="text-center p-8">
      {/* Helmet untuk SEO */}
      <Helmet>
        <title>Selamat Datang - Platform Pembelajaran</title>
        <meta name="description" content="Temukan berbagai informasi tentang pendidikan di Indonesia dan berbagai materi pembelajaran di platform kami." />
      </Helmet>

      {/* Bagian Header dengan Background */}
      <div className="bg-blue-600 text-white py-12">
        <h1 className="text-5xl font-bold">Platform Pembelajaran untuk Masa Depan</h1>
        <p className="mt-4 text-lg">Temukan berbagai informasi tentang pendidikan di Indonesia, Karakter Beajar, Berbagai Materi Pembelajaran, dan diskusi yang mendalam.</p>
      </div>

      {/* Grafik Statistik Pendidikan di Indonesia */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold flex items-center justify-center space-x-4">
          <FontAwesomeIcon icon={faUser} size="lg" className="text-green-500" />
          <span>Statistik Jumlah Siswa di Indonesia</span>
        </h2>
        <p className="mt-2">Berikut adalah grafik perkembangan jumlah siswa dan guru di Indonesia dalam beberapa tahun terakhir.</p>

        <div className="mt-6 max-w-4xl mx-auto">
          <Line data={chartData} />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold flex items-center justify-center space-x-4">
          <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" className="text-purple-500" />
          <span>Statistik Jumlah Guru di Indonesia</span>
        </h2>
        <p className="mt-2">Grafik berikut menunjukkan perkembangan jumlah guru di Indonesia dalam beberapa tahun terakhir.</p>

        <div className="mt-6 max-w-4xl mx-auto">
          <Line data={chartData} />
        </div>
      </div>

      {/* Card Informasi Pendidikan */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/300" alt="Ilustrasi Siswa" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Pendidikan Dasar</h3>
          <p className="text-gray-600 mt-2">
            Pendidikan dasar di Indonesia terus diperkuat dengan kebijakan pemerintah untuk mengurangi angka putus sekolah dan meningkatkan kualitas pendidikan di daerah terpencil.
          </p>
          <a href="https://www.kemdikbud.go.id/" className="text-blue-600 mt-4 block">Sumber: Kemdikbud</a>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/300" alt="Ilustrasi Guru" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Peran Guru dalam Pendidikan</h3>
          <p className="text-gray-600 mt-2">
            Guru memainkan peran kunci dalam pembangunan pendidikan di Indonesia. Pemerintah berupaya memberikan pelatihan dan peningkatan kesejahteraan bagi tenaga pendidik.
          </p>
          <a href="https://www.kemdikbud.go.id/" className="text-blue-600 mt-4 block">Sumber: Kemdikbud</a>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/300" alt="Ilustrasi Pendidikan Tinggi" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Pendidikan Tinggi</h3>
          <p className="text-gray-600 mt-2">
            Pendidikan tinggi di Indonesia terus berkembang dengan munculnya berbagai universitas baru yang menawarkan program studi berbasis teknologi dan ilmu pengetahuan.
          </p>
          <a href="https://www.ristekdikti.go.id/" className="text-blue-600 mt-4 block">Sumber: Ristekdikti</a>
        </div>
      </div>

      {/* Slider untuk Materi Populer */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Materi Populer</h2>
        <Slider {...sliderSettings}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300" alt="Ilustrasi Siswa" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Pendidikan Dasar</h3>
            <p className="text-gray-600 mt-2">
              Pendidikan dasar di Indonesia terus diperkuat dengan kebijakan pemerintah untuk mengurangi angka putus sekolah dan meningkatkan kualitas pendidikan di daerah terpencil.
            </p>
            <a href="https://www.kemdikbud.go.id/" className="text-blue-600 mt-4 block">Sumber: Kemdikbud</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300" alt="Ilustrasi Guru" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Peran Guru dalam Pendidikan</h3>
            <p className="text-gray-600 mt-2">
              Guru memainkan peran kunci dalam pembangunan pendidikan di Indonesia. Pemerintah berupaya memberikan pelatihan dan peningkatan kesejahteraan bagi tenaga pendidik.
            </p>
            <a href="https://www.kemdikbud.go.id/" className="text-blue-600 mt-4 block">Sumber: Kemdikbud</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300" alt="Ilustrasi Pendidikan Tinggi" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Pendidikan Tinggi</h3>
            <p className="text-gray-600 mt-2">
              Pendidikan tinggi di Indonesia terus berkembang dengan munculnya berbagai universitas baru yang menawarkan program studi berbasis teknologi dan ilmu pengetahuan.
            </p>
            <a href="https://www.ristekdikti.go.id/" className="text-blue-600 mt-4 block">Sumber: Ristekdikti</a>
          </div>
        </Slider>
      </div>

      {/* Partnership Logos */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Partnerships</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Example Logos */}
          <a href="https://partner1.com">
            <img src="https://picsum.photos/id/1/200/300" alt="Partner 1" className="w-full h-32 object-contain" />
          </a>
          <a href="https://partner2.com">
            <img src="https://picsum.photos/id/1/200/300" alt="Partner 2" className="w-full h-32 object-contain" />
          </a>
          <a href="https://partner3.com">
            <img src="https://picsum.photos/id/1/200/300" alt="Partner 3" className="w-full h-32 object-contain" />
          </a>
          <a href="https://partner4.com">
            <img src="https://picsum.photos/id/1/200/300" alt="Partner 4" className="w-full h-32 object-contain" />
          </a>
          <a href="https://partner5.com">
            <img src="https://picsum.photos/id/1/200/300" alt="Partner 5" className="w-full h-32 object-contain" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
