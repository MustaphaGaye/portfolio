import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        <div className="nav-brand">
          <span className="terminal-prompt-sym">$</span>
          <span className="brand-user">mustapha-gaye</span>
          <span className="brand-path">@sec-ops</span>
          <span className="cursor-pulse">_</span>
        </div>

        <div className="nav-system-status">
          <span className="status-dot"></span>
          <span className="status-label">SYS_STATUS:</span>
          <span className="status-val">ACTIVE &bull; HUNTING</span>
        </div>

        <nav className="nav-links-desktop">
          <a href="#hero" className="nav-item">
            <span className="item-prefix">//</span> Overview
          </a>
          <a href="#about" className="nav-item">
            <span className="item-prefix">//</span> Dossier
          </a>
          <a href="#projects" className="nav-item">
            <span className="item-prefix">//</span> Security_Projects
          </a>
          <a href="#contact" className="nav-item nav-item-cta">
            Transmit &gt;
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className={`hamburger-btn ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="mobile-nav-drawer">
          <a href="#hero" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="text-accent">&gt;</span> ./overview.sh
          </a>
          <a href="#about" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="text-accent">&gt;</span> ./security_dossier.sh
          </a>
          <a href="#projects" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="text-accent">&gt;</span> ./security_projects.sh
          </a>
          <a href="#contact" className="mobile-nav-link text-accent" onClick={() => setMenuOpen(false)}>
            <span className="text-accent">&gt;</span> ./initiate_contact.sh
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
