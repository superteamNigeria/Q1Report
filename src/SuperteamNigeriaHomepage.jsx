import React from "react";
import "./styleguide.css";
import illustration from "./images/illustration.png";





export default function SuperteamNigeriaHomepage() {
  return (
    <div className="sn-root">
      
      <nav className="nav">
        <div className="wordmark">Superteam Nigeria</div>
        <div className="nav-links">
          <a href="https://x.com/SuperteamNG" target="_blank" rel="noopener noreferrer" className="btn btn-arrow">Join the community</a>
        </div>
      </nav>

 

      <section className="hero">
        <div className="hero-left">
          <div className="halftone" />
          <div className="hero-copyright">© 2026</div>

          <div className="hero-content">
            <div className="hero-eyebrow">Superteam Nigeria</div>
            <h1>
             Accelerating <em> Solana’s Adoption </em>  in Nigeria
            </h1>
          
            <div className="hero-ctas">
                   <a href="https://drive.google.com/file/d/1YoXodiE5IgG-EzzfdXPNTt5f2lqboNcb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-arrow">See full Report</a>
            </div>
          </div>

          <div className="hero-badge">
            <div className="q1-tile">Q1</div>
            <div className="q1-label">
             2026 Impact
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










    </div>
  );
}
