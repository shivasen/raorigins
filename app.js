// Ra Origins - Website with Theming and Image Integration
// Tamil Heritage Preservation through Modern Web Technologies

class RaOriginsApp {
    constructor() {
        this.isLoaded = false;
        this.isMobile = window.innerWidth < 768;
        this.stageData = {
            pandaiyam: {
                title: 'Ra Pandaiyam',
                category: 'Earth and Body',
                description: 'Ra Pandaiyam is dedicated to reviving the ancient agricultural wisdom of the Tamil civilization. It emphasizes a harmonious relationship between humanity and the earth, focusing on sustainable practices that protect soil fertility and promote biodiversity.',
                image: 'https://ik.imagekit.io/ivfldnjuy/pandaiyam.png?updatedAt=1759927586053',
                details: `<h4>Core Objectives</h4><ul><li><strong>Soil Fertility Protection:</strong> Implementing organic and traditional methods to enhance soil health.</li><li><strong>Revival of Traditional Agriculture:</strong> Reintroducing ancient farming techniques adapted to local climates.</li><li><strong>Distribution of Native Seeds:</strong> Creating a seed bank to preserve and distribute indigenous varieties.</li></ul>`
            },
            lemura: {
                title: 'Lemura Vanam',
                category: 'Traditional Medicine',
                description: 'Lemura Vanam is committed to the research, preservation, and practice of ancient Tamil medical systems. This stage aims to bring back the profound knowledge of Siddha medicine, which views health as a holistic balance of mind, body, and spirit.',
                image: 'https://ik.imagekit.io/ivfldnjuy/lemura.png?updatedAt=1759927583797',
                details: `<h4>Core Objectives</h4><ul><li><strong>Three Medical Systems:</strong> Researching and applying the principles of Neetru (Hydropathy), Ootru (Spring water therapy), and Vaattru (Distillation therapy).</li><li><strong>Ancient Medical Manuscripts Recovery:</strong> Actively seeking and translating 87 ancient medical manuscripts.</li><li><strong>Ravana's Rasam Medical System Revival:</strong> Focusing on the specialized revival of the Rasam (Alchemy) medical system.</li></ul>`
            },
            gym: {
                title: 'Vanam Gym',
                category: 'Traditional Physical Culture',
                description: 'Vanam Gym redefines fitness by integrating ancient Tamil physical culture with modern wellness principles. It moves beyond conventional exercise to cultivate a deeper connection between the body, mind, and nature.',
                image: 'https://ik.imagekit.io/ivfldnjuy/gym.png?updatedAt=1759927583842',
                details: `<h4>Core Objectives</h4><ul><li><strong>Nature-Inspired Environment:</strong> Creating training spaces that are open, natural, and draw energy from the elements.</li><li><strong>Holistic Wellness Programs:</strong> Offering programs that combine physical training with breathwork and meditation.</li><li><strong>Ancient Tamil Martial Arts:</strong> Teaching and preserving traditional martial arts and combat sports.</li></ul>`
            },
            vanam: {
                title: 'Ra Vanam',
                category: 'Traditional Attire',
                description: 'Ra Vanam champions the return to natural, breathable attire as a way to enhance well-being. According to Siddha wisdom, synthetic fabrics disrupt the body\'s natural energy exchange with the environment.',
                image: 'https://ik.imagekit.io/ivfldnjuy/ra%20vanam.png?updatedAt=1759927584547',
                details: `<h4>Core Objectives</h4><ul><li><strong>Natural Fiber Focus:</strong> Prioritizing the use of cotton, silk, banana fiber, and other natural materials.</li><li><strong>Body's Energy Exchange Restoration:</strong> Designing clothing that allows the skin to breathe and facilitates a healthy energetic connection.</li><li><strong>Traditional Weaving Techniques:</strong> Supporting and reviving ancient weaving and dyeing methods.</li></ul>`
            },
            celestials: {
                title: 'Ra Celestials',
                category: 'Architecture',
                description: 'Ra Celestials introduces a paradigm of architecture where buildings are more than mere shelters; they are living structures in harmony with the cosmos. Drawing from Vastu Shastra, this stage aims to create spaces that promote health and well-being.',
                image: 'https://ik.imagekit.io/ivfldnjuy/ra%20celestial?updatedAt=1759927584551',
                details: `<h4>Core Objectives</h4><ul><li><strong>Astronomical Design Alignment:</strong> Designing buildings that are aligned with celestial movements and cosmic energies.</li><li><strong>Natural Materials Usage:</strong> Emphasizing the use of locally sourced, sustainable, and non-toxic building materials.</li><li><strong>Eco-friendly Construction:</strong> Integrating green technologies with ancient principles to create self-sustaining habitats.</li></ul>`
            },
            school: {
                title: 'Ra Ancient School of Theory',
                category: 'Education',
                description: 'The Ra Ancient School of Theory is the educational cornerstone of Ra Origins. It aims to create a new generation of scholars and leaders who are deeply rooted in their Tamil heritage through holistic and experiential learning.',
                image: 'https://ik.imagekit.io/ivfldnjuy/ra%20school?updatedAt=1759927583970',
                details: `<h4>Core Objectives</h4><ul><li><strong>Tamil History and Lifestyle:</strong> Offering comprehensive courses on the history, philosophy, and way of life of the Tamil people.</li><li><strong>Traditional Arts and Sciences:</strong> Providing instruction in classical literature, music, and ancient mathematics.</li><li><strong>Experiential Learning Methods:</strong> Fostering deep understanding through workshops, field studies, and mentorship.</li></ul>`
            },
            pictures: {
                title: 'Ra Motion Pictures',
                category: 'Creative Arts',
                description: 'Ra Motion Pictures is the creative arts wing of Ra Origins. Its mission is to bring the stories, myths, and histories of the Tamil civilization to a global audience through the powerful medium of film.',
                image: 'https://ik.imagekit.io/ivfldnjuy/ra%20motion%20pictures?updatedAt=1759927584638',
                details: `<h4>Core Objectives</h4><ul><li><strong>Heritage Storytelling:</strong> Producing films, documentaries, and series based on Tamil literature and history.</li><li><strong>Modern Cinematic Techniques:</strong> Utilizing state-of-the-art filmmaking technology for visually stunning stories.</li><li><strong>Cultural Preservation Through Film:</strong> Creating a lasting cinematic archive of Tamil culture.</li></ul>`
            }
        };
        this.init();
    }

