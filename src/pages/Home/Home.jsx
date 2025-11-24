import React from 'react';
import './Home.css';
import '../Portfolio/Portfolio.css';
import AnimatedPage from '../../components/AnimatedPage';
import { Link } from 'react-router-dom';
import ProfilePic from '../../assets/profile-pic.jpeg';
import TypingEffect from '../../components/TypingEffect';
import { allProjects } from '../Portfolio/Portfolio';

const Home = () => {
  return (
    <AnimatedPage>
      <section className="home" style={{ backgroundImage: `url(../../assets/hero-bg.jpg)` }}>
        <div className="home-overlay"></div>
        <div className="container home-container">
          <div className="home-content">
            <h1 className="home-title">
              <TypingEffect text="Building Digital Solutions, Driven by Data." speed={50} />
            </h1>
            <p className="home-subtitle">
              I am a passionate Developer and Data Analyst, specializing in creating dynamic web experiences and uncovering valuable insights from data to build smart, effective solutions.
            </p>
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

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>SQL & NoSQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Data Analysis</h3>
              <ul>
                <li>Pandas & NumPy</li>
                <li>Scikit-learn</li>
                <li>TensorFlow</li>
                <li>Data Visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="portfolio-grid">
            {allProjects.slice(0, 3).map((project) => (
              <div className="portfolio-card" key={project.id}>
                <div className="portfolio-image">
                  <img src={project.img} alt={project.title} />
                  <div className="portfolio-category">{project.category}</div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="home-buttons" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/portfolio" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;

