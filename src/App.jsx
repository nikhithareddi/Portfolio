import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Hero from './Hero';
import Projects from './Projects';
import Tech from './Tech';
import Contact from './Contact';
import './index.css';

export default function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: '#0f172a',
          minHeight: '100vh',
          color: '#f8fafc',
        }}
      >
        {/* Navigation Header */}
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)',
            borderBottom: '1px solid #1e293b',
            padding: '1rem 2rem',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* Logo / Name */}
            <Link
              to="/"
              style={{
                color: '#38bdf8',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.25rem',
              }}
            >
              PORTFOLIO
            </Link>

            {/* Navigation Links */}
            <nav style={{ display: 'flex', gap: '2rem' }}>
              <Link
                to="/"
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                }}
              >
                Home
              </Link>
              <Link
                to="/projects"
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                }}
              >
                Projects
              </Link>
              <Link
                to="/technologies"
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                }}
              >
                Technologies
              </Link>
              <Link
                to="/contact"
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                }}
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Page Switcher */}
        <main style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technologies" element={<Tech />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
