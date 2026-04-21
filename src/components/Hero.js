import React from 'react';

export default function Hero() {
  const s = {
    section: {
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 68,
    },
    bg: {
      position: 'absolute', inset: 0, zIndex: 0,
      background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(14,164,122,0.07) 0%, transparent 70%)',
    },
    grid: {
      position: 'absolute', inset: 0, zIndex: 0,
      backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
    },
    container: {
      maxWidth: 1100, margin: '0 auto', padding: '80px 32px',
      position: 'relative', zIndex: 1,
    },
    tag: {
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: '2px',
      color: '#0ea47a', textTransform: 'uppercase',
      border: '1px solid rgba(14,164,122,0.3)',
      padding: '6px 14px', borderRadius: 20, marginBottom: 28,
      animation: 'fadeUp 0.6s ease both',
    },
    dot: {
      width: 7, height: 7, borderRadius: '50%',
      background: '#0ea47a', animation: 'pulse 2s infinite',
    },
    h1: {
      fontFamily: "'Syne', sans-serif",
      fontSize: 'clamp(3rem, 7vw, 5.5rem)',
      fontWeight: 800, lineHeight: 1.05,
      color: '#f0ede8', marginBottom: 8,
      animation: 'fadeUp 0.7s 0.1s ease both',
    },
    h1Teal: { color: '#0ea47a' },
    role: {
      fontFamily: "'Syne', sans-serif",
      fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
      fontWeight: 500, color: '#8a8a9a',
      marginBottom: 28,
      animation: 'fadeUp 0.7s 0.2s ease both',
    },
    desc: {
      maxWidth: 580, fontSize: 17, lineHeight: 1.8,
      color: '#8a8a9a', marginBottom: 44,
      animation: 'fadeUp 0.7s 0.3s ease both',
    },
    descHighlight: { color: '#f0ede8', fontWeight: 500 },
    actions: {
      display: 'flex', gap: 16, flexWrap: 'wrap',
      animation: 'fadeUp 0.7s 0.4s ease both',
    },
    btnPrimary: {
      fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: '1px',
      background: '#0ea47a', color: '#0a0a0f',
      padding: '14px 32px', borderRadius: 4, border: 'none',
      cursor: 'pointer', textDecoration: 'none',
      textTransform: 'uppercase', fontWeight: 500,
      transition: 'all 0.2s', display: 'inline-block',
    },
    btnSecondary: {
      fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: '1px',
      background: 'transparent', color: '#f0ede8',
      padding: '14px 32px', borderRadius: 4,
      border: '1px solid rgba(255,255,255,0.15)',
      cursor: 'pointer', textDecoration: 'none',
      textTransform: 'uppercase',
      transition: 'all 0.2s', display: 'inline-block',
    },
    stats: {
      display: 'flex', gap: 48, marginTop: 60, flexWrap: 'wrap',
      animation: 'fadeUp 0.7s 0.5s ease both',
    },
    stat: { display: 'flex', flexDirection: 'column', gap: 4 },
    statNum: {
      fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800,
      color: '#f0ede8', lineHeight: 1,
    },
    statNumTeal: { color: '#0ea47a' },
    statLabel: {
      fontFamily: "'DM Mono', monospace", fontSize: 11,
      letterSpacing: '1.5px', color: '#555568', textTransform: 'uppercase',
    },
    divider: {
      width: 1, background: 'rgba(255,255,255,0.08)', alignSelf: 'stretch',
    },
    scrollHint: {
      position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '2px',
      color: '#555568', textTransform: 'uppercase', zIndex: 1,
    },
    scrollLine: {
      width: 1, height: 40, background: 'linear-gradient(to bottom, #0ea47a, transparent)',
      animation: 'scrollAnim 1.5s infinite',
    },
  };

  return (
    <section id="hero" style={s.section}>
      <div style={s.bg} />
      <div style={s.grid} />
      <div style={s.container}>
        <div style={s.tag}>
          <span style={s.dot} />
          Available for opportunities
        </div>
        <h1 style={s.h1}>
          Hi, I'm <span style={s.h1Teal}>Asma Ijaz</span>
        </h1>
        <p style={s.role}>Software Quality Assurance Engineer</p>
        <p style={s.desc}>
          <span style={s.descHighlight}>3+ years</span> ensuring zero-defect releases across{' '}
          <span style={s.descHighlight}>SaaS, Web, Mobile & API</span> platforms.
          I've led QA end-to-end on AI-powered products, acted as{' '}
          <span style={s.descHighlight}>Product Owner & QA Lead</span>, and bridged
          the gap between quality engineering and modern DevOps practices.
        </p>
        <div style={s.actions}>
          <a href="#projects" style={s.btnPrimary}
            onMouseEnter={e => e.target.style.background = '#1fd49e'}
            onMouseLeave={e => e.target.style.background = '#0ea47a'}>
            View Projects
          </a>
          <a href="mailto:asmaijaz3103@gmail.com" style={s.btnSecondary}
            onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(255,255,255,0.15)'; }}>
            Get In Touch
          </a>
          <a href="https://www.linkedin.com/in/asma-ijaz-/" target="_blank" rel="noreferrer"
            style={{ ...s.btnSecondary, color: '#0ea47a', borderColor: 'rgba(14,164,122,0.3)' }}
            onMouseEnter={e => { e.target.style.background = 'rgba(14,164,122,0.08)'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; }}>
            LinkedIn ↗
          </a>
        </div>
        <div style={s.stats}>
          <div style={s.stat}>
            <span style={s.statNum}>3<span style={s.statNumTeal}>+</span></span>
            <span style={s.statLabel}>Years Experience</span>
          </div>
          <div style={s.divider} />
          <div style={s.stat}>
            <span style={s.statNum}>6<span style={s.statNumTeal}>+</span></span>
            <span style={s.statLabel}>Client Projects</span>
          </div>
          <div style={s.divider} />
          <div style={s.stat}>
            <span style={s.statNum}>5<span style={s.statNumTeal}>+</span></span>
            <span style={s.statLabel}>Key Products Led</span>
          </div>
          <div style={s.divider} />
          <div style={s.stat}>
            <span style={s.statNum}>0<span style={s.statNumTeal}>%</span></span>
            <span style={s.statLabel}>Defect Mindset</span>
          </div>
        </div>
      </div>
      <div style={s.scrollHint}>
        <span>Scroll</span>
        <div style={s.scrollLine} />
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes scrollAnim { 0%{opacity:1;transform:scaleY(1)} 100%{opacity:0;transform:scaleY(0.3)} }
      `}</style>
    </section>
  );
}
