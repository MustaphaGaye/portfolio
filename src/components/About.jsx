import React from 'react';
import './About.css';

const About = () => {
  const methodology = [
    {
      step: '01',
      phase: 'RECONNAISSANCE & OSINT',
      desc: 'Attack surface discovery through passive DNS enumeration, technology stack profiling, certificate transparency monitoring, and open-source intelligence.',
      tags: ['Subdomain Enum', 'Tech Profiling', 'OSINT']
    },
    {
      step: '02',
      phase: 'VULNERABILITY SCANNING & MAPPING',
      desc: 'Active service fingerprinting, port auditing, endpoint discovery, and automated fuzzing to detect misconfigurations and unpatched vulnerabilities.',
      tags: ['Nmap', 'FFUF', 'Port Auditing']
    },
    {
      step: '03',
      phase: 'MANUAL EXPLOITATION & PROOF OF CONCEPT',
      desc: 'Rigorous manual testing focused on the OWASP Top 10, broken access control (IDOR/BOLA), injection vectors, and custom payload crafting.',
      tags: ['Burp Suite Pro', 'OWASP Top 10', 'PoC Crafting']
    },
    {
      step: '04',
      phase: 'POST-EXPLOITATION & IMPACT ASSESSMENT',
      desc: 'Evaluating real-world organizational risk, privilege escalation potential, lateral movement feasibility, and sensitive data exposure.',
      tags: ['Risk Modeling', 'PrivEsc', 'CVSS 3.1']
    },
    {
      step: '05',
      phase: 'REMEDIATION & ACTIONABLE REPORTING',
      desc: 'Authoring clean, professional technical reports complete with step-by-step reproduction steps, remediation code snippets, and executive summaries.',
      tags: ['Remediation Guides', 'Executive Summaries', 'Patch Verification']
    }
  ];

  const toolsCategories = [
    {
      category: 'Web Application Pentesting',
      items: ['Burp Suite Professional', 'OWASP ZAP', 'SQLMap', 'FFUF / Gobuster', 'Postman', 'Browser DevTools']
    },
    {
      category: 'Reconnaissance & Network Auditing',
      items: ['Nmap & Nmap NSE', 'Wireshark', 'Subfinder', 'Amass', 'Metasploit Framework', 'Netcat']
    },
    {
      category: 'Scripting & Automation',
      items: ['Python 3 (Exploit Prototyping & Recon)', 'Bash Scripting', 'Linux CLI', 'Git & Version Control']
    },
    {
      category: 'Environments & Platforms',
      items: ['Kali Linux', 'Parrot Security OS', 'TryHackMe (Offensive Path)', 'Hack The Box', 'Docker']
    }
  ];

  const certifications = [
    {
      id: 'SEC-CERT-01',
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google (Coursera)',
      date: 'Verified Credential',
      skills: 'Network Security, Linux, SQL, Python for Cybersecurity, SIEM Tools, Incident Response',
      status: 'VERIFIED'
    },
    {
      id: 'SEC-CERT-02',
      title: 'IBM Cybersecurity Analyst Professional Certificate',
      issuer: 'IBM (Coursera)',
      date: 'Verified Credential',
      skills: 'Threat Intelligence, Vulnerability Management, System Forensics, Network Penetration Testing',
      status: 'VERIFIED'
    },
    {
      id: 'SEC-LAB-03',
      title: 'Continuous Offensive Labs & Practical Training',
      issuer: 'TryHackMe & Hack The Box',
      date: 'In Progress / Active',
      skills: 'Web & Linux Privilege Escalation, Buffer Overflows, Active Directory Basics, CTF Writeups',
      status: 'ACTIVE_STUDY'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-pretitle">// SECURITY DOSSIER & METHODOLOGY</span>
          <h2 className="section-maintitle">Offensive Mindset, Defensive Value</h2>
          <p className="section-subtitle">
            Ethical hacking isn't about running automated scanners—it is a disciplined methodology 
            combining deep curiosity, thorough reconnaissance, and creative exploitation to ensure 
            vulnerabilities are remediated before adversaries find them.
          </p>
        </div>

        {/* Dossier Grid */}
        <div className="about-content-grid">
          
          {/* Methodology Card */}
          <div className="dossier-card methodology-card">
            <div className="dossier-card-header">
              <div className="card-header-left">
                <span className="terminal-badge">PHASE_MAP</span>
                <h3 className="card-title">Penetration Testing Methodology</h3>
              </div>
              <span className="text-accent mono card-tag">[PTES_ALIGNED]</span>
            </div>

            <div className="methodology-steps">
              {methodology.map((item, idx) => (
                <div key={idx} className="methodology-step-item">
                  <div className="step-number-col">
                    <span className="step-num">{item.step}</span>
                    {idx < methodology.length - 1 && <span className="step-connector-line"></span>}
                  </div>
                  <div className="step-details-col">
                    <h4 className="step-phase-title">{item.phase}</h4>
                    <p className="step-desc">{item.desc}</p>
                    <div className="step-tags">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="step-tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Tactical Arsenal */}
          <div className="dossier-card tools-card">
            <div className="dossier-card-header">
              <div className="card-header-left">
                <span className="terminal-badge">ARSENAL</span>
                <h3 className="card-title">Offensive Security Toolkit</h3>
              </div>
              <span className="text-accent mono card-tag">[ACTIVE_STACK]</span>
            </div>

            <div className="tools-categories-list">
              {toolsCategories.map((group, gIdx) => (
                <div key={gIdx} className="tool-category-group">
                  <h4 className="tool-category-title">
                    <span className="text-accent">&gt;</span> {group.category}
                  </h4>
                  <div className="tool-chips-wrap">
                    {group.items.map((tool, tIdx) => (
                      <span key={tIdx} className="tool-chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications & Industry Credentials */}
        <div className="certifications-block">
          <div className="dossier-card cert-card-full">
            <div className="dossier-card-header">
              <div className="card-header-left">
                <span className="terminal-badge badge-green">CREDENTIALS</span>
                <h3 className="card-title">Certifications & Continuous Learning</h3>
              </div>
              <span className="text-accent mono card-tag">[VERIFIED_CLEARANCE]</span>
            </div>

            <div className="certifications-grid">
              {certifications.map((cert, cIdx) => (
                <div key={cIdx} className="cert-item-box">
                  <div className="cert-top-row">
                    <span className="cert-id-tag mono">{cert.id}</span>
                    <span className={`cert-status-badge ${cert.status === 'VERIFIED' ? 'verified' : 'in-progress'}`}>
                      {cert.status === 'VERIFIED' ? '● VERIFIED' : '⚡ IN PROGRESS'}
                    </span>
                  </div>
                  <h4 className="cert-name">{cert.title}</h4>
                  <div className="cert-issuer-row">
                    <span className="issuer-label">Authority:</span>
                    <span className="issuer-name">{cert.issuer}</span>
                  </div>
                  <p className="cert-skills-summary">{cert.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
