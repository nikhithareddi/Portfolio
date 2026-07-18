import React from 'react';

const projects = [
  {
    title: "🌊 Seaside Sustainability",
    description: "Developed and maintained the organization's web platforms while collaborating with the tech team on coding, testing, and troubleshooting features. Implemented responsive UI/UX enhancements.",
    image: new URL('./assets/Seaside.png', import.meta.url).href, 
    tags: ["React.js", "UI/UX Redesign", "CSS Modules", "Responsive Design", "Wix Studio"],
    liveLink: "https://www.seasidesustainability.org/", // Update to your live URL if different
    //githubLink: "https://github.com/nikhithareddi/Seaside"
  },
  {
    title: "📅 EventHive",
    description: "A mobile event registration application engineered to handle seamless user sign-ups, schedule tracking, and interactive community planning workflows.",
    image: new URL('./assets/event.png', import.meta.url).href,
    tags: ["React", "Ionic", "Mobile Development", "UI/UX Engineering", "Wireframing", "Prototyping", "Typescript"],
    //liveLink: "https://nikhithareddi.github.io/EventHive",
    liveLink: "https://github.com/nikhithareddi/EventHive"
  },
  {
    title: "🦟 La Mosca",
    description: "An interactive frontend simulation project focusing on fine-tuned user interactions, responsive animations, and precise visual component mechanics.",
    image: new URL('./assets/Lamosca.png', import.meta.url).href,
    tags: ["React.js", "Interactive Design", "Frontend Development","Squarespace"],
    liveLink: "https://lamosca.press/#home",
    //githubLink: "https://github.com/nikhithareddi/la-mosca"
  },

  {
    title: "🧠 Parkinsons Detection Layout",
    description: "A specialized, user-centric interface designed to cleanly display complex healthcare data visualizations, accessibility features, and analytics indicators.",
    image: new URL('./assets/Park.png', import.meta.url).href,
    tags: ["UI/UX Design", "Data Visualization", "Healthcare Tech"],
    liveLink: null,
    githubLink: null
  },
  {
    title: "💼 Know My Secretariat",
    description: "A polished organizational or management dashboard focused on clean data hierarchies, intuitive portal workflows, and responsive navigation layouts.",
    image: new URL('./assets/Know.png', import.meta.url).href,
    tags: ["React", "Dashboard UI", "State Management"],
    liveLink: null,
    githubLink: null
  }
];

export default function Projects() {
  return (
    <section
      style={{
        padding: '5rem 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Global Style Injector for Smooth Card Hover Keyframes & Animations */}
      <style>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        
        .animated-card {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(51, 65, 85, 0.8);
          border-radius: 16px;
          overflow: hidden; 
          display: flex;
          flex-direction: column;
          justifyContent: 'space-between';
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          transform: translateY(0) scale(1);
          box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.3);
        }

        .animated-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(56, 189, 248, 0.6);
          box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.7), 
                      0 0 25px -5px rgba(56, 189, 248, 0.2);
        }

        .animated-card img {
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .animated-card:hover img {
          transform: scale(1.06);
        }

        .link-btn {
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .link-btn:hover {
          transform: translateX(3px);
        }
      `}</style>

      {/* Section Header */}
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
          My Portfolio
        </span>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#ffffff',
            margin: 0,
          }}
        >
          Featured Projects
        </h2>
        <p style={{ color: '#94a3b8', marginTop: '0.5rem', fontSize: '1.1rem' }}>
          A showcase of my front-end engineering architectures, UI/UX designs, and applications.
        </p>
      </div>

      {/* Projects Grid Container */}
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="animated-card">
            <div>
              {/* Image Reveal Wrapper */}
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #334155',
                  overflow: 'hidden'
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'block';
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : null}
                <div 
                  style={{ 
                    display: 'none', 
                    color: '#475569', 
                    fontSize: '0.9rem' 
                  }}
                >
                  📸 Image Preview Missing
                </div>
              </div>

              {/* Card Content Data */}
              <div style={{ padding: '2rem 2rem 1rem 2rem' }}>
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    marginTop: 0,
                    marginBottom: '1rem',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        backgroundColor: '#0f172a',
                        color: '#38bdf8',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '50px',
                        border: '1px solid #1e293b',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Block */}
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                borderTop: '1px solid #334155',
                padding: '1.25rem 2rem 2rem 2rem',
                marginTop: 'auto'
              }}
            >
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                  style={{
                    color: '#38bdf8',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                  }}
                >
                  View Demo →
                </a>
              ) : (
                <span style={{ color: '#475569', fontSize: '0.9rem', cursor: 'not-allowed' }}>
                  Demo Offline
                </span>
              )}

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}