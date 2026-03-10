export function renderHero(): string {
  return `
    <section class="hero" id="hero-section">
      <canvas class="hero-canvas" id="matrix-canvas"></canvas>
      <div class="hero-content fade-in-up">
        <pre class="hero-ascii" style="color:#ffffff; font-size: var(--font-size-xs); line-height:1.1; margin-bottom: var(--space-lg); text-shadow: 0 0 8px rgba(255,255,255,0.4);">
 ██████╗ ███╗   ███╗███╗   ██╗██╗ █████╗ 
██╔═══██╗████╗ ████║████╗  ██║██║██╔══██╗
██║   ██║██╔████╔██║██╔██╗ ██║██║███████║
██║   ██║██║╚██╔╝██║██║╚██╗██║██║██╔══██║
╚██████╔╝██║ ╚═╝ ██║██║ ╚████║██║██║  ██║
 ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝
        </pre>
        <div class="hero-terminal">
          <div style="color:#555555; margin-bottom: var(--space-sm); font-size: var(--font-size-xs);">┌──────────────────────────────────────────────────┐</div>
          <div class="terminal-body" id="terminal-body">
            <span class="prompt-line"><span class="prompt-sign">C:\\> </span></span><span id="typewriter-text"></span><span class="terminal-cursor"></span>
          </div>
          <div style="color:#555555; margin-top: var(--space-sm); font-size: var(--font-size-xs);">└──────────────────────────────────────────────────┘</div>
        </div>
        <div class="hero-cta" style="margin-top: var(--space-xl);">
          <a href="#/projects" class="btn btn-primary">[ DIR /PROJECTS ]</a>
          <a href="#/contact" class="btn btn-outline">[ CALL /CONTACT ]</a>
        </div>
      </div>
    </section>
  `;
}


export function initMatrixRain(): void {
  const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  function resize() {
    canvas!.width = window.innerWidth;
    canvas!.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const chars = '01 .,:;|/\\-_+=<>{}[]()@#$%&*!?~'.split('');
  const fontSize = 12;
  let columns = Math.floor(canvas.width / fontSize);
  let drops: number[] = new Array(columns).fill(1);

  window.addEventListener('resize', () => {
    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(1);
  });

  function draw() {
    if (!ctx || !canvas) return;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px 'Source Code Pro', monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // brightness variation
      const brightness = Math.random();
      if (brightness > 0.95) {
        ctx.fillStyle = '#ffffff';
      } else if (brightness > 0.7) {
        ctx.fillStyle = '#444444';
      } else {
        ctx.fillStyle = '#1a1a1a';
      }

      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.985) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    requestAnimationFrame(draw);
  }

  draw();
}


export function initTypewriter(): void {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const lines = [
    'LOADING OMNIA SYSTEMS v1.0...',
    'Behind this mask there is an idea...',
    'And ideas are bulletproof.',
    'dawn-void: awakening sequence initiated.',
    'READY.',
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    if (!el) return;

    const currentLine = lines[lineIndex];

    if (isPaused) {
      isPaused = false;
      setTimeout(type, 2000);
      return;
    }

    if (!isDeleting) {
      el.textContent = currentLine.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentLine.length) {
        isDeleting = true;
        isPaused = true;
        setTimeout(type, 50);
        return;
      }
      setTimeout(type, 30 + Math.random() * 80);
    } else {
      el.textContent = currentLine.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
      setTimeout(type, 15);
    }
  }

  type();
}

export function afterHeroRender(): void {
  initMatrixRain();
  initTypewriter();
}
