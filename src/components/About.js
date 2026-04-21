import React from 'react';

export default function About() {
  const highlights = [
    { label: 'Location', value: 'Islamabad, Pakistan' },
    { label: 'Phone', value: '0330-4377700' },
    { label: 'Email', value: 'asmaijaz3103@gmail.com' },
    { label: 'LinkedIn', value: 'asma-ijaz-', link: 'https://www.linkedin.com/in/asma-ijaz-/' },
    { label: 'Education', value: 'BS Computer Science — UET Taxila' },
    { label: 'Availability', value: 'Open to new roles' },
  ];

  const s = {
    section: { padding: '100px 0', background: 'rgba(17,17,24,0.5)' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' },
    badge: {
      display: 'inline-block',
      fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '2px',
      color: '#e8501a', textTransform: 'uppercase',
      border: '1px solid rgba(232,80,26,0.3)',
      padding: '4px 12px', borderRadius: 20, marginBottom: 20,
    },
    p: { color: '#8a8a9a', fontSize: 16, lineHeight: 1.85, marginBottom: 18 },
    highlight: { color: '#f0ede8', fontWeight: 500 },
    teal: { color: '#0ea47a' },
    infoGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginTop: 32 },
    infoItem: { display: 'flex', flexDirection: 'column', gap: 2 },
    infoLabel: {
      fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '1.5px',
      color: '#555568', textTransform: 'uppercase',
    },
    infoValue: { fontSize: 14, color: '#f0ede8' },
    card: {
      background: 'rgba(22,22,31,0.8)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 12, padding: '32px',
      position: 'relative', overflow: 'hidden',
    },
    cardGlow: {
      position: 'absolute', top: -60, right: -60,
      width: 180, height: 180, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(14,164,122,0.1) 0%, transparent 70%)',
      pointerEvents: 'none',
    },
    roleTag: {
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'rgba(14,164,122,0.08)', border: '1px solid rgba(14,164,122,0.2)',
      borderRadius: 6, padding: '10px 16px', marginBottom: 12,
      width: '100%',
    },
    roleIcon: { fontSize: 18 },
    roleText: { fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#f0ede8' },
    roleSubtext: { fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#0ea47a', marginLeft: 'auto' },
  };

  const roles = [
    { icon: '🛡️', title: 'QA Lead / End-to-End Owner', tag: 'Primary' },
    { icon: '📋', title: 'Product Owner', tag: 'SWAI · VSI-AI' },
    { icon: '🏗️', title: 'Project Manager (QA scope)', tag: 'Agile' },
    { icon: '☁️', title: 'DevOps & Cloud Support', tag: 'AWS · CI/CD' },
  ];

  return (
    <section id="about" style={s.section}>
      <div className="container">
        <div style={s.grid} className="about-grid">
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Quality is not<br />
              <span style={{ color: '#0ea47a' }}>an act — it's a habit.</span>
            </h2>
            <p style={s.p}>
              I'm a <span style={s.highlight}>Manual SQA Engineer</span> with 3+ years of experience delivering
              reliable software across SaaS, web, mobile, and API-based platforms. I bring a holistic view
              of quality — from writing the first test case to signing off on production releases.
            </p>
            <p style={s.p}>
              Beyond testing, I've stepped into <span style={s.highlight}>Product Owner</span> and{' '}
              <span style={s.highlight}>QA Lead</span> roles on AI-powered products like{' '}
              <span style={s.teal}>SWAI</span> and <span style={s.teal}>Vector Systems AI</span>,
              managing backlogs, sprint planning, and stakeholder communication.
            </p>
            <p style={s.p}>
              I complement my QA expertise with a <span style={s.highlight}>DevOps background</span> —
              Git, CI/CD pipelines, AWS, and Linux — ensuring quality is embedded at every stage
              of the delivery lifecycle.
            </p>
            <div style={s.infoGrid}>
              {highlights.map(h => (
                <div key={h.label} style={s.infoItem}>
                  <span style={s.infoLabel}>{h.label}</span>
                  {h.link
                    ? <a href={h.link} target="_blank" rel="noreferrer" style={{ ...s.infoValue, color: '#0ea47a', fontSize: 13 }}>{h.value} ↗</a>
                    : <span style={{ ...s.infoValue, fontSize: h.label === 'Email' ? 13 : 14 }}>{h.value}</span>
                  }
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={s.card}>
              <div style={s.cardGlow} />
              <p style={{ ...s.infoLabel, marginBottom: 20 }}>Roles & Responsibilities</p>
              {roles.map(r => (
                <div key={r.title} style={s.roleTag}>
                  <span style={s.roleIcon}>{r.icon}</span>
                  <span style={s.roleText}>{r.title}</span>
                  <span style={s.roleSubtext}>{r.tag}</span>
                </div>
              ))}
              <div style={{ marginTop: 28, padding: '20px', background: 'rgba(14,164,122,0.05)', borderRadius: 8, border: '1px solid rgba(14,164,122,0.15)' }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#0ea47a', lineHeight: 1.7 }}>
                  🏆 Runner-up · P@SHA ICT Awards 2025<br />
                  <span style={{ color: '#555568' }}>// Led QA for SWAI from inception to production</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
