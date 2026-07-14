import React from 'react';
import { Link } from 'react-router-dom'; // 1. Added the router Link import

export default function Hero() {
  return (
    <section
      className="container"
      style={{
        padding: '5rem 2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      {/* Status Badge */}
      <span
        style={{
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontSize: '0.875rem',
          color: '#38bdf8',
          fontWeight: '600',
          display: 'block',
          marginBottom: '1rem',
        }}
      >
        ✨ Welcome to my digital space
      </span>

      {/* Main Headline */}
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: '800',
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
          color: '#ffffff',
        }}
      >
        Hey, I'm Nikhitha! 💻⚡
      </h1>

      {/* About Me & Education */}
      <p
        style={{
          fontSize: '1.2rem',
          color: '#94a3b8',
          lineHeight: '1.6',
          marginBottom: '2rem',
        }}
      >
        I am a Frontend Developer & UI/UX Engineer focused on engineering
        high-performance React architectures and designing sleek mobile
        applications. Currently based in the US, I back my code with a solid
        technical background, specializing in transforming complex logic into
        seamless, interactive user experiences.
      </p>

      {/* Details Grid (Hobbies & Fun Facts) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          textAlign: 'left',
          marginTop: '3rem',
          marginBottom: '3rem',
        }}
      >
        {/* Education Card */}
        <div
          style={{
            padding: '1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '8px',
            gridColumn: 'span 2',
          }}
        >
          <h3
            style={{
              color: '#38bdf8',
              marginBottom: '0.5rem',
              fontSize: '1.1rem',
            }}
          >
            🎓 Education
          </h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <div>
              <h4
                style={{
                  color: '#ffffff',
                  margin: '0 0 0.25rem 0',
                  fontSize: '1rem',
                  fontWeight: '600',
                }}
              >
                Northeastern Illinois University
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
                Master of Science in Computer Science
              </p>
            </div>
            <span
              style={{
                color: '#64748b',
                fontSize: '0.9rem',
                fontWeight: '500',
              }}
            >
              Aug 2023 - May 2025
            </span>
          </div>
        </div>

        {/* Hobbies Card */}
        <div
          style={{
            padding: '1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '8px',
          }}
        >
          <h3
            style={{
              color: '#38bdf8',
              marginBottom: '0.5rem',
              fontSize: '1.1rem',
            }}
          >
            🎨 Beyond the Code
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
            When I'm not fighting with CSS layouts or structuring React
            contexts, you'll find me mapping out product wireframes, diving deep
            into UI design patterns, and exploring creative visual arts.
          </p>
        </div>

        {/* Fun Fact Card */}
        <div
          style={{
            padding: '1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '8px',
          }}
        >
          <h3
            style={{
              color: '#38bdf8',
              marginBottom: '0.5rem',
              fontSize: '1.1rem',
            }}
          >
            💡 Fun Fact
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
            I believe production ready code should be incredibly fast,
            interfaces should look exceptional, and web apps should be built to
            deliver a clean, delightful experience from the very first click.
          </p>
        </div>
      </div>

      {/* Call to Actions */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {/* 2. Swapped these out for <Link> tags with lowercase paths */}
        <Link
          to="/projects"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#38bdf8',
            color: '#0f172a',
            fontWeight: '600',
            borderRadius: '6px',
            textDecoration: 'none',
          }}
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          style={{
            padding: '0.75rem 1.5rem',
            border: '1px solid #334155',
            color: '#ffffff',
            fontWeight: '600',
            borderRadius: '6px',
            textDecoration: 'none',
          }}
        >
          Let's Connect
        </Link>
      </div>
    </section>
  );
}