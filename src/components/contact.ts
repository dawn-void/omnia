export function renderContact(): string {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header fade-in-up">
          <pre style="color: #555555; font-size: var(--font-size-xs);">╔══════════════════════════════════╗
║          CONTACT.SYS             ║
╚══════════════════════════════════╝</pre>
        </div>

        <div class="contact-container">
          <!-- Contact Items -->
          <div class="contact-info fade-in-up">
            <div style="color: #555555; font-size: var(--font-size-xs); margin-bottom: var(--space-sm);">
              ┌── ENDPOINTS ──────────────────────┐
            </div>
            <div class="contact-item">
              <div class="icon">/</div>
              <div class="details">
                <span class="label">GITHUB</span>
                <span class="value">github.com/dawn-void</span>
              </div>
            </div>

            <div class="contact-item">
              <div class="icon">@</div>
              <div class="details">
                <span class="label">EMAIL</span>
                <span class="value">contact.omniaa@pm.me</span>
              </div>
            </div>

            <div class="contact-item">
              <div class="icon">~</div>
              <div class="details">
                <span class="label">LOCATION</span>
                <span class="value">127.0.0.1</span>
              </div>
            </div>
            <div style="color: #555555; font-size: var(--font-size-xs); margin-top: var(--space-sm);">
              └───────────────────────────────────┘
            </div>
          </div>

          <!-- ASCII Art -->
          <div class="contact-ascii fade-in-up">
            <pre style="font-size: 0.6rem; line-height: 1.1;">
 ██████╗ ███╗   ███╗███╗   ██╗██╗ █████╗ 
██╔═══██╗████╗ ████║████╗  ██║██║██╔══██╗
██║   ██║██╔████╔██║██╔██╗ ██║██║███████║
██║   ██║██║╚██╔╝██║██║╚██╗██║██║██╔══██║
╚██████╔╝██║ ╚═╝ ██║██║ ╚████║██║██║  ██║
 ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝
            </pre>
            <p style="color: #555555; margin-top: 1rem; font-size: var(--font-size-xs);">
              ────────────────────────────────<br>
              Welcome to the dawn-void.<br>
              <span style="color: #aaaaaa;">Ideas are bulletproof.</span><br>
              ────────────────────────────────
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
