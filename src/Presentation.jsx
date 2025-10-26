import React, { useEffect, useState } from 'react';
import './Presentation.css';

const Presentation = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="presentation-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="color-block pink"></div>
          <div className="color-block purple"></div>
        </div>
        <div className="hero-content">
          <div className="profile-image-container">
            <div className="profile-image"></div>
          </div>
          <div className="hero-text">
            <h1 className="name-title">Jeina Salamova</h1>
            <p className="subtitle">Développeuse d'Applications web et mobile</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Me contacter</a>
              <a href="#experience" className="btn-secondary">Mon parcours</a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>↓</span>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="fade-in-section bio-section" style={{ opacity: isVisible.bio ? 1 : 0 }}>
        <div className="container">
          <h2 className="section-title">À propos de moi</h2>
          <div className="bio-content">
            <p>
              Passionnée par le développement web et mobile, je suis actuellement étudiante à Epitech 
              où je perfectionne mes compétences en création d'applications modernes et innovantes.
            </p>
            <p>
              Mon objectif est de créer des expériences utilisateur fluides et intuitives, 
              en utilisant les technologies les plus récentes du marché.
            </p>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="fade-in-section competences-section" style={{ opacity: isVisible.competences ? 1 : 0 }}>
        <div className="container">
          <h2 className="section-title">Compétences</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span>React</span>
                <span>React Native</span>
                <span>HTML/CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Backend</h3>
              <div className="skill-tags">
                <span>Node.js</span>
                <span>Express</span>
                <span>API REST</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Outils</h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>VS Code</span>
                <span>Figma</span>
                <span>npm</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>Mobile</h3>
              <div className="skill-tags">
                <span>React Native</span>
                <span>Expo</span>
                <span>iOS/Android</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expérience Section */}
      <section id="experience" className="fade-in-section experience-section" style={{ opacity: isVisible.experience ? 1 : 0 }}>
        <div className="container">
          <h2 className="section-title">Expérience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Développeuse Junior</h3>
                <p className="timeline-date">2024 - Présent</p>
                <p>Développement d'applications web et mobile avec React et React Native</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Projets Personnels</h3>
                <p className="timeline-date">2023 - 2024</p>
                <p>Création de divers projets pour perfectionner mes compétences en développement</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Début en Programmation</h3>
                <p className="timeline-date">2023</p>
                <p>Premiers pas dans le monde du développement web</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formations" className="fade-in-section formations-section" style={{ opacity: isVisible.formations ? 1 : 0 }}>
        <div className="container">
          <h2 className="section-title">Formation</h2>
          <div className="formations-grid">
            <div className="formation-card">
              <div className="formation-icon">🎓</div>
              <h3>Epitech</h3>
              <p className="formation-type">École d'informatique</p>
              <p className="formation-date">2023 - Présent</p>
              <p className="formation-desc">
                Formation intensive en développement web et mobile, 
                avec une approche pratique basée sur des projets réels.
              </p>
            </div>
            <div className="formation-card">
              <div className="formation-icon">📚</div>
              <h3>Auto-formation</h3>
              <p className="formation-type">Apprentissage continu</p>
              <p className="formation-date">En cours</p>
              <p className="formation-desc">
                Formation continue à travers des cours en ligne, 
                documentation et développement de projets personnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="fade-in-section contact-section" style={{ opacity: isVisible.contact ? 1 : 0 }}>
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:jeina.salamova@epitech.eu">jeina.salamova@epitech.eu</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <h3>LinkedIn</h3>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/jeina-salamova</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <div>
                  <h3>GitHub</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/jeina-salamova</a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Envoyez-moi un message</h3>
              <form>
                <input type="text" placeholder="Votre nom" required />
                <input type="email" placeholder="Votre email" required />
                <textarea placeholder="Votre message" rows="5" required></textarea>
                <button type="submit" className="btn-submit">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;