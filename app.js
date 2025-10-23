// Ra Origins - Website with Theming and Image Integration
// Tamil Heritage Preservation through Modern Web Technologies

class RaOriginsApp {
    constructor() {
        this.isLoaded = false;
        this.stageData = {
            pandaiyam: {
                title: 'Ra Pandaiyam',
                category: 'Earth and Body',
                description: 'Ra Pandaiyam is dedicated to reviving the ancient agricultural wisdom of the Tamil civilization. It emphasizes a harmonious relationship between humanity and the earth, focusing on sustainable practices that protect soil fertility and promote biodiversity.',
                image: 'https://ik.imagekit.io/ivfldnjuy/pandaiyam.png?updatedAt=1759927586053',
            },
            lemura: {
                title: 'Lemura Vanam',
                category: 'Traditional Medicine',
                description: 'Lemura Vanam is committed to the research, preservation, and practice of ancient Tamil medical systems. This stage aims to bring back the profound knowledge of Siddha medicine, which views health as a holistic balance of mind, body, and spirit.',
                image: 'https://ik.imagekit.io/ivfldnjuy/lemura.png?updatedAt=1759927583797',
            },
            gym: {
                title: 'Vanam Gym',
                category: 'Traditional Physical Culture',
                description: 'Vanam Gym redefines fitness by integrating ancient Tamil physical culture with modern wellness principles. It moves beyond conventional exercise to cultivate a deeper connection between the body, mind, and nature.',
                image: 'https://ik.imagekit.io/ivfldnjuy/gym.png?updatedAt=1759927583842',
            },
            vanam: {
                title: 'Ra Vanam',
                category: 'Traditional Attire',
                description: 'Ra Vanam champions the return to natural, breathable attire as a way to enhance well-being. According to Siddha wisdom, synthetic fabrics disrupt the body\'s natural energy exchange with the environment.',
                image: 'https://ik.imagekit.io/ivfldnjuy/ra%20vanam.png?updatedAt=1759927584547',
            },
            celestials: {
                title: 'Ra Celestials',
                category: 'Architecture',
                description: 'Ra Celestials introduces a paradigm of architecture where buildings are more than mere shelters; they are living structures in harmony with the cosmos. Drawing from Vastu Shastra, this stage aims to create spaces that promote health and well-being.',
                image: 'https://ik.imagekit.io/ivfldnjuy/ra%20celestial?updatedAt=1759927584551',
            },
            school: {
                title: 'Ra Ancient School of Theory',
                category: 'Education',
                description: 'The Ra Ancient School of Theory is the educational cornerstone of Ra Origins. It aims to create a new generation of scholars and leaders who are deeply rooted in their Tamil heritage through holistic and experiential learning.',
                image: 'https://ik.imagekit.io/ivfldnjuy/ra%20school?updatedAt=1759927583970',
            },
            pictures: {
                title: 'Ra Motion Pictures',
                category: 'Creative Arts',
                description: 'Ra Motion Pictures is the creative arts wing of Ra Origins. Its mission is to bring the stories, myths, and histories of the Tamil civilization to a global audience through the powerful medium of film.',
                image: 'https://ik.imagekit.io/ivfldnjuy/ra%20motion%20pictures?updatedAt=1759927584638',
            }
        };
        this.init();
    }

