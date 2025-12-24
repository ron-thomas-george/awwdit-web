import { useEffect, useState } from 'react';
import './App.css';

const featureBlocks = [
  {
    title: 'Page Overview',
    copy: 'Instantly analyze any website\'s design system, view color palettes, typography, and spacing patterns, and get a quick design quality assessment in seconds.',
    accent: 'feature-a'
  },
  {
    title: 'Element Inspector',
    copy: 'Click any element to see its design properties, including spacing, colors, typography, and dimensions, all presented in designer-friendly measurements instead of raw CSS.',
    accent: 'feature-b'
  },
  {
    title: 'Style Editor',
    copy: 'Make and preview design changes in real-time, test spacing, colors, and typography adjustments, and experiment with design ideas without affecting the live site.',
    accent: 'feature-c'
  }
];

const workflow = [
  { title: 'Inspect', copy: 'Click any element to instantly view all its design properties and styles in a designer-friendly format.' },
  { title: 'Analyze', copy: 'Get instant feedback on design inconsistencies, missing styles, and potential improvements.' },
  { title: 'Implement', copy: 'Make and preview changes in real-time, then copy clean, production-ready code.' }
];

const textProperties = [
  { label: 'Font Family', value: 'Geist, "Geist Fallback"' },
  { label: 'Font Size', value: '36px' },
  { label: 'Line Height', value: '40px' },
  { label: 'Font Weight', value: '600' },
  { label: 'Letter Spacing', value: '-0.9px' }
];

const colorSwatch = {
  label: 'Text Color',
  hex: '#262626'
};

const testimonials = [
  {
    quote: 'This extension has been a game changer for me. As a software developer, I often need to preview design changes quickly, and this tool makes it effortless. It lets you modify any website’s text, images, fonts, colors, and other visual elements in real time.',
    name: 'Thomas Varghese',
    role: 'Aptlylabs'
  },
  {
    quote: 'This extension is honestly next-level. As a front-end software developer, I’m always tweaking designs and testing UI ideas, and this tool makes it ridiculously easy. You can change text, images, colors, pretty much anything right on the page and see the results instantly.',
    name: 'Abhijit B',
    role: 'QBurst'
  },
  {
    quote: 'There are certain things that are pretty basic but no one ever thought of it. This extension is such a game changer which honestly makes us think of why we never thought of it before. It makes your work a lot more easier and helps you save a lot of your time!',
    name: 'Christina Antony',
    role: 'Edstem'
  }
];

