document.addEventListener('DOMContentLoaded', () => {

  const menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

  const mobileBtn = document.getElementById('menu-mobile');
  const menu = document.getElementById('menu');

  mobileBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  const form = document.getElementById('reviewForm');
  const wrapper = document.getElementById('testimonial-wrapper');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const card = document.createElement('div');
    card.classList.add('testimonial');

    card.innerHTML = `
      <p>${message}</p>
      <div class="testimonial-user">${name}</div>
    `;

    wrapper.prepend(card);
    form.reset();
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.product-card, .feature-card, .testimonial, .about-content')
  .forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('header-compact', window.scrollY > 80);
}, { passive: true });

const CRUMB_COLORS = ['#4a2c1a', '#6d3f3f', '#8b5a3c', '#a06a4a', '#3b2314'];
let lastX = 0, lastY = 0, travel = 0;

document.addEventListener('mousemove', (e) => {
  travel += Math.hypot(e.pageX - lastX, e.pageY - lastY);
  lastX = e.pageX;
  lastY = e.pageY;

  if (travel < 90) return;
  travel = 0;

  const qty = 2 + Math.floor(Math.random() * 2);

  for (let i = 0; i < qty; i++) {
    const crumb = document.createElement('div');
    crumb.className = 'crumb';

    const size = 2 + Math.random() * 3;
    const drift = (Math.random() - 0.5) * 60;
    const fall  = 40 + Math.random() * 50;
    const spin  = (Math.random() - 0.5) * 540;
    const dur   = 0.7 + Math.random() * 0.6;

    crumb.style.cssText = `
      left: ${e.pageX + (Math.random() - 0.5) * 12}px;
      top: ${e.pageY + (Math.random() - 0.5) * 12}px;
      width: ${size}px;
      height: ${size * (0.7 + Math.random() * 0.6)}px;
      background: ${CRUMB_COLORS[Math.floor(Math.random() * CRUMB_COLORS.length)]};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      --drift: ${drift}px;
      --fall: ${fall}px;
      --spin: ${spin}deg;
      animation-duration: ${dur}s;
    `;

    document.body.appendChild(crumb);
    crumb.addEventListener('animationend', () => crumb.remove());
  }
});