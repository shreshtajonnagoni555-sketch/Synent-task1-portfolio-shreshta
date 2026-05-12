const root = document.documentElement;
const cursor = document.getElementById('cursor');
const preloader = document.getElementById('preloader');
const progressBar = document.getElementById('progressBar');
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const projectButtons = document.querySelectorAll('[data-project]');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const topButton = document.getElementById('topButton');
const typingText = document.getElementById('typingText');
const typingStrings = ['Frontend Developer', 'UI/UX Designer', 'Creative Coder'];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let activeTestimonial = 0;

const theme = localStorage.getItem('theme');
if (theme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
} else if (theme === 'light') {
  document.body.classList.remove('dark');
  themeToggle.textContent = '🌙';
}

window.addEventListener('mousemove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

const hoverTargets = document.querySelectorAll('a, button, .button, .hero__socials a');
hoverTargets.forEach((element) => {
  element.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
  element.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
});

window.addEventListener('scroll', () => {
  const scrollAmount = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollAmount / height) * 100;
  progressBar.style.width = `${progress}%`;

  // Parallax effect for particles
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, index) => {
    const speed = (index + 1) * 0.5;
    particle.style.transform = `translate(var(--x), calc(var(--y) + ${scrollAmount * speed}px)) scale(var(--s))`;
  });

  const fromTop = window.scrollY + 120;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (!section) return;
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

window.addEventListener('load', () => {
  setTimeout(() => preloader.classList.add('loaded'), 600);
  setTimeout(() => preloader.style.display = 'none', 1200);
  animateCounters();
  window.dispatchEvent(new Event('scroll'));
});

const type = () => {
  const current = typingStrings[typingIndex % typingStrings.length];
  const visibleText = current.substring(0, charIndex);
  typingText.textContent = visibleText;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) typingIndex++;
    setTimeout(type, isDeleting ? 400 : 1200);
  }
};

type();

const animateCounters = () => {
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.dataset.target;
      const current = +counter.textContent;
      const increment = Math.ceil(target / 100);
      if (current < target) {
        counter.textContent = current + increment;
        setTimeout(update, 18);
      } else {
        counter.textContent = target;
      }
    };
    update();
  });
};

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const themeValue = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', themeValue);
  themeToggle.textContent = themeValue === 'dark' ? '☀️' : '🌙';
});

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('active'));
});

const rotateTestimonials = () => {
  testimonialCards.forEach((card, index) => {
    card.classList.toggle('active', index === activeTestimonial);
  });
  activeTestimonial = (activeTestimonial + 1) % testimonialCards.length;
};

rotateTestimonials();
setInterval(rotateTestimonials, 6000);

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const revealElements = document.querySelectorAll('.glass-card, .section__header, .project-card, .timeline-card, .testimonial-card, .about__intro');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'none';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealElements.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(26px)';
  observer.observe(el);
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Message sent! This portfolio prototype is ready for real integration.');
  form.reset();
});

const inputs = document.querySelectorAll('.field input, .field textarea');
inputs.forEach((input) => {
  input.addEventListener('blur', () => {
    if (input.value.trim()) {
      input.classList.add('filled');
    } else {
      input.classList.remove('filled');
    }
  });
});
