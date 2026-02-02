import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import resumePdf from '../assets/Ajith_M_Flutter_Developer_4Yrs.pdf';

const Hero = () => {
  return (
    <section id="hero" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="hero-content">
        <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: '#e9ecef',
          borderRadius: '50%',
          margin: '0 auto 1.5rem',
          backgroundImage: `url(${profilePic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '4px solid white',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}></div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Ajith M</h1>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
          Software Engineer (Flutter) | Mobile & FinTech Systems
        </h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '650px', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Software Engineer with 4+ years of experience building production-grade cross-platform mobile applications using Flutter. Specialized in FinTech mobile systems, secure transaction workflows, and scalable app architecture.
        </p>

        {/* Quick Stats */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          borderLeft: '4px solid var(--accent-color)',
          paddingLeft: '1.5rem'
        }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)' }}>4+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Years Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)' }}>14+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Production Apps</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)' }}>30%</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Perf. Boost</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)' }}>FinTech</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Specialist</div>
          </div>
        </div>

        <div>
          <a href="#contact" className="btn">Get in Touch</a>
          <a href={resumePdf} download="Ajith_M_Flutter_Developer_4Yrs.pdf" className="btn" style={{ marginLeft: '1rem', backgroundColor: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}>
            Download Resume
          </a>
          <a href="#projects" style={{ marginLeft: '1rem', color: 'var(--text-color)', fontWeight: 500 }}>View Work ↓</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