    async init() {
        this.setupHackerEffect();
        await this.loadAssets();
        this.setupEventListeners();
        this.setupNavigation();
        this.setupScrollingShowcase();
        this.setupInteractiveTimeline();
        this.setupBackgroundAudio();
        this.hideLoadingScreen();
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
        this.setupSmoothScrolling();
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

    setupInteractiveTimeline() {
        const container = document.getElementById('timeline-container');
    
        if (!container) return;
    
        const events = [
            { id: 1, category: 'origin', date: 'Primordial Era', title: 'The Primordial Land', description: 'The Tamil Siddha philosophical tradition emerges in the primordial Kumari Kandam—the world\'s first ethnogeography landmass, a legendary continent that fostered a civilization of profound wisdom.', image: 'https://images.unsplash.com/photo-1532664293483-34759524b3a2?q=80&w=800' },
            { id: 2, category: 'lineage', date: 'The Progenitor', title: 'Adhinathar (Sivan)', description: 'Adhinathar, also known as Sivan, is revered as the progenitor of this profound philosophical tradition. His teachings laid the groundwork for the spiritual and scientific exploration that followed.', image: 'https://images.unsplash.com/photo-1619282924544-d13145d72d16?q=80&w=800' },
            { id: 3, category: 'lineage', date: 'Refinement and Perfection', title: 'Siddhar Murugan', description: 'The tradition is further refined and perfected by the revered Siddhar Murugan, who elevated its principles and expanded its reach, codifying knowledge for future generations.', image: 'https://images.unsplash.com/photo-1624233215982-02c537395913?q=80&w=800' },
            { id: 4, category: 'lineage', date: 'Masters of Wisdom', title: 'Ravana & Indiran', description: 'In the lineage arise Ravana and Indiran, who excelled in both spiritual wisdom (Meygnanam) and science (Vignanam), demonstrating the synthesis of the material and metaphysical.', image: 'https://images.unsplash.com/photo-1613425118029-5652653a0f8b?q=80&w=800' },
            { id: 5, category: 'mission', date: 'A Gift to the People', title: 'Systematized Knowledge', description: 'They systematized the Siddha knowledge inherited from their ancestors and bestowed it as a divine gift upon the Tamil people, ensuring its preservation and accessibility.', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800' },
            { id: 6, category: 'mission', date: 'The Present Day', title: 'The Mission of Ra Origins', description: 'Ra Origins now seeks to reclaim this buried heritage—this lost civilization and its profound wisdom—and present it anew through seven distinct stages for the modern world.', image: 'https://images.unsplash.com/photo-1504711331083-90594425db5e?q=80&w=800' }
        ];
    
        const render = () => {
            container.innerHTML = events.map(event => `
                <div class="timeline-card" data-id="${event.id}">
                    <div class="timeline-card-header">
                        <div class="timeline-card-summary">
                            <p class="timeline-card-date">${event.date}</p>
                            <h3 class="timeline-card-title">${event.title}</h3>
                        </div>
                        <div class="timeline-card-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>
                    <div class="timeline-card-details">
                        <img src="${event.image}" alt="${event.title}" class="timeline-card-details-image">
                        <p class="timeline-card-details-description">${event.description}</p>
                    </div>
                </div>
            `).join('');
    
            addCardEventListeners();
        };
    
        const addCardEventListeners = () => {
            container.querySelectorAll('.timeline-card').forEach(card => {
                card.querySelector('.timeline-card-header').addEventListener('click', () => {
                    const isCurrentlyExpanded = card.classList.contains('expanded');
        
                    container.querySelectorAll('.timeline-card.expanded').forEach(c => {
                        c.classList.remove('expanded');
                    });
        
                    if (!isCurrentlyExpanded) {
                        card.classList.add('expanded');
                    }
                });
            });
        };
    
        render();
    }

    setupScrollingShowcase() {
        const container = document.querySelector('.scrolling-showcase');
        const stickyPanel = document.querySelector('.showcase-sticky-panel');
        const paginationContainer = document.querySelector('.showcase-vertical-pagination');
        const contentWrapper = document.querySelector('.showcase-content-wrapper');
        const imageSlider = document.querySelector('.showcase-image-slider');

        if (!container || !stickyPanel || !paginationContainer || !contentWrapper || !imageSlider) return;
        
        const slides = Object.values(this.stageData);

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

            if (newActiveIndex !== lastActiveIndex) {
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
        setTimeout(handleScroll, 100);
    }

    setupNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const sidebar = document.getElementById('sidebar');
        
        if (navToggle && sidebar) {
            navToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    sidebar.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }

        const navLinks = document.querySelectorAll('.nav-link');
        const currentPage = window.location.pathname.split('/').pop();

        if (currentPage === 'contact.html') {
            const contactLink = document.querySelector('.nav-link[href="contact.html"]');
            if (contactLink) {
                navLinks.forEach(l => l.classList.remove('active'));
                contactLink.classList.add('active');
            }
        } else {
            window.addEventListener('scroll', () => {
                const sections = document.querySelectorAll('section[id]');
                const scrollPos = window.scrollY + (window.innerHeight / 2);

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
    }

    setupBackgroundAudio() {
        const audio = document.getElementById('background-audio');
        const toggleBtn = document.getElementById('audio-toggle');
        
        if (!audio || !toggleBtn) return;
        
        const volumeOnIcon = toggleBtn.querySelector('.volume-on-icon');
        const volumeOffIcon = toggleBtn.querySelector('.volume-off-icon');
        let hasInteracted = false;

        const updateIconState = () => {
            if (audio.paused) {
                volumeOnIcon.style.display = 'none';
                volumeOffIcon.style.display = 'block';
                toggleBtn.setAttribute('aria-label', 'Play background audio');
            } else {
                volumeOnIcon.style.display = 'block';
                volumeOffIcon.style.display = 'none';
                toggleBtn.setAttribute('aria-label', 'Pause background audio');
            }
        };

        const attemptPlay = async () => {
            try {
                await audio.play();
            } catch (error) {
                console.log("Autoplay was prevented. Waiting for user interaction.");
            }
        };

        const togglePlayback = () => {
            if (audio.paused) {
                attemptPlay();
            } else {
                audio.pause();
            }
        };
        
        const handleFirstInteraction = () => {
            if (!hasInteracted) {
                hasInteracted = true;
                attemptPlay();
                document.body.removeEventListener('click', handleFirstInteraction);
                document.body.removeEventListener('keydown', handleFirstInteraction);
            }
        };

        document.body.addEventListener('click', handleFirstInteraction, { once: true });
        document.body.addEventListener('keydown', handleFirstInteraction, { once: true });

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hasInteracted = true; // Mark as interacted if button is clicked first
            togglePlayback();
        });
        
        audio.addEventListener('play', updateIconState);
        audio.addEventListener('pause', updateIconState);
        
        updateIconState();
    }
}

// --- YouTube Player API for Contact Page ---
var player;
var playerReady = false;

// Helper function to enable the form button
function enableFormButton() {
    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    if (submitBtn && submitBtn.disabled) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
}

function onYouTubeIframeAPIReady() {
  if (document.getElementById('yt-player')) {
    // Failsafe timer: if the player isn't ready in 8 seconds, enable the form anyway.
    setTimeout(() => {
        if (!playerReady) {
            console.warn("YouTube Player timed out. Enabling form as a fallback.");
            enableFormButton();
        }
    }, 8000);

    player = new YT.Player('yt-player', {
      height: '360',
      width: '640',
      videoId: 'j52QN6QFLDw',
      playerVars: {
        'autoplay': 0,
        'controls': 0,
        'showinfo': 0,
        'modestbranding': 1,
        'loop': 0,
        'playsinline': 1,
        'start': 4,
        'mute': 1, // Mute the video to allow autoplay
        'rel': 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  } else {
      // If the player element is not on the page, enable the button immediately.
      enableFormButton();
  }
}

function onPlayerReady(event) {
    playerReady = true;
    enableFormButton();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    const successMessage = document.getElementById('contact-success-message');
    const formWrapper = document.querySelector('.contact-form-wrapper');
    const form = document.querySelector('.contact-form');
    const button = form.querySelector('button[type="submit"]');

    if (formWrapper) formWrapper.classList.remove('video-playing');
    if (successMessage) successMessage.classList.add('visible');

    // Wait for a few seconds before resetting the form
    setTimeout(() => {
        if (successMessage) successMessage.classList.remove('visible');
        
        form.reset();
        form.classList.remove('submitted'); // Fade the form back in
        button.disabled = false;
        button.textContent = 'Send Message';
    }, 4000); // Show message for 4 seconds
  }
}

// Utility Functions
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const button = form.querySelector('button[type="submit"]');
    button.textContent = 'Sending...';
    button.disabled = true;

    form.classList.add('submitted');
    
    const formWrapper = form.closest('.contact-form-wrapper');

    // Wait for form fade-out transition before playing video
    setTimeout(() => {
        if (formWrapper && playerReady && typeof player !== 'undefined' && player.playVideo) {
            formWrapper.classList.add('video-playing');
            player.playVideo();
        } else {
            // Fallback if player fails for any reason or is not ready
            console.warn("YouTube Player not ready. Bypassing video and showing success message directly.");
            // Manually trigger the success state
            onPlayerStateChange({ data: YT.PlayerState.ENDED });
        }
    }, 500); 
}

// Initialize the application
window.addEventListener('load', () => {
    new RaOriginsApp();
});
