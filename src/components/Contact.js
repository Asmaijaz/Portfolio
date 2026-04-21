import React from 'react';

export default function Contact() {
  const s = {
    section: { padding: '100px 0 0' },
    inner: {
      background: 'rgba(22,22,31,0.6)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16, padding: '72px 64px',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
      marginBottom: 0,
    },
    glow: {
      position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)',
      width: 500, height: 300, borderRadius: '50%',
      background: 'radial-gradient(ellipse, rgba(14,164,122,0.08) 0%, transparent 70%)',
      pointerEvents: 'none',
    },
    tag: {
      display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24,
      fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '2px',
      color: '#0ea47a', textTransform: 'uppercase',
      border: '1px solid rgba(14,164,122,0.3)',
      padding: '5px 14px', borderRadius: 20,
    },
    h2: {
      fontFamily: "'Syne', sans-serif",
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: 800, color: '#f0ede8', marginBottom: 16, lineHeight: 1.1,
    },
    teal: { color: '#0ea47a' },
    p: { fontSize: 16, color: '#8a8a9a', maxWidth: 460, margin: '0 auto 40px', lineHeight: 1.8 },
    actions: { display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 },
    btnPrimary: {
      fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: '1px',
      background: '#0ea47a', color: '#0a0a0f',
      padding: '14px 36px', borderRadius: 4,
      textDecoration: 'none', textTransform: 'uppercase', fontWeight: 500,
      transition: 'background 0.2s', display: 'inline-block',
    },
    btnSecondary: {
      fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: '1px',
      background: 'transparent', color: '#f0ede8',
      padding: '14px 36px', borderRadius: 4,
      border: '1px solid rgba(255,255,255,0.15)',
      textDecoration: 'none', textTransform: 'uppercase',
      transition: 'all 0.2s', display: 'inline-block',
    },
    socials: { display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' },
    socialLink: {
      fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#555568',
      textDecoration: 'none', letterSpacing: '1px',
      transition: 'color 0.2s',
    },
    footer: {
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '28px 32px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 12,
    },
    footerLeft: { fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#555568' },
    footerRight: { fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#555568' },
    footerTeal: { color: '#0ea47a' },
  };

  return (
    <section id="contact" style={s.section}>
      <div className="container">
        <div style={s.inner}>
          <div style={s.glow} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={s.tag}>● Open to Opportunities</span>
            <h2 style={s.h2}>
              Let's Build<br />
              <span style={s.teal}>Quality Together</span>
            </h2>
            <p style={s.p}>
              Looking for a QA Engineer who brings ownership, precision, and DevOps awareness
              to every release? Let's talk.
            </p>
            <div style={s.actions}>
              <a href="mailto:asmaijaz3103@gmail.com" style={s.btnPrimary}
                onMouseEnter={e => e.target.style.background = '#1fd49e'}
                onMouseLeave={e => e.target.style.background = '#0ea47a'}>
                Send Email
              </a>
              <a href="https://www.linkedin.com/in/asma-ijaz-/" target="_blank" rel="noreferrer"
                style={{ ...s.btnSecondary, color: '#0ea47a', borderColor: 'rgba(14,164,122,0.3)' }}
                onMouseEnter={e => e.target.style.background = 'rgba(14,164,122,0.08)'}
                onMouseLeave={e => e.target.style.background = 'transparent'}>
                LinkedIn Profile ↗
              </a>
            </div>
            <div style={s.socials}>
              <a href="tel:+923304377700" style={s.socialLink}
                onMouseEnter={e => e.target.style.color = '#0ea47a'}
                onMouseLeave={e => e.target.style.color = '#555568'}>
                📞 0330-4377700
              </a>
              <a href="mailto:asmaijaz3103@gmail.com" style={s.socialLink}
                onMouseEnter={e => e.target.style.color = '#0ea47a'}
                onMouseLeave={e => e.target.style.color = '#555568'}>
                ✉ asmaijaz3103@gmail.com
              </a>
              <span style={s.socialLink}>📍 Islamabad, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
      <footer style={s.footer}>
        <span style={s.footerLeft}>
          © 2025 <span style={s.footerTeal}>Asma Ijaz</span> · Software Quality Assurance Engineer
        </span>
        <span style={s.footerRight}>
          Built with <span style={s.footerTeal}>React</span> · Hosted on GitHub Pages
        </span>
      </footer>
    </section>
  );
}
