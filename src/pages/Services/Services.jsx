import React from 'react';
import './Services.css';
import AnimatedPage from '../../components/AnimatedPage';
// --- Impor ikon yang relevan ---
import { FaCode, FaChartBar, FaBrain, FaCogs } from 'react-icons/fa';

// --- Daftar layanan yang sudah diperbarui ---
const servicesData = [
  {
    icon: <FaBrain />,
    title: 'Machine Learning',
    description: 'Mengembangkan dan menerapkan model prediktif untuk menyelesaikan masalah bisnis yang kompleks menggunakan data.',
  },
  {
    icon: <FaChartBar />,
    title: 'Data Analysis',
    description: 'Mengekstrak wawasan berharga dari data melalui pembersihan, analisis, dan visualisasi yang interaktif.',
  },
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Membangun website dan aplikasi yang responsif dan berkinerja tinggi menggunakan teknologi modern.',
  },
  {
    icon: <FaCogs />,
    title: 'Business Automation',
    description: 'Mengotomatisasi tugas berulang dan membuat alat kustom dengan Excel VBA untuk meningkatkan efisiensi kerja.',
  },
];

const Services = () => {
  return (
    <AnimatedPage>
      <section className="services">
        <div className="container">
          <div className="services-title-wrapper">
            <h2 className="section-title">My Services</h2>
          </div>
          {/* Menambahkan class baru agar 4 kartu lebih rapi */}
          <div className="services-grid services-grid-4">
            {servicesData.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Services;