    async init() {
        this.setupHackerEffect();
        this.setupTheme();
        await this.loadAssets();
        this.setupEventListeners();
        this.setupNavigation();
        this.setupStageOverlays();
        this.setupBackgroundAudio();
        this.setupScrollingShowcase();
        this.hideLoadingScreen();
    }

    setupTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        const applyTheme = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('ra-theme', theme);
        };

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });
        }

        const savedTheme = localStorage.getItem('ra-theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme(prefersDark.matches ? 'dark' : 'light');
        }

        prefersDark.addEventListener('change', (e) => {
            if (!localStorage.getItem('ra-theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    setupHackerEffect() {
        const target = document.getElementById('hacker-text');
        if (!target) return;

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;
        const originalValue = target.dataset.value;

        let iteration = 0;
        
        clearInterval(interval);
        
        interval = setInterval(() => {
            target.innerText = originalValue
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return originalValue[index];
                    }
                    if (letter === " ") return " ";
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            
            if(iteration >= originalValue.length){ 
                clearInterval(interval);
            }
            
            iteration += 1 / 3;
        }, 50);
    }

    async loadAssets() {
        return new Promise(resolve => setTimeout(resolve, 2000)); 
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        setTimeout(() => {
            if(loadingScreen) loadingScreen.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scroll
        }, 500);
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.handleResize());
        
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    if (!link.href.includes('contact.html') && !link.href.includes('index.html')) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                    }
                });
            });
        }

        this.setupSmoothScrolling();
        this.setupTimelineObserver();
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (document.querySelector(targetId)) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    setupTimelineObserver() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        if (timelineItems.length === 0) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1
        });

        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }

    setupScrollingShowcase() {
        const container = document.querySelector('.scrolling-showcase');
        const stickyPanel = document.querySelector('.showcase-sticky-panel');
        const paginationContainer = document.querySelector('.showcase-vertical-pagination');
        const paginationThumb = document.querySelector('.showcase-pagination-thumb');
        const contentWrapper = document.querySelector('.showcase-content-wrapper');
        const imageSlider = document.querySelector('.showcase-image-slider');

        if (!container || !stickyPanel || !paginationContainer || !contentWrapper || !imageSlider || !paginationThumb) return;
        
        const slides = Object.values(this.stageData).map((stage, index) => {
            const colors = [
                { bg: 'var(--theme-bg)', text: 'var(--theme-text)' },
                { bg: 'var(--theme-surface)', text: 'var(--theme-text)' },
                { bg: 'var(--theme-primary)', text: 'var(--theme-text)' },
                { bg: 'var(--theme-secondary)', text: 'var(--theme-bg)' },
            ];
            return { ...stage, ...colors[index % colors.length] };
        });

        // Populate content
        slides.forEach((slide, index) => {
            // Vertical Pagination
            const dot = document.createElement('div');
            dot.className = 'showcase-pagination-dot';
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            
            dot.addEventListener('click', () => {
                const stepHeight = (container.scrollHeight - container.clientHeight) / (slides.length - 1);
                container.scrollTo({ top: stepHeight * index, behavior: 'smooth' });
            });
            paginationContainer.appendChild(dot);

            // Text Content
            const textSlide = document.createElement('div');
            textSlide.className = 'showcase-text-slide';
            textSlide.innerHTML = `
                <p class="showcase-slide-category">${slide.category}</p>
                <h3 class="showcase-slide-title">${slide.title}</h3>
                <p class="showcase-slide-description">${slide.description}</p>
            `;
            contentWrapper.appendChild(textSlide);

            // Image Content
            const imageSlide = document.createElement('div');
            imageSlide.className = 'showcase-image-slide';
            imageSlide.innerHTML = `<img src="${slide.image}" alt="${slide.title}">`;
            imageSlider.appendChild(imageSlide);
        });

        const textSlides = contentWrapper.querySelectorAll('.showcase-text-slide');
        const pagDots = paginationContainer.querySelectorAll('.showcase-pagination-dot');

        let lastActiveIndex = -1;

        const handleScroll = () => {
            const scrollableHeight = container.scrollHeight - container.clientHeight;
            if (scrollableHeight <= 0) return;

            const scrollPercentage = container.scrollTop / scrollableHeight;
            
            const newActiveIndex = Math.min(
                slides.length - 1,
                Math.floor(scrollPercentage * slides.length)
            );

            // Update progress thumb with corrected alignment
            const dotHeight = 8; // as per CSS
            const thumbHeight = 16; // as per CSS
            const paginationHeight = paginationContainer.offsetHeight;
            const thumbCenterTravelDistance = paginationHeight - dotHeight;
            const thumbCenterY = (dotHeight / 2) + (scrollPercentage * thumbCenterTravelDistance);
            const thumbTopY = thumbCenterY - (thumbHeight / 2);
            paginationThumb.style.transform = `translateX(-50%) translateY(${thumbTopY}px)`;


            if (newActiveIndex !== lastActiveIndex) {
                const activeSlide = slides[newActiveIndex];

                // Update panel colors
                stickyPanel.style.backgroundColor = activeSlide.bgColor;
                stickyPanel.style.color = activeSlide.textColor;

                // Update text
                textSlides.forEach((slide, index) => {
                    slide.classList.toggle('is-active', index === newActiveIndex);
                });
                
                // Update pagination
                pagDots.forEach((dot, index) => {
                    dot.classList.toggle('is-active', index === newActiveIndex);
                });

                // Update image slider
                imageSlider.style.transform = `translateY(-${newActiveIndex * 100}%)`;

                lastActiveIndex = newActiveIndex;
            }
        };

        container.addEventListener('scroll', handleScroll);
        // Use a timeout to ensure layout is calculated before the first call
        setTimeout(handleScroll, 100);
    }

    setupNavigation() {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPage = window.location.pathname.split('/').pop();

        // Handle active link for different pages
        if (currentPage === 'contact.html') {
            const contactLink = document.querySelector('.nav-link[href="contact.html"]');
            if (contactLink) {
                navLinks.forEach(l => l.classList.remove('active'));
                contactLink.classList.add('active');
            }
        }

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                if(navbar) navbar.classList.add('scrolled');
            } else {
                if(navbar) navbar.classList.remove('scrolled');
            }

            // Only run section-based highlighting on the main page
            if (currentPage === 'contact.html') return;

            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    setupStageOverlays() {
        const overlay = document.getElementById('stage-overlay');
        const modal = document.getElementById('stage-modal');
        const closeBtn = document.getElementById('modal-close');
        
        if (!overlay || !modal ) return;
        // This functionality is now replaced by the scrolling showcase
        // We keep the modal structure in case it's needed elsewhere, but disable its trigger
    }

    setupBackgroundAudio() {
        const audio = document.getElementById('background-audio');
        const toggleBtn = document.getElementById('audio-toggle');
        
        if (!audio || !toggleBtn) return;
        
        const volumeOnIcon = toggleBtn.querySelector('.volume-on-icon');
        const volumeOffIcon = toggleBtn.querySelector('.volume-off-icon');

        const updateIconState = () => {
            if (audio.paused) {
                volumeOnIcon.style.display = 'none';
                volumeOffIcon.style.display = 'block';
            } else {
                volumeOnIcon.style.display = 'block';
                volumeOffIcon.style.display = 'none';
            }
        };

        const togglePlayback = async () => {
            try {
                if (audio.paused) {
                    await audio.play();
                } else {
                    audio.pause();
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error("Audio playback error:", error);
                }
            }
        };
        
        // Initial state
        updateIconState();
        
        // Update icon on play/pause events
        audio.addEventListener('play', updateIconState);
        audio.addEventListener('pause', updateIconState);

        // First user interaction to enable audio
        const handleFirstInteraction = async () => {
            if (audio.paused) {
                try {
                    await audio.play();
                } catch (error) {
                    // Autoplay was prevented, do nothing, user can click the button again.
                }
            }
            // Remove this listener after first interaction
            document.body.removeEventListener('click', handleFirstInteraction, { once: true });
            document.body.removeEventListener('keydown', handleFirstInteraction, { once: true });
        };

        // Listen for first interaction
        document.body.addEventListener('click', handleFirstInteraction, { once: true });
        document.body.addEventListener('keydown', handleFirstInteraction, { once: true });

        // Main toggle button
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent body click listener from firing
            togglePlayback();
        });
    }

    handleResize() {
        this.isMobile = window.innerWidth < 768;
    }
}

// Utility Functions
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your interest in Ra Origins! We will get back to you soon.');
        event.target.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Initialize the application
window.addEventListener('load', () => {
    new RaOriginsApp();
});
