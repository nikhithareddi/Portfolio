import React from 'react';

const projects = [
  {
    title: "🌊 Seaside Sustainability",
    description: "Developed and maintained the organization's web platforms while collaborating with the tech team on coding, testing, and troubleshooting features. Implemented responsive UI/UX enhancements.",
    image: new URL('./assets/Seaside.png', import.meta.url).href, 
    tags: ["React.js", "UI/UX Redesign", "CSS Modules", "Responsive Design"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "📅 EventHive",
    description: "A mobile event registration application engineered to handle seamless user sign-ups, schedule tracking, and interactive community planning workflows.",
    image: new URL('./assets/event.png', import.meta.url).href,
    tags: ["React", "Ionic", "Mobile Development", "UI/UX Engineering"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "🦟 La Mosca",
    description: "An interactive frontend simulation project focusing on fine-tuned user interactions, responsive animations, and precise visual component mechanics.",
    image: new URL('./assets/Lamosca.png', import.meta.url).href,
    tags: ["React.js", "Interactive Design", "Frontend Development"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "🧠 Parkinsons Detection Layout",
    description: "A specialized, user-centric interface designed to cleanly display complex healthcare data visualizations, accessibility features, and analytics indicators.",
    image: new URL('./assets/Park.png', import.meta.url).href,
    tags: ["UI/UX Design", "Data Visualization", "Healthcare Tech"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "💼 Know My Secretariat",
    description: "A polished organizational or management dashboard focused on clean data hierarchies, intuitive portal workflows, and responsive navigation layouts.",
    image: new URL('./assets/Know.png', import.meta.url).href,
    tags: ["React", "Dashboard UI", "State Management"],
    liveLink: "#",
    githubLink: "#"
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

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              backgroundColor: '#1e293b',
              borderRadius: '16px',
              overflow: 'hidden', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #334155',
            }}
          >
            <div>
              {/* Image Box */}
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

              {/* Card Content */}
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

            {/* Links */}
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                borderTop: '1px solid #334155',
                padding: '1.25rem 2rem 2rem 2rem',
              }}
            >
              <a
                href={project.liveLink}
                style={{
                  color: '#38bdf8',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                }}
              >
                View Demo →
              </a>
              <a
                href={project.githubLink}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                }}
              >
                GitHub Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}