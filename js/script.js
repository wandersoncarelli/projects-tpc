// ==================== SCROLL REVEAL ANIMATION ====================
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content h3, .heading, .social-media, .project-title', { origin: 'top' });
ScrollReveal().reveal('.home-content p, .skills-container, .footer', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .title-page, .projects-container, .showcase-container, .project-section', { origin: 'left' });
ScrollReveal().reveal('.sidebar, .home-img, .status', { origin: 'right' });
