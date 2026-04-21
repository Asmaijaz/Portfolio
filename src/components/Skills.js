import React, { useState } from 'react';

const categories = [
  {
    label: 'Testing & QA',
    icon: '🛡️',
    color: '#0ea47a',
    skills: [
      'Manual Testing (Functional, Regression, Smoke, Sanity)',
      'Performance Testing (JMeter)',
      'UAT & Exploratory Testing',
      'API Testing (Postman)',
      'Cross-Browser & Device Testing',
      'BrowserStack · LambdaTest',
      'Test Case Design & Execution',
      'Bug Tracking & Reporting',
      'SDLC / STLC',
      'Requirement Analysis & Test Strategy',
      'Test Plan · Bug Report · RTM · Checklist',
      'Root Cause Analysis',
    ],
  },
  {
    label: 'Tools & Platforms',
    icon: '🔧',
    color: '#0ea47a',
    skills: [
      'Azure DevOps & Azure Boards',
      'JIRA',
      'Postman',
      'JMeter',
      'Confluence & Azure Wiki',
      'BrowserStack · LambdaTest',
      'GitHub & Azure Repos',
      'Visual Studio Code',
      'Excel / Google Sheets',
      'Selenium (Basic)',
    ],
  },
  {
    label: 'CI/CD & DevOps',
    icon: '⚙️',
    color: '#e8501a',
    skills: [
      'GitHub Actions',
      'CI/CD Pipelines',
      'Docker',
      'Linux',
      'AWS (EC2, S3, RDS, IAM, Lambda)',
      'SSH Clients',
      'CloudFormation',
      'CodePipeline · CodeDeploy',
      'Infrastructure Provisioning',
    ],
  },
  {
    label: 'Methodologies',
    icon: '📋',
    color: '#8a8a9a',
    skills: [
      'Agile / Scrum',
      'Sprint Planning',
      'Backlog Management',
      'Product Ownership',
      'Defect Lifecycle Management',
      'Lean Six Sigma',
      'Release Management',
      'Stakeholder Communication',
      'Cross-functional Collaboration',
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  const s = {
    section: { padding: '100px 0' },
    tabs: { display: 'flex', gap: 4, marginBottom: 40, flexWrap: 'wrap' },
    tab: (i) => ({
      fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: '1px',
      textTransform: 'uppercase', padding: '10px 20px', borderRadius: 4,
      border: '1px solid',
      borderColor: active === i ? categories[i].color : 'rgba(255,255,255,0.08)',
      background: active === i ? `rgba(${active === i && i === 2 ? '232,80,26' : '14,164,122'},0.1)` : 'transparent',
      color: active === i ? categories[i].color : '#555568',
      cursor: 'pointer', transition: 'all 0.2s',
      display: 'flex', alignItems: 'center', gap: 8,
    }),
    panel: {
      background: 'rgba(22,22,31,0.6)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 12, padding: '36px 40px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 12,
    },
    item: {
      display: 'flex', alignItems: 'flex-start', gap: 12,
      padding: '12px 16px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: 8,
      transition: 'border-color 0.2s, background 0.2s',
    },
    bullet: (color) => ({
      width: 6, height: 6, borderRadius: '50%',
      background: color, flexShrink: 0, marginTop: 7,
    }),
    text: { fontSize: 14, color: '#8a8a9a', lineHeight: 1.5 },
  };

  const cat = categories[active];

  return (
    <section id="skills" style={s.section}>
      <div className="container">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Skills & Tools</h2>

        <div style={s.tabs}>
          {categories.map((c, i) => (
            <button key={c.label} style={s.tab(i)} onClick={() => setActive(i)}>
              <span>{c.icon}</span> {c.label}
            </button>
          ))}
        </div>

        <div style={s.panel}>
          <div style={s.grid}>
            {cat.skills.map(skill => (
              <div key={skill} style={s.item}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${cat.color}40`; e.currentTarget.style.background = `${cat.color}08`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}>
                <span style={s.bullet(cat.color)} />
                <span style={s.text}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
