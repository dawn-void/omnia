interface Game {
  title: string;
  genre: string;
  cover: string;
}

const games: Game[] = [
  { title: 'The Last of Us', genre: 'SURVIVAL', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg' },
  { title: 'Death Stranding', genre: 'ACTION RPG', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1850570/header.jpg' },
  { title: 'Detroit: Become Human', genre: 'ADVENTURE', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1222140/header.jpg' },
  { title: 'Elden Ring', genre: 'SOULS-LIKE', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg' },
  { title: 'Marathon', genre: 'EXTRACTION', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/3065800/header.jpg' },
  { title: 'ARC Raiders', genre: 'CO-OP PVE', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1808500/header.jpg' },
  { title: 'Escape from Tarkov', genre: 'TACTICAL FPS', cover: `${import.meta.env.BASE_URL}tarkov_cover.png` },
  { title: 'Apex Legends', genre: 'BATTLE ROYALE', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg' },
  { title: 'Minecraft', genre: 'SANDBOX', cover: `${import.meta.env.BASE_URL}minecraft_cover.png` },
  { title: 'The Outlast Trials', genre: 'HORROR CO-OP', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1304930/header.jpg' },
];

function renderGameCard(game: Game): string {
  return `
    <div class="game-card" style="border: 1px solid #333333; background: #050505; overflow: hidden; transition: border-color 150ms ease, transform 150ms ease;" onmouseenter="this.style.borderColor='#ffffff';this.style.transform='scale(1.03)'" onmouseleave="this.style.borderColor='#333333';this.style.transform='scale(1)'">
      <img src="${game.cover}" alt="${game.title}" style="width:100%; height:110px; object-fit:cover; display:block; filter: grayscale(50%) contrast(1.1) brightness(0.85); border-bottom: 1px solid #222222;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
      <div style="width:100%; height:110px; background:#0a0a0a; display:none; align-items:center; justify-content:center; border-bottom: 1px solid #222222; color:#333333; font-size:var(--font-size-xs);">[NO SIGNAL]</div>
      <div style="padding: 8px 10px;">
        <div style="color: var(--color-text-bright); font-size: var(--font-size-xs); font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${game.title}</div>
        <div style="color: #444444; font-size: 0.6rem; margin-top: 2px;">${game.genre}</div>
      </div>
    </div>
  `;
}

export function renderPersonal(): string {
  const gameCards = games.map(renderGameCard).join('');

  return `
    <section class="section">
      <div class="container">
        <div class="section-header fade-in-up">
          <pre style="color: #555555; font-size: var(--font-size-xs);">╔══════════════════════════════════╗
║        PERSONAL.DAT              ║
╚══════════════════════════════════╝</pre>
        </div>

        <!-- Interests — warm and human -->
        <div class="fade-in-up" style="margin-bottom: var(--space-2xl);">
          <div style="border: 1px solid #333333; background: #050505; padding: var(--space-lg);">
            <div style="color: #555555; font-size: var(--font-size-xs); margin-bottom: var(--space-md); overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
              ┌── INTERESTS.LOG ────────────────┐
            </div>

            <div style="color: #999999; font-size: var(--font-size-sm); line-height: 1.8;">
              <p style="margin-bottom: var(--space-md);">
                <span style="color: var(--color-text-bright);">Cybersecurity</span> isn't just something I study — it's how I think. Every system is a puzzle, every vulnerability is a story. I'm the kind of person who opens DevTools on every website I visit. Can't help it.
              </p>

              <p style="margin-bottom: var(--space-md);">
                I live by the philosophy of <span style="color: var(--color-text-bright);">V for Vendetta</span> — the idea that one person with an idea can change everything. Not the violence, but the conviction. <em>"People should not be afraid of their governments. Governments should be afraid of their people."</em>
              </p>

              <p style="margin-bottom: var(--space-md);">
                When I'm not behind a screen, you'll find me on a <span style="color: var(--color-text-bright);">tennis court</span> or up on a mountain with <span style="color: var(--color-text-bright);">skis</span> under my feet. Tennis is precision and patience. Skiing is pure freedom — cold air, speed, and nothing but the slope ahead.
              </p>

              <p style="margin-bottom: var(--space-md);">
                I genuinely love <span style="color: var(--color-text-bright);">cooking</span>. There's something satisfying about building a meal from scratch — it's like writing code, but you get to eat the output. The kitchen is just another lab where I run experiments.
              </p>

              <p>
                And whenever I get the chance, I grab the keys and <span style="color: var(--color-text-bright);">drive somewhere new</span>. No GPS, no plan, just roads I haven't been on before. Some of my best ideas came from those trips — staring at the road, thinking about nothing and everything at the same time.
              </p>
            </div>

            <div style="color: #555555; font-size: var(--font-size-xs); margin-top: var(--space-md);">
              └────────────────────────────────┘
            </div>
          </div>
        </div>

        <!-- Music Player — integrated between sections -->
        <div class="fade-in-up" style="margin-bottom: var(--space-2xl);">
          <div class="music-player-bar" style="border: 1px solid #333333; background: #050505; padding: var(--space-md); display: flex; align-items: center; gap: var(--space-lg);">
            <div class="music-track-info" style="flex-shrink: 0;">
              <div style="color: #555555; font-size: var(--font-size-xs);">┌── NOW PLAYING ───┐</div>
              <div style="color: #888888; font-size: var(--font-size-xs); padding: var(--space-xs) 0;">
                <span style="color: var(--color-text-bright);">Igloo</span><br>
                Karen O & The Kids<br>
                <span style="color: #444444;">Where The Wild Things Are OST, 2009</span>
              </div>
              <div style="color: #555555; font-size: var(--font-size-xs);">└──────────────────┘</div>
            </div>
            <div style="flex: 1; min-width: 0;">
              <iframe 
                id="spotify-player"
                style="border: none; width: 100%; height: 80px;" 
                src="https://open.spotify.com/embed/track/1IscQuXfvXtZO7UdOvr2ST?utm_source=generator&theme=0&autoPlay=true" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="eager">
              </iframe>
            </div>
          </div>
        </div>

        <!-- Games — visual grid -->
        <div class="fade-in-up">
          <div style="color: #555555; font-size: var(--font-size-xs); margin-bottom: var(--space-sm);">
            ┌── GAMES.DB ───────────────────────┐
          </div>
          <div style="color: #555555; font-size: var(--font-size-xs); margin-bottom: var(--space-md);">C:\\OMNIA\\PERSONAL> SELECT * FROM games ORDER BY rating DESC;</div>
          
          <div class="games-grid" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: var(--space-sm);">
            ${gameCards}
          </div>

          <div style="color: #555555; font-size: var(--font-size-xs); margin-top: var(--space-md);">
            ${games.length} rows returned. Query OK.
          </div>
          <div style="color: #555555; font-size: var(--font-size-xs); margin-top: var(--space-sm);">
            └───────────────────────────────────┘
          </div>
        </div>

      </div>
    </section>
  `;
}


export function afterPersonalRender(): void {
  const iframe = document.getElementById('spotify-player') as HTMLIFrameElement | null;
  if (!iframe) return;

  // Send play command once iframe is loaded
  iframe.addEventListener('load', () => {
    setTimeout(() => {
      try {
        iframe.contentWindow?.postMessage({ command: 'toggle' }, '*');
      } catch (_) {
        // Cross-origin — silent fail
      }
    }, 1500);
  });
}
