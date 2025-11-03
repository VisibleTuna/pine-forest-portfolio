// Pine Forest Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        const isActive = hamburger.classList.contains('active');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', !isActive);
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation Highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Scroll Event Listener for Active Nav
    window.addEventListener('scroll', updateActiveNav);

    // Scroll Animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.section, .project-card, .skill-item, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in', 'visible');
            }
        });
    }

    // Initial animation check
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Skill Progress Bars Animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            const elementTop = bar.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < window.innerHeight - elementVisible) {
                bar.style.width = width;
            }
        });
    }

    // Initial skill bars check
    animateSkillBars();
    window.addEventListener('scroll', animateSkillBars);

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Real-time validation
    nameInput.addEventListener('input', function() {
        validateName();
    });

    emailInput.addEventListener('input', function() {
        validateEmail();
    });

    messageInput.addEventListener('input', function() {
        validateMessage();
    });

    function validateName() {
        const name = nameInput.value.trim();
        if (name.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters long';
            nameInput.style.borderColor = '#ff6b6b';
            nameInput.setAttribute('aria-invalid', 'true');
            return false;
        } else {
            nameError.textContent = '';
            nameInput.style.borderColor = 'rgba(184, 198, 219, 0.1)';
            nameInput.setAttribute('aria-invalid', 'false');
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.style.borderColor = '#ff6b6b';
            emailInput.setAttribute('aria-invalid', 'true');
            return false;
        } else {
            emailError.textContent = '';
            emailInput.style.borderColor = 'rgba(184, 198, 219, 0.1)';
            emailInput.setAttribute('aria-invalid', 'false');
            return true;
        }
    }

    function validateMessage() {
        const message = messageInput.value.trim();
        if (message.length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long';
            messageInput.style.borderColor = '#ff6b6b';
            messageInput.setAttribute('aria-invalid', 'true');
            return false;
        } else {
            messageError.textContent = '';
            messageInput.style.borderColor = 'rgba(184, 198, 219, 0.1)';
            messageInput.setAttribute('aria-invalid', 'false');
            return true;
        }
    }

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            // Show success message
            showSuccessMessage();
            // Reset form
            contactForm.reset();
            // Clear any error styles
            [nameInput, emailInput, messageInput].forEach(input => {
                input.style.borderColor = 'rgba(184, 198, 219, 0.1)';
            });
        }
    });

    function showSuccessMessage() {
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #3d6b1f 0%, #4a7c2a 100%);
                color: #e8f4f8;
                padding: 2rem;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                text-align: center;
                max-width: 400px;
                width: 90%;
            ">
                <h3 style="margin-bottom: 1rem; color: #d4a574;">Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon!</p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background: #d4a574;
                    color: #0a1929;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 500;
                ">Close</button>
            </div>
        `;
        
        document.body.appendChild(successMessage);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (successMessage.parentElement) {
                successMessage.remove();
            }
        }, 5000);
    }

    // Keyboard Navigation Support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
        
        // Tab navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Intersection Observer for better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section, .project-card, .skill-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for hero section
    function parallaxScroll() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.stars, .trees');
        
        parallaxElements.forEach(element => {
            const speed = element.classList.contains('stars') ? 0.5 : 0.3;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }

    // Only apply parallax if user hasn't requested reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', parallaxScroll);
    }

    // Dynamic star generation for better visual effect
    function generateStars() {
        const starsContainer = document.querySelector('.stars');
        if (!starsContainer) return;
        
        // Clear existing stars
        starsContainer.innerHTML = '';
        
        // Generate random stars
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${Math.random() > 0.5 ? '#e8f4f8' : '#d4a574'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
                animation-delay: ${Math.random() * 2}s;
            `;
            starsContainer.appendChild(star);
        }
    }

    // Generate stars on load
    generateStars();

    // Resize handler for responsive adjustments
    window.addEventListener('resize', function() {
        // Regenerate stars on resize for better mobile experience
        if (window.innerWidth < 768) {
            generateStars();
        }
    });

    // Console welcome message
    console.log(`
    ðŸŒ² Welcome to the Pine Forest Portfolio! ðŸŒ²
    
    This portfolio was crafted with:
    - Semantic HTML5 structure
    - Responsive CSS with pine forest night theme
    - Interactive JavaScript features
    - Accessibility best practices
    
    Feel free to explore the code and customize it for your needs!
    `);
});
