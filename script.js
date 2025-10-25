// Portfolio functionality - written in a more natural, human style
// Not everything needs to be in a class!

let currentTheme = localStorage.getItem('theme') || 'dark';
let menuOpen = false;

// Initialize everything when page loads
window.addEventListener('DOMContentLoaded', function() {
    hideLoadingScreen();
    initTheme();
    setupNavigation();
    handleScrollEffects();
    startTypewriter();
    initParticles();
    loadProjects();
    setupContactForm();
});

// Loading screen - simple timeout
function hideLoadingScreen() {
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.classList.add('hidden');
        setTimeout(() => loader.style.display = 'none', 500);
    }, 800);
}

// Theme handling
function initTheme() {
    document.body.classList.toggle('light-theme', currentTheme === 'light');

    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
        updateThemeIcon();
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.querySelector('.theme-toggle');
    if (icon) {
        icon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
}

// Navigation stuff
function setupNavigation() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuOpen = !menuOpen;
            navMenu.classList.toggle('active');
            menuToggle.textContent = menuOpen ? '✕' : '☰';
        });
    }

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });

                // Close mobile menu if open
                if (menuOpen) {
                    navMenu.classList.remove('active');
                    menuToggle.textContent = '☰';
                    menuOpen = false;
                }

                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Scroll effects - progress bar, navbar, back-to-top
function handleScrollEffects() {
    const progressBar = document.querySelector('.scroll-progress');
    const navbar = document.getElementById('navbar');
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        // Progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }

        // Navbar shadow on scroll
        if (navbar) {
            navbar.classList.toggle('scrolled', winScroll > 50);
        }

        // Back to top button
        if (backToTop) {
            backToTop.classList.toggle('visible', winScroll > 300);
        }
    });

    // Back to top click
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(section);
    });
}

// Typewriter effect for hero section
function startTypewriter() {
    const textElement = document.querySelector('.typewriter');
    if (!textElement) return;

    const phrases = [
        'Full Stack Developer',
        'UI/UX Enthusiast',
        'Problem Solver',
        'Code Craftsman'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// Particle background animation
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(50, 184, 198, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Connect nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.strokeStyle = `rgba(50, 184, 198, ${0.2 - distance / 500})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Projects section
const projectsData = [
    {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration',
        image: 'https://via.placeholder.com/400x300/32b8c6/ffffff?text=E-Commerce',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: '#',
        demo: '#',
        category: 'web'
    },
    {
        title: 'Task Management App',
        description: 'Collaborative task manager with real-time updates',
        image: 'https://via.placeholder.com/400x300/2da6b2/ffffff?text=Task+Manager',
        tags: ['Vue.js', 'Firebase', 'Tailwind'],
        github: '#',
        demo: '#',
        category: 'web'
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather app with location detection',
        image: 'https://via.placeholder.com/400x300/218d8d/ffffff?text=Weather+App',
        tags: ['JavaScript', 'API', 'CSS'],
        github: '#',
        demo: '#',
        category: 'web'
    },
];

function loadProjects() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    grid.innerHTML = projectsData.map(project => `
        <div class="project-card" data-category="${project.category}">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link">GitHub →</a>
                    <a href="${project.demo}" class="project-link">Live Demo →</a>
                </div>
            </div>
        </div>
    `).join('');

    setupProjectFilters();
}

function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Contact form handling
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would normally send this to a backend
        console.log('Form submitted:', { name, email, message });

        alert('Thanks for reaching out! I\'ll get back to you soon.');
        form.reset();
    });
}
