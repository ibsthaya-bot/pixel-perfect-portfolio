import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Portfolio" },
      { name: "description", content: "Premium portfolio of Alex Morgan, product designer & frontend engineer crafting refined digital experiences." },
      { property: "og:title", content: "Alex Morgan — Portfolio" },
      { property: "og:description", content: "Premium portfolio of Alex Morgan, product designer & frontend engineer." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
      { rel: "stylesheet", href: "/styles.css" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    const s = document.createElement("script");
    s.src = "/portfolio.js";
    s.async = true;
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="logo"><span className="logo-dot"></span>alex.morgan</a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <button id="theme-toggle" className="theme-toggle" aria-label="Toggle theme" aria-pressed="false">
              <span className="toggle-track">
                <span className="toggle-thumb"></span>
                <span className="toggle-icon sun" aria-hidden="true">☀</span>
                <span className="toggle-icon moon" aria-hidden="true">☾</span>
              </span>
            </button>
            <button id="menu-toggle" className="menu-toggle" aria-label="Open menu" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">Portfolio · 2026</p>
            <h1 className="hero-title">
              Designing <span className="grad">refined</span> digital products with intention &amp; craft.
            </h1>
            <p className="hero-sub">
              I'm Alex — a product designer and frontend engineer building premium interfaces for ambitious teams. Currently shaping design systems at independent studios.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#work">View selected work</a>
              <a className="btn btn-ghost" href="#contact">Get in touch →</a>
            </div>
            <div className="hero-stats">
              <div><strong>8+</strong><span>Years experience</span></div>
              <div><strong>40+</strong><span>Shipped products</span></div>
              <div><strong>12</strong><span>Industry awards</span></div>
            </div>
          </div>
          <div className="hero-orb" aria-hidden="true"></div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <header className="section-head">
              <p className="eyebrow">Selected Work</p>
              <h2>Projects I'm proud of</h2>
            </header>
            <div className="work-grid">
              <article className="project featured">
                <div className="project-media media-1"></div>
                <div className="project-body">
                  <span className="tag">Fintech · Web App</span>
                  <h3>Lumen — Modern banking dashboard</h3>
                  <p>A complete redesign of a neobank's analytics suite focused on clarity, speed and delight.</p>
                  <a href="#" className="link">Read case study →</a>
                </div>
              </article>
              <article className="project">
                <div className="project-media media-2"></div>
                <div className="project-body">
                  <span className="tag">SaaS · Design System</span>
                  <h3>Northwind UI Kit</h3>
                  <p>120+ accessible components powering an enterprise platform.</p>
                  <a href="#" className="link">Explore →</a>
                </div>
              </article>
              <article className="project">
                <div className="project-media media-3"></div>
                <div className="project-body">
                  <span className="tag">E‑commerce</span>
                  <h3>Atelier Noir</h3>
                  <p>Editorial storefront for a Parisian fashion house.</p>
                  <a href="#" className="link">Explore →</a>
                </div>
              </article>
              <article className="project">
                <div className="project-media media-4"></div>
                <div className="project-body">
                  <span className="tag">Mobile · iOS</span>
                  <h3>Field — Habit tracker</h3>
                  <p>A calm, minimal habit tracker with thoughtful motion.</p>
                  <a href="#" className="link">Explore →</a>
                </div>
              </article>
              <article className="project">
                <div className="project-media media-5"></div>
                <div className="project-body">
                  <span className="tag">Branding · Web</span>
                  <h3>Helio Studio</h3>
                  <p>Identity & website for a renewable energy startup.</p>
                  <a href="#" className="link">Explore →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="container">
            <header className="section-head">
              <p className="eyebrow">Capabilities</p>
              <h2>Skills &amp; tools</h2>
            </header>
            <div className="skills-grid">
              <div className="skill"><h4>Product Design</h4><p>End‑to‑end product thinking from research to ship.</p></div>
              <div className="skill"><h4>Design Systems</h4><p>Scalable, tokenized component libraries.</p></div>
              <div className="skill"><h4>Frontend</h4><p>HTML, CSS, TypeScript, React, accessibility first.</p></div>
              <div className="skill"><h4>Motion</h4><p>Purposeful micro‑interactions and transitions.</p></div>
              <div className="skill"><h4>Prototyping</h4><p>Figma, Framer, code prototypes.</p></div>
              <div className="skill"><h4>Brand</h4><p>Visual identity, typography, art direction.</p></div>
              <div className="skill"><h4>User Research</h4><p>Interviews, usability testing, synthesis.</p></div>
              <div className="skill"><h4>Workshops</h4><p>Facilitation for cross‑functional teams.</p></div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div className="about-photo" aria-hidden="true"></div>
            <div>
              <p className="eyebrow">About</p>
              <h2>A designer who codes — and ships.</h2>
              <p className="lead">
                For nearly a decade I've partnered with founders and design teams to turn fuzzy ideas into refined, performant products. I care about typography, motion, and making complex systems feel obvious.
              </p>
              <p className="lead">
                Outside of work you'll find me cycling, brewing pour‑over coffee, and collecting obscure synthesizers.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="container contact-inner">
            <p className="eyebrow">Contact</p>
            <h2>Have a project in mind?</h2>
            <p className="lead">I'm currently accepting select engagements for Q3 2026.</p>
            <a href="mailto:hello@alexmorgan.design" className="btn btn-primary big">hello@alexmorgan.design</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Alex Morgan. Crafted with care.</span>
          <div className="socials">
            <a href="#">Twitter</a>
            <a href="#">Dribbble</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}
