// Main JavaScript for Post-Apocalyptic Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading sequence
    initializeLoading();
    
    // Initialize spore background
    initializeSpores();
    
    // Initialize page transitions
    initializePageTransitions();
});

// Loading Screen Functionality
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar');
    const diaryContainer = document.getElementById('diary-container');
    
    // Start loading bar animation
    setTimeout(() => {
        loadingBar.style.width = '100%';
    }, 500);
    
    // Hide loading screen and show diary
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            diaryContainer.style.display = 'flex';
            diaryContainer.style.animation = 'diaryOpen 3s ease-out forwards';
            
            // Add fade-in animation to content
            addFadeInAnimations();
        }, 1000);
    }, 3000);
}

// Add fade-in animations to diary content
function addFadeInAnimations() {
    const leftPage = document.querySelector('.left-page');
    const rightPage = document.querySelector('.right-page');
    
    if (leftPage) {
        leftPage.style.animation = 'fadeIn 2s ease-in 1s forwards';
        leftPage.style.opacity = '0';
        setTimeout(() => {
            leftPage.style.opacity = '1';
        }, 1000);
    }
    
    if (rightPage) {
        rightPage.style.animation = 'fadeIn 2s ease-in 2s forwards';
        rightPage.style.opacity = '0';
        setTimeout(() => {
            rightPage.style.opacity = '1';
        }, 2000);
    }
}

// Page Transition Effects
function initializePageTransitions() {
    const chapterLinks = document.querySelectorAll('.chapter-link');
    
    chapterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Add page turn animation
            const diaryContainer = document.getElementById('diary-container');
            diaryContainer.style.animation = 'pageTurn 0.8s ease-in-out forwards';
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = href;
            }, 800);
        });
    });
}

// Spore Animation System
function initializeSpores() {
    createSpores();
    
    // Continue creating spores periodically
    setInterval(createSpores, 500);
}

function createSpores() {
    const container = document.getElementById('spore-container');
    if (!container) return;
    
    // Create 1-3 spores at a time
    const sporeCount = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < sporeCount; i++) {
        setTimeout(() => {
            createSingleSpore(container);
        }, i * 200);
    }
}

function createSingleSpore(container) {
    const spore = document.createElement('div');
    spore.className = 'spore';
    
    // Random properties
    const startY = Math.random() * window.innerHeight;
    const startX = -20;
    const duration = 8000 + Math.random() * 8000; // 8-16 seconds
    const size = 2 + Math.random() * 4; // 2-6px
    const opacity = 0.2 + Math.random() * 0.5;
    const blur = Math.random() * 2;
    
    // Set properties
    spore.style.left = startX + 'px';
    spore.style.top = startY + 'px';
    spore.style.width = size + 'px';
    spore.style.height = size + 'px';
    spore.style.opacity = opacity;
    spore.style.filter = `blur(${blur}px)`;
    
    // Animation
    spore.style.animation = `sporeDrift ${duration}ms linear infinite, sporeFloat 4s ease-in-out infinite`;
    
    container.appendChild(spore);
    
    // Remove after animation
    setTimeout(() => {
        if (spore.parentNode) {
            spore.parentNode.removeChild(spore);
        }
    }, duration);
}

// Utility function for smooth scrolling
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add typewriter effect to text elements
function typewriterEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typeChar() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        }
    }
    
    typeChar();
}

// Enhanced hover effects for chapter links
document.addEventListener('DOMContentLoaded', function() {
    const chapterLinks = document.querySelectorAll('.chapter-link');
    
    chapterLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Add sound effect or additional visual feedback if needed
            this.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
});

// Page-specific animations for individual pages
function initializePageAnimations() {
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        pageContent.style.opacity = '0';
        pageContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            pageContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            pageContent.style.opacity = '1';
            pageContent.style.transform = 'translateY(0)';
        }, 500);
    }
}

// Initialize animations for content sections
function animateContentSections() {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            section.style.opacity = '1';
            section.style.transform = 'translateX(0)';
        }, 200 * (index + 1));
    });
}

// Enhanced spore system with improved performance
class SporeSystem {
    constructor(container) {
        this.container = container;
        this.spores = [];
        this.maxSpores = 20;
        this.sporeId = 0;
    }
    
    createSpore() {
        if (this.spores.length >= this.maxSpores) {
            return;
        }
        
        const spore = {
            id: this.sporeId++,
            element: document.createElement('div'),
            startTime: Date.now(),
            duration: 8000 + Math.random() * 8000
        };
        
        spore.element.className = 'spore';
        spore.element.style.left = '-20px';
        spore.element.style.top = Math.random() * window.innerHeight + 'px';
        spore.element.style.width = (2 + Math.random() * 4) + 'px';
        spore.element.style.height = spore.element.style.width;
        spore.element.style.opacity = 0.2 + Math.random() * 0.5;
        spore.element.style.filter = `blur(${Math.random() * 2}px)`;
        spore.element.style.animation = `sporeDrift ${spore.duration}ms linear infinite, sporeFloat 4s ease-in-out infinite`;
        
        this.container.appendChild(spore.element);
        this.spores.push(spore);
        
        // Schedule removal
        setTimeout(() => {
            this.removeSpore(spore.id);
        }, spore.duration);
    }
    
    removeSpore(id) {
        const index = this.spores.findIndex(spore => spore.id === id);
        if (index !== -1) {
            const spore = this.spores[index];
            if (spore.element.parentNode) {
                spore.element.parentNode.removeChild(spore.element);
            }
            this.spores.splice(index, 1);
        }
    }
    
    start() {
        // Create initial spores
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.createSpore();
            }, i * 200);
        }
        
        // Continue creating spores
        this.interval = setInterval(() => {
            this.createSpore();
        }, 500);
    }
    
    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}

// Initialize enhanced spore system
let sporeSystem;
document.addEventListener('DOMContentLoaded', function() {
    const sporeContainer = document.getElementById('spore-container');
    if (sporeContainer) {
        sporeSystem = new SporeSystem(sporeContainer);
        sporeSystem.start();
    }
});

// Add CSS animations dynamically for better performance
const keyframes = `
@keyframes pageTurn {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(-90deg); }
    100% { transform: rotateY(-180deg); }
}

@keyframes loadingBar {
    0% { width: 0%; }
    100% { width: 100%; }
}

.page-turn-enter {
    animation: pageTurn 0.8s ease-in-out forwards;
}
`;

// Inject keyframes
const style = document.createElement('style');
style.textContent = keyframes;
document.head.appendChild(style);