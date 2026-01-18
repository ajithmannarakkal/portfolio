import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(5px)',
        borderBottom: '1px solid var(--border-color)',
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent-color)' }}>AJITH M.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#about" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>About</a>
            <a href="#projects" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Projects</a>
            <a href="#skills" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Skills</a>
            <a href="#experience" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Experience</a>
            <a href="#contact" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
