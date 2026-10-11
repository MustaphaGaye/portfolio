import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  const [typedOutput, setTypedOutput] = useState('');
  const commandOutput = ">> Target acquired: Web Application & Network Attack Surfaces\n>> Offensive mindset: Break before adversaries do\n>> Status: Available for Security Engagements & Bug Bounty Collaborations";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedOutput(commandOutput.slice(0, index));
      index++;
      if (index > commandOutput.length) {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Authentic Profile Photo */}
          <div className="hero-image-col">
            <div className="profile-card-wrapper">
              <div className="profile-hud-corner corner-tl"></div>
              <div className="profile-hud-corner corner-tr"></div>
              <div className="profile-hud-corner corner-bl"></div>
              <div className="profile-hud-corner corner-br"></div>
              
              <div className="profile-card-inner">
                <div className="profile-image-frame">
                  <img
                    src={profileImg}
                    alt="Mustapha Gaye — Ethical Hacker & Security Researcher"
                    className="profile-photo-clean"
                  />
                </div>
                
                <div className="profile-card-footer">
                  <div className="profile-id-info">
                    <span className="profile-name-tag">MUSTAPHA GAYE</span>
                    <span className="profile-role-tag">OFFENSIVE SECURITY SPECIALIST</span>
                  </div>
                  <div className="profile-status-pill">
                    <span className="status-live-dot"></span>
                    <span>HACKER_ID: #MG-0x7F</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal & Human-First Copy */}
          <div className="hero-content-col">
            <div className="hero-terminal-window">
              {/* Terminal Title Bar */}
              <div className="terminal-topbar">
                <div className="terminal-dots">
                  <span className="t-dot dot-close"></span>
                  <span className="t-dot dot-min"></span>
                  <span className="t-dot dot-max"></span>
                </div>
                <div className="terminal-tab-title">
                  bash &mdash; root@mustapha-gaye:~/offensive-ops
                </div>
                <div className="terminal-security-badge">
                  SEC-LEVEL: 4
                </div>
              </div>

              {/* Terminal Screen Content */}
              <div className="terminal-body-content">
                <div className="terminal-cmd-row">
                  <span className="terminal-ps1">root@mustapha-gaye:~$</span>
                  <span className="terminal-typed-cmd">cat profile.txt</span>
                </div>

                <div className="hero-bio-container">
                  <span className="hero-eyebrow">// ETHICAL HACKER &bull; PENETRATION TESTER</span>
                  <h1 className="hero-headline">
                    Hello, I'm <span className="hero-name-accent">Mustapha Gaye</span>.
                  </h1>
                  
                  <p className="hero-statement">
                    Passionate about offensive cybersecurity, penetration testing, and ethical hacking. 
                    I systematically audit web applications and infrastructure to uncover critical vulnerabilities 
                    before malicious actors exploit them. Actively discovering real-world security flaws through 
                    bug bounty programs, continuous offensive labs, and professional certifications.
                  </p>

                  <div className="terminal-stdout-box">
                    <pre className="stdout-text">{typedOutput}</pre>
                    <span className="cursor-block"></span>
                  </div>

                  <div className="hero-skills-chips">
                    <span className="chip">[✓] Web App Pentesting (OWASP Top 10)</span>
                    <span className="chip">[✓] Bug Bounty Hunting</span>
                    <span className="chip">[✓] Network Vulnerability Auditing</span>
                    <span className="chip">[✓] Coursera Certified (Google & IBM)</span>
                  </div>
                </div>

                {/* Hero Call to Action Buttons */}
                <div className="hero-actions-row">
                  <a href="#projects" className="btn-cyber-primary">
                    <span>View Projects</span> &rarr;
                  </a>
                  <a href="#about" className="btn-cyber-secondary">
                    <span>Security Dossier</span>
                  </a>
                  <a href="#contact" className="btn-cyber-secondary">
                    <span>Initiate Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
