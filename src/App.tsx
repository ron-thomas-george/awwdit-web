import { useEffect, useState } from 'react';
import './App.css';

const featureBlocks = [
  {
    title: 'Pinpoint design drift',
    copy: 'Compare live DOM styles with your tokens and instantly see what slipped past your system.',
    accent: 'feature-a'
  },
  {
    title: 'Hand off with context',
    copy: 'Share annotated captures that include fonts, spacing, and color decisions with zero guesswork.',
    accent: 'feature-b'
  },
  {
    title: 'Fix while you inspect',
    copy: 'Tweak values directly inside Awwdit and copy clean CSS or Tailwind snippets into your repo.',
    accent: 'feature-c'
  }
];

const workflow = [
  { title: 'Hover', copy: 'Glide across the interface to reveal outlines, grids, and metadata instantly.' },
  { title: 'Audit', copy: 'Awwdit compares every pixel with your design tokens and flags what is off.' },
  { title: 'Ship', copy: 'Sync notes back to your team, or paste generated code straight into Git.' }
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
    quote: 'Awwdit is our final pass before launch. It catches visual bugs faster than QA.',
    name: 'Kalani Ohara',
    role: 'Design Ops Lead · Waveform'
  },
  {
    quote: 'The hover insights are wild — typography, spacing, tokens, all in one panel.',
    name: 'Maya Deshmukh',
    role: 'Senior Product Designer · HoloPay'
  },
  {
    quote: 'Developers finally understand what “off by 2px” means. Hand-off meetings are shorter.',
    name: 'Elio Martins',
    role: 'Engineering Manager · Pollen'
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
          <svg
            role="img"
            aria-label="Awwdit logo"
            width="308"
            height="80"
            viewBox="0 0 308 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.1 53.4C63.57 49.53 65 44.93 65 40C65 26.2 53.81 15.01 40.01 15.01C26.21 15.01 15.02 26.2 15.02 40C15.02 53.8 26.21 64.99 40.01 64.99C44.68 64.99 49.05 63.71 52.79 61.47L71.31 80H72.01C76.33 80 79.85 76.58 80 72.3L61.1 53.4ZM40.01 55.44C31.72 55.44 25 48.72 25 40.43C25 32.14 31.72 25.43 40.01 25.43C48.3 25.43 55.02 32.14 55.02 40.43C55.02 48.72 48.3 55.44 40.01 55.44Z"
              fill="white"
            />
            <path
              d="M72 0H8C3.58172 0 0 3.58172 0 8V72C0 76.4183 3.58172 80 8 80H72C76.4183 80 80 76.4183 80 72V8C80 3.58172 76.4183 0 72 0Z"
              fill="#36C10C"
            />
            <path
              d="M61.1 53.4C63.57 49.53 65 44.93 65 40C65 26.2 53.81 15.01 40.01 15.01C26.21 15.01 15.02 26.2 15.02 40C15.02 53.8 26.21 64.99 40.01 64.99C44.68 64.99 49.05 63.71 52.79 61.47L71.31 80H72.01C76.33 80 79.85 76.58 80 72.3L61.1 53.4ZM40.01 55.44C31.72 55.44 25 48.72 25 40.43C25 32.14 31.72 25.43 40.01 25.43C48.3 25.43 55.02 32.14 55.02 40.43C55.02 48.72 48.3 55.44 40.01 55.44Z"
              fill="white"
            />
            <path
              d="M116.25 55.4999L115.69 52.0799C114.76 53.2399 113.69 54.1499 112.5 54.8199C111.34 55.4899 109.78 55.8299 107.8 55.8299C105.93 55.8299 104.29 55.5099 102.87 54.8799C101.49 54.2099 100.41 53.2899 99.6199 52.1399C98.8399 50.9499 98.4399 49.5499 98.4399 47.9399C98.4399 45.5899 99.2799 43.6499 100.96 42.1199C102.68 40.5499 105.25 39.5599 108.69 39.1499L115.69 38.3699V36.4099C115.69 35.6299 115.33 34.8999 114.63 34.2299C113.92 33.5599 112.8 33.2199 111.27 33.2199C109.93 33.2199 108.75 33.5599 107.74 34.2299C106.77 34.8599 106.12 35.8399 105.78 37.1399L99.6199 34.8999C100.37 32.3999 101.78 30.4799 103.88 29.1299C105.97 27.7899 108.55 27.1099 111.61 27.1099C115.34 27.1099 118.14 28.0399 120.01 29.9099C121.91 31.7399 122.87 34.1699 122.87 37.1899V55.4999H116.26H116.25ZM115.69 43.3499L109.64 44.1299C108.41 44.2799 107.47 44.6499 106.84 45.2499C106.2 45.8099 105.89 46.4999 105.89 47.3199C105.89 48.1399 106.21 48.7799 106.84 49.3399C107.48 49.8599 108.37 50.1199 109.53 50.1199C110.84 50.1199 111.94 49.8799 112.83 49.3899C113.76 48.8999 114.47 48.1999 114.96 47.2599C115.45 46.3199 115.69 45.1699 115.69 43.7899V43.3399V43.3499Z"
              fill="#171A1D"
            />
            <path
              d="M142.76 55.5H135.42L127.13 27.5H134.52L139.17 46.43L144.1 27.5H151.27L156.03 46.43L160.62 27.5H167.96L159.67 55.5H152.17L147.52 37.92L142.76 55.5Z"
              fill="#171A1D"
            />
            <path
              d="M185.85 55.5H178.51L170.22 27.5H177.61L182.26 46.43L187.19 27.5H194.36L199.12 46.43L203.71 27.5H211.05L202.76 55.5H195.26L190.61 37.92L185.85 55.5Z"
              fill="#171A1D"
            />
            <path
              d="M235.95 31.6999L235.05 31.8099V15.1799H242.22V55.4999H235.72L235.27 52.0299C234.37 53.0799 233.18 53.9899 231.69 54.7699C230.23 55.5199 228.54 55.8899 226.59 55.8899C224.16 55.8899 222.02 55.2899 220.15 54.0999C218.28 52.9099 216.83 51.2399 215.78 49.1199C214.74 46.9499 214.21 44.4199 214.21 41.4999C214.21 38.5799 214.73 36.0499 215.78 33.8799C216.83 31.7099 218.28 30.0499 220.15 28.8999C222.02 27.7099 224.16 27.1099 226.59 27.1099C228.79 27.1099 230.68 27.5599 232.25 28.4499C233.86 29.3499 235.09 30.4299 235.95 31.6999ZM221.95 41.4999C221.95 43.8499 222.55 45.7599 223.74 47.2099C224.94 48.6299 226.5 49.3399 228.44 49.3399C229.64 49.3399 230.72 49.0399 231.69 48.4399C232.7 47.8099 233.5 46.9099 234.1 45.7499C234.73 44.5899 235.05 43.1699 235.05 41.4899C235.05 39.8099 234.73 38.3899 234.1 37.2299C233.5 36.0699 232.7 35.1999 231.69 34.5999C230.72 33.9699 229.64 33.6499 228.44 33.6499C226.5 33.6499 224.93 34.3799 223.74 35.8299C222.55 37.2499 221.95 39.1299 221.95 41.4899V41.4999Z"
              fill="#171A1D"
            />
            <path d="M250.04 27.4999H257.21V55.4999H250.04V27.4999ZM253.68 23.9199C252.34 23.9199 251.24 23.5099 250.38 22.6899C249.52 21.8299 249.09 20.7899 249.09 19.5499C249.09 18.3099 249.52 17.2899 250.38 16.4699C251.24 15.6099 252.34 15.1799 253.68 15.1799C254.95 15.1799 256.01 15.6099 256.87 16.4699C257.77 17.2899 258.21 18.3199 258.21 19.5499C258.21 20.7799 257.76 21.8299 256.87 22.6899C256.01 23.5099 254.95 23.9199 253.68 23.9199Z" fill="#171A1D" />
            <path
              d="M267.07 27.4999V19.6599H274.35V27.4999H280.51V33.8299H274.35V45.1999C274.35 46.6599 274.65 47.6799 275.25 48.2799C275.88 48.8799 276.67 49.1899 277.6 49.2299C278.57 49.2699 279.54 49.2099 280.51 49.0599V55.2199C278.79 55.5899 277.11 55.7099 275.47 55.5599C273.86 55.4099 272.43 54.9799 271.16 54.2699C269.89 53.5199 268.88 52.3999 268.14 50.9099C267.43 49.4199 267.08 47.5099 267.08 45.1999V33.8299H263.1V27.4999H267.08H267.07Z"
              fill="#171A1D"
            />
            <path
              d="M290.66 46.3698C290.88 47.2998 291.26 48.0098 291.78 48.4998C292.34 48.9898 292.96 49.3398 293.63 49.5598C294.34 49.7498 295.05 49.8398 295.76 49.8398C297.07 49.8398 298.09 49.5998 298.84 49.1098C299.59 48.5898 299.96 47.9298 299.96 47.1498C299.96 46.4798 299.7 45.9598 299.18 45.5798C298.66 45.1698 297.99 44.8698 297.16 44.6798C296.34 44.4598 295.5 44.2298 294.64 44.0098C293.63 43.7498 292.55 43.4698 291.39 43.1698C290.27 42.8298 289.21 42.3698 288.2 41.7698C287.19 41.1698 286.35 40.4098 285.68 39.4698C285.01 38.4998 284.67 37.2898 284.67 35.8298C284.67 34.1098 285.14 32.5998 286.07 31.2898C287.04 29.9798 288.37 28.9598 290.05 28.2098C291.77 27.4598 293.75 27.0898 295.99 27.0898C298.64 27.0898 300.88 27.6498 302.71 28.7698C304.54 29.8898 305.86 31.4998 306.69 33.5898L300.36 35.3798C300.17 34.8598 299.86 34.4298 299.41 34.0898C298.96 33.7498 298.42 33.5098 297.79 33.3598C297.19 33.2098 296.58 33.1398 295.94 33.1398C294.86 33.1398 293.96 33.3598 293.25 33.8098C292.54 34.2198 292.19 34.7998 292.19 35.5498C292.19 35.9998 292.32 36.3698 292.58 36.6698C292.84 36.9298 293.2 37.1598 293.64 37.3398C294.13 37.5298 294.67 37.6898 295.26 37.8398C295.89 37.9898 296.59 38.1598 297.33 38.3398C298.49 38.6398 299.65 38.9898 300.8 39.3998C301.99 39.7698 303.08 40.2598 304.05 40.8598C305.06 41.4598 305.86 42.2598 306.46 43.2698C307.06 44.2798 307.39 45.5498 307.47 47.0798C307.47 48.7198 307 50.2198 306.07 51.5598C305.14 52.8698 303.79 53.9098 302.04 54.6998C300.29 55.4798 298.16 55.8798 295.66 55.8798C292.75 55.8798 290.27 55.2598 288.21 54.0298C286.19 52.7998 284.87 50.8798 284.23 48.2598L290.67 46.3598L290.66 46.3698Z"
              fill="#171A1D"
            />
          </svg>
        </div>
        <nav>
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <a href="#buzz">Buzz</a>
        </nav>
        <button className="cta cta-dark">Get the plugin</button>
      </header>

      <main>
        <section className="panel hero-panel" id="home">
          <div className="hero-grid" />
          <div className="hero-copy">
            <p className="eyebrow">Chrome & Figma companion</p>
            <h1>
              Audit every pixel.
              <br />
              Ship with confidence.
            </h1>
            <p className="lede">
              Awwdit is the visual QA sidekick that overlays your production site, highlights brand drift, and gives you editable values without leaving the page.
            </p>
            <div className="hero-actions">
              <button className="cta cta-dark">Install for Chrome</button>
              <button className="cta cta-light">Preview the panel</button>
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
            <h2>Design lint, but for production.</h2>
            <p>Inspired by Roast, tuned for Awwdit. Friendly shapes, playful gradients, and practical details.</p>
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
            <h2>Hover. Audit. Fix. Repeat.</h2>
            <p>Every step mirrors the Roast energy with oversized typography and optimistic color.</p>
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
            <h2>Teams roasting bugs with Awwdit.</h2>
            <p>From boutique studios to enterprise design systems, everyone loves cleaner launches.</p>
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
              <button className="cta cta-dark">Add to Chrome</button>
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
              <button className="cta cta-dark">Start trial</button>
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
