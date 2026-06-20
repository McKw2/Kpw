import './styles.css';

const featuredWork = [
  {
    title: 'Brand systems',
    description: 'Identity foundations, reusable visual rules, and launch-ready digital kits.',
  },
  {
    title: 'Web launches',
    description: 'Fast, responsive landing pages that make the next step obvious.',
  },
  {
    title: 'Creative direction',
    description: 'Sharp positioning, art direction, and content structure for focused campaigns.',
  },
];

const processSteps = ['Discover the story', 'Shape the experience', 'Launch with polish'];

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="logo" href="#home" aria-label="Kpw home">Kpw</a>
    <nav class="site-nav" aria-label="Primary navigation">
      <a href="#work">Work</a>
      <a href="#process">Process</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="home">
    <section class="hero section-shell" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Independent digital studio</p>
        <h1 id="hero-title">Digital experiences with character.</h1>
        <p class="hero-text">
          Kpw helps brands, creators, and ambitious ideas show up online with
          clean strategy, memorable visuals, and websites that feel effortless.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#contact">Start a project</a>
          <a class="button button-secondary" href="#work">See capabilities</a>
        </div>
      </div>
      <div class="hero-card" aria-label="Kpw project snapshot">
        <span class="card-kicker">Now building</span>
        <strong>Launch-ready web presence</strong>
        <p>Messaging, visuals, and responsive pages for ideas that need momentum.</p>
      </div>
    </section>

    <section id="work" class="section-shell split-section" aria-labelledby="work-title">
      <div>
        <p class="eyebrow">What Kpw makes</p>
        <h2 id="work-title">Focused digital foundations for the next move.</h2>
      </div>
      <div class="work-grid">
        ${featuredWork
          .map(
            (item) => `
              <article class="work-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section id="process" class="section-shell process-section" aria-labelledby="process-title">
      <p class="eyebrow">How it comes together</p>
      <h2 id="process-title">A lean process built for clarity.</h2>
      <ol class="process-list">
        ${processSteps
          .map(
            (step, index) => `
              <li>
                <span>${String(index + 1).padStart(2, '0')}</span>
                ${step}
              </li>
            `,
          )
          .join('')}
      </ol>
    </section>

    <section id="contact" class="section-shell contact-section" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow">Ready when you are</p>
        <h2 id="contact-title">Build the first impression your idea deserves.</h2>
      </div>
      <a class="button button-primary" href="mailto:hello@example.com">hello@example.com</a>
    </section>
  </main>
`;
