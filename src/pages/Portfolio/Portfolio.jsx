import React, { useState } from 'react';
import './Portfolio.css';
import AnimatedPage from '../../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import SkolaOneDashAdmin from '../../../Portfolio/SkolaOne/dash-admin.png';
import SkolaOneDashAdmin1 from '../../../Portfolio/SkolaOne/dash-admin1.png';
import SkolaOneDashAdmin2 from '../../../Portfolio/SkolaOne/dash-admin2.png';
import SkolaOneDashAdmin3 from '../../../Portfolio/SkolaOne/dash-admin3.png';
import SkolaOneDashGuru from '../../../Portfolio/SkolaOne/dash-guru.png';
import SkolaOneDashWali from '../../../Portfolio/SkolaOne/dash-wali.png';
import SkolaOneLoginAdmin from '../../../Portfolio/SkolaOne/Login admin.png';
import SkolaOneLoginGuru from '../../../Portfolio/SkolaOne/login guru.png';
import SkolaOneLoginWali from '../../../Portfolio/SkolaOne/Login wali.png';
import RdMomentBuatUndangan from '../../../Portfolio/rdmoment/buatundangan.png';
import RdMomentDashAdmin from '../../../Portfolio/rdmoment/dashadmin.png';
import RdMomentDashAdmin1 from '../../../Portfolio/rdmoment/dashadmin1.png';
import RdMomentDashAdmin2 from '../../../Portfolio/rdmoment/dashadmin2.png';
import RdMomentDashAdmin3 from '../../../Portfolio/rdmoment/dashadmin3.png';
import RdMomentDashAdmin4 from '../../../Portfolio/rdmoment/dashadmin4.png';
import RdMomentDashboard from '../../../Portfolio/rdmoment/dashboard.png';
import RdMomentDashboard2 from '../../../Portfolio/rdmoment/dashboard2.png';
import RdMomentDashboard3 from '../../../Portfolio/rdmoment/dashboard3.png';
import RdMomentDashboard4 from '../../../Portfolio/rdmoment/dashboard4.png';
import RdMomentDashboard5 from '../../../Portfolio/rdmoment/dashboard5.png';
import RdMomentDashboard6 from '../../../Portfolio/rdmoment/dashboard6.png';
import RdMomentDashboard7 from '../../../Portfolio/rdmoment/dashboard7.png';
import RdMomentGaleriTemplate from '../../../Portfolio/rdmoment/galeri template.png';
import RdMomentLoginAdmin from '../../../Portfolio/rdmoment/loginadmin.png';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

