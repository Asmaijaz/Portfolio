import React, { useState } from 'react';

const jobs = [
  {
    company: 'Coding Key',
    title: 'Associate SQA Engineer',
    period: 'March 2023 – Present',
    location: 'Islamabad, Pakistan',
    current: true,
    color: '#0ea47a',
    bullets: [
      'Worked on multiple projects ensuring end-to-end quality of web and mobile (Android/iOS) applications.',
      'Designed and executed test plans, test cases, and test scenarios for web and mobile applications.',
      'Performed functional, regression, smoke, sanity, integration, usability, and UI/UX testing for sprint releases.',
      'Collaborated with the development team to perform API testing in Postman for early defect prevention.',
      'Performed Load & Stress testing of web applications using JMeter.',
      'Performed Compatibility Testing and Cross-Browser & Device Testing (BrowserStack, LambdaTest).',
      'Logged, tracked, and managed defects using Azure Boards; ensured timely resolution via developer collaboration.',
      'Created and maintained comprehensive QA documentation including RTM, test plans, test reports, and release notes.',
      'Conducted smoke and sanity testing for every sprint release to ensure build stability.',
      'Performed root cause analysis on recurring defects and suggested process improvements.',
      'Provided client-facing QA updates, demo feedback, sprint testing reports, and issue walk-throughs.',
      'Ensured high-quality releases with minimal defect leakage into production.',
    ],
  },
  {
    company: 'Joyn Digital Group Ltd.',
    title: 'SQA & DevOps Support Engineer',
    period: 'February 2023 – March 2023',
    location: 'Islamabad, Pakistan',
    current: false,
    color: '#8a8a9a',
    bullets: [
      'Supported QA operations for applications hosted in cloud-based environments.',
      'Monitored application and server performance, reporting abnormalities to the engineering team.',
      'Assisted in deployment testing and coordinated environment readiness for QA validation.',
      'Managed Linux-based QA environments, improving availability and reliability for test cycles.',
      'Communicated with clients on test readiness, deployment schedules, and post-deployment results.',
      'Utilized DevOps and cloud knowledge to bridge gaps between QA, development, and deployment teams.',
    ],
  },
  {
    company: 'Contour Software PVT. LTD',
    title: 'AWS Solution Architect Trainee',
    period: 'November 2022 – January 2023',
    location: 'Islamabad, Pakistan',
    current: false,
    color: '#e8501a',
    bullets: [
      'AWS DevOps Training Program — Sponsored by PSEB & P@SHA (2022), Certified by Techlift.',
      'Gained in-depth knowledge of core AWS services: EC2, VPC, Auto Scaling, S3, RDS (PostgreSQL), EBS, EFS.',
      'Hands-on with Identity & Access: IAM (users, roles, policies) and KMS.',
      'Worked with Containerization & Serverless: ECS and Lambda.',
      'Practiced real-world DevOps workflows: CloudFormation, CodePipeline, CodeDeploy.',
      'Applied infrastructure provisioning and CI/CD automation in practical scenarios.',
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  const s = {
    section: { padding: '100px 0' },
    layout: { display: 'grid', gridTemplateColumns: '240px 1fr', gap: 28, alignItems: 'start' },
    sidebar: { display: 'flex', flexDirection: 'column' },
    sideBtn: (i) => ({
      textAlign: 'left', padding: '16px 20px',
      border: 'none', background: 'none', cursor: 'pointer',
      borderLeft: `2px solid ${active === i ? jobs[i].color : 'rgba(255,255,255,0.07)'}`,
      transition: 'all 0.2s',
    }),
    sideCo: (i) => ({
      fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600,
      color: active === i ? '#f0ede8' : '#555568',
      display: 'block', marginBottom: 3, transition: 'color 0.2s',
    }),
    sidePeriod: { fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#555568', letterSpacing: '0.5px' },
    card: {
      background: 'rgba(22,22,31,0.8)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 12, padding: '36px 40px',
    },
    header: { marginBottom: 28 },
    titleRow: { display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 },
    jobTitle: { fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, color: '#f0ede8' },
    currentBadge: {
      fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '1.5px',
      background: 'rgba(14,164,122,0.15)', border: '1px solid rgba(14,164,122,0.3)',
      color: '#0ea47a', padding: '3px 10px', borderRadius: 20, textTransform: 'uppercase',
    },
    meta: { display: 'flex', gap: 20, flexWrap: 'wrap' },
    metaItem: { display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#555568' },
    metaDot: (color) => ({ width: 6, height: 6, borderRadius: '50%', background: color }),
    bullets: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
    bulletItem: { display: 'flex', gap: 12, alignItems: 'flex-start' },
    dot: (color) => ({ width: 5, height: 5, borderRadius: '50%', background: color, flexShrink: 0, marginTop: 8 }),
    bulletText: { fontSize: 14, color: '#8a8a9a', lineHeight: 1.75 },
  };

  const job = jobs[active];

  return (
    <section id="experience" style={s.section}>
      <div className="container">
        <span className="section-label">Career</span>
        <h2 className="section-title">Experience</h2>

        <div style={s.layout} className="exp-layout">
          <div style={s.sidebar}>
            {jobs.map((j, i) => (
              <button key={j.company} style={s.sideBtn(i)} onClick={() => setActive(i)}>
                <span style={s.sideCo(i)}>{j.company}</span>
                <span style={s.sidePeriod}>{j.period}</span>
              </button>
            ))}
          </div>

          <div style={s.card}>
            <div style={s.header}>
              <div style={s.titleRow}>
                <h3 style={s.jobTitle}>{job.title}</h3>
                {job.current && <span style={s.currentBadge}>● Current</span>}
              </div>
              <div style={s.meta}>
                <span style={s.metaItem}>
                  <span style={s.metaDot(job.color)} />
                  {job.company}
                </span>
                <span style={s.metaItem}>📅 {job.period}</span>
                <span style={s.metaItem}>📍 {job.location}</span>
              </div>
            </div>

            <ul style={s.bullets}>
              {job.bullets.map(b => (
                <li key={b} style={s.bulletItem}>
                  <span style={s.dot(job.color)} />
                  <span style={s.bulletText}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .exp-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
