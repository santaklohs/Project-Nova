// Minimalist interaction script

(function() {
  // Console greeting
  console.log("%c🌿 NOVA — minimalist space. less, but better.", "color: #2d4a6e; font-size: 12px; font-weight: 500;");

  // Prevent default on empty anchor links
  const buttons = document.querySelectorAll('.btn, .nav-links a, .social-links a');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      if (href === '#' || href === '') {
        e.preventDefault();
      }
    });
  });

  // Optional: Add a subtle scroll animation for anchor links (if any were added later)
  const allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Optional: Add a small hover effect to feature cards (just for polish)
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.25s ease';
    });
  });
})();
