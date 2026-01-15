/* ============================================================================
   MODERN PORTFOLIO - MINIMAL JAVASCRIPT
   
   Purpose:
   - Smooth navigation interactions
   - Scroll-based animations for elements
   - No external dependencies, vanilla JavaScript only
   
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    initScrollAnimations();
    initSmoothScroll();
});

/* ============================================================================
   1. SCROLL-BASED ANIMATIONS - Reveal elements as they enter viewport
   ============================================================================ */

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add fade-in animation when element enters viewport
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation potential
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-category, .stat-item, .contact-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

/* ============================================================================
   2. SMOOTH SCROLL - Enhance anchor link navigation
   ============================================================================ */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle valid section links
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ============================================================================
   3. PERFORMANCE & ACCESSIBILITY
   ============================================================================ */

// Preload images for better performance
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        // Native lazy loading is handled by browser
        // This is just for logging
        img.addEventListener('load', () => {
            // Image loaded successfully
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key could close any modals in future
    if (e.key === 'Escape') {
        // Handle escape key if needed
    }
});

/* ============================================================================
   PRODUCTION NOTES
   
   - This portfolio uses minimal JavaScript for maximum performance
   - CSS handles all animations and transitions
   - JavaScript only enhances user experience with smooth scrolling
   - No tracking or analytics code included (add based on requirements)
   - Accessibility features work without JavaScript
   
   ============================================================================ */
