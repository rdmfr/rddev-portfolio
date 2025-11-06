import React, { useState } from 'react';
import './Portfolio.css';
import AnimatedPage from '../../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioImg1 from '../../assets/portfolio-1.jpg';
import PortfolioImg2 from '../../assets/portfolio-2.jpg';
import PortfolioImg3 from '../../assets/portfolio-3.jpg';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

export const allProjects = [
  {
    id: 1,
    img: PortfolioImg1,
    title: 'Sales Prediction Model',
    category: 'Machine Learning',
    description: 'A machine learning model built to forecast sales figures based on historical data trends, helping businesses optimize inventory and marketing strategies.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'TensorFlow'],
    github: '#',
    live: '#',
  },
  {
    id: 2,
    img: PortfolioImg2,
    title: 'Interactive Data Dashboard',
    category: 'Data Analysis',
    description: 'A web-based dashboard for real-time visualization and exploration of complex datasets, enabling users to uncover insights through interactive charts and filters.',
    technologies: ['React', 'D3.js', 'Node.js', 'SQL'],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    img: PortfolioImg3,
    title: 'Automated Reporting Tool',
    category: 'Web Development',
    description: 'A custom tool developed with Excel VBA to automate the generation of weekly financial reports from raw data, saving hours of manual work.',
    technologies: ['VBA', 'Excel', 'SQL'],
    github: '#',
    live: '#',
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [modalData, setModalData] = useState(null);

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
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
              <button onClick={() => setFilter('Machine Learning')} className={filter === 'Machine Learning' ? 'active' : ''}>Machine Learning</button>
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
                <img src={modalData.img} alt={modalData.title} className="modal-image" />
              </div>
              <div className="modal-body">
                <h2>{modalData.title}</h2>
                <p>{modalData.description}</p>
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

