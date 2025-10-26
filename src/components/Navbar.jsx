function Navbar({ translations, language, onToggleLanguage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/assets/logoJesa.png" alt="Logo" className="img-fluid" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list" style={{ fontSize: '1.5rem', color: 'var(--secondary-color)' }}></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">{translations.about}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">{translations.skills}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">{translations.projects}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">{translations.contact}</a>
            </li>
            <li className="nav-item">
              {/* Toggle switch for languages */}
              <div className="language-toggle">
                <input
                  type="checkbox"
                  id="languageSwitch"
                  className="language-switch"
                  checked={language === 'en'}
                  onChange={onToggleLanguage}
                />
                <label htmlFor="languageSwitch" className="toggle-label mt-3">
                  <span className="icon-fr">
                    <img src="/assets/france.png" alt="FR" className="icon-fr img-fluid w-25 h-25" />
                  </span>
                  <span className="icon-en">
                    <img src="/assets/royaume-uni.png" alt="EN" className="icon-en img-fluid w-25 h-25" />
                  </span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
