import React from 'react';

const techData = [
  {
    category: 'Core Frontend Frameworks & Libraries',
    skills: [
      { name: 'React.js' },
      { name: 'Html5' },
      { name: 'CSS3 (Flexbox & CSS Grid)' },
      { name: 'Next.js' },
      { name: 'Vue.js' },
      { name: 'Tailwind CSS' },
      { name: 'Ionic Framework' },
      { name: 'Capacitor' },
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
    ],
  },
  {
    category: 'UI/UX Design & Prototyping',
    skills: [
      { name: 'User Interface (UI) Design' },
      { name: 'User Experience (UX) Engineering' },
      { name: 'Figma' },
      { name: 'Sketch' },
      { name: 'Adobe XD' },
      { name: 'UserTesting' },
      { name: 'Wireframing & Prototyping' },
      { name: 'Mobile Responsiveness' },
      { name: 'Web Accessibility' },
    ],
  },
];

export default function Tech() {
  return (
    <section
      style={{
        padding: '5rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#38bdf8',
          marginBottom: '0.5rem',
          textAlign: 'center',
        }}
      >
        Frontend & UI/UX Technologies
      </h2>
      <p
        style={{
          color: '#94a3b8',
          textAlign: 'center',
          marginBottom: '4rem',
          fontSize: '1.1rem',
        }}
      >
        A curated look at the core frameworks, interactive structures, and
        user-centered design systems I build with.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {techData.map((group, index) => (
          <div key={index}>
            <h3
              style={{
                fontSize: '1.3rem',
                color: '#f8fafc',
                marginBottom: '1.5rem',
                fontWeight: '600',
                borderBottom: '1px solid #334155',
                paddingBottom: '0.5rem',
              }}
            >
              {group.category}
            </h3>

            {/* Grid Layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minHeight: '60px',
                    transition:
                      'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.borderColor = '#38bdf8';
                    e.currentTarget.style.boxShadow =
                      '0 4px 20px -5px rgba(56, 189, 248, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = '#334155';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span
                    style={{
                      color: '#f8fafc',
                      fontWeight: '500',
                      fontSize: '0.95rem',
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
