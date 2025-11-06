import React from 'react';
import './Services.css';
import AnimatedPage from '../../components/AnimatedPage';
import { Link } from 'react-router-dom';
import { FaCode, FaChartLine, FaDatabase, FaProjectDiagram, FaLightbulb, FaRocket } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'I build high-performance, responsive websites and applications that provide a seamless user experience. From single-page applications to complex e-commerce platforms, I deliver solutions that are both functional and beautiful.',
    details: [
      'Frontend development with React',
      'Backend development with Node.js & Express',
      'Database design and integration (SQL & NoSQL)',
      'API development and integration'
    ]
  },
  {
    icon: <FaChartLine />,
    title: 'Data Analysis',
    description: 'I help businesses make data-driven decisions by analyzing complex datasets to identify trends, patterns, and insights. My goal is to turn raw data into actionable intelligence that drives growth.',
    details: [
      'Data cleaning and preprocessing',
      'Exploratory data analysis (EDA)',
      'Statistical analysis and modeling',
      'Interactive data visualization'
    ]
  },
  {
    icon: <FaDatabase />,
    title: 'Machine Learning',
    description: 'I design and deploy machine learning models to solve real-world problems. From predictive modeling to natural language processing, I create intelligent systems that learn from data and improve over time.',
    details: [
      'Predictive modeling and forecasting',
      'Natural Language Processing (NLP)',
      'Computer vision and image analysis',
      'Model deployment and monitoring'
    ]
  }
];

const Services = () => {
  return (
    <AnimatedPage>
      <section className="services">
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">My Services</h2>
            <p className="section-subtitle">I offer a range of services to help you achieve your goals.</p>
          </div>

          <div className="services-detailed-grid">
            {servicesData.map((service, index) => (
              <div className="service-detailed-card" key={index}>
                <div className="service-detailed-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-detailed-description">{service.description}</p>
                <ul>
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="process-section">
            <h2 className="section-title">My Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="process-icon"><FaLightbulb /></div>
                <h4>1. Discovery</h4>
                <p>We start with a deep dive into your goals, challenges, and requirements to ensure we're aligned from day one.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><FaProjectDiagram /></div>
                <h4>2. Planning</h4>
                <p>I create a detailed project plan and roadmap, outlining the scope, timeline, and deliverables.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><FaCode /></div>
                <h4>3. Development</h4>
                <p>I get to work, building your solution with clean, efficient code and providing regular updates along the way.</p>
              </div>
              <div className="process-step">
                <div className="process-icon"><FaRocket /></div>
                <h4>4. Deployment</h4>
                <p>After rigorous testing, I deploy the solution and provide support to ensure a smooth launch.</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Have a project in mind?</h3>
            <p>Let's work together to bring your ideas to life.</p>
            <Link to="/contact" className="btn btn-primary">Contact Me</Link>
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
};

export default Services;

