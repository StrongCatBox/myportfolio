import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [language, setLanguage] = useState('fr');
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    // Load translations
    fetch('/assets/translations.json')
      .then(response => response.json())
      .then(data => setTranslations(data))
      .catch(error => console.error('Error loading translations:', error));
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  if (!translations) {
    return <div>Loading...</div>;
  }

  const t = translations[language];

  return (
    <div className="App">
      <Navbar
        translations={t.navbar}
        language={language}
        onToggleLanguage={toggleLanguage}
      />
      <Header translations={t.header} />
      <About translations={t.about} />
      <Skills translations={t.skills} />
      <Portfolio translations={t.portfolio} />
      <Contact translations={t.contact} />
    </div>
  );
}

export default App;
