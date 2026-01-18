// Modal Functionality
const floatingIcons = document.querySelectorAll('.floating-icon');
const modals = document.querySelectorAll('.modal');
const modalBackdrops = document.querySelectorAll('.modal-backdrop');
const modalCloseButtons = document.querySelectorAll('.modal-close');

// Open modal when clicking floating icons
floatingIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const modalId = `modal-${icon.dataset.modal}`;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        }
    });
});

// Close modal functions
function closeAllModals() {
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.classList.remove('modal-open');
}

// Close on backdrop click
modalBackdrops.forEach(backdrop => {
    backdrop.addEventListener('click', closeAllModals);
});

// Close on close button click
modalCloseButtons.forEach(button => {
    button.addEventListener('click', closeAllModals);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    // Hide/show navbar on scroll direction
    if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.querySelectorAll('.timeline-item, .stat, .education-card, .cert-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Console greeting
console.log('%c Welcome to Jonathan Martin\'s Portfolio! ',
    'background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%); color: white; font-size: 14px; padding: 10px; border-radius: 5px;');
