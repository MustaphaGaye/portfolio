import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('ALL');

  const projectList = [
    {
      id: 'PROJ-01',
      category: 'TOOLING',
      title: 'VulnScope — Automated Attack Surface & Recon Engine',
      subtitle: 'Bug Bounty Reconnaissance & Subdomain Enumeration Pipeline',
      description: 'A modular, high-speed Python tool engineered to automate passive and active attack surface mapping for large-scope bug bounty targets. Orchestrates DNS discovery, live HTTP probing, and CORS misconfiguration audits.',
      impact: 'Significantly streamlined asset discovery; detects hidden endpoints and exposed subdomains across 500+ host targets in under 8 minutes.',
      tags: ['Python 3', 'AsyncIO', 'Nmap Automation', 'Subfinder', 'Docker', 'Bug Bounty'],
      metrics: '70% Faster Recon',
      severityBadge: 'TOOL DEVELOPMENT',
      links: {
        github: 'https://github.com',
        report: '#'
      }
    },
    {
      id: 'PROJ-02',
      category: 'PENTESTING',
      title: 'Full-Scope Web Application Security Assessment',
      subtitle: 'End-to-End Penetration Test on Modern Microservices Architecture',
      description: 'Simulated a black-box and gray-box penetration test targeting modern single-page applications and REST APIs. Uncovered high-severity vulnerabilities including BOLA (Broken Object Level Authorization), Blind SQLi, and Stored XSS.',
      impact: 'Successfully chained an IDOR flaw with an unvalidated password reset token endpoint to demonstrate full Account Takeover (ATO). Authored executive CVSS 3.1 report with patch validation code.',
      tags: ['Burp Suite Pro', 'OWASP Top 10', 'Postman', 'SQLMap', 'API Security', 'CVSS 3.1'],
      metrics: 'Critical PoC Validated',
      severityBadge: 'WEB APP AUDIT',
      links: {
        github: 'https://github.com',
        report: '#'
      }
    },
    {
      id: 'PROJ-03',
      category: 'CTF_LABS',
      title: 'Offensive Security Lab & CTF Writeup Repository',
      subtitle: 'Hands-on Privilege Escalation & Exploit Analysis on 35+ Machines',
      description: 'A curated technical knowledge base of detailed walkthroughs covering Hack The Box and TryHackMe machines. Documents real-world exploitation paths from initial foothold to root privilege escalation.',
      impact: 'Deconstructs complex attack vectors including Linux SUID abuse, misconfigured NFS shares, vulnerable sudo tokens, and Active Directory Kerberoasting.',
      tags: ['Linux PrivEsc', 'Metasploit', 'Ghidra', 'Wireshark', 'Bash', 'TryHackMe'],
      metrics: '35+ Machines Rooted',
      severityBadge: 'LAB RESEARCH',
      links: {
        github: 'https://github.com',
        report: '#'
      }
    },
    {
      id: 'PROJ-04',
      category: 'BUG_BOUNTY',
      title: 'Bug Bounty Responsible Disclosure Reports',
      subtitle: 'Real-World Vulnerability Findings across Live Production Scopes',
      description: 'Documented ethical vulnerability submissions adhering to responsible disclosure standards. Focused on business logic flaws, sensitive credential leakage in client-side bundles, and access control oversights.',
      impact: 'Earned multiple valid triage confirmations and Hall of Fame acknowledgments for protecting user data without disrupting production service availability.',
      tags: ['Bugcrowd', 'HackerOne', 'Responsible Disclosure', 'IDOR', 'CORS Audit'],
      metrics: 'Valid Disclosures',
      severityBadge: 'REAL-WORLD HUNTING',
      links: {
        github: 'https://github.com',
        report: '#'
      }
    }
  ];

  const filteredProjects = filter === 'ALL' 
    ? projectList 
    : projectList.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <div className="projects-header-top">
            <div>
              <span className="section-pretitle">// OFFENSIVE RESEARCH & ASSESSMENTS</span>
              <h2 className="section-maintitle">Security Projects & Case Studies</h2>
            </div>
            <div className="projects-filter-tabs">
              <button 
                className={`filter-btn ${filter === 'ALL' ? 'active' : ''}`}
                onClick={() => setFilter('ALL')}
              >
                ALL [4]
              </button>
              <button 
                className={`filter-btn ${filter === 'PENTESTING' ? 'active' : ''}`}
                onClick={() => setFilter('PENTESTING')}
              >
                PENTESTS
              </button>
              <button 
                className={`filter-btn ${filter === 'TOOLING' ? 'active' : ''}`}
                onClick={() => setFilter('TOOLING')}
              >
                SECURITY TOOLS
              </button>
              <button 
                className={`filter-btn ${filter === 'BUG_BOUNTY' ? 'active' : ''}`}
                onClick={() => setFilter('BUG_BOUNTY')}
              >
                BUG BOUNTY
              </button>
            </div>
          </div>
          <p className="section-subtitle">
            Authentic, practical cybersecurity work—spanning automated recon tools, structured web application 
            penetration tests, offensive lab writeups, and responsible bug bounty disclosures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-cards-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-cyber-card">
              
              {/* Card Top Metadata */}
              <div className="project-card-topbar">
                <div className="project-id-badge">
                  <span className="mono text-muted">{project.id}</span>
                  <span className="badge badge-cyan">{project.severityBadge}</span>
                </div>
                <div className="project-metric-pill">
                  <span className="metric-icon">&#9650;</span>
                  <span className="mono">{project.metrics}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-heading">{project.title}</h3>
                <h4 className="project-subheading">{project.subtitle}</h4>
                <p className="project-description-text">{project.description}</p>
                
                <div className="project-impact-box">
                  <span className="impact-label mono text-accent">&gt; Key Outcome:</span>
                  <p className="impact-text">{project.impact}</p>
                </div>
              </div>

              {/* Card Footer: Tech Stack & Action Links */}
              <div className="project-card-footer">
                <div className="project-tech-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions-row">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-project-link">
                    <span>Source Code</span> &rarr;
                  </a>
                  <a href="#contact" className="btn-project-link-secondary">
                    <span>Discuss Findings</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
