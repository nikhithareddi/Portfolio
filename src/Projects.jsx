import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'EventHive',
    timeline: 'Feb 2025 – May 2025',
    description:
      'A responsive cross-platform application designed to streamline event management for university clubs and enhance student engagement. Features a smart club dashboard with real-time participant tracking, one-click student registrations, keyword/category event search, and dynamic Google Calendar API integration.',
    techStack: [
      'Ionic Framework',
      'React.js',
      'Firebase (Auth, Firestore, Functions)',
      'Capacitor',
      'Google Calendar API',
      'Wireframing',
    ],
    previewLink: 'https://github.com/nikhithareddi/EventHive',
    //githubLink: 'https://github.com/nikhithareddi/EventHive',
  },
  {
    id: 2,
    title: 'Architect',
    timeline: 'Aug 2023 – Nov 2023',
    description:
      'A dynamic and interactive language learning platform engineered with dual functionalities focused on high-accuracy machine translation and interactive linguistic modules designed to seamlessly convert languages and augment classroom or individual training experiences.',
    techStack: [
      'React',
      'UI Design',
      'Software Engineering',
      'Risk Management',
      'Gantt Charts',
    ],
    //previewLink: "#",
    // githubLink: '#',
  },
  {
    id: 3,
    title: "Prophecy of Parkinson's Disease Using Enhanced ResNet",
    timeline: 'Dec 2022 – Apr 2023',
    description:
      'Developed a transfer learning computer vision model to discriminate between healthy controls and Parkinsonism disease-affected individuals. Utilized a MobileNet framework to extract, evaluate, and diagnose digital trace patterns drawn by patients under specific instructions.',
    techStack: [
      'MobileNet',
      'ResNet50',
      'Computer Vision',
      'Deep Learning',
      'Transfer Learning',
    ],
    //previewLink: "#",
    //githubLink: '#',
  },
  {
    id: 4,
    title: "Prognosis of Idiopathic Parkinson's Disease using CNN",
    timeline: 'Jun 2022 – Nov 2022',
    description:
      "Built a deep neural network system leveraging Convolutional Neural Networks (CNN) to aid clinicians in the objective process of diagnosing idiopathic Parkinson's disease by analyzing structured clinical research samples.",
    techStack: [
      'CNN',
      'Deep Learning',
      'Website Building',
      'Project Implementation',
      'Healthcare Tech',
    ],
    previewLink: 'https://ieeexplore.ieee.org/document/10084077',
    //githubLink: '#',
  },
  {
    id: 5,
    title: 'Know My Secretariat',
    timeline: 'Feb 2022 – May 2022',
    description:
      'A location-aware mobile application engineered to identify and locate the nearest local administrative secretariat. Replaced manual complaint registration by allowing citizens to lodge complaints digitally, track volunteer metrics, and provide explicit workflow feedback.',
    techStack: [
      'Mobile Applications',
      'Google Maps API',
      'Location Services',
      'User Feedback Architectures',
    ],
    //previewLink: "#",
    //githubLink: '#',
  },
];

export default function Projects() {
  return (
    <section
      style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
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
        Featured Work
      </h2>
      <p
        style={{
          color: '#94a3b8',
          textAlign: 'center',
          marginBottom: '4rem',
          fontSize: '1.1rem',
        }}
      >
        A showcase of software engineering, machine learning pipelines, and
        accessible interface design.
      </p>

      {/* Responsive Grid Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
        }}
      >
        {projectsData.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: '#1e293b',
              borderRadius: '12px',
              border: '1px solid #334155',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition:
                'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = '#38bdf8';
              e.currentTarget.style.boxShadow =
                '0 12px 30px -10px rgba(56, 189, 248, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#334155';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                  gap: '1rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: '#f8fafc',
                    fontWeight: '600',
                    lineHeight: '1.3',
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#64748b',
                    whiteSpace: 'nowrap',
                    marginTop: '0.25rem',
                  }}
                >
                  {project.timeline}
                </span>
              </div>

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

              {/* Tech Stack Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '2rem',
                }}
              >
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: '#0f172a',
                      color: '#38bdf8',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      border: '1px solid rgba(56, 189, 248, 0.15)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: 'auto',
                paddingTop: '1.25rem',
                borderTop: '1px solid #334155',
              }}
            >
              {/* Only render the preview link if it exists and isn't just a placeholder '#' */}
              {project.previewLink && project.previewLink !== '#' && (
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#38bdf8',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                  }}
                >
                  Preview ↗
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#64748b',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
                onMouseOver={(e) => (e.target.style.color = '#f8fafc')}
                onMouseOut={(e) => (e.target.style.color = '#64748b')}
              ></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
