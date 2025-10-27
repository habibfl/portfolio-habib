// ========================================
// EFFET TYPING ANIMÉ (Machine à écrire)
// ========================================

function typingEffect() {
    const text = "Salut, moi c'est Habib !";
    const h1Element = document.querySelector('.home-info h1');
    h1Element.textContent = '';
    let index = 0;
    
    function typeNextLetter() {
        if (index < text.length) {
            h1Element.textContent += text[index];
            index++;
            setTimeout(typeNextLetter, 100);
        }
    }
    
    setTimeout(typeNextLetter, 2000);
}

window.addEventListener('load', typingEffect);

// ========================================
// BOUTON "RETOUR EN HAUT"
// ========================================

// Création du bouton
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.setAttribute('aria-label', 'Retour en haut');
document.body.appendChild(scrollTopBtn);

// Afficher/cacher le bouton selon le scroll
function toggleScrollButton() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

// Remonter en haut de la page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', toggleScrollButton);
scrollTopBtn.addEventListener('click', scrollToTop);

// ========================================
// ANIMATIONS AU SCROLL (Sections)
// ========================================

const sections = document.querySelectorAll('.about, .portfolio, .services, .contact');

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, observerOptions);

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// ========================================
// NAVIGATION SMOOTH (Scroll fluide)
// ========================================

const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Mise à jour de la navigation active
            navLinks.forEach(link => link.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        }
    });
});

// ========================================
// EFFET HOVER AMÉLIORÉ SUR LES CARTES
// ========================================

const cards = document.querySelectorAll('.project-card, .service-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.6s ease';
    });
    
    card.addEventListener('animationend', function() {
        this.style.animation = '';
    });
});

// ========================================
// COMPTEUR DE VISITES
// ========================================

function displayVisitCounter() {
    let visits = localStorage.getItem('portfolioVisits');
    
    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    
    localStorage.setItem('portfolioVisits', visits);
    console.log(`🎉 Nombre de visites : ${visits}`);
}

displayVisitCounter();