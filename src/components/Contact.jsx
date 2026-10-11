import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-pretitle">// ENCRYPTED TRANSMISSION CHANNEL</span>
          <h2 className="section-maintitle">Initiate Contact: Mustapha Gaye</h2>
          <p className="section-subtitle">
            Open for penetration testing inquiries, bug bounty collaborations, security research discussions, 
            or professional cybersecurity opportunities. Send an encrypted communication below.
          </p>
        </div>

        <div className="contact-terminal-card">
          {/* Terminal Window Topbar */}
          <div className="contact-topbar">
            <div className="contact-window-controls">
              <span className="window-dot dot-red"></span>
              <span className="window-dot dot-yellow"></span>
              <span className="window-dot dot-green"></span>
            </div>
            <div className="contact-topbar-address">
              <span className="mono">secure-transmission@mustapha-gaye:~</span>
            </div>
            <div className="contact-status-indicator">
              <span className="encryption-badge mono">[256-BIT_E2EE]</span>
            </div>
          </div>

          {submitted ? (
            <div className="transmission-success-pane">
              <div className="success-cmd-header mono text-accent">
                root@mustapha-gaye:~$ ./dispatch_transmission.sh --verify
              </div>
              <div className="success-terminal-feed">
                <p className="feed-line success-green">[✓] PAYLOAD_PARSED: 100% verified</p>
                <p className="feed-line success-green">[✓] TRANSMISSION_DELIVERED: Encrypted packet dispatched</p>
                <p className="feed-line">[&gt;] Awaiting review from Mustapha Gaye (Response window: 24–48hrs)</p>
                <p className="feed-line text-muted">[i] Communication logged in secure audit trail.</p>
              </div>
              <button 
                className="btn-cyber-primary" 
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ name: '', email: '', subject: '', message: '' });
                }}
              >
                &larr; Send Another Transmission
              </button>
            </div>
          ) : (
            <form className="contact-terminal-form" onSubmit={handleSubmit}>
              <div className="form-two-col-row">
                
                {/* Caller Name */}
                <div className="form-field-group">
                  <label htmlFor="contact-name" className="field-label-mono">
                    <span className="text-accent">root@mustapha-gaye:~$</span> ./set_callsign.sh
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name or handle..."
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="cyber-text-input"
                  />
                </div>

                {/* Caller Email */}
                <div className="form-field-group">
                  <label htmlFor="contact-email" className="field-label-mono">
                    <span className="text-accent">root@mustapha-gaye:~$</span> ./set_return_uplink.sh
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address..."
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="cyber-text-input"
                  />
                </div>

              </div>

              {/* Engagement Type */}
              <div className="form-field-group">
                <label htmlFor="contact-subject" className="field-label-mono">
                  <span className="text-accent">root@mustapha-gaye:~$</span> ./set_engagement_scope.sh
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Subject (e.g. Web App Pentest, Bug Bounty Collaboration, Job Inquiry)..."
                  value={formState.subject}
                  onChange={handleChange}
                  className="cyber-text-input"
                />
              </div>

              {/* Message Payload */}
              <div className="form-field-group">
                <label htmlFor="contact-message" className="field-label-mono">
                  <span className="text-accent">root@mustapha-gaye:~$</span> ./compose_encrypted_payload.sh
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Detail your inquiry, project scope, or security discussion..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="cyber-textarea-input"
                ></textarea>
              </div>

              {/* Form Action */}
              <div className="form-footer-action">
                <button type="submit" id="contact-submit" className="btn-cyber-primary">
                  <span>Transmit Encrypted Packet</span> &rarr;
                </button>
                <span className="transmission-security-note mono">
                  // PGP / SHA-256 Verified Dispatch
                </span>
              </div>

            </form>
          )}

        </div>

        {/* Alternate Channels */}
        <div className="contact-channels-bar">
          <div className="channels-title mono text-muted">
            [DIRECT_CHANNELS]:
          </div>
          <div className="channels-list">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-link mono"
            >
              <span className="text-accent">[01]</span> GitHub.sh
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-link mono"
            >
              <span className="text-accent">[02]</span> LinkedIn.sh
            </a>
            <a 
              href="mailto:mustaphagaye@gmail.com" 
              className="channel-link mono"
            >
              <span className="text-accent">[03]</span> mustaphagaye@gmail.com
            </a>
          </div>
        </div>

      </div>

      {/* Global Clean Footer */}
      <footer className="global-site-footer">
        <div className="container">
          <div className="footer-flex-row">
            <div className="footer-left mono">
              <span className="text-accent">root@mustapha-gaye:~$</span> echo "&copy; {new Date().getFullYear()} Mustapha Gaye &mdash; Ethical Hacker &amp; Security Researcher"
            </div>
            <div className="footer-right mono text-muted">
              [PTES_METHODOLOGY &bull; OWASP_STANDARDS]
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
