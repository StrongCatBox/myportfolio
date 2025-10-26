function Header({ translations }) {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/Jeina_Salamova_CV.pdf';
    link.download = 'Jeina_Salamova_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="container-fluid py-5 mt-5 headercontainer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <h1 className="display-1 myname text-center">
              Jeina <br /> Salamova
            </h1>

            <div className="col-md-12 text-center mt-4 d-flex justify-content-center gap-3">
              <button type="button" className="custom-btn" onClick={downloadCV}>
                {translations.downloadCV || 'Download CV'}
              </button>
              <a href="#contact">
                <button type="button" className="custom-btn">
                  {translations.contactBtn}
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src="/assets/whitekitty.png" alt="Jeina Salamova" className="img-fluid whitekitty" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
