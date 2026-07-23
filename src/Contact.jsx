import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Job / Project Inquiry',
    message: ''
  });

  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // ⚠️ REPLACE THIS KEY WITH YOUR WEB3FORMS ACCESS KEY
          access_key: '5a4c8f28-f854-4cc4-a146-ff62e3afedc9', 
          subject: `New Portfolio Message: ${formData.topic} from ${formData.name}`,
          from_name: formData.name,
          replyto: formData.email,
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', topic: 'Job / Project Inquiry', message: '' });
      } else {
        setStatus({ submitting: false, success: false, error: true });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* Animation Styles */}
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

        .contact-card {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.3);
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .form-input {
          width: 100%;
          padding: 0.8rem 1rem;
          background: #0f172a;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }

        .form-input:focus {
          border-color: #38bdf8;
        }

        .submit-btn {
          background: #38bdf8;
          color: #0f172a;
          font-weight: 700;
          padding: 0.85rem 2rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          background: #7dd3fc;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(56, 189, 248, 0.4);
        }

        .submit-btn:disabled {
          background: #64748b;
          cursor: not-allowed;
          transform: none;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #0f172a;
          border: 1px solid #334155;
          color: #f8fafc;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          border-color: #38bdf8;
          color: #38bdf8;
          transform: translateY(-3px);
          box-shadow: 0 8px 15px -3px rgba(56, 189, 248, 0.2);
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', animation: 'fadeInUp 0.4s ease-out' }}>
        <span
          style={{
            display: 'inline-block',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            color: '#38bdf8',
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
            padding: '0.35rem 1rem',
            borderRadius: '50px',
            marginBottom: '1rem'
          }}
        >
          📩 GET IN TOUCH
        </span>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#ffffff', margin: '0 0 1rem 0' }}>
          Let's Connect & Build Together
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
          Whether you have a frontend opportunity, a project idea, or just want to swap book suggestions and trip recommendations—my inbox is always open!
        </p>
      </div>

      {/* Form Container */}
      <div className="contact-card">
        {status.success ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent Directly to My Email!</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Thank you for reaching out! I've received your message and will get back to you shortly.
            </p>
            <button 
              onClick={() => setStatus({ submitting: false, success: false, error: false })}
              className="submit-btn"
              style={{ maxWidth: '200px' }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {status.error && (
              <div style={{ padding: '0.8rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', borderRadius: '8px', color: '#fca5a5', textAlign: 'center', fontSize: '0.9rem' }}>
                Something went wrong sending your message. Please try again or reach out directly via Email/LinkedIn below.
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                WHAT ARE WE CHATTING ABOUT?
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Job / Project Inquiry">💼 Job / Project Inquiry</option>
                <option value="Frontend / UI Collaboration">⚛️ Frontend / UI Collaboration</option>
                <option value="Book Suggestion">📚 Book Suggestion</option>
                <option value="Places to Explore & Trip Groups">✈️ Places to Explore / Travel Groups</option>
                <option value="Just Saying Hi">☕ Just Saying Hi</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                YOUR MESSAGE
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Share your ideas, suggestions, or opportunity details here..."
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button type="submit" disabled={status.submitting} className="submit-btn">
              {status.submitting ? 'Sending Message...' : 'Send Message →'}
            </button>
          </form>
        )}
      </div>

      {/* Bottom Connect Links */}
      <div
        style={{
          marginTop: '3rem',
          padding: '2.5rem 2rem',
          backgroundColor: '#1e293b',
          borderRadius: '16px',
          border: '1px solid #334155',
          textAlign: 'center',
          animation: 'fadeInUp 0.6s ease-out forwards'
        }}
      >
        <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '700', marginBottom: '0.5rem' }}>
          Connect With Me
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
          Feel free to reach out directly through any of these platforms:
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/nikhitha-bhimireddi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nikhitha-bhimireddi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            👔 LinkedIn
          </a>

          <a
            href="mailto:nikhitha.bhimireddi@email.com"
            className="social-link"
          >
            ✉️ Direct Email
          </a>
        </div>
      </div>

    </section>
  );
}