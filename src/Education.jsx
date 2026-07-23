import React from 'react';

const educationData = [
  {
    degree: "Master of Science in CS",
    institution: "Northeastern Illinois University",
    location: "Chicago, IL, United States",
    duration: "August 2023 — May 2025",
    details: [
      "Specialized in Advanced Software Architectures, Frontend Frameworks, and Mobile UI/UX Systems.",
      "Built clean engineering solutions focusing on interactive rendering loops, state lifecycle contexts, and responsive layout designs."
    ]
  },
  {
    degree: "Bachelor of Technology in CSE",
    institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
    location: "Vijayawada, India",
    duration: "August 2019 — April 2023",
    details: [
      "Studied core computer science fundamentals including Data Structures, Algorithms, Object-Oriented Programming, and Web Development.",
      "Engineered frontend interfaces and responsive web applications using HTML, CSS, JavaScript, and modern frameworks.",
      "Collaborated on capstone engineering projects focusing on database management and software design patterns."
    ]
  }
];

export default function Education() {
  return (
    <section style={{ padding: '4rem 2rem', maxWidth: '850px', margin: '0 auto' }}>
      
      {/* Global Style Injector for Card Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animated-edu-card {
          background: #1e293b;
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid #334155;
          box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.3);
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          animation: fadeIn 0.6s ease-out forwards;
          position: relative;
        }

        .animated-edu-card:hover {
          transform: translateY(-8px) scale(1.01);
          border-color: rgba(56, 189, 248, 0.6);
          box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.7), 
                      0 0 25px -5px rgba(56, 189, 248, 0.25);
        }

        .animated-edu-card li {
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .animated-edu-card:hover li {
          color: #cbd5e1;
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.875rem',
            color: '#38bdf8',
            fontWeight: '600',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          ACADEMIC PATHWAY
        </span>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
          Education Background
        </h2>
      </div>

      {/* Animated Cards Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="animated-edu-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', color: '#38bdf8', fontWeight: '700', margin: 0 }}>
                {edu.degree}
              </h3>
              <span
                style={{
                  fontSize: '0.85rem',
                  color: '#38bdf8',
                  fontWeight: '600',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '50px'
                }}
              >
                {edu.duration}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', color: '#94a3b8', marginBottom: '1.25rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
              <span style={{ color: '#cbd5e1' }}>🏛️ {edu.institution}</span>
              <span>📍 {edu.location}</span>
            </div>

            <ul style={{ color: '#94a3b8', paddingLeft: '1.2rem', margin: 0, lineHeight: '1.7', fontSize: '0.95rem' }}>
              {edu.details.map((point, pIndex) => (
                <li key={pIndex} style={{ marginBottom: '0.5rem' }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}