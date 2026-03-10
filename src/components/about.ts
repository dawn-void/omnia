export function renderAbout(): string {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header fade-in-up">
          <pre style="color: #555555; font-size: var(--font-size-xs);">╔══════════════════════════════════╗
║           ABOUT.SYS              ║
╚══════════════════════════════════╝</pre>
        </div>

        <div class="about-grid">
          <!-- Terminal Bio -->
          <div class="about-terminal fade-in-up">
            <div style="color: #555555; font-size: var(--font-size-xs); margin-bottom: var(--space-sm);">
              ┌── SYSTEM INFO ──────────────────────────┐
            </div>
            <div style="margin-top: 0.5rem;">
              <div class="line"><span class="comment">C:\\OMNIA> whoami</span></div>
              <div class="line">&nbsp;</div>
              <div class="line"><span class="key">NAME:</span> <span class="value">Omnia</span></div>
              <div class="line"><span class="key">ORIGIN:</span> <span class="value">Latin for "everything"</span></div>
              <div class="line"><span class="key">ROLE:</span> <span class="value">Generalist & Experimentalist</span></div>
              <div class="line"><span class="key">ADDR:</span> <span class="value">127.0.0.1</span></div>
              <div class="line">&nbsp;</div>
              <div class="line"><span class="key">PHILOSOPHY:</span></div>
              <div class="line">&nbsp;&nbsp;<span class="value">- Curiosity First</span></div>
              <div class="line">&nbsp;&nbsp;<span class="value">- Security Mindset</span></div>
              <div class="line">&nbsp;&nbsp;<span class="value">- Privacy Always</span></div>
              <div class="line">&nbsp;</div>
              <div class="line"><span class="key">LAB:</span></div>
              <div class="line">&nbsp;&nbsp;<span class="value">- Systems & Servers</span></div>
              <div class="line">&nbsp;&nbsp;<span class="value">- AI & Automation</span></div>
              <div class="line">&nbsp;&nbsp;<span class="value">- The Sandbox</span></div>
              <div class="line">&nbsp;</div>
              <div class="line"><span class="key">MOTTO:</span> <span class="value">"Beneath this mask there is an idea, and ideas are bulletproof."</span></div>
            </div>
            <div style="color: #555555; font-size: var(--font-size-xs); margin-top: var(--space-sm);">
              └────────────────────────────────────────┘
            </div>
          </div>

          <!-- Skills -->
          <div class="skills-grid fade-in-up">
            <div style="color: #555555; font-size: var(--font-size-xs); margin-bottom: var(--space-sm);">
              ┌── SKILL MATRIX ─────────────────────────┐
            </div>
            <div style="padding-top: var(--space-sm);">
              <div class="line" style="margin-bottom: 0.3rem;"><span style="color: var(--font-size-xs);">C:\\OMNIA> skills --list</span></div>
            </div>
            
            <div class="skill-item">
              <div class="skill-label">
                <span>System Architecture</span>
                <span>[=========     ] 85%</span>
              </div>
            </div>

            <div class="skill-item">
              <div class="skill-label">
                <span>Security & OPSEC</span>
                <span>[========      ] 80%</span>
              </div>
            </div>

            <div class="skill-item">
              <div class="skill-label">
                <span>AI & Automation</span>
                <span>[=========     ] 85%</span>
              </div>
            </div>

            <div class="skill-item">
              <div class="skill-label">
                <span>Web Development</span>
                <span>[========      ] 75%</span>
              </div>
            </div>

            <div class="skill-item">
              <div class="skill-label">
                <span>Networking</span>
                <span>[=======       ] 70%</span>
              </div>
            </div>

            <div class="skill-item">
              <div class="skill-label">
                <span>API Orchestration</span>
                <span>[========      ] 75%</span>
              </div>
            </div>
            <div style="color: #555555; font-size: var(--font-size-xs); margin-top: var(--space-sm);">
              └────────────────────────────────────────┘
            </div>
          </div>
        </div>

        <!-- dawn-void philosophy -->
        <div class="about-terminal fade-in-up" style="margin-top: 2rem;">
          <div style="color: #555555; font-size: var(--font-size-xs); margin-bottom: var(--space-sm);">
            ┌── DAWN-VOID.TXT ──────────────────────┐
          </div>
          <p style="color: #888888; font-size: var(--font-size-sm); line-height: 1.7; padding: var(--space-sm) 0;">
            > In Latin, <em>Omnia</em> means "everything." I don't box myself into a single language, framework, or niche. I lean on AI to handle the heavy lifting so I can focus on what actually matters: <span style="color: var(--color-text-bright);">system architecture, security, and making the big picture work.</span>
          </p>
          <p style="color: #888888; font-size: var(--font-size-sm); line-height: 1.7;">
            > <span style="color: var(--color-text-bright);">dawn-void</span> is not just a name. It is the thread that connects everything I build. An awakening. A rebellion against the ordinary. Like the mask in V for Vendetta, beneath it lies <span style="color: var(--color-text-dim);">an idea — and ideas are bulletproof.</span>
          </p>
          <div style="color: #555555; font-size: var(--font-size-xs); margin-top: var(--space-sm);">
            └───────────────────────────────────────┘
          </div>
        </div>
      </div>
    </section>
  `;
}

export function afterAboutRender(): void { }
