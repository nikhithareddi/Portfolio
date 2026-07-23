import React from 'react';
import {Link} from 'react-router-dom';

export default function Hero() {
  return (
    <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Animation & Card Reveal Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-block;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: #38bdf8;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          padding: 0.35rem 1rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }

        .company-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #0f172a;
          border: 1px solid #334155;
          color: #f8fafc;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.5rem 1.25rem;
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .company-tag:hover {
          border-color: #38bdf8;
          color: #38bdf8;
        }

        .reveal-card {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.3);
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .reveal-card:hover, .reveal-card:focus, .reveal-card:active {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.6);
          box-shadow: 0 15px 30px -10px rgba(15, 23, 42, 0.7), 
                      0 0 25px -5px rgba(56, 189, 248, 0.25);
        }

        /* Front Content (Default State) */
        .reveal-front {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .reveal-card:hover .reveal-front,
        .reveal-card:focus .reveal-front,
        .reveal-card:active .reveal-front {
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
        }

        /* Back Content (Revealed State) */
        .reveal-back {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .reveal-card:hover .reveal-back,
        .reveal-card:focus .reveal-back,
        .reveal-card:active .reveal-back {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Hero Section Container */}
      <div
        style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          marginBottom: '3rem',
          borderRadius: '24px',
          background: 'radial-gradient(circle at top, rgba(56, 189, 248, 0.12) 0%, rgba(15, 23, 42, 0.6) 60%, rgba(11, 15, 23, 1) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          boxShadow: '0 0 50px -10px rgba(56, 189, 248, 0.15)',
          animation: 'fadeInUp 0.5s ease-out'
        }}
      >
        <span className="hero-badge">✨ WELCOME TO MY DIGITAL SPACE</span>
        
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            color: '#ffffff',
            margin: '0 0 1rem 0',
            lineHeight: '1.2'
          }}
        >
          Hey, I'm <span style={{ color: '#38bdf8' }}>Nikhitha</span>! 💻⚡
        </h1>

        <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#38bdf8', marginBottom: '1.25rem' }}>
          Frontend & UI Developer
        </p>

        <p
          style={{
            color: '#cbd5e1',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            maxWidth: '750px',
            margin: '0 auto 2.5rem auto'
          }}
        >
          Specializing in modern JavaScript, React, and interactive web application design. Passionate about engineering high-performance frontends, clean UI architectures, and intuitive user experiences.
        </p>

        
      </div>

      {/* Interactive Reveal Cards Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}
      >
        

        {/* Card 2: Fun Fact & About Me */}
<div className="reveal-card" tabIndex="0" style={{ animationDelay: '0.3s' }}>
  {/* Default View */}
  <div className="reveal-front">
    <div style={{ fontSize: '2.5rem' }}>☕🧘‍♀️</div>
    <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>
      Life Motto & Philosophy
    </h3>
    
  </div>

  {/* Revealed Details */}
  <div className="reveal-back">
    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#38bdf8', margin: '0 0 0.4rem 0' }}>
      Words to Live By
    </h3>
    <p style={{ color: '#cbd5e1', lineHeight: '1.5', fontSize: '0.88rem', margin: '0 0 0.75rem 0' }}>
      <em>"Ctrl + Z works on code, but in real life, call it 'character development' & keep scrolling!"</em> 🤷‍♀️
    </p>
    <div
      style={{
        borderTop: '1px solid rgba(56, 189, 248, 0.2)',
        paddingTop: '0.6rem',
        marginTop: '0.25rem'
      }}
    >
      <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: '1.4', margin: 0 }}>
        ✨ Focused on clean code, continuous learning, and crafting seamless web experiences!
      </p>
    </div>
  </div>
</div>
      </div>

    </section>
  );
}