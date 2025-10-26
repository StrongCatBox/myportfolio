function About({ translations }) {
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <section id="about" className="py-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="/assets/brunettepink.png"
              alt="Your Photo"
              className="rounded-circle img-fluid about-img"
              style={{ backgroundColor: 'var(--accent-color)' }}
            />
          </div>
          <div className="col-md-8">
            <h2 style={{ textAlign: 'center' }}>{translations.title}</h2>
            <p>{translations.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
