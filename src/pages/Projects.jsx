import React, { useState } from 'react';
import './Projects.css';
import adoptionImg from '../assets/adoption-animaux.jpg';
import autoEcoleImg from '../assets/auto-ecole.jpg';
import nestinoveImg from '../assets/nestinove.jpg';




const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Application de mise en relation - Adoption d\'animaux',
      category: 'web',
      description: 'Plateforme web complète permettant la mise en relation entre adoptants et propriétaires d\'animaux avec système de matching intelligent.',
      technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'JavaScript', 'JWT', 'Docker'],
       image: adoptionImg,
       imageType: 'img', // Type image
      link: 'https://github.com/StrongCatBox/PurrfectMates',
      details: 'Projet de stage CDA avec architecture en couches, API REST, authentification JWT et gestion des rôles utilisateurs.'
    },
    {
      id: 2,
      title: 'Gestion d\'Auto-École',
      category: 'web',
      description: 'Application de gestion complète pour auto-école permettant l\'administration des élèves, moniteurs, véhicules et leçons.',
      technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Swagger'],
      image: autoEcoleImg,
      imageType: 'img', // Type image
      link: 'https://github.com/StrongCatBox/ECF_AEL',
      details: 'Architecture en couches (Controller, Service, Repository) avec API REST et documentation Swagger.'
    },
    {
      id: 3,
      title: 'Nestinove - Plateforme Incubateur',
      category: 'web',
      description: 'Plateforme web pour incubateur en ligne avec gestion des porteurs de projets, tableaux de bord interactifs et formulaires dynamiques.',
      technologies: ['Django', 'Python', 'MySQL', 'JavaScript', 'HTML/CSS'],
      image: nestinoveImg,
      imageType: 'img', // Type image
      link: 'https://github.com/StrongCatBox/NestinoveTest',
      details: 'Système d\'authentification, tableaux de bord avec progression et contenu dynamique.'
    },
    {
      id: 4,
      title: 'Boutique E-commerce avec Symfony',
      category: 'web',
      description: 'Application e-commerce complète avec gestion des produits, utilisateurs, panier et paiement sécurisé via Stripe.',
      technologies: ['Symfony', 'PHP', 'MySQL', 'Stripe', 'Twig'],
      image: '🛒',
      imageType: 'emoji',
      link: 'https://github.com/StrongCatBox/MyBoutiqueNew',
      details: 'Architecture MVC avec CRUD complet, gestion du panier et intégration de l\'API Stripe.'
    },
    {
      id: 5,
      title: 'Boutique fictive - Vue.js & Node.js',
      category: 'web',
      description: 'Application web de boutique fictive avec architecture MVC et communication front-end/back-end.',
      technologies: ['Vue.js', 'Node.js', 'MySQL', 'API REST'],
      image: '🏪',
      imageType: 'emoji',
      link: '#',
      details: 'CRUD complet produits, utilisateurs et commandes avec routes API REST testées via Postman.'
    },
    {
      id: 6,
      title: 'Applications Mobiles - Kosmos Digital',
      category: 'mobile',
      description: 'Tests et déploiement d\'applications mobiles multiplateformes, correction de bugs et création de landing pages.',
      technologies: ['Flutter', 'Firebase', 'Dart', 'HTML/CSS', 'ClickUp'],
      image: '📱',
      imageType: 'emoji',
      link: '#',
      details: 'Tests fonctionnels, déploiement sur App Store et Google Play Store, gestion via ClickUp.'
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
            Découvrez mes réalisations professionnelles et académiques
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
                  {project.imageType === 'emoji' ? (
                    <span className="project-emoji">{project.image}</span>
                  ) : (
                    <img src={project.image} alt={project.title} className="project-img" />
                  )}
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {project.details && (
                    <p className="project-details">{project.details}</p>
                  )}
                  <a href={project.link} className="project-link">
                    Voir sur GitHub →
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