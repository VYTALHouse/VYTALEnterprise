const ventures = [
  {
    index: "01",
    name: "VYTAL Health",
    status: "ACTIVE · PRE-DEVELOPMENT",
    description:
      "Health, wellness, recovery and longevity systems—anchored by the VYTAL House flagship program.",
    accent: "health",
    href: "#priority",
  },
  {
    index: "02",
    name: "VYTAL Pouches",
    status: "ACTIVE · R&D",
    description:
      "A three-SKU functional pouch platform: DRIVE, CALM and REBOUND. Claims remain controlled until validated.",
    accent: "pouches",
    href: "#portfolio",
  },
  {
    index: "03",
    name: "VYTAL Branding",
    status: "ACTIVE · SYSTEM BUILD",
    description:
      "The Prism V, verbal identity, standards, packaging and omnichannel creative operating system.",
    accent: "brand",
    href: "#system",
  },
  {
    index: "04",
    name: "VYTAL Innovation",
    status: "CONTROLLED · CONCEPT",
    description:
      "AIR, SQ / Smart Pen and ONE remain diligence-stage concepts—not commercialized products.",
    accent: "innovation",
    href: "#system",
  },
];

const gates = [
  "Verify controlling sources",
  "Resolve approval dependencies",
  "Coordinate professional work",
  "Issue the decision package",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="VYTAL Enterprise home">
          <span className="prism-mark" aria-hidden="true">V</span>
          <span>VYTAL</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#portfolio">Portfolio</a>
          <a href="#priority">Priority</a>
          <a href="#system">System</a>
        </nav>
        <a className="header-cta" href="#contact">Partner access</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> VYTAL ENTERPRISE · 2026</p>
          <h1>Change Your <em>State.</em></h1>
          <p className="hero-lede">
            One operating system for health, performance, products and brand—built to move from disciplined diligence to measurable transformation.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#priority">View the enterprise priority <span>↗</span></a>
            <a className="text-action" href="#portfolio">Explore the ecosystem <span>↓</span></a>
          </div>
        </div>
        <div className="hero-orbit" aria-label="VYTAL portfolio overview">
          <div className="orbit-ring orbit-one" />
          <div className="orbit-ring orbit-two" />
          <div className="orbit-core"><span>V</span><small>PRISM SYSTEM</small></div>
          <span className="orbit-label label-health">HEALTH</span>
          <span className="orbit-label label-pouches">POUCHES</span>
          <span className="orbit-label label-brand">BRANDING</span>
          <span className="orbit-label label-innovation">INNOVATION</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Current enterprise signals">
        <div><strong>4</strong><span>portfolio lanes</span></div>
        <div><strong>14</strong><span>federated repositories</span></div>
        <div><strong>3</strong><span>working pouch SKUs</span></div>
        <div><strong>1</strong><span>source of truth</span></div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> THE ECOSYSTEM</p><h2>One umbrella.<br/>Four disciplined lanes.</h2></div>
          <p>Shared brand, governance and data controls. Separate owners, risk gates, claims and delivery roadmaps.</p>
        </div>
        <div className="venture-grid">
          {ventures.map((venture) => (
            <a className={`venture-card ${venture.accent}`} href={venture.href} key={venture.name}>
              <div className="card-top"><span>{venture.index}</span><span className="status-dot">● {venture.status}</span></div>
              <h3>{venture.name}</h3>
              <p>{venture.description}</p>
              <span className="card-link">Enter lane <b>↗</b></span>
            </a>
          ))}
        </div>
      </section>

      <section className="priority section" id="priority">
        <div className="priority-copy">
          <p className="eyebrow light"><span /> EXECUTION PRIORITY</p>
          <h2>VYTAL House flagship.<br/><em>Make the next decision traceable.</em></h2>
          <p>
            The flagship remains pre-development and pre-opening. Architecture,
            approvals, operating requirements and capital readiness advance
            through controlled, source-backed gates—not assumptions.
          </p>
          <div className="location-line"><span>PRE-DEVELOPMENT</span><span>APPROVAL-GATED</span><span>SOURCE-GROUNDED</span></div>
        </div>
        <div className="priority-panel">
          <div className="clock"><strong>NEXT</strong><span>GATE</span></div>
          <div className="gate-list">
            {gates.map((gate, index) => (
              <div key={gate}><span>0{index + 1}</span><p>{gate}</p><b>→</b></div>
            ))}
          </div>
          <p className="panel-note">A gate closes only when the evidence, owner, decision and downstream propagation are visible.</p>
        </div>
      </section>

      <section className="system section" id="system">
        <div className="system-kicker">THE VYTAL OPERATING SYSTEM</div>
        <div className="system-grid">
          <div><span>01</span><h3>Canon</h3><p>Verified decisions, status labels and contradiction control.</p></div>
          <div><span>02</span><h3>Evidence</h3><p>Source-linked files, owners, dates and approval state.</p></div>
          <div><span>03</span><h3>Execution</h3><p>Critical paths, gates, deliverables and accountable owners.</p></div>
          <div><span>04</span><h3>Distribution</h3><p>One message system adapted across every channel.</p></div>
        </div>
      </section>

      <footer id="contact">
        <div className="wordmark footer-mark"><span className="prism-mark" aria-hidden="true">V</span><span>VYTAL</span></div>
        <p>Partner communication proceeds through the approved VYTAL House business channel.</p>
        <p className="legal">Concept and planning information only. No representation of licensing, permitting, product approval or investment performance.</p>
      </footer>
    </main>
  );
}
