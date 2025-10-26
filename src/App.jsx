import React, { useState, useEffect } from 'react';
import Presentation from './pages/Presentation';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('presentation');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="App">
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-logo">JS</div>
        <div className="nav-links">
          <button 
            className={currentPage === 'presentation' ? 'active' : ''} 
            onClick={() => setCurrentPage('presentation')}
          >
            Presentation
          </button>
          <button 
            className={currentPage === 'projects' ? 'active' : ''} 
            onClick={() => setCurrentPage('projects')}
          >
            Projects
          </button>
        </div>
      </nav>
      
      <main>
        {currentPage === 'presentation' ? <Presentation /> : <Projects />}
      </main>
    </div>
  );
}

export default App;