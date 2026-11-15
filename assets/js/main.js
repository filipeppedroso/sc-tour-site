// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Dynamic year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

// Contact form -> WhatsApp and mailto fallback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const subject = formData.get('subject') || 'Orçamento';
    const message = formData.get('message') || '';

    const enc = (v) => encodeURIComponent(String(v));
    const text = `Olá, sou ${enc(name)}.%0A` +
                 `Assunto: ${enc(subject)}.%0A` +
                 `Telefone: ${enc(phone)}.%0A` +
                 `E-mail: ${enc(email)}.%0A%0A` +
                 `Mensagem:%0A${enc(message)}`;
    const waUrl = `https://wa.me/5548991104647?text=${text}`;

    // Try open WhatsApp
    window.open(waUrl, '_blank', 'noopener');
  });
} 