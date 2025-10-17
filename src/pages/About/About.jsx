import React from 'react';
import './About.css';
import AnimatedPage from '../../components/AnimatedPage';
// --- Impor ikon baru ---
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaFileExcel } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiPandas } from 'react-icons/si';
import { DiJavascript1 } from "react-icons/di";


// --- Daftar skill diperbarui ---
const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <DiJavascript1 />, name: 'JavaScript' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiTensorflow />, name: 'TensorFlow' },
    { icon: <SiScikitlearn />, name: 'Scikit-learn' },
    { icon: <SiPandas />, name: 'Pandas' },
    { icon: <FaDatabase />, name: 'SQL' },
    { icon: <FaFileExcel />, name: 'Excel VBA' }
];

const About = () => {
  return (
    <AnimatedPage>
      <section className="about">
        <div className="container">
          <div className="about-title-wrapper">
             <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-content">
            {/* --- Deskripsi diri diperbarui --- */}
            <div className="about-text">
              <h3>Problem Solver, Technology Enthusiast</h3>
              <p>
                Hello! Saya RdDev, seorang profesional teknologi dengan hasrat untuk mengubah data menjadi sebuah solusi. Keahlian saya terbentang dari Web Development, Data Analysis, hingga Machine Learning.
              </p>
              <p>
                Saya percaya pada kekuatan data untuk mendorong keputusan yang cerdas. Baik itu membangun aplikasi web interaktif, menganalisis dataset kompleks untuk menemukan wawasan tersembunyi, atau membuat model prediktif, saya selalu fokus untuk memberikan hasil yang berdampak dan efisien.
              </p>
            </div>
            <div className="about-skills">
              <h3>My Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
