import React from "react";
import "./styleguide.css";
import illustration from "./images/illustration.png";

const navLinks = [
  { label: "Impact", href: "#impact" },
  { label: "What we do", href: "#build" },
  { label: "Q1 Report", href: "#report" },
];

const stats = [
  { num: "$162,579", unit: "k", label: "in Community GDP" },
    { num: "67", unit: "%", label: "Developers in Africa shipped on Solana" },
  { num: "15",unit: "local", label: "Projects integrated Solana" },
    { num: "186",unit: "total", label: "IRL and Virtual Workshop and Events" },
];

const pillars = [
  {
    num: "01",
    icon: "◆",
    title: "Fund",
    body: "Grants and bounties for founders solving real problems. We back Nigerian teams with capital, not just encouragement.",
    link: "Apply for funding",
    href:"https://superteam.fun/earn/s/superteamnigeria",
  },
  {
    num: "02",
    icon: "★",
    title: "Build",
    body: "Hackathons, sprints, and co-working for serious builders. Ship your first mainnet product with people who've done it before.",
    link: "Build with us",
    href:"https://superteam.fun/build",
  },
  {
    num: "03",
    icon: "●",
    title: "Connect",
    body: "Warm intros to investors, mentors, and teams who get it. Your network becomes your superteam.",
    link: "Meet the network",
    href:"https://x.com/SuperteamNG",
  },
];



export default function SuperteamNigeriaHomepage() {
  return (
    <div className="sn-root">
      
      <nav className="nav">
        <div className="wordmark">Superteam Nigeria</div>
        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <button className="btn btn-arrow">Join the team</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="halftone" />
          <div className="hero-copyright">© 2026</div>

          <div className="hero-content">
            <div className="hero-eyebrow">Superteam Nigeria</div>
            <h1>
              Building what <em>Nigeria</em> builds next.
            </h1>
          
            <div className="hero-ctas">
                <a href="https://x.com/SuperteamNG" target="_blank" rel="noopener noreferrer" className="btn btn-arrow">Join Our Community</a>
                   <a href="https://drive.google.com/file/d/1YoXodiE5IgG-EzzfdXPNTt5f2lqboNcb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-arrow">See our Impact</a>
            </div>
          </div>

          <div className="hero-badge">
            <div className="q1-tile">Q1</div>
            <div className="q1-label">
              Impact
              <br />
              Report
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={illustration} className="hero-illustration" alt="Superteam Illustration" />

          <div className="logo-mark">
            <span className="sn">sn</span>
            <span className="flag" />
          </div>
        </div>
      </section>

      <section className="impact" id="impact">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">Q1 2026 · By the numbers</div>
            <h2>
              A quarter of <em>shipped</em> work, not slideware.
            </h2>
          </div>
          <p className="section-lede">
            The projects we funded. The builders we onboarded. The ground we
            covered.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <span className="stat-arrow">↗</span>
              <div className="stat-num">
                {s.num}
                {s.unit && <span className="unit">{s.unit}</span>}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="impact-cta">
             <a href="https://drive.google.com/file/d/1YoXodiE5IgG-EzzfdXPNTt5f2lqboNcb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-arrow">Read the Q1 Report</a>
        </div>
      </section>

      <section id="build">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">What we do</div>
            <h2>
              Fund. Build. <em>Connect.</em>
            </h2>
          </div>
        </div>

        <div className="pillars">
          {pillars.map((p) => (
            <div className="pillar" key={p.num}>
              <div className="pillar-num">{p.num}</div>
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="pillar-link">
                {p.link}
              </a>
            </div>
          ))}
        </div>
      </section>



      <section className="cta-section" id="report">
        <div className="halftone" />
        <div
          className="section-eyebrow"
          style={{ display: "block", marginBottom: 16 }}
        >
          Read our Q1 Report 
        </div>
        <h2 style={{ margin: "0 auto 40px", maxWidth: 800 }}>
          See what <em>is happening </em> in Nigeria
        </h2>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          <a href="https://drive.google.com/file/d/1YoXodiE5IgG-EzzfdXPNTt5f2lqboNcb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-arrow">Read the Q1 Report</a>
        </div>
      </section>


    </div>
  );
}
