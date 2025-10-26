import React, { useEffect, useState } from 'react';
import './Presentation.css';
import profileImage from '../assets/mybitmoji.png';

const Presentation = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formStatus, setFormStatus] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xanwglyd', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('✅ Message envoyé avec succès ! Je vous répondrai bientôt.');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      setFormStatus('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
    }
  };

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
            <img src={profileImage} alt="Jeina Salamova" className="profile-image" />
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
              Passionnée par les nouvelles technologies et le design, j'aime relever des défis 
              techniques et créer des solutions innovantes. Actuellement en Master of Science 
              à Epitech avec une spécialité en Intelligence Artificielle, je développe mes compétences 
              en développement web, mobile et IA.
            </p>
            <p>
              Rigoureuse et motivée, je suis prête à contribuer activement à des projets stimulants 
              et à mettre mes compétences en développement au service d'une équipe dynamique.
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
              <h3>Développement</h3>
              <div className="skill-tags">
                <span>HTML/CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>Python</span>
                <span>C# (.NET)</span>
                <span>Java</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>Frameworks</h3>
              <div className="skill-tags">
                <span>Symfony</span>
                <span>Django</span>
                <span>Vue.js</span>
                <span>Node.js</span>
                <span>Bootstrap</span>
                <span>Tailwind</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🗄️</div>
              <h3>Base de Données</h3>
              <div className="skill-tags">
                <span>SQL Server</span>
                <span>MySQL</span>
                <span>SQL Management Studio</span>
                <span>phpMyAdmin</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Outils & Méthodes</h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>Docker</span>
                <span>Méthode Agile</span>
                <span>UML/Merise</span>
                <span>Canva</span>
                <span>ClickUp</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>Mobile</h3>
              <div className="skill-tags">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>Android Studio</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>Conception</h3>
              <div className="skill-tags">
                <span>UML</span>
                <span>Merise (MCD, MPD)</span>
                <span>Use Case</span>
                <span>Cahier des charges</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expérience Section */}
      <section id="experience" className="fade-in-section experience-section" style={{ opacity: isVisible.experience ? 1 : 0 }}>
        <div className="container">
          <h2 className="section-title">Expériences Professionnelles</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Stage - Kosmos Digital</h3>
                <p className="timeline-date">Villeneuve Loubet - 3 mois</p>
                <ul className="timeline-list">
                  <li>Réalisation de tests manuels sur les applications mobiles développées en Flutter/Firebase</li>
                  <li>Analyse et correction de bugs en collaboration avec l'équipe de développement</li>
                  <li>Gestion des tickets et anomalies via ClickUp</li>
                  <li>Participation au déploiement des applications sur Google Play Store et Apple App Store</li>
                  <li>Création et mise en ligne de landing pages</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Mission - Ekowash</h3>
                <p className="timeline-date">Reims - 2 mois</p>
                <ul className="timeline-list">
                  <li>Rédaction du Cahier des Charges</li>
                  <li>Création et gestion de BDD avec SQL (phpMyAdmin)</li>
                  <li>Développement du site Nestinove front-end et back-end avec Django (Python)</li>
                  <li>Utilisation du JavaScript pour le contenu dynamique</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Mission - Fit&Food Club</h3>
                <p className="timeline-date">Nice - 2 semaines</p>
                <ul className="timeline-list">
                  <li>Développement du site vitrine avec WordPress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formations" className="fade-in-section formations-section" style={{ opacity: isVisible.formations ? 1 : 0 }}>
        <div className="container">
          <h2 className="section-title">Formations et Diplômes</h2>
          <div className="formations-grid">
            <div className="formation-card">
              <div className="formation-icon">🎓</div>
              <h3>Master of Science - Epitech</h3>
              <p className="formation-type">Spécialité Intelligence Artificielle</p>
              <p className="formation-date">En cours</p>
              <p className="formation-desc">
                Formation avancée en Intelligence Artificielle et développement d'applications, 
                avec une approche pratique sur des projets innovants et l'apprentissage 
                des technologies IA de pointe.
              </p>
            </div>
            <div className="formation-card">
              <div className="formation-icon">💼</div>
              <h3>Concepteur Développeur d'Applications</h3>
              <p className="formation-type">Diplôme niveau 6/7 (Bac +3/4)</p>
              <p className="formation-date">Octobre 2025 - Nice</p>
              <p className="formation-desc">
                Formation avancée en conception et développement d'applications, 
                avec une approche pratique sur des projets réels et l'apprentissage 
                des méthodologies agiles.
              </p>
            </div>
            <div className="formation-card">
              <div className="formation-icon">💻</div>
              <h3>Développeur Web et Web Mobile</h3>
              <p className="formation-type">Diplôme niveau 5 (Bac +2)</p>
              <p className="formation-date">Septembre 2024 - Nice</p>
              <p className="formation-desc">
                Formation complète en développement web front-end et back-end, 
                bases de données, et gestion de projets web.
              </p>
            </div>
            <div className="formation-card">
              <div className="formation-icon">📚</div>
              <h3>Autoformation Développement Web</h3>
              <p className="formation-type">OpenClassroom, SoloLearn</p>
              <p className="formation-date">Juillet 2023</p>
              <p className="formation-desc">
                Formation autodidacte sur les technologies web modernes, 
                les frameworks et les bonnes pratiques de développement.
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
                  <a href="mailto:salamovajeina@gmail.com">salamovajeina@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Localisation</h3>
                  <p>Carros, France</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <h3>LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/jeina-s-concepteur-dev-web-developpeur-web-developpeur-fullstack-developpeur-backend/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Mon profil LinkedIn
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <div>
                  <h3>GitHub</h3>
                  <a href="https://github.com/StrongCatBox" target="_blank" rel="noopener noreferrer">Mon Github</a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Votre nom" 
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Votre email" 
                  required 
                />
                <textarea 
                  name="message" 
                  placeholder="Votre message" 
                  rows="5" 
                  required
                />
                <button type="submit" className="btn-submit">Envoyer</button>
                {formStatus && <p className="form-message">{formStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;