// Particles.js - Enhanced Spore Animation System for Post-Apocalyptic Portfolio

class PostApocalypticParticles {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.particles = [];
        this.animationId = null;
        this.isRunning = false;
        
        // Configuration
        this.config = {
            maxParticles: 25,
            spawnRate: 0.3, // particles per frame
            minSize: 1,
            maxSize: 5,
            minOpacity: 0.1,
            maxOpacity: 0.6,
            minSpeed: 0.5,
            maxSpeed: 2,
            minLifetime: 5000,
            maxLifetime: 15000,
            wind: {
                x: 0.1,
                y: -0.05
            },
            colors: [
                'rgba(141, 110, 99, 0.6)',   // diary-paper
                'rgba(93, 64, 55, 0.4)',     // diary-fungal  
                'rgba(215, 204, 200, 0.3)',  // diary-text
                'rgba(255, 143, 0, 0.2)'     // diary-accent
            ]
        };
        
        this.init();
    }
    
    init() {
        if (!this.container) {
            console.warn('Particle container not found');
            return;
        }
        
        this.container.style.position = 'fixed';
        this.container.style.top = '0';
        this.container.style.left = '0';
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.style.pointerEvents = 'none';
        this.container.style.zIndex = '0';
        
        this.start();
    }
    
    createParticle() {
        const particle = {
            id: Date.now() + Math.random(),
            element: document.createElement('div'),
            x: -50,
            y: Math.random() * window.innerHeight,
            vx: this.config.minSpeed + Math.random() * (this.config.maxSpeed - this.config.minSpeed),
            vy: (Math.random() - 0.5) * 0.5,
            size: this.config.minSize + Math.random() * (this.config.maxSize - this.config.minSize),
            opacity: this.config.minOpacity + Math.random() * (this.config.maxOpacity - this.config.minOpacity),
            color: this.config.colors[Math.floor(Math.random() * this.config.colors.length)],
            rotation: 0,
            rotationSpeed: (Math.random() - 0.5) * 2,
            lifetime: this.config.minLifetime + Math.random() * (this.config.maxLifetime - this.config.minLifetime),
            age: 0,
            floatAmplitude: 10 + Math.random() * 20,
            floatFrequency: 0.01 + Math.random() * 0.02,
            blur: Math.random() * 2
        };
        
        // Style the particle element
        particle.element.className = 'spore-particle';
        particle.element.style.position = 'absolute';
        particle.element.style.width = particle.size + 'px';
        particle.element.style.height = particle.size + 'px';
        particle.element.style.borderRadius = '50%';
        particle.element.style.background = `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`;
        particle.element.style.pointerEvents = 'none';
        particle.element.style.left = particle.x + 'px';
        particle.element.style.top = particle.y + 'px';
        particle.element.style.opacity = particle.opacity;
        particle.element.style.filter = `blur(${particle.blur}px)`;
        particle.element.style.transform = `rotate(${particle.rotation}deg)`;
        
        this.container.appendChild(particle.element);
        this.particles.push(particle);
        
        return particle;
    }
    
    updateParticle(particle, deltaTime) {
        // Update age
        particle.age += deltaTime;
        
        // Apply wind and movement
        particle.vx += this.config.wind.x;
        particle.vy += this.config.wind.y;
        
        // Add floating motion
        const floatOffset = Math.sin(particle.age * particle.floatFrequency) * particle.floatAmplitude;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy + floatOffset * 0.01;
        
        // Update rotation
        particle.rotation += particle.rotationSpeed;
        
        // Fade out near end of lifetime
        const lifetimeProgress = particle.age / particle.lifetime;
        if (lifetimeProgress > 0.8) {
            const fadeProgress = (lifetimeProgress - 0.8) / 0.2;
            particle.opacity = particle.opacity * (1 - fadeProgress);
        }
        
        // Update element style
        particle.element.style.left = particle.x + 'px';
        particle.element.style.top = (particle.y + floatOffset) + 'px';
        particle.element.style.opacity = particle.opacity;
        particle.element.style.transform = `rotate(${particle.rotation}deg)`;
        
        // Check if particle should be removed
        return particle.age < particle.lifetime && 
               particle.x < window.innerWidth + 100 && 
               particle.y > -100 && 
               particle.y < window.innerHeight + 100;
    }
    
    removeParticle(particle) {
        if (particle.element && particle.element.parentNode) {
            particle.element.parentNode.removeChild(particle.element);
        }
        
        const index = this.particles.indexOf(particle);
        if (index > -1) {
            this.particles.splice(index, 1);
        }
    }
    
    animate() {
        if (!this.isRunning) return;
        
        const currentTime = Date.now();
        const deltaTime = currentTime - (this.lastTime || currentTime);
        this.lastTime = currentTime;
        
        // Spawn new particles
        if (this.particles.length < this.config.maxParticles && Math.random() < this.config.spawnRate) {
            this.createParticle();
        }
        
        // Update existing particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            
            if (!this.updateParticle(particle, deltaTime)) {
                this.removeParticle(particle);
            }
        }
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.lastTime = Date.now();
        
        // Create initial particles
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                if (this.isRunning) {
                    this.createParticle();
                }
            }, i * 300);
        }
        
        this.animate();
    }
    
    stop() {
        this.isRunning = false;
        
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        
        // Remove all particles
        this.particles.forEach(particle => {
            this.removeParticle(particle);
        });
        this.particles = [];
    }
    
    pause() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    
    resume() {
        if (!this.isRunning) {
            this.start();
        }
    }
    
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    }
    
    resize() {
        // Handle window resize
        this.particles.forEach(particle => {
            if (particle.y > window.innerHeight + 100) {
                this.removeParticle(particle);
            }
        });
    }
}

