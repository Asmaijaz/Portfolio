import React, { useState } from 'react';

const projects = [
  {
    id: 'swai',
    featured: true,
    award: '🏆 Runner-up · P@SHA ICT Awards 2025',
    name: 'SWAI',
    full: 'AI-Powered Sales Intelligence Platform',
    type: 'Web & Mobile',
    tags: ['AI/ML', 'Voice Recognition', 'REST APIs', 'Mobile', 'Web'],
    roles: ['QA Lead', 'Product Owner', 'Project Manager'],
    tech: 'AI/ML · Deepgram Voice Recognition · REST APIs · Automation',
    testing: ['Manual Testing', 'Automation Testing', 'API Testing', 'Regression', 'Exploratory', 'UAT'],
    bullets: [
      'Led QA end-to-end from product inception to production release — zero critical defects at launch.',
      'Acted as Product Owner: defined acceptance criteria, managed backlog, prioritized user stories with stakeholders.',
      'Managed sprint planning, test cycles, and release sign-off as QA Project Manager.',
      'Designed and executed test cases for AI-driven transcription, objection identification, and geofencing accuracy.',
      'Performed UI, API, and end-to-end testing on voice-recognition and ML-powered workflows.',
      'Maintained traceability matrix and delivered sprint testing reports to client stakeholders.',
    ],
    color: '#0ea47a',
  },
  {
    id: 'vsi',
    featured: true,
    award: '🤖 Ongoing Enterprise AI Project',
    name: 'Vector Systems AI',
    full: 'Enterprise RAG-Based AI Solution',
    type: 'Enterprise Platform',
    tags: ['OpenAI', 'RAG', 'Enterprise Data', 'Security Validation'],
    roles: ['QA Lead', 'Product Owner', 'QA Strategist'],
    tech: 'OpenAI · RAG (Retrieval Augmented Generation) · Enterprise Data Systems',
    testing: ['AI Testing', 'Functional Testing', 'Regression', 'Security Validation', 'UAT'],
    bullets: [
      'Acting as Product Owner and QA Lead — defining quality standards for AI response accuracy and reliability.',
      'Validating AI response accuracy, relevance, and context consistency against indexed enterprise documents.',
      'Designing test strategies specific to RAG-based AI workflows — a novel testing domain.',
      'Testing document retrieval logic to ensure correct data sourcing before AI response generation.',
      'Performing security validation and testing for enterprise data integrity and access control.',
      'Collaborating directly with engineering and product teams on acceptance criteria and release readiness.',
    ],
    color: '#0ea47a',
  },
  {
    id: 'heylo',
    featured: false,
    award: '🏥 IoT Healthcare Platform',
    name: 'Heylo',
    full: 'IoT-Based Residential Care Platform',
    type: 'Web & Mobile',
    tags: ['IoT', 'Real-Time', 'Video Calling', 'Healthcare'],
    roles: ['QA Engineer'],
    tech: 'IoT Devices · Real-Time Notifications · Video & Audio Calling',
    testing: ['Functional Testing', 'Automation', 'UAT', 'Exploratory'],
    bullets: [
      'Designed test plans, test scenarios, and test cases for IoT-enabled healthcare workflows.',
      'Performed manual and automated testing for in-app video and audio calling features.',
      'Validated smart device alerts, real-time notifications, and messaging workflows.',
      'Conducted functional, exploratory, and UAT testing across Android, iOS, and web platforms.',
      'Ensured end-to-end system reliability for real-time communication and care monitoring.',
    ],
    color: '#0ea47a',
  },
  {
    id: 'ylp',
    featured: false,
    award: '⚖️ Legal Marketplace',
    name: 'Your Legal Partners (YLP)',
    full: 'Legal Marketplace Platform',
    type: 'Web & Mobile',
    tags: ['Video Calling', 'Real-Time Chat', 'Marketplace'],
    roles: ['QA Engineer'],
    tech: 'Video Calling · Real-Time Chat · Marketplace Systems',
    testing: ['Functional Testing', 'UAT', 'Exploratory'],
    bullets: [
      'Created comprehensive test plans, test suites, and detailed test cases for legal consultation workflows.',
      'Tested case creation, bidding, expert selection, real-time chat, and video consultation features.',
      'Ensured end-to-end quality across web and mobile client applications.',
    ],
    color: '#555568',
  },
  {
    id: 'superapp',
    featured: false,
    award: '📱 Enterprise Super App',
    name: 'Super App Pakistan',
    full: 'Enterprise Digital Super App',
    type: 'Web & Mobile',
    tags: ['AI Chatbots', 'Digital Payments', 'Loyalty Systems'],
    roles: ['QA Engineer'],
    tech: 'AI Chatbots · Digital Payments · Loyalty Systems · Cross-Platform',
    testing: ['Manual Testing', 'Regression', 'UAT', 'Integration'],
    bullets: [
      'Performed end-to-end manual testing for messaging, AI chatbots, and digital payments.',
      'Validated payment gateways, transaction accuracy, and failure handling.',
      'Conducted cross-platform integration testing across Android, iOS, and web.',
      'Executed regression testing for new feature releases and AI bot enhancements.',
    ],
    color: '#555568',
  },
];

