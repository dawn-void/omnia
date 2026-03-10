import { navigateTo } from '../router';

export function createNavbar(): string {
  return `
    <nav class="navbar" id="main-nav">
      <div class="container">
        <a href="#/" class="nav-logo" data-route="/">
          <span class="prompt">_</span> OMNIA
        </a>
        <div class="nav-links" id="nav-links">
          <a href="#/" data-route="/" class="active">HOME</a>
          <a href="#/about" data-route="/about">ABOUT</a>
          <a href="#/personal" data-route="/personal">PERSONAL</a>
          <a href="#/projects" data-route="/projects">PROJECTS</a>
          <a href="#/contact" data-route="/contact">CONTACT</a>
        </div>
        <div class="nav-hamburger" id="nav-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  `;
}

export function initNavbar(): void {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = link.getAttribute('data-route');
        if (route) {
          navigateTo(route);
          hamburger.classList.remove('open');
          navLinks.classList.remove('open');
        }
      });
    });
  }
}
