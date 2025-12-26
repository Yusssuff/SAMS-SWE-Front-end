// Import CSS files
import './css/common.css';

// Import page modules
import { renderHome, initHome } from './js/pages/home.js';
import { renderAbout, initAbout } from './js/pages/about.js';
import { renderCourses, initCourses } from './js/pages/courses.js';
import { renderStudyPlan, initStudyPlan } from './js/pages/study-plan.js';
import { renderAnnouncements, initAnnouncements } from './js/pages/announcements.js';

// Page configuration
const pages = {
    home: { render: renderHome, init: initHome },
    about: { render: renderAbout, init: initAbout },
    courses: { render: renderCourses, init: initCourses },
    'study-plan': { render: renderStudyPlan, init: initStudyPlan },
    announcements: { render: renderAnnouncements, init: initAnnouncements },
    people: { render: renderHome, init: initHome } // People section is on home page
};

// Get the app container
const app = document.getElementById('app');

// Function to load a page
function loadPage(pageName) {
    const page = pages[pageName] || pages.home;
    
    // Update active nav links
    updateActiveNavLinks(pageName);
    
    // Render the page content
    app.innerHTML = page.render();
    
    // Initialize page-specific functionality
    if (page.init) {
        page.init();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.style.display = 'none';
    }
}

// Function to update active navigation links
function updateActiveNavLinks(pageName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === pageName || (pageName === 'home' && !linkPage)) {
            link.style.color = 'var(--brand-700)';
            link.style.fontWeight = '700';
        } else {
            link.style.color = '';
            link.style.fontWeight = '';
        }
    });
}

// Function to handle navigation
function handleNavigation(e) {
    const target = e.target.closest('[data-page]');
    if (target) {
        e.preventDefault();
        const pageName = target.getAttribute('data-page');
        const hash = target.getAttribute('href');
        
        // Update URL hash
        if (hash) {
            window.location.hash = hash;
        }
        
        loadPage(pageName);
    }
}

// Function to handle hash changes
function handleHashChange() {
    const hash = window.location.hash.slice(1); // Remove the '#'
    
    // Handle special cases
    if (hash === 'people') {
        loadPage('home');
        // Scroll to people section after a short delay
        setTimeout(() => {
            const peopleSection = document.getElementById('people');
            if (peopleSection) {
                peopleSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else if (hash && pages[hash]) {
        loadPage(hash);
    } else if (hash === '' || hash === 'home') {
        loadPage('home');
    }
}

// Initialize the app
function initApp() {
    // Add event listeners to all navigation links
    document.addEventListener('click', handleNavigation);
    
    // Handle hash changes (browser back/forward)
    window.addEventListener('hashchange', handleHashChange);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            if (mobileMenu.style.display === 'block') {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'block';
            }
        });
    }
    
    // Load initial page based on hash or default to home
    handleHashChange();
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
