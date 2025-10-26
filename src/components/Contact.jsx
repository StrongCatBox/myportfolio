function Contact({ translations }) {
  return (
    <section id="contact" className="py-5">
      <h2 className="text-center">{translations.title}</h2>
      <div className="container pt-5">
        <form action="https://formspree.io/f/xanwglyd" method="POST">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  {translations.name}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder={translations.name}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  {translations.email}
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder={translations.email}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  {translations.subject}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder={translations.subject}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  {translations.message}
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows="4"
                  placeholder={translations.message}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="custom-btn">
              {translations.sendBtn}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
