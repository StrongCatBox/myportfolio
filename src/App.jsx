import React, { useState } from 'react';
import Presentation from './pages/Presentation';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('presentation');

  return (
    <div className="App">
      <nav className="navbar">
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