import React from 'react';
import './Portfolio.css';
import AnimatedPage from '../../components/AnimatedPage';
import PortfolioImg1 from '../../assets/portfolio-1.jpg';
import PortfolioImg2 from '../../assets/portfolio-2.jpg';
import PortfolioImg3 from '../../assets/portfolio-3.jpg';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// --- Data proyek diganti untuk mencerminkan semua keahlian ---
const portfolioData = [
  {
    img: PortfolioImg1,
    title: 'Sales Prediction Model',
    description: 'Model Machine Learning untuk memprediksi angka penjualan berdasarkan tren data historis.',
    github: '#',
    live: '#',
  },
  {
    img: PortfolioImg2,
    title: 'Interactive Data Dashboard',
    description: 'Dashboard berbasis web untuk visualisasi dan eksplorasi dataset kompleks secara real-time.',
    github: '#',
    live: '#',
  },
  {
    img: PortfolioImg3,
    title: 'Automated Reporting Tool',
    description: 'Tools Excel VBA yang mengotomatiskan pembuatan laporan keuangan mingguan dari data mentah.',
    github: '#',
    live: '#',
  },
];

const Portfolio = () => {
  return (
    <AnimatedPage>
      <section className="portfolio">
        <div className="container">
          <div className="portfolio-title-wrapper">
            <h2 className="section-title">My Portfolio</h2>
          </div>
          <div className="portfolio-grid">
            {portfolioData.map((item, index) => (
              <div className="portfolio-card" key={index}>
                <div className="portfolio-image">
                  <img src={item.img} alt={item.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-links">
                      <a href={item.github} target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                      <a href={item.live} target="_blank" rel="noopener noreferrer" title="Live Demo"><FaExternalLinkAlt /></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Portfolio;

