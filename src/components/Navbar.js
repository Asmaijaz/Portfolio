import React, { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const s = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 32px',
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    },
    inner: {
      maxWidth: 1100, margin: '0 auto',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 68,
    },
    logo: {
      fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20,
      color: '#f0ede8', letterSpacing: '-0.5px',
    },
    logoSpan: { color: '#0ea47a' },
    links: {
      display: 'flex', gap: 36, listStyle: 'none',
    },
    link: {
      fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: '1px',
      color: '#8a8a9a', textDecoration: 'none', transition: 'color 0.2s',
      textTransform: 'uppercase',
    },
    cta: {
      fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: '1px',
      color: '#0ea47a', border: '1px solid rgba(14,164,122,0.4)',
      padding: '8px 20px', borderRadius: 4,
      transition: 'all 0.2s', textDecoration: 'none', textTransform: 'uppercase',
    },
    hamburger: {
      display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer',
      background: 'none', border: 'none', padding: 4,
    },
    bar: { width: 24, height: 2, background: '#f0ede8', borderRadius: 1, transition: '0.3s' },
    mobileMenu: {
      display: open ? 'flex' : 'none',
      flexDirection: 'column', gap: 0,
      background: 'rgba(10,10,15,0.98)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '16px 32px 24px',
    },
    mobileLink: {
      fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: '1px',
      color: '#8a8a9a', textDecoration: 'none', padding: '12px 0',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      textTransform: 'uppercase',
    },
  };

  return (
    <header>
      <nav style={s.nav}>
        <div style={s.inner}>
          <a href="#hero" style={{ ...s.logo, textDecoration: 'none' }}>
            Asma<span style={s.logoSpan}>.</span>
          </a>
          <ul style={s.links} className="desktop-links">
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} style={s.link}
                  onMouseEnter={e => e.target.style.color = '#f0ede8'}
                  onMouseLeave={e => e.target.style.color = '#8a8a9a'}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a href="mailto:asmaijaz3103@gmail.com" style={s.cta} className="desktop-cta"
            onMouseEnter={e => { e.target.style.background = 'rgba(14,164,122,0.12)'; e.target.style.color = '#1fd49e'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#0ea47a'; }}>
            Hire Me
          </a>
          <button style={{ ...s.hamburger, display: 'flex' }} className="hamburger" onClick={() => setOpen(!open)}>
            <span style={s.bar} />
            <span style={s.bar} />
            <span style={s.bar} />
          </button>
        </div>
      </nav>
      <div style={s.mobileMenu} className="mobile-menu">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={s.mobileLink} onClick={() => setOpen(false)}>{l}</a>
        ))}
        <a href="mailto:asmaijaz3103@gmail.com" style={{ ...s.mobileLink, color: '#0ea47a', marginTop: 8 }} onClick={() => setOpen(false)}>Hire Me →</a>
      </div>
      <style>{`
        @media (min-width: 769px) { .hamburger { display: none !important; } .mobile-menu { display: none !important; } }
        @media (max-width: 768px) { .desktop-links { display: none !important; } .desktop-cta { display: none !important; } }
      `}</style>
    </header>
  );
}
