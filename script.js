
document.addEventListener('DOMContentLoaded', function() {

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');

        const icon = this.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + 
            (document.documentElement.lang === 'es' ? 'Enviando...' : 'Sending...');

        setTimeout(() => {
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });
    
    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.cv': 'Resume',
            'nav.contact': 'Contact',
            'hero.title': 'Roberto Irvin Sánchez Ruiz',
            'hero.subtitle': 'Full Stack Developer',
            'hero.description': 'Design and development of innovative technological solutions focused on performance and user experience.',
            'hero.cta': 'Contact Me',
            'about.title': 'About',
            'about.title_highlight': 'Me',
            'about.text1': 'I am a Computer Engineer with Full Stack development experience, specialized in creating efficient and scalable web applications.',
            'about.text2': 'My goal is to establish myself in a company that offers job stability, where I can apply my knowledge and continue my professional development.',
            'about.education': 'Universidad de Ixtlahuaca CUI',
            'about.location': 'Toluca, Mexico',
            'skills.title': 'My',
            'skills.title_highlight':'Skills',
            'skills.subtitle': 'Technologies and tools I use',
            'skills.frontend': 'Frontend',
            'skills.backend': 'Backend',
            'skills.database': 'Databases',
            'skills.tools': 'Tools',
            'projects.title': 'My',
            'projects.title_highlight':'Projects',
            'projects.subtitle': 'Some of my recent works',
            'projects.eatbooker': 'Restaurant reservation platform with traffic prediction.',
            'projects.epicore': 'Design and implementation of the corporate website.',
            'projects.epicard': 'Digital business cards with administrative panel.',
            'projects.lgc': 'Complete HR system with evaluations and incident control.',
            'contact.title': 'Cont',
            'contact.title_highlight': 'act',
            'contact.subtitle': 'Have a project in mind? Let\'s talk',
            'contact.email': 'Email',
            'contact.phone': 'Phone',
            'contact.location': 'Location',
            'contact.address': 'Toluca, Mexico',
            'contact.form.name': 'Name',
            'contact.form.email': 'Email',
            'contact.form.message': 'Message',
            'contact.form.submit': 'Send Message',
            'footer.text': 'Developing innovative solutions for the digital future.',
            'footer.rights': 'All rights reserved.',
            'cv.title': 'My',
            'cv.title_highlight':'Resume',
            'cv.subtitle': 'Download my full CV or explore my credentials',
            'cv.download.title': 'Download CV',
            'cv.download.text': 'Complete version in PDF',
            'cv.download.button': 'Download',
            'cv.experience.title': 'Professional Experience',
            'cv.education.title': 'Education',
            'cv.certifications.title': 'Certifications and courses',
            'cv.experience.title': 'Professional Experience',
            'cv.experience.epicore.position': 'Full Stack Developer - Internship',
            'cv.experience.epicore.company': 'Epicore Buinmo Business Solutions',
            'cv.experience.epicore.detail1': 'Full stack web application development',
            'cv.experience.epicore.detail2': 'Implementation of frontend and backend solutions',
            'cv.experience.epicore.detail3': 'Performance and user experience optimization',
            'cv.experience.lgc.position': 'IT Intern',
            'cv.experience.lgc.company': 'LGC MODA La Gran Ciudad',
            'cv.experience.lgc.detail1': 'Development of a web-based HR system',
            'cv.experience.lgc.detail2': 'Project leadership',
            'cv.experience.lgc.detail3': 'Coordination with multidisciplinary team',
            'cv.education.degree': 'Bachelor\'s Degree in Computer Engineering',
            'cv.education.university': 'Universidad de Ixtlahuaca CUI',
            'cv.education.highschool': 'High School',
            'cv.education.school': 'Official High School No. 162',
            'cv.education.completed': 'Completed',
            'cv.certifications.aws': 'Amazon Web Services (AWS)',
            'cv.certifications.cisco': 'CISCO CCNA 1 and 2',
            'cv.certifications.office': 'Microsoft Office Specialist',
            'cv.certifications.cloud': 'Cloud Computing',
            'cv.certifications.network': 'Networking',
            'cv.certifications.productivity': 'Productivity',
            'cv.certifications.date.sept2023': 'September 2023',
            'cv.certifications.date.2022': '2022',
            'cv.certifications.date.2021': '2021'
        },
        es: {
            'nav.home': 'Inicio',
            'nav.about': 'Sobre mí',
            'nav.skills': 'Habilidades',
            'nav.projects': 'Proyectos',
            'nav.cv': 'Currículum',
            'nav.contact': 'Contacto',
            'hero.title': 'Roberto Irvin Sánchez Ruiz',
            'hero.subtitle': 'Desarrollador Full Stack',
            'hero.description': 'Diseño y desarrollo de soluciones tecnológicas innovadoras con enfoque en rendimiento y experiencia de usuario.',
            'hero.cta': 'Contáctame',
            'about.title': 'Sobre',
            'about.title_highlight': 'Mí',
            'about.text1': 'Soy un Ingeniero en Computación con experiencia en desarrollo Full Stack, especializado en crear aplicaciones web eficientes y escalables.',
            'about.text2': 'Mi objetivo es establecerme en una empresa que ofrezca estabilidad laboral, donde pueda aplicar mis conocimientos y continuar desarrollándome profesionalmente.',
            'about.education': 'Universidad de Ixtlahuaca CUI',
            'about.location': 'Toluca, México',
            'skills.title': 'Mis',
            'skills.title_highlight':'Habilidades',
            'skills.subtitle': 'Tecnologías y herramientas que utilizo',
            'skills.frontend': 'Frontend',
            'skills.backend': 'Backend',
            'skills.database': 'Bases de Datos',
            'skills.tools': 'Herramientas',
            'projects.title': 'Mis',
            'projects.title_highlight':'Proyectos',
            'projects.subtitle': 'Algunos de mis trabajos recientes',
            'projects.eatbooker': 'Plataforma de reservación de restaurantes con predicción de tráfico.',
            'projects.epicore': 'Diseño e implementación del sitio corporativo.',
            'projects.epicard': 'Tarjetas digitales de presentación con panel administrativo.',
            'projects.lgc': 'Sistema RH Completo con evaluaciones y control de incidencias.',
            'contact.title': 'Contáct',
            'contact.title_highlight': 'ame',
            'contact.subtitle': '¿Tienes un proyecto en mente? Hablemos',
            'contact.email': 'Correo',
            'contact.phone': 'Teléfono',
            'contact.location': 'Ubicación',
            'contact.address': 'Toluca, México',
            'contact.form.name': 'Nombre',
            'contact.form.email': 'Correo',
            'contact.form.message': 'Mensaje',
            'contact.form.submit': 'Enviar Mensaje',
            'footer.text': 'Desarrollando soluciones innovadoras para el futuro digital.',
            'footer.rights': 'Todos los derechos reservados.',
            'cv.title': 'Mi',
            'cv.title_highlight':'Currículum',
            'cv.subtitle': 'Descarga mi CV completo o explora mis credenciales',
            'cv.download.title': 'Descargar CV',
            'cv.download.text': 'Versión completa en PDF',
            'cv.download.button': 'Descargar',
            'cv.experience.title': 'Experiencia Profesional',
            'cv.education.title': 'Educación',
            'cv.certifications.title': 'Certificaciones y Cursos',
            'cv.experience.epicore.position': 'Full Stack Developer - Prácticas Profesionales',
            'cv.experience.epicore.company': 'Epicore Buinmo Soluciones Empresariales',
            'cv.experience.epicore.detail1': 'Desarrollo de aplicaciones web full stack',
            'cv.experience.epicore.detail2': 'Implementación de soluciones frontend y backend',
            'cv.experience.epicore.detail3': 'Optimización de rendimiento y experiencia de usuario',
            'cv.experience.lgc.position': 'Becario TI',
            'cv.experience.lgc.company': 'LGC MODA La Gran Ciudad',
            'cv.experience.lgc.detail1': 'Desarrollo de sistema de RH web',
            'cv.experience.lgc.detail2': 'Liderazgo de proyecto',
            'cv.experience.lgc.detail3': 'Coordinación con equipo multidisciplinario',
            'cv.education.degree': 'Licenciatura en Ingeniería en Computación',
            'cv.education.university': 'Universidad de Ixtlahuaca CUI',
            'cv.education.highschool': 'Preparatoria',
            'cv.education.school': 'Escuela Preparatoria Oficial No. 162',
            'cv.education.completed': 'Completado',
            'cv.certifications.aws': 'Amazon Web Services (AWS)',
            'cv.certifications.cisco': 'CISCO CCNA 1 y 2',
            'cv.certifications.office': 'Microsoft Office Specialist',
            'cv.certifications.cloud': 'Cloud Computing',
            'cv.certifications.network': 'Redes',
            'cv.certifications.productivity': 'Productividad',
            'cv.certifications.date.sept2023': 'Septiembre 2023',
            'cv.certifications.date.2022': '2022',
            'cv.certifications.date.2021': '2021'
        }
    };
    
    function switchLanguage(lang) {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-i18n], [data-i18n-placeholder]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n') || element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                if (element.hasAttribute('data-i18n-placeholder')) {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }
    
    document.getElementById('switchToEn').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('switchToEs').addEventListener('click', () => switchLanguage('es'));
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const typewriterText = document.querySelector('.typewriter-text');
    const texts = typewriterText.getAttribute('data-i18n') === 'hero.subtitle' ? 
        ['Full Stack Developer', 'Computer Engineer', 'Web Developer'] : 
        ['Desarrollador Full Stack', 'Ingeniero en Computación', 'Desarrollador Web'];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeWriter() {
        const currentText = texts[index];
        
        if (isDeleting) {
            typewriterText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    setTimeout(typeWriter, 1000);
});
