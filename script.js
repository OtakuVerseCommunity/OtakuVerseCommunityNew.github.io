function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
    }, 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.opacity = '0';
    modal.querySelector('.modal-content').style.transform = 'scale(0.9)';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        const modalId = event.target.id;
        closeModal(modalId);
    }
}

// Enhanced Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'navbar-scrolled');
        navbar.style.transform = 'translateY(0)';
        navLinks.forEach(link => {
            link.classList.add('nav-scrolled');
            link.style.transform = 'scale(0.95)';
            link.style.opacity = '0.9';
        });
    } else {
        navbar.classList.remove('shadow-lg', 'navbar-scrolled');
        navLinks.forEach(link => {
            link.classList.remove('nav-scrolled');
            link.style.transform = 'scale(1)';
            link.style.opacity = '1';
        });
    }
});

// Navbar Links Hover Effect
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.color = '#4FC3F7';
        this.style.transition = 'all 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.color = '';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Section Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-section');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active-section');
        }
    });
});

// Advanced Scroll-Triggered Reveal Animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.feature-card, .event-card, section');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('reveal-active');
        } else {
            reveal.classList.remove('reveal-active');
        }
    });
}

// Parallax Effect for Header
function parallaxHeader() {
    const header = document.querySelector('header');
    let scrollPosition = window.pageYOffset;
    
    header.style.transform = `translateY(${scrollPosition * 0.3}px)`;
}

// Performance-Optimized Scroll Event Listener
window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        revealOnScroll();
        parallaxHeader();
    });
});

// Enhanced Card Hover Interactions
document.querySelectorAll('.feature-card, .event-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Page Load Animation
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('header');
    const featureCards = document.querySelectorAll('.feature-card');
    const eventCards = document.querySelectorAll('.event-card');

    heroSection.style.opacity = '0';
    featureCards.forEach(card => card.style.opacity = '0');
    eventCards.forEach(card => card.style.opacity = '0');

    // Add CSS for reveal animations
    const style = document.createElement('style');
    style.innerHTML = `
        .feature-card, .event-card, section {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .reveal-active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        heroSection.style.transition = 'opacity 1s ease';
        heroSection.style.opacity = '1';
    }, 300);

    setTimeout(() => {
        featureCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 800);

    setTimeout(() => {
        eventCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 1400);
});


// Add mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Create mobile menu toggle
    const navContainer = document.querySelector('nav .container');
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.classList.add('mobile-menu-toggle');
    mobileMenuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    document.body.appendChild(mobileMenuToggle);

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        navContainer.classList.toggle('mobile-active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside or on a nav link
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navContainer.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navContainer.classList.contains('mobile-active')) {
            navContainer.classList.remove('mobile-active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Add header text animation
    const heroTitle = document.getElementById('hero-title');
    heroTitle.classList.add('header-text-animation');
    heroTitle.setAttribute('data-text', heroTitle.textContent);
});


// Existing script content...

// Modify parallax header function to prevent entire header from moving
function parallaxHeader() {
    const header = document.querySelector('header');
    const headerContent = header.querySelector('.container');
    let scrollPosition = window.pageYOffset;
    
    // Only move the background slightly, keep content stable
    header.style.backgroundPosition = `center ${scrollPosition * 0.1}px`;
    
    // Subtle fade effect for header content
    headerContent.style.opacity = Math.max(1 - (scrollPosition / 300), 0);
}

// Add Section Title Animation Function
function animateSectionTitles() {
    const sectionTitles = document.querySelectorAll('#fitur h3, #event h3');
    
    sectionTitles.forEach(title => {
        // Create a clone of the title with animation
        const animatedTitle = document.createElement('div');
        animatedTitle.classList.add('animated-section-title');
        animatedTitle.setAttribute('data-text', title.textContent);
        animatedTitle.textContent = title.textContent;
        
        // Replace original title
        title.parentNode.replaceChild(animatedTitle, title);
    });
}

// Trigger section title animations when section comes into view
function checkSectionTitleAnimation() {
    const sectionTitles = document.querySelectorAll('.animated-section-title');
    
    sectionTitles.forEach(title => {
        const rect = title.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
        
        if (isVisible && !title.classList.contains('animated')) {
            title.classList.add('animated');
        }
    });
}

// Enhance card hover and light effects
function enhanceCardEffects() {
    const cards = document.querySelectorAll('.feature-card, .event-card');
    
    cards.forEach(card => {
        // Create light sweep overlay
        const lightSweep = document.createElement('div');
        lightSweep.classList.add('card-light-sweep');
        card.appendChild(lightSweep);
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
            lightSweep.style.animation = 'card-light-sweep 2s infinite linear';
        });
        
        card.addEventListener('mouseleave', () => {
            lightSweep.style.animation = 'none';
        });
    });
}

// Add these to existing scroll event
window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        revealOnScroll();
        parallaxHeader();
        checkSectionTitleAnimation();
    });
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    animateSectionTitles();
    enhanceCardEffects();
});

// Existing script content... Add these functions

// Enhance Gallery Card Interactions
function enhanceGalleryCardEffects() {
    const galleryCards = document.querySelectorAll('.gallery-card');
    
    galleryCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', () => {
            const image = card.querySelector('img');
            const title = card.querySelector('h4');
            
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
            
            if (title) {
                title.style.color = '#4FC3F7';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const image = card.querySelector('img');
            const title = card.querySelector('h4');
            
            if (image) {
                image.style.transform = 'scale(1)';
            }
            
            if (title) {
                title.style.color = '';
            }
        });
    });
}

// Add to existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // Existing initializations...
    enhanceGalleryCardEffects();
});

// Update scroll event to include gallery section in reveal
function revealOnScroll() {
    const reveals = document.querySelectorAll('.feature-card, .event-card, .gallery-card, section');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('reveal-active');
        } else {
            reveal.classList.remove('reveal-active');
        }
    });
}

// Existing script content... Modify these functions

// Enhance Gallery Card Interactions
function enhanceGalleryCardEffects() {
    const galleryCards = document.querySelectorAll('.gallery-card');
    
    galleryCards.forEach(card => {
        // Add light overlay to each gallery image
        const image = card.querySelector('.gallery-image');
        const imageContainer = card.querySelector('.gallery-image-container');
        
        // Create light overlay
        const lightOverlay = document.createElement('div');
        lightOverlay.classList.add('gallery-image-overlay');
        
        const lightSweep = document.createElement('div');
        lightSweep.classList.add('gallery-image-light');
        
        lightOverlay.appendChild(lightSweep);
        imageContainer.appendChild(lightOverlay);
        
        // Add hover effects
        card.addEventListener('mouseenter', () => {
            const image = card.querySelector('img');
            const title = card.querySelector('h4');
            
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
            
            if (title) {
                title.style.color = '#4FC3F7';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const image = card.querySelector('img');
            const title = card.querySelector('h4');
            
            if (image) {
                image.style.transform = 'scale(1)';
            }
            
            if (title) {
                title.style.color = '';
            }
        });
    });
}

// Modify reveal on scroll to include gallery animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.feature-card, .event-card, .gallery-card, section');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('reveal-active');
        } else {
            reveal.classList.remove('reveal-active');
        }
    });
}

// Add to existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // Existing initializations...
    enhanceGalleryCardEffects();
});


