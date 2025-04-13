// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Tab logic
  function openTab(tabId) {
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
    });
  
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
  
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
  }
  