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