// Atmospheric Wind System
class WindSystem {
    constructor() {
        this.windStrength = 0;
        this.windDirection = 0;
        this.changeInterval = 10000; // Change wind every 10 seconds
        this.init();
    }
    
    init() {
        this.updateWind();
        setInterval(() => {
            this.updateWind();
        }, this.changeInterval);
    }
    
    updateWind() {
        // Gradual wind changes for natural feel
        const targetStrength = Math.random() * 0.5;
        const targetDirection = Math.random() * Math.PI * 2;
        
        // Smooth transition
        const steps = 100;
        const stepDelay = this.changeInterval / steps;
        
        for (let i = 0; i <= steps; i++) {
            setTimeout(() => {
                const progress = i / steps;
                this.windStrength = this.windStrength + (targetStrength - this.windStrength) * progress * 0.1;
                this.windDirection = this.windDirection + (targetDirection - this.windDirection) * progress * 0.1;
            }, i * stepDelay);
        }
    }
    
    getWindForce() {
        return {
            x: Math.cos(this.windDirection) * this.windStrength,
            y: Math.sin(this.windDirection) * this.windStrength
        };
    }
}

// Environmental Effects
class EnvironmentalEffects {
    constructor() {
        this.ambientParticles = [];
        this.dustMotes = [];
        this.init();
    }
    
    init() {
        this.createAmbientParticles();
        this.createDustMotes();
    }
    
    createAmbientParticles() {
        // Very subtle background particles
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '1px';
            particle.style.height = '1px';
            particle.style.background = 'rgba(215, 204, 200, 0.1)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.animation = `ambientFloat ${5 + Math.random() * 10}s ease-in-out infinite`;
            
            document.body.appendChild(particle);
            this.ambientParticles.push(particle);
        }
    }
    
    createDustMotes() {
        // Occasionally visible dust particles
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                const mote = document.createElement('div');
                mote.style.position = 'fixed';
                mote.style.width = '2px';
                mote.style.height = '2px';
                mote.style.background = 'rgba(141, 110, 99, 0.3)';
                mote.style.borderRadius = '50%';
                mote.style.pointerEvents = 'none';
                mote.style.left = '-10px';
                mote.style.top = Math.random() * window.innerHeight + 'px';
                mote.style.filter = 'blur(0.5px)';
                mote.style.animation = 'dustDrift 8s linear forwards';
                
                document.body.appendChild(mote);
                
                setTimeout(() => {
                    if (mote.parentNode) {
                        mote.parentNode.removeChild(mote);
                    }
                }, 8000);
            }
        }, 2000);
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.frameCount = 0;
        this.lastTime = performance.now();
        this.fps = 60;
        this.monitoring = false;
    }
    
    start() {
        this.monitoring = true;
        this.monitor();
    }
    
    monitor() {
        if (!this.monitoring) return;
        
        this.frameCount++;
        const currentTime = performance.now();
        
        if (currentTime >= this.lastTime + 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.lastTime = currentTime;
            
            // Adjust particle system based on performance
            if (this.fps < 30 && window.particleSystem) {
                window.particleSystem.updateConfig({
                    maxParticles: Math.max(10, window.particleSystem.config.maxParticles - 2),
                    spawnRate: window.particleSystem.config.spawnRate * 0.8
                });
            } else if (this.fps > 50 && window.particleSystem) {
                window.particleSystem.updateConfig({
                    maxParticles: Math.min(30, window.particleSystem.config.maxParticles + 1),
                    spawnRate: Math.min(0.5, window.particleSystem.config.spawnRate * 1.1)
                });
            }
        }
        
        requestAnimationFrame(() => this.monitor());
    }
    
    stop() {
        this.monitoring = false;
    }
}

// Add ambient animation keyframes
const ambientStyles = `
@keyframes ambientFloat {
    0%, 100% { 
        transform: translateY(0px) translateX(0px); 
        opacity: 0.1;
    }
    25% { 
        transform: translateY(-5px) translateX(2px); 
        opacity: 0.2;
    }
    50% { 
        transform: translateY(-10px) translateX(-2px); 
        opacity: 0.15;
    }
    75% { 
        transform: translateY(-3px) translateX(3px); 
        opacity: 0.25;
    }
}

@keyframes dustDrift {
    0% { 
        transform: translateX(-10px); 
        opacity: 0;
    }
    10% { 
        opacity: 0.3;
    }
    90% { 
        opacity: 0.3;
    }
    100% { 
        transform: translateX(100vw); 
        opacity: 0;
    }
}
`;

// Inject ambient styles
const ambientStyleSheet = document.createElement('style');
ambientStyleSheet.textContent = ambientStyles;
document.head.appendChild(ambientStyleSheet);

// Initialize the particle system when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Create global particle system
    window.particleSystem = new PostApocalypticParticles('spore-container');
    
    // Initialize wind system
    window.windSystem = new WindSystem();
    
    // Initialize environmental effects
    window.environmentalEffects = new EnvironmentalEffects();
    
    // Initialize performance monitoring
    window.performanceMonitor = new PerformanceMonitor();
    window.performanceMonitor.start();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.particleSystem) {
            window.particleSystem.resize();
        }
    });
    
    // Handle visibility change (pause when tab not active)
    document.addEventListener('visibilitychange', function() {
        if (window.particleSystem) {
            if (document.hidden) {
                window.particleSystem.pause();
            } else {
                window.particleSystem.resume();
            }
        }
    });
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    if (window.particleSystem) {
        window.particleSystem.stop();
    }
    if (window.performanceMonitor) {
        window.performanceMonitor.stop();
    }
});