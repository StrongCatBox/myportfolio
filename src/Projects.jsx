import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Application E-commerce',
      category: 'web',
      description: 'Une application de commerce en ligne complète avec panier, paiement et gestion des commandes.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
      link: '#'
    },
    {
      id: 2,
      title: 'App Mobile de Fitness',
      category: 'mobile',
      description: 'Application mobile pour suivre ses entraînements et objectifs de fitness.',
      technologies: ['React Native', 'Expo', 'Firebase'],
      image: '💪',
      link: '#'
    },
    {
      id: 3,
      title: 'Dashboard Analytique',
      category: 'web',
      description: 'Tableau de bord interactif pour visualiser des données en temps réel.',
      technologies: ['React', 'Chart.js', 'API REST'],
      image: '📊',
      link: '#'
    },
    {
      id: 4,
      title: 'App de Recettes',
      category: 'mobile',
      description: 'Application mobile pour découvrir et sauvegarder des recettes de cuisine.',
      technologies: ['React Native', 'Redux', 'API'],
      image: '🍳',
      link: '#'
    },
    {
      id: 5,
      title: 'Portfolio Interactif',
      category: 'web',
      description: 'Site portfolio moderne avec animations et design responsive.',
      technologies: ['React', 'CSS3', 'Animations'],
      image: '🎨',
      link: '#'
    },
    {
      id: 6,
      title: 'App de Méditation',
      category: 'mobile',
      description: 'Application pour la méditation guidée avec timer et musique.',
      technologies: ['React Native', 'Audio API', 'AsyncStorage'],
      image: '🧘',
      link: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1 className="projects-title">Mes Projets</h1>
          <p className="projects-subtitle">
            Découvrez mes réalisations en développement web et mobile
          </p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => setFilter('all')}
            >
              Tous
            </button>
            <button 
              className={filter === 'web' ? 'active' : ''} 
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button 
              className={filter === 'mobile' ? 'active' : ''} 
              onClick={() => setFilter('mobile')}
            >
              Mobile
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">
                    Voir le projet →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;