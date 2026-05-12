const cursor = document.getElementById('cursor');
const preloader = document.getElementById('preloader');
const progressBar = document.getElementById('progressBar');
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const topButton = document.getElementById('topButton');
const typingText = document.getElementById('typingText');
const counters = document.querySelectorAll('.counter');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const contactForm = document.getElementById('contactForm');
const inputs = document.querySelectorAll('.field input, .field textarea');

const typingStrings = ['Frontend Developer', 'UI/UX Designer', 'Creative Coder'];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let testimonialIndex = 0;

const setTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.remove('dark');
    themeToggle.textContent = '🌙';
  } else {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
  }
};

const updateCursor = (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
};

const setHoverState = () => {
  const hoverTargets = document.querySelectorAll('a, button, .button, .hero__socials a');
  hoverTargets.forEach((target) => {
    target.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
    target.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
  });
};

const updateScrollProgress = () => {
  const scrollY = window.scrollY;
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
};

const highlightActiveNav = () => {
  const offset = window.scrollY + 140;
  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (!section) return;
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (offset >= sectionTop && offset < sectionBottom) {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    }
  });
};

const parallaxParticles = () => {
  const particles = document.querySelectorAll('.particle');
  const scrollY = window.scrollY;
  particles.forEach((particle, index) => {
    const baseX = particle.style.getPropertyValue('--x');
    const baseY = particle.style.getPropertyValue('--y');
    const speed = (index + 1) * 0.35;
    particle.style.transform = `translate(${baseX}, calc(${baseY} + ${scrollY * speed}px)) scale(var(--s))`;
  });
};

const handleScroll = () => {
  updateScrollProgress();
  highlightActiveNav();
  parallaxParticles();
};

const typeWriter = () => {
  const currentString = typingStrings[typingIndex % typingStrings.length];
  const currentText = currentString.substring(0, charIndex);
  typingText.textContent = currentText;

  if (!isDeleting && charIndex < currentString.length) {
    charIndex += 1;
    setTimeout(typeWriter, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeWriter, 40);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) typingIndex += 1;
    setTimeout(typeWriter, isDeleting ? 500 : 1300);
  }
};

const animateCounters = () => {
  counters.forEach((counter) => {
    const updateValue = () => {
      const target = Number(counter.dataset.target);
      const current = Number(counter.textContent);
      const increment = Math.ceil(target / 100);
      if (current < target) {
        counter.textContent = current + increment;
        setTimeout(updateValue, 18);
      } else {
        counter.textContent = target;
      }
    };
    updateValue();
  });
};

const revealOnScroll = () => {
  const revealTargets = document.querySelectorAll('.glass-card, .section__header, .testimonial-card, .about__intro');
  const observerOptions = { threshold: 0.18 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealTargets.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(28px)';
    observer.observe(element);
  });
};

const rotateTestimonials = () => {
  testimonialCards.forEach((card, index) => {
    card.classList.toggle('active', index === testimonialIndex);
  });
  testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
};

const initThemeToggle = () => {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
};

const initMenuToggle = () => {
  if (!hamburger || !navMenu) return;
  hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
  navLinks.forEach((link) => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
  });
};

const initContactForm = () => {
  if (!contactForm) return;
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks! Your message has been sent.');
    contactForm.reset();
  });
};

const initFloatingLabels = () => {
  inputs.forEach((input) => {
    const onBlur = () => {
      if (input.value.trim()) {
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
      }
    };
    input.addEventListener('blur', onBlur);
    if (input.value.trim()) input.classList.add('filled');
  });
};

window.addEventListener('mousemove', updateCursor);
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
  setTheme();
  setTimeout(() => {
    preloader.classList.add('loaded');
    preloader.style.opacity = '0';
  }, 600);
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1100);

  typeWriter();
  revealOnScroll();
  initThemeToggle();
  initMenuToggle();
  initContactForm();
  initFloatingLabels();
  setHoverState();
  handleScroll();
  rotateTestimonials();
  setInterval(rotateTestimonials, 6500);
  if (topButton) {
    topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const counterSection = document.querySelector('#about');
  if (counterSection) counterObserver.observe(counterSection);
});
