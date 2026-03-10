// hash-based SPA router
export interface Route {
  path: string;
  title: string;
  render: () => string;
  afterRender?: () => void;
}

let routes: Route[] = [];
let contentEl: HTMLElement | null = null;

export function registerRoutes(routeList: Route[]): void {
  routes = routeList;
}

export function navigateTo(path: string): void {
  window.location.hash = path;
}

function getPath(): string {
  return window.location.hash.slice(1) || '/';
}

function matchRoute(path: string): Route | undefined {
  return routes.find(r => r.path === path);
}

function renderRoute(): void {
  const path = getPath();
  const route = matchRoute(path) || matchRoute('/');

  if (!route || !contentEl) return;

  document.title = `${route.title} — Omnia`;

  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPath = link.getAttribute('data-route');
    link.classList.toggle('active', linkPath === path);
  });


  contentEl.classList.remove('page-active');
  contentEl.classList.add('page-enter');

  setTimeout(() => {
    if (!contentEl) return;
    contentEl.innerHTML = route.render();
    contentEl.classList.remove('page-enter');
    contentEl.classList.add('page-active');

    window.scrollTo({ top: 0 });

    if (route.afterRender) route.afterRender();
  }, 150);
}

export function initRouter(containerSelector: string): void {
  contentEl = document.querySelector(containerSelector);
  window.addEventListener('hashchange', renderRoute);
  renderRoute();
}
