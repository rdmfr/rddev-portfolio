import React from 'react';
import './About.css';
import AnimatedPage from '../../components/AnimatedPage';
import ProfilePic from '../../assets/profile-pic.jpeg';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <AnimatedPage>
      <section className="about">
        <div className="container">
          <div className="about-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">A little bit about my journey and what I do.</p>
          </div>

          <div className="about-main-content">
            <div className="about-profile">
              <img src={ProfilePic} alt="RdDev Profile" className="about-profile-pic" />
              <h3>RdDev</h3>
              <p>Developer & Data Analyst</p>
            </div>
            <div className="about-narrative">
              <h2>My Story</h2>
              <p>
                I'm a technology enthusiast with a passion for solving problems. My journey began with a curiosity for how things work, which led me to the world of programming. I started with web development, building dynamic and responsive applications. 
              </p>
              <p>
                As I delved deeper, I discovered the power of data and its ability to drive intelligent decisions. This sparked my interest in data analysis and machine learning, and I've been hooked ever since. I thrive on the challenge of transforming complex datasets into meaningful insights and building intelligent systems that make a real impact.
              </p>
            </div>
          </div>

          <div className="about-fun-facts">
            <h2 className="section-title">Fun Facts</h2>
            <div className="fun-facts-grid">
              <div className="fun-fact-card">
                <div className="fun-fact-icon">☕</div>
                <p>I drink way too much coffee.</p>
              </div>
              <div className="fun-fact-card">
                <div className="fun-fact-icon">🎸</div>
                <p>I play the guitar in my free time.</p>
              </div>
              <div className="fun-fact-card">
                <div className="fun-fact-icon">✈️</div>
                <p>I love to travel and explore new places.</p>
              </div>
              <div className="fun-fact-card">
                <div className="fun-fact-icon">📚</div>
                <p>I'm an avid reader of sci-fi novels.</p>
              </div>
            </div>
          </div>

          <div className="about-timeline">
            <h2>My Journey</h2>
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-icon"><FaGraduationCap /></div>
                  <h4>Graduation</h4>
                  <p>Graduated with a degree in Computer Science, where I built a strong foundation in software development and data structures.</p>
                  <span className="timeline-date">2020</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-icon"><FaCode /></div>
                  <h4>First Developer Role</h4>
                  <p>Joined a startup as a junior developer, where I honed my skills in React, Node.js, and agile methodologies.</p>
                  <span className="timeline-date">2021</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-icon"><FaBriefcase /></div>
                  <h4>Data Analyst Position</h4>
                  <p>Transitioned to a data-focused role, where I began working with Python, Pandas, and machine learning libraries to analyze data and build predictive models.</p>
                  <span className="timeline-date">2023</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              <div className="skill-card"><i className="devicon-react-original"></i><span>React</span></div>
              <div className="skill-card"><i className="devicon-nodejs-plain"></i><span>Node.js</span></div>
              <div className="skill-card"><i className="devicon-python-plain"></i><span>Python</span></div>
              <div className="skill-card"><i className="devicon-tensorflow-original"></i><span>TensorFlow</span></div>
              <div className="skill-card"><i className="devicon-d3js-plain"></i><span>D3.js</span></div>
              <div className="skill-card"><i className="devicon-postgresql-plain"></i><span>PostgreSQL</span></div>
            </div>
          </div>

          <div className="about-cta">
            <h2>Let's Connect</h2>
            <p>I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out.</p>
            <a href="/contact" className="btn btn-primary">Contact Me</a>
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
