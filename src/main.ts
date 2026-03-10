import './style.css';
import { createNavbar, initNavbar } from './components/navbar';
import { renderHero, afterHeroRender } from './components/hero';
import { renderAbout, afterAboutRender } from './components/about';
import { renderProjects } from './components/projects';
import { renderContact } from './components/contact';
import { renderPersonal, afterPersonalRender } from './components/personal';
import { registerRoutes, initRouter } from './router';

const app = document.getElementById('app')!;
app.innerHTML = `
  ${createNavbar()}
  <main id="page-content" class="page-enter"></main>
  <footer class="footer">
    <div class="container">
      <span style="color: #333333;">────────────────────────────────────────────</span><br>
      <span style="color: #555555;">OMNIA SYSTEMS v1.0 // ${new Date().getFullYear()} // ALL RIGHTS RESERVED</span>
    </div>
  </footer>
  <div class="scanline-overlay"></div>
`;

initNavbar();

registerRoutes([
  {
    path: '/',
    title: 'Home',
    render: renderHero,
    afterRender: afterHeroRender,
  },
  {
    path: '/about',
    title: 'About',
    render: renderAbout,
    afterRender: afterAboutRender,
  },
  {
    path: '/personal',
    title: 'Personal',
    render: renderPersonal,
    afterRender: afterPersonalRender,
  },
  {
    path: '/projects',
    title: 'Projects',
    render: renderProjects,
  },
  {
    path: '/contact',
    title: 'Contact',
    render: renderContact,
  },
]);

initRouter('#page-content');
