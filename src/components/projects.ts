interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'OMNIA.EXE',
    description: 'The origin point. A CRT-themed personal terminal built from scratch with Vite + TypeScript.',
    tags: ['TS', 'VITE', 'CSS'],
    github: 'https://github.com/dawn-void/dawn-void',
  },
  {
    title: 'COMING_SOON.BAT',
    description: 'New experiments cooking in the lab. Systems, servers, and AI-driven builds.',
    tags: ['SYS', 'AI'],
  },
  {
    title: 'SANDBOX.SH',
    description: 'Security tools, automation scripts, and late-night experiments.',
    tags: ['SEC', 'AUTO'],
  },
];

function renderProjectCard(project: Project): string {
  const tags = project.tags
    .map(tag => `<span class="project-tag">[${tag}]</span>`)
    .join(' ');

  const links: string[] = [];
  if (project.github) {
    links.push(`<a href="${project.github}" rel="noopener noreferrer" target="_blank" style="border-bottom: 1px dashed #555555;">> SOURCE</a>`);
  }
  if (project.demo) {
    links.push(`<a href="${project.demo}" rel="noopener noreferrer" target="_blank" style="border-bottom: 1px dashed #555555;">> DEMO</a>`);
  }

  return `
    <div class="project-card fade-in-up">
      <div style="color: #555555; font-size: var(--font-size-xs); margin-bottom: var(--space-xs);">────────────────────────────</div>
      <h3 style="font-size: var(--font-size-sm);">${project.title}</h3>
      <p class="project-desc" style="font-size: var(--font-size-xs); color: #777777; margin: var(--space-xs) 0;">${project.description}</p>
      <div class="project-tags" style="margin-top: var(--space-sm);">${tags}</div>
      ${links.length ? `<div class="project-links" style="margin-top: var(--space-sm);">${links.join(' ')}</div>` : ''}
    </div>
  `;
}

export function renderProjects(): string {
  const cards = projects.map(renderProjectCard).join('');

  return `
    <section class="section">
      <div class="container">
        <div class="section-header fade-in-up">
          <pre style="color: #555555; font-size: var(--font-size-xs);">╔══════════════════════════════════╗
║          PROJECTS.DIR            ║
╚══════════════════════════════════╝</pre>
        </div>

        <!-- dawn-void umbrella -->
        <div class="fade-in-up" style="margin-bottom: var(--space-xl); padding: var(--space-md); border: 1px solid #333333; background: #050505;">
          <div style="color: #555555; font-size: var(--font-size-xs);">┌── DAWN-VOID ──────────────────────┐</div>
          <p style="color: #777777; font-size: var(--font-size-xs); line-height: 1.6; padding: var(--space-sm) 0;">
            > An awakening. A rebellion against the ordinary.<br>
            > Every project here lives under the dawn-void.<br>
            > Not a brand, but an idea.
          </p>
          <div style="color: #555555; font-size: var(--font-size-xs);">└───────────────────────────────────┘</div>
        </div>

        <div style="color: #555555; font-size: var(--font-size-xs); margin-bottom: var(--space-md);">C:\\OMNIA\\PROJECTS> dir /w</div>

        <div class="projects-grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}
