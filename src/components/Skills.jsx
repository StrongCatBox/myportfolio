function Skills({ translations }) {
  const skills = [
    { name: 'HTML5', img: 'html.png', key: 'html' },
    { name: 'CSS3', img: 'css.png', key: 'css' },
    { name: 'JavaScript', img: 'javascript.png', key: 'javascript' },
    { name: 'PHP', img: 'PHP-logo.svg.png', key: 'php' },
    { name: 'SQL', img: 'sql.png', key: 'sql' },
    { name: 'WordPress', img: 'wordpress.png', key: 'wordpress' },
    { name: 'Node.js', img: 'nodejs.png', key: 'nodejs' },
    { name: 'Vue.js', img: 'vuejs.png', key: 'vuejs' },
    { name: 'Symfony', img: 'symfony.png', key: 'symfony' },
    { name: 'Android Studio', img: 'androidstudio.png', key: 'androidStudio' },
    { name: 'Bootstrap', img: 'bootstrap.png', key: 'bootstrap' },
    { name: 'Figma', img: 'figma.png', key: 'figma' },
    { name: 'Python', img: 'python.png', key: 'python' },
    { name: 'Django', img: 'django.png', key: 'django' },
  ];

  return (
    <section id="skills" className="py-5">
      <h2 className="text-center">{translations.title}</h2>
      <div className="container pt-5">
        <div className="row text-center">
          {skills.map((skill) => (
            <div key={skill.key} className="col-md-2 col-4 mb-4">
              <img src={`/assets/${skill.img}`} alt={skill.name} className="img-fluid skill-logo" />
              <p>{translations[skill.key] || skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
