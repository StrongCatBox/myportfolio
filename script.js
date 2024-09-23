document.addEventListener('DOMContentLoaded', function () {
    const languageSwitch = document.getElementById('languageSwitch');
    let currentLang = 'fr'; // Langue par défaut

    // Charger les traductions du fichier JSON
    fetch('assets/translations.json')
        .then(response => response.json())
        .then(translations => {
            // Fonction pour changer de langue
            function changeLanguage(lang) {
                currentLang = lang;
                document.querySelector('[href="#about"]').textContent = translations[lang].navbar.about;
                document.querySelector('[href="#skills"]').textContent = translations[lang].navbar.skills;
                document.querySelector('[href="#portfolio"]').textContent = translations[lang].navbar.projects;
                document.querySelector('[href="#contact"]').textContent = translations[lang].navbar.contact;
                document.getElementById('downloadCV').textContent = translations[lang].navbar.downloadCV;
                
                document.querySelector('h1.myname').textContent = translations[lang].header.greeting;
                document.querySelector('a[href="#contact"] button').textContent = translations[lang].header.contactBtn;
                
                document.querySelector('#about h2').textContent = translations[lang].about.title;
                document.querySelector('#about p').textContent = translations[lang].about.description;

                document.querySelector('#skills h2').textContent = translations[lang].skills.title;
                // Ajouter plus de traductions ici pour les compétences et autres éléments...

                document.querySelector('#portfolio h2').textContent = translations[lang].portfolio.title;
                // Traduction des projets (Exemple pour le premier projet)
                document.querySelector('.swiper-slide:nth-child(1) h4').textContent = translations[lang].portfolio.fitAndFood.title;
                document.querySelector('.swiper-slide:nth-child(1) p').textContent = translations[lang].portfolio.fitAndFood.description;
                // Faire de même pour les autres projets...

                document.querySelector('#contact h2').textContent = translations[lang].contact.title;
                document.querySelector('label[for="name"]').textContent = translations[lang].contact.name;
                document.querySelector('label[for="email"]').textContent = translations[lang].contact.email;
                document.querySelector('label[for="subject"]').textContent = translations[lang].contact.subject;
                document.querySelector('label[for="message"]').textContent = translations[lang].contact.message;
                document.querySelector('button[type="submit"]').textContent = translations[lang].contact.sendBtn;
            }

            // Détecter le changement de langue via le toggle
            languageSwitch.addEventListener('change', function () {
                if (languageSwitch.checked) {
                    changeLanguage('en'); // Si le toggle est activé, passer en anglais
                } else {
                    changeLanguage('fr'); // Sinon, rester en français
                }
            });

            // Initialiser avec la langue par défaut
            changeLanguage(currentLang);
        });
});
