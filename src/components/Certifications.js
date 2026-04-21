import React from 'react';

const certs = [
  {
    title: 'Lean Six Sigma White Belt',
    issuer: 'Council for Six Sigma Certification',
    icon: '⚪',
    color: '#0ea47a',
  },
  {
    title: 'Six Sigma Yellow Belt',
    issuer: '6Sigma Study E-Learner',
    icon: '🟡',
    color: '#e8501a',
  },
  {
    title: 'Scrum Fundamentals Certified',
    issuer: 'Scrum Study',
    icon: '🏃',
    color: '#0ea47a',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman Academy',
    icon: '📮',
    color: '#e8501a',
  },
  {
    title: 'AWS DevOps Training (Certified)',
    issuer: 'Techlift · PSEB & P@SHA Sponsored',
    icon: '☁️',
    color: '#0ea47a',
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'University of Engineering and Technology Taxila',
    period: '2017 – 2021',
    icon: '🎓',
  },
  {
    degree: 'FSc. Pre-Engineering',
    school: 'Army Public College, Saddar Karachi',
    period: '2015 – 2017',
    icon: '📚',
  },
];

export default function Certifications() {
  const s = {
    section: { padding: '100px 0', background: 'rgba(17,17,24,0.5)' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 },
    certList: { display: 'flex', flexDirection: 'column', gap: 12 },
    certCard: {
      display: 'flex', alignItems: 'center', gap: 16,
      background: 'rgba(22,22,31,0.8)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 10, padding: '16px 20px',
      transition: 'border-color 0.2s, transform 0.2s',
    },
    icon: {
      width: 44, height: 44, borderRadius: 10,
      background: 'rgba(14,164,122,0.1)',
      border: '1px solid rgba(14,164,122,0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 20, flexShrink: 0,
    },
    certTitle: { fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#f0ede8', fontWeight: 500, marginBottom: 3 },
    certIssuer: { fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#555568', letterSpacing: '0.5px' },
    eduList: { display: 'flex', flexDirection: 'column', gap: 16 },
    eduCard: {
      background: 'rgba(22,22,31,0.8)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 10, padding: '24px 24px',
      transition: 'border-color 0.2s',
    },
    eduRow: { display: 'flex', alignItems: 'flex-start', gap: 14 },
    eduIcon: { fontSize: 24, marginTop: 2 },
    eduDegree: { fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 600, color: '#f0ede8', marginBottom: 4 },
    eduSchool: { fontSize: 13, color: '#8a8a9a', marginBottom: 6 },
    eduPeriod: {
      fontFamily: "'DM Mono', monospace", fontSize: 11,
      color: '#0ea47a', letterSpacing: '1px',
    },
    achievement: {
      marginTop: 32,
      background: 'linear-gradient(135deg, rgba(14,164,122,0.08), rgba(14,164,122,0.03))',
      border: '1px solid rgba(14,164,122,0.2)',
      borderRadius: 10, padding: '24px',
    },
    achieveTitle: { fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: '#f0ede8', marginBottom: 8 },
    achieveText: { fontSize: 13, color: '#8a8a9a', lineHeight: 1.7 },
    achieveTeal: { color: '#0ea47a', fontWeight: 500 },
  };

  return (
    <section id="certifications" style={s.section}>
      <div className="container">
        <span className="section-label">Credentials</span>
        <h2 className="section-title">Certifications & Education</h2>

        <div style={s.grid} className="certs-grid">
          <div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '2px', color: '#555568', textTransform: 'uppercase', marginBottom: 20 }}>
              Certifications
            </p>
            <div style={s.certList}>
              {certs.map(c => (
                <div key={c.title} style={s.certCard}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(14,164,122,0.25)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  <div style={{ ...s.icon, background: c.color === '#e8501a' ? 'rgba(232,80,26,0.1)' : 'rgba(14,164,122,0.1)', borderColor: c.color === '#e8501a' ? 'rgba(232,80,26,0.2)' : 'rgba(14,164,122,0.2)' }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={s.certTitle}>{c.title}</p>
                    <p style={s.certIssuer}>{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '2px', color: '#555568', textTransform: 'uppercase', marginBottom: 20 }}>
              Education
            </p>
            <div style={s.eduList}>
              {education.map(e => (
                <div key={e.degree} style={s.eduCard}
                  onMouseEnter={el => el.currentTarget.style.borderColor = 'rgba(14,164,122,0.2)'}
                  onMouseLeave={el => el.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}>
                  <div style={s.eduRow}>
                    <span style={s.eduIcon}>{e.icon}</span>
                    <div>
                      <p style={s.eduDegree}>{e.degree}</p>
                      <p style={s.eduSchool}>{e.school}</p>
                      <span style={s.eduPeriod}>{e.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={s.achievement}>
              <p style={s.achieveTitle}>🏆 Achievement Highlight</p>
              <p style={s.achieveText}>
                Led QA end-to-end for <span style={s.achieveTeal}>SWAI</span> (AI-powered Sales Intelligence Platform)
                from inception to production. The product was recognized as{' '}
                <span style={s.achieveTeal}>Runner-up at the P@SHA ICT Awards 2025</span> — Pakistan's
                leading technology innovation awards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .certs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