export const allProjects = [
  {
    id: 4,
    img: SkolaOneLoginAdmin,
    title: 'SkolaOne - School Management System',
    category: 'Web Development',
    description: 'A comprehensive web-based school management system featuring separate dashboards for administrators, teachers, and guardians.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/rdmfr/skolaone',
    live: '#',
    gallery: [
      SkolaOneDashAdmin,
      SkolaOneDashAdmin1,
      SkolaOneDashAdmin2,
      SkolaOneDashAdmin3,
      SkolaOneDashGuru,
      SkolaOneDashWali,
      SkolaOneLoginAdmin,
      SkolaOneLoginGuru,
      SkolaOneLoginWali,
    ]
  },
  {
    id: 5,
    img: RdMomentDashboard,
    title: 'RdMoment - Company Website',
    category: 'Web Development',
    description: 'A company profile website for a wedding invitation business.',
    technologies: ['React', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/rdmfr/rdmoment',
    live: 'https://rdmoment.vercel.app/',
    gallery: [
        RdMomentDashboard,
        RdMomentBuatUndangan,
        RdMomentDashAdmin,
        RdMomentDashAdmin1,
        RdMomentDashAdmin2,
        RdMomentDashAdmin3,
        RdMomentDashAdmin4,
        RdMomentDashboard2,
        RdMomentDashboard3,
        RdMomentDashboard4,
        RdMomentDashboard5,
        RdMomentDashboard6,
        RdMomentDashboard7,
        RdMomentGaleriTemplate,
        RdMomentLoginAdmin,
    ]
  },
  {
    id: 6,
    img: 'https://source.unsplash.com/fyeOxvYvIyY',
    title: 'BERT Sentiment Analysis for Elden Ring',
    category: 'Data Analysis',
    description: 'This study focuses on sentiment analysis of Elden Ring reviews using the BERT model. The results show a dominant positive sentiment, with BERT achieving 99% accuracy in the classification task.',
    technologies: ['Python', 'BERT', 'Pandas', 'Scikit-learn'],
    github: 'https://www.researchgate.net/publication/394263899_Optimalisasi_Pengalaman_Pengguna_Game_Elden_Ring_Melalui_Analisis_Sentimen_Berbasis_BERT',
    live: 'https://www.researchgate.net/publication/394263899_Optimalisasi_Pengalaman_Pengguna_Game_Elden_Ring_Melalui_Analisis_Sentimen_Berbasis_BERT',
  },
  {
    id: 7,
    img: 'https://source.unsplash.com/mcSDtbWXUZU',
    title: 'Excel VBA Automation',
    category: 'VBA Development',
    description: 'Developed various automation scripts using Excel VBA for financial reporting, stock management, and other business processes to improve efficiency and reduce manual work.',
    technologies: ['Excel', 'VBA', 'SQL'],
    github: '#',
    live: '#',
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [modalData, setModalData] = useState(null);
  const [currentModalImage, setCurrentModalImage] = useState(null);

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const openModal = (project) => {
    setModalData(project);
    setCurrentModalImage(project.img);
  };

  const closeModal = () => {
    setModalData(null);
    setCurrentModalImage(null);
  };

  const handleGalleryImageClick = (image) => {
    setCurrentModalImage(image);
  };

  return (
    <AnimatedPage>
      <section className="portfolio">
        <div className="container">
          <div className="portfolio-header">
            <h2 className="section-title">My Portfolio</h2>
            <div className="portfolio-filters">
              <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
              <button onClick={() => setFilter('Web Development')} className={filter === 'Web Development' ? 'active' : ''}>Web Development</button>
              <button onClick={() => setFilter('Data Analysis')} className={filter === 'Data Analysis' ? 'active' : ''}>Data Analysis</button>
              <button onClick={() => setFilter('VBA Development')} className={filter === 'VBA Development' ? 'active' : ''}>VBA Development</button>
            </div>
          </div>

          <motion.div layout className="portfolio-grid">
            <AnimatePresence>
              {filteredProjects.map((item) => (
                <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} key={item.id} className="portfolio-card" onClick={() => openModal(item)}>
                  <div className="portfolio-image">
                    <img src={item.img} alt={item.title} />
                    <div className="portfolio-category">{item.category}</div>
                  </div>
                  <div className="portfolio-content">
                    <h3 className="portfolio-title">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {modalData && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}><FaTimes /></button>
              <div className="modal-header">
                <img src={currentModalImage} alt={modalData.title} className="modal-image" />
              </div>
              <div className="modal-body">
                <h2>{modalData.title}</h2>
                <p>{modalData.description}</p>
                {modalData.gallery && (
                  <div className="modal-gallery">
                    <h4>Project Gallery</h4>
                    <div className="gallery-grid">
                      {modalData.gallery.map((image, index) => (
                        <img 
                          key={index} 
                          src={image} 
                          alt={`${modalData.title} - screenshot ${index + 1}`} 
                          className={`gallery-image ${currentModalImage === image ? 'active' : ''}`}
                          onClick={() => handleGalleryImageClick(image)}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div className="modal-technologies">
                  <h4>Technologies Used:</h4>
                  <div>
                    {modalData.technologies.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
                  </div>
                </div>
                <div className="modal-links">
                  <a href={modalData.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><FaGithub /> GitHub</a>
                  <a href={modalData.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><FaExternalLinkAlt /> Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </AnimatedPage>
  );
};

export default Portfolio;