export default function Projects() {
  const [active, setActive] = useState('swai');
  const proj = projects.find(p => p.id === active);

  const s = {
    section: { padding: '100px 0', background: 'rgba(17,17,24,0.5)' },
    layout: { display: 'grid', gridTemplateColumns: '280px 1fr', gap: 28, alignItems: 'start' },
    sidebar: { display: 'flex', flexDirection: 'column', gap: 4 },
    sideBtn: (id) => ({
      textAlign: 'left', padding: '14px 18px', borderRadius: 8,
      border: `1px solid ${active === id ? 'rgba(14,164,122,0.3)' : 'rgba(255,255,255,0.05)'}`,
      background: active === id ? 'rgba(14,164,122,0.08)' : 'transparent',
      cursor: 'pointer', transition: 'all 0.2s',
      borderLeft: active === id ? '3px solid #0ea47a' : '3px solid transparent',
    }),
    sideName: (id) => ({
      fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600,
      color: active === id ? '#f0ede8' : '#555568', display: 'block', marginBottom: 3,
    }),
    sideType: { fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#0ea47a', letterSpacing: '1px' },
    sideFeatured: {
      fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#e8501a',
      letterSpacing: '1px', textTransform: 'uppercase', marginLeft: 8,
    },
    card: {
      background: 'rgba(22,22,31,0.8)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 12, padding: '36px 40px',
      position: 'relative', overflow: 'hidden',
    },
    cardTop: {
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      marginBottom: 24, flexWrap: 'wrap', gap: 12,
    },
    awardBadge: {
      fontFamily: "'DM Mono', monospace", fontSize: 11,
      background: 'rgba(14,164,122,0.1)', border: '1px solid rgba(14,164,122,0.2)',
      color: '#0ea47a', padding: '6px 14px', borderRadius: 20,
    },
    roles: { display: 'flex', gap: 8, flexWrap: 'wrap' },
    roleTag: {
      fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '1px',
      background: 'rgba(232,80,26,0.1)', border: '1px solid rgba(232,80,26,0.25)',
      color: '#e8501a', padding: '4px 12px', borderRadius: 4, textTransform: 'uppercase',
    },
    title: { fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, color: '#f0ede8', marginBottom: 4 },
    subtitle: { fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: '#8a8a9a', marginBottom: 20 },
    techBar: {
      fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#555568',
      padding: '10px 16px', background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.05)', borderRadius: 6, marginBottom: 24,
    },
    divider: { borderColor: 'rgba(255,255,255,0.06)', margin: '24px 0' },
    subhead: {
      fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '2px',
      color: '#555568', textTransform: 'uppercase', marginBottom: 14,
    },
    tags: { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 },
    tag: {
      fontFamily: "'DM Mono', monospace", fontSize: 11,
      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
      color: '#8a8a9a', padding: '4px 12px', borderRadius: 4,
    },
    bullets: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
    bullet: { display: 'flex', gap: 12, alignItems: 'flex-start' },
    dot: { width: 6, height: 6, borderRadius: '50%', background: '#0ea47a', flexShrink: 0, marginTop: 7 },
    bulletText: { fontSize: 14, color: '#8a8a9a', lineHeight: 1.7 },
  };

  return (
    <section id="projects" style={s.section}>
      <div className="container">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Key Projects</h2>

        <div style={s.layout} className="projects-layout">
          <div style={s.sidebar}>
            {projects.map(p => (
              <button key={p.id} style={s.sideBtn(p.id)} onClick={() => setActive(p.id)}>
                <span style={s.sideName(p.id)}>
                  {p.name}
                  {p.featured && <span style={s.sideFeatured}>★ Featured</span>}
                </span>
                <span style={s.sideType}>{p.type}</span>
              </button>
            ))}
          </div>

          <div style={s.card}>
            <div style={s.cardTop}>
              <span style={s.awardBadge}>{proj.award}</span>
              <div style={s.roles}>
                {proj.roles.map(r => <span key={r} style={s.roleTag}>{r}</span>)}
              </div>
            </div>

            <h3 style={s.title}>{proj.name}</h3>
            <p style={s.subtitle}>{proj.full} · {proj.type}</p>

            <div style={s.techBar}>
              <span style={{ color: '#0ea47a' }}>// tech stack: </span>{proj.tech}
            </div>

            <p style={s.subhead}>Testing Types</p>
            <div style={s.tags}>
              {proj.testing.map(t => <span key={t} style={s.tag}>{t}</span>)}
            </div>

            <hr style={s.divider} />

            <p style={s.subhead}>Key Contributions</p>
            <ul style={s.bullets}>
              {proj.bullets.map(b => (
                <li key={b} style={s.bullet}>
                  <span style={s.dot} />
                  <span style={s.bulletText}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .projects-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
