import React from 'react';
import './Home.css';
import AnimatedPage from '../../components/AnimatedPage';
import { Link } from 'react-router-dom';
import ProfilePic from '../../assets/profile-pic.jpeg'; // Pastikan nama file ini sesuai

const Home = () => {
  return (
    <AnimatedPage>
      <section className="home" style={{ backgroundImage: `url(../../assets/hero-bg.jpg)` }}>
        <div className="home-overlay"></div>
        <div className="container home-container">
          <div className="home-content">
            {/* --- PERUBAHAN KONTEN DI SINI --- */}
            <h1 className="home-title">
              Hi, I'm <span className="highlight">RdDev</span>.
              <br />
              Developer & Data Analyst.
            </h1>
            <p className="home-subtitle">
              Saya membangun solusi cerdas, dari website dinamis hingga model machine learning berbasis data.
            </p>
            {/* --- AKHIR PERUBAHAN --- */}
            <div className="home-buttons">
              <Link to="/portfolio" className="btn btn-primary">My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Let's Talk</Link>
            </div>
          </div>
          <div className="home-image">
             <img src={ProfilePic} alt="Profile" />
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;

