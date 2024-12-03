import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Bar } from "react-chartjs-2"; // Ganti Line dengan Bar
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaChalkboardTeacher, FaUserGraduate, FaSchool } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mendaftarkan elemen Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Home() {
  const [isOpen, setIsOpen] = useState(null); // State untuk membuka/tutup FAQ
  const toggleFAQ = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const chartData = {
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Jumlah Siswa (Juta)",
        data: [50, 55, 60, 65, 70],
        backgroundColor: "#4caf50", // Ganti borderColor dan backgroundColor
      },
      {
        label: "Jumlah Guru (Juta)",
        data: [2, 2.5, 3, 3.5, 4],
        backgroundColor: "#2196f3", // Ganti borderColor dan backgroundColor
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Agar grafik responsif
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>Platform Pembelajaran</title>
        <meta
          name="description"
          content="Situs edukasi modern yang menyediakan informasi pendidikan, grafik statistik, dan layanan interaktif."
        />
      </Helmet>

{/* Section */}
<section className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16 px-4 text-center rounded-b-lg mt-0">
  <h1 className="text-4xl md:text-6xl font-bold mb-4">
    <FaUserGraduate className="inline-block text-white mr-2" />
    EduPlatform
  </h1>
  <p className="text-lg">Membantu pembelajaran menjadi lebih mudah dan interaktif.</p>
</section>



      {/* Grafik Statistik */}
      <section className="p-8">
        <h2 className="text-2xl font-bold flex items-center justify-center mb-4">
          <FaChalkboardTeacher className="text-blue-500 mr-2" />
          Statistik Pendidikan
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Perkembangan jumlah siswa dan guru dalam 5 tahun terakhir:
        </p>
        <div className="mt-6 max-w-4xl mx-auto">
          <div style={{ position: "relative", height: "400px" }}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </section>

      

      {/* Slider untuk Informasi Pendidikan */}
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Informasi Pendidikan</h2>
        <Slider {...sliderSettings}>
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://via.placeholder.com/300"
                alt="Pendidikan Dasar"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold flex items-center">
                <MdOutlineSchool className="text-green-500 mr-2" />
                Pendidikan Dasar
              </h3>
              <p className="text-gray-600 mt-2">
                Pendidikan dasar di Indonesia terus diperkuat dengan kebijakan pemerintah untuk
                mengurangi angka putus sekolah dan meningkatkan kualitas pendidikan di daerah
                terpencil.
              </p>
              <a href="https://www.kemdikbud.go.id/" className="text-blue-600 mt-4 block">
                Sumber: Kemdikbud
              </a>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://via.placeholder.com/300"
                alt="Peran Guru"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold flex items-center">
                <FaChalkboardTeacher className="text-purple-500 mr-2" />
                Peran Guru dalam Pendidikan
              </h3>
              <p className="text-gray-600 mt-2">
                Guru memainkan peran kunci dalam pembangunan pendidikan di Indonesia. Pemerintah
                berupaya memberikan pelatihan dan peningkatan kesejahteraan bagi tenaga pendidik.
              </p>
              <a href="https://www.kemdikbud.go.id/" className="text-blue-600 mt-4 block">
                Sumber: Kemdikbud
              </a>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://via.placeholder.com/300"
                alt="Pendidikan Tinggi"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold flex items-center">
                <FaUserGraduate className="text-blue-500 mr-2" />
                Pendidikan Tinggi
              </h3>
              <p className="text-gray-600 mt-2">
                Pendidikan tinggi di Indonesia terus berkembang dengan munculnya berbagai
                universitas baru yang menawarkan program studi berbasis teknologi dan ilmu
                pengetahuan.
              </p>
              <a href="https://www.ristekdikti.go.id/" className="text-blue-600 mt-4 block">
                Sumber: Ristekdikti
              </a>
            </div>
          </div>
        </Slider>
      </section>

      {/* Materi Populer */}
<section className="p-8">
  <h2 className="text-2xl font-bold text-center mb-6">Materi Populer</h2>
  <Slider {...sliderSettings}>
    {[1, 2, 3].map((_, index) => (
      <div key={index} className="p-4"> {/* Tambahkan pembungkus p-4 untuk jarak antar card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <img
            src="https://via.placeholder.com/300"
            alt={`Materi ${index + 1}`}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold flex items-center">
            Materi {index + 1}
          </h3>
          <p className="text-gray-600 mt-2 flex items-start">
            
            Materi ini mencakup berbagai topik penting yang relevan untuk pengembangan diri.
          </p>
          <a href="#" className="text-blue-600 mt-4 block">
            Lihat Selengkapnya
          </a>
        </div>
      </div>
    ))}
  </Slider>
</section>



      {/* Partnership */}
      <section className="mt-12 p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Partnership Kami</h2>
        <Slider {...sliderSettings}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="p-4">
              <div className="flex justify-center">
                <img
                  src={`https://picsum.photos/seed/${index}/200/150`}
                  alt={`Partner ${index + 1}`}
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* FAQ */}
      <section className="p-8">
        <div className="flex">
          <div className="w-1/2 pr-6">
            <h2 className="text-2xl font-bold text-center mb-6">FAQ - Pertanyaan Umum</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Apa itu EduPlatform?",
                  answer:
                    "EduPlatform adalah platform pembelajaran interaktif yang menyediakan berbagai materi pendidikan dan statistik pendidikan terkini.",
                },
                {
                  question: "Bagaimana cara menggunakan EduPlatform?",
                  answer: "Anda cukup mendaftar dan masuk untuk mengakses materi, grafik, dan fitur-fitur pembelajaran lainnya.",
                },
                {
                  question: "Apakah EduPlatform gratis?",
                  answer:
                    "EduPlatform menawarkan akses gratis untuk sebagian besar konten. Beberapa fitur premium memerlukan langganan.",
                },
                {
                  question: "Apa saja fitur yang tersedia?",
                  answer:
                    "EduPlatform menyediakan grafik statistik pendidikan, materi pembelajaran interaktif, dan layanan informasi pendidikan.",
                },
                {
                  question: "Bagaimana cara mengakses materi pendidikan?",
                  answer: "Anda dapat mengakses materi pendidikan melalui menu 'Materi Populer' yang tersedia di halaman utama.",
                },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
                  <h3
                    className="font-semibold text-lg cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question}
                  </h3>
                  {isOpen === index && <p className="text-gray-600 mt-2">{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Alamat Kami */}
          <div className="w-1/2 pl-6">
            <h2 className="text-2xl font-bold mb-4">Alamat Kami</h2>
            <div className="relative w-full h-72">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed/v1/place?q=Jl.+Ketintang+Baru+XII+No.26,+RT.004%2FRW.03,+Ketintang,+Kec.+Gayungan,+Surabaya,+Jawa+Timur+60231"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
