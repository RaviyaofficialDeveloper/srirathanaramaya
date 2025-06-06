// Navbar active link highlighting
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split("/").pop();
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });

    // Section animation
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelector('section').classList.add('visible');
    });