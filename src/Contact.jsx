import React from 'react';

export default function Contact() {
  return (
    <footer
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '4rem',
        padding: '3rem 2rem',
      }}
    >
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
        Let's Connect
      </h2>
      <p
        style={{
          fontSize: '1.2rem',
          color: '#94a3b8',
          lineHeight: '1.6',
          marginBottom: '2.5rem',
          maxWidth: '640px',
          margin: '0 auto 2.5rem auto',
        }}
      >
        Currently hunting for Frontend Engineering and UI/UX roles in the US
        where I can build clean architectures and break the record for the
        fewest boring corporate phrases used in a single sprint. If you want to
        build cool products or just want to debate the best way to structure a
        React project — Let's talk!
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <a
          href="https://www.linkedin.com/in/nicky2605/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#38bdf8',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'color 0.2s',
          }}
          onMouseOver={(e) => (e.target.style.color = '#0ea5e9')}
          onMouseOut={(e) => (e.target.style.color = '#38bdf8')}
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/nikhithareddi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#38bdf8',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'color 0.2s',
          }}
          onMouseOver={(e) => (e.target.style.color = '#0ea5e9')}
          onMouseOut={(e) => (e.target.style.color = '#38bdf8')}
        >
          GitHub ↗
        </a>
        <a
          href="mailto:srinikhitha2605@gmail.com"
          style={{
            color: '#38bdf8',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'color 0.2s',
          }}
          onMouseOver={(e) => (e.target.style.color = '#0ea5e9')}
          onMouseOut={(e) => (e.target.style.color = '#38bdf8')}
        >
          Email ✉
        </a>
      </div>
    </footer>
  );
}