function App() {
  const [copied, setCopied] = useState(false);

  const cssSummary = `font-family: Geist, "Geist Fallback";
font-size: 36px;
line-height: 40px;
font-weight: 600;
letter-spacing: -0.9px;
color: ${colorSwatch.hex};`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssSummary);
      setCopied(true);
    } catch (error) {
      console.error('Unable to copy styles', error);
    }
  };

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  return (
    <div className="site">
      <header className="nav">
        <div className="logo-mark">
          <svg width="112" height="32" viewBox="0 0 281 80" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Awwdit logo">
            <path d="M61.1 53.4C63.57 49.53 65 44.93 65 40C65 26.2 53.81 15.01 40.01 15.01C26.21 15.01 15.02 26.2 15.02 40C15.02 53.8 26.21 64.99 40.01 64.99C44.68 64.99 49.05 63.71 52.79 61.47L71.31 80H72.01C76.33 80 79.85 76.58 80 72.3L61.1 53.4ZM40.01 55.44C31.72 55.44 25 48.72 25 40.43C25 32.14 31.72 25.43 40.01 25.43C48.3 25.43 55.02 32.14 55.02 40.43C55.02 48.72 48.3 55.44 40.01 55.44Z" fill="white"/>
            <path d="M72 0H8C3.58172 0 0 3.58172 0 8V72C0 76.4183 3.58172 80 8 80H72C76.4183 80 80 76.4183 80 72V8C80 3.58172 76.4183 0 72 0Z" fill="#36C10C"/>
            <path d="M61.1 53.4C63.57 49.53 65 44.93 65 40C65 26.2 53.81 15.01 40.01 15.01C26.21 15.01 15.02 26.2 15.02 40C15.02 53.8 26.21 64.99 40.01 64.99C44.68 64.99 49.05 63.71 52.79 61.47L71.31 80H72.01C76.33 80 79.85 76.58 80 72.3L61.1 53.4ZM40.01 55.44C31.72 55.44 25 48.72 25 40.43C25 32.14 31.72 25.43 40.01 25.43C48.3 25.43 55.02 32.14 55.02 40.43C55.02 48.72 48.3 55.44 40.01 55.44Z" fill="white"/>
            <path d="M116.25 55.5L115.69 52.08C114.76 53.24 113.69 54.15 112.5 54.82C111.34 55.49 109.78 55.83 107.8 55.83C105.93 55.83 104.29 55.51 102.87 54.88C101.49 54.21 100.41 53.29 99.62 52.14C98.84 50.95 98.44 49.55 98.44 47.94C98.44 45.59 99.28 43.65 100.96 42.12C102.68 40.55 105.25 39.56 108.69 39.15L115.69 38.37V36.41C115.69 35.63 115.33 34.9 114.63 34.23C113.92 33.56 112.8 33.22 111.27 33.22C109.93 33.22 108.75 33.56 107.74 34.23C106.77 34.86 106.12 35.84 105.78 37.14L99.62 34.9C100.37 32.4 101.78 30.48 103.88 29.13C105.97 27.79 108.55 27.11 111.61 27.11C115.34 27.11 118.14 28.04 120.01 29.91C121.91 31.74 122.87 34.17 122.87 37.19V55.5H116.26H116.25ZM115.69 43.35L109.64 44.13C108.41 44.28 107.47 44.65 106.84 45.25C106.2 45.81 105.89 46.5 105.89 47.32C105.89 48.14 106.21 48.78 106.84 49.34C107.48 49.86 108.37 50.12 109.53 50.12C110.84 50.12 111.94 49.88 112.83 49.39C113.76 48.9 114.47 48.2 114.96 47.26C115.45 46.32 115.69 45.17 115.69 43.79V43.34V43.35Z" fill="#171A1D"/>
            <path d="M142.76 55.5H135.42L127.13 27.5H134.52L139.17 46.43L144.1 27.5H151.27L156.03 46.43L160.62 27.5H167.96L159.67 55.5H152.17L147.52 37.92L142.76 55.5Z" fill="#171A1D"/>
            <path d="M185.85 55.5H178.51L170.22 27.5H177.61L182.26 46.43L187.19 27.5H194.36L199.12 46.43L203.71 27.5H211.05L202.76 55.5H195.26L190.61 37.92L185.85 55.5Z" fill="#171A1D"/>
            <path d="M235.95 31.7L235.05 31.81V15.18H242.22V55.5H235.72L235.27 52.03C234.37 53.08 233.18 53.99 231.69 54.77C230.23 55.52 228.54 55.89 226.59 55.89C224.16 55.89 222.02 55.29 220.15 54.1C218.28 52.91 216.83 51.24 215.78 49.12C214.74 46.95 214.21 44.42 214.21 41.5C214.21 38.58 214.73 36.05 215.78 33.88C216.83 31.71 218.28 30.05 220.15 28.9C222.02 27.71 224.16 27.11 226.59 27.11C228.79 27.11 230.68 27.56 232.25 28.45C233.86 29.35 235.09 30.43 235.95 31.7ZM221.95 41.5C221.95 43.85 222.55 45.76 223.74 47.21C224.94 48.63 226.5 49.34 228.44 49.34C229.64 49.34 230.72 49.04 231.69 48.44C232.7 47.81 233.5 46.91 234.1 45.75C234.73 44.59 235.05 43.17 235.05 41.49C235.05 39.81 234.73 38.39 234.1 37.23C233.5 36.07 232.7 35.2 231.69 34.6C230.72 33.97 229.64 33.65 228.44 33.65C226.5 33.65 224.93 34.38 223.74 35.83C222.55 37.25 221.95 39.13 221.95 41.49V41.5Z" fill="#171A1D"/>
            <path d="M250.04 27.5H257.21V55.5H250.04V27.5ZM253.68 23.92C252.34 23.92 251.24 23.51 250.38 22.69C249.52 21.83 249.09 20.79 249.09 19.55C249.09 18.31 249.52 17.29 250.38 16.47C251.24 15.61 252.34 15.18 253.68 15.18C254.95 15.18 256.01 15.61 256.87 16.47C257.77 17.29 258.21 18.32 258.21 19.55C258.21 20.78 257.76 21.83 256.87 22.69C256.01 23.51 254.95 23.92 253.68 23.92Z" fill="#171A1D"/>
            <path d="M267.07 27.5V19.66H274.35V27.5H280.51V33.83H274.35V45.2C274.35 46.66 274.65 47.68 275.25 48.28C275.88 48.88 276.67 49.19 277.6 49.23C278.57 49.27 279.54 49.21 280.51 49.06V55.22C278.79 55.59 277.11 55.71 275.47 55.56C273.86 55.41 272.43 54.98 271.16 54.27C269.89 53.52 268.88 52.4 268.14 50.91C267.43 49.42 267.08 47.51 267.08 45.2V33.83H263.1V27.5H267.08H267.07Z" fill="#171A1D"/>
          </svg>
        </div>
        <nav>
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#buzz">Buzz</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <button className="cta cta-dark" onClick={() => window.open('https://chromewebstore.google.com/detail/awwdit/efhalodkbmphlebppdlgemelhleejngl?pli=1', '_blank')}>
          Get Awwdit
        </button>
      </header>

      <main>
        <section className="panel hero-panel" id="home">
          <div className="hero-grid" />
          <div className="hero-copy">
            <p className="eyebrow">Chrome companion</p>
            <h1>
              Audit every pixel.
              <br />
              Ship with confidence.
            </h1>
            <p className="lede">
              Inspect any website's design without touching DevTools. Extract design systems, verify implementation, and apply tweaks, all in designer language.
            </p>
            <div className="hero-actions">
              <button 
                className="cta cta-dark" 
                onClick={() => window.open('https://chromewebstore.google.com/detail/awwdit/efhalodkbmphlebppdlgemelhleejngl?pli=1', '_blank')}
              >
                Install for Chrome
              </button>
            </div>
            <div className="hero-stats">
              <div>
                <strong>12k+</strong>
                <span>Audits run each week</span>
              </div>
              <div>
                <strong>37%</strong>
                <span>Less hand-off churn</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Designer satisfaction</span>
              </div>
            </div>
          </div>
          <div className="hero-preview">
            <div className="text-card">
              <div className="text-card__header">
                <p>Text properties</p>
                <button className="copy-icon-button" type="button" onClick={handleCopy} aria-label="Copy text styles">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M8 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect x="4" y="8" width="12" height="12" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
              </div>
              <div className="text-card__rows">
                {textProperties.map((property) => (
                  <div className="text-card__row" key={property.label}>
                    <span className="text-card__label">{property.label}</span>
                    <span className="text-card__value">{property.value}</span>
                  </div>
                ))}
                <div className="text-card__row text-card__row--color">
                  <span className="text-card__label">{colorSwatch.label}</span>
                  <div className="text-card__color-value">
                    <span className="text-card__color-chip" style={{ background: colorSwatch.hex }} />
                    <span className="text-card__value">{colorSwatch.hex}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="blob blob-orange" />
          <span className="blob blob-indigo" />
          <span className="blob blob-green" />
        </section>
        <div className={`toast ${copied ? 'toast--visible' : ''}`}>Copied to clipboard</div>

        <section className="panel contrast-panel" id="features">
          <div className="panel-header">
            <p className="eyebrow">Features</p>
            <h2>Identify Design<br />Issues With Ease.</h2>
            <p>Select anything on the website and spot missing or unwanted styles and stop wasting time digging in code for CSS insights.</p>
          </div>
          <div className="feature-grid">
            {featureBlocks.map((block) => (
              <article className={`feature-card ${block.accent}`} key={block.title}>
                <div className="card-icon" />
                <h3>{block.title}</h3>
                <p>{block.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel peach-panel" id="workflow">
          <div className="panel-header">
            <p className="eyebrow">Workflow</p>
            <h2>Hover. Audit. Ship. Repeat.</h2>
            <p>Improve your design workflow with effortless web style insights. Quickly get your design files ready for developer handoffs or design audits.</p>
          </div>
          <div className="workflow-grid">
            {workflow.map((step, index) => (
              <div className="workflow-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel lilac-panel" id="buzz">
          <div className="panel-header">
            <p className="eyebrow">Buzz</p>
            <h2>Designers and developers use Awwdit to peep behind the code.</h2>
            <p>Over 100+ designers and developers are using Awwdit.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((entry) => (
              <figure key={entry.name}>
                <blockquote>“{entry.quote}”</blockquote>
                <figcaption>
                  <strong>{entry.name}</strong>
                  <span>{entry.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="panel mint-panel" id="pricing">
          <div className="panel-header">
            <p className="eyebrow">Pricing</p>
            <h2>Simple plans that scale with your team.</h2>
            <p>Start for free, upgrade when you need richer automation.</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <h3>Starter</h3>
              <p className="price">$0</p>
              <ul>
                <li>Unlimited audits</li>
                <li>Hover insights</li>
                <li>Clipboard exports</li>
              </ul>
              <button 
                className="cta cta-dark"
                onClick={() => window.open('https://chromewebstore.google.com/detail/awwdit/efhalodkbmphlebppdlgemelhleejngl', '_blank')}
              >
                Start for free
              </button>
            </article>
            <article className="price-card featured">
              <div className="badge">Popular</div>
              <h3>Collab</h3>
              <p className="price">$19<span>/seat</span></p>
              <ul>
                <li>Team workspace</li>
                <li>Design token sync</li>
                <li>Activity timeline</li>
              </ul>
              <button className="cta cta-trial">Start trial</button>
            </article>
            <article className="price-card">
              <h3>Enterprise</h3>
              <p className="price">Let’s chat</p>
              <ul>
                <li>Custom SSO</li>
                <li>On-prem controls</li>
                <li>Dedicated partner</li>
              </ul>
              <button className="cta cta-light">Contact sales</button>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Awwdit</strong> © {new Date().getFullYear()} — Made for product teams that sweat the pixels.
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#press">Press kit</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
