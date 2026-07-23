import React from 'react';

const experiences = [
  {
    role: "Web Developer",
    company: "Seaside Sustainability",
    duration: "July 2025 -  Dec 2025",
    achievements: [
      "Optimized core web architecture and asset rendering, reducing page load times by 35% and directly increasing Lighthouse performance scores.",
      "Designed and engineered a modular React component library from scratch, promoting clean code reusability and accelerating development workflows for future features.",
      "Redesigned high friction user paths using Figma wireframes, which boosted digital platform user engagement and volunteer form completion rates by 25%.",
      "Automated critical systems troubleshooting and support workflows to enhance day-to-day operational efficiency for internal teams.",
      "Evaluated and integrated modern frontend libraries, successfully minimizing project bundle sizes and modernizing the organization's tech stack."
    ],
    skills: ["React.js", "UI/UX Redesign", "System Troubleshooting", "Component Architecture", "Performance Tuning"]
  },
  {
    role: "Frontend Developer ",
    company: "Northeastern Illinois University",
    duration: "Aug 2024 - May 2025",
    achievements: [
      "Overhauled legacy component state management to resolve nested-rendering loops, eliminating critical performance bottlenecks by 45% on student portals.",
      "Migrated global monolithic stylesheets to scoped CSS Modules, eliminating visual regressions and improving overall codebase maintainability.",
      "Architected interactive data dashboards for academic research workflows, improving data retrieval speeds and overall usability for department users.",
      "Optimized asynchronous REST API integrations and data fetching patterns, reducing server response wait times by 30% during peak enrollment periods."
    ],
    skills: ["React.js", "CSS Modules", "REST API Integration", "Frontend Performance", "Data Visualization"]
  }
];

export default function Experience() {
  return (
    <section
      style={{
        padding: '5rem 2rem',
        maxWidth: '950px',
        margin: '0 auto',
      }}
    >
      
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontSize: '0.875rem',
            color: '#38bdf8',
            fontWeight: '600',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          My Journey
        </span>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#ffffff',
            margin: 0,
          }}
        >
          Professional Experience
        </h2>
        <p style={{ color: '#94a3b8', marginTop: '0.5rem', fontSize: '1.1rem' }}>
          A realistic look at my contributions, technical achievements, and the impact I have delivered as a developer.
        </p>
      </div>

      {/* Experience Timeline */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          position: 'relative',
          borderLeft: '2px solid #334155',
          paddingLeft: '2.5rem',
          marginLeft: '1rem',
        }}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
            }}
          >
            {/* Timeline Bullet Point */}
            <div
              style={{
                position: 'absolute',
                left: 'calc(-2.5rem - 7px)',
                top: '8px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#38bdf8',
                border: '4px solid #0f172a',
              }}
            />

            {/* Experience Card */}
            <div
              style={{
                backgroundColor: '#1e293b',
                borderRadius: '12px',
                padding: '2.5rem',
                border: '1px solid #334155',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      color: '#ffffff',
                      fontSize: '1.45rem',
                      fontWeight: '700',
                      margin: 0,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <h4
                    style={{
                      color: '#38bdf8',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      marginTop: '0.25rem',
                      marginBottom: 0,
                    }}
                  >
                    {exp.company}
                  </h4>
                </div>
                <span
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    backgroundColor: '#0f172a',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '6px',
                    border: '1px solid #334155',
                  }}
                >
                  {exp.duration}
                </span>
              </div>

              {/* Bullet Points */}
              <ul
                style={{
                  paddingLeft: '1.25rem',
                  color: '#94a3b8',
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  margin: '0 0 2rem 0',
                }}
              >
                {exp.achievements.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} style={{ marginBottom: '0.75rem' }}>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Skill Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  borderTop: '1px solid #334155',
                  paddingTop: '1.5rem'
                }}
              >
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    style={{
                      backgroundColor: '#0f172a',
                      color: '#38bdf8',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '50px',
                      border: '1px solid #334155',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}