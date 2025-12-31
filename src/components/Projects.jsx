const Projects = () => {
  const projects = [
    {
      title: 'E-learning Platform',
      description: 'A full-featured platform with courses and conferences for GIG Algeria company — designed for workers to learn and teachers to create and manage courses.',
      tech: ['JavaScript', 'Python', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/moumouh6/TAKWINI.git',
      status: 'completed'
    },
    {
      title: 'Productivity Dashboard',
      description: 'A simple and modern dashboard to track personal productivity, assign tasks, and monitor progress in real time.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/moumouh6/Dashboard.git',
      status: 'completed'
    },
    {
      title: 'DNA & Protein Sequence Analyzer',
      description: "Application web d’analyse de séquences ADN et protéines : GC/AT content, reverse complement, composition AA, poids moléculaire",
      tech: ['Python', 'Streamlit', 'Biopython'],
      githubUrl: 'https://github.com/moumouh6/sequence-analyzer.git',
      status: 'completed'
    },
    {
      title: 'DevReplay AI',
      description: 'An advanced web application that combines AI with a comprehensive knowledge base to help developers solve coding problems and answer technical questions. It stores and organizes code snippets and solutions.',
      tech: ['Python', 'FastAPI', 'React', 'SQLite', 'Tailwind CSS'],
      githubUrl: 'https://github.com/moumouh6/Devreply.git',
      status: 'in-development'
    },
    {
      title: 'WebRTC Real-Time Communication App',
      description: 'A real-time peer-to-peer communication platform that allows users to create or join rooms for video/audio calls, chat, screen sharing, and interactive games using WebRTC and Socket.IO.',
      tech: ['WebRTC', 'JavaScript', 'Node.js', 'Socket.IO'],
      githubUrl: 'https://github.com/moumouh6/WebRTC-video-chat-app.git',
      status: 'completed'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center relative">
                <svg className="w-20 h-20 text-cyan-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {project.status === 'in-development' && (
                  <div className="absolute top-4 right-4 bg-yellow-500/20 border border-yellow-500 text-yellow-400 text-xs px-3 py-1 rounded-full">
                    In Development
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 border border-gray-700 rounded-lg text-center font-medium hover:border-cyan-500 hover:bg-cyan-500/10 transition-all text-sm"
                    >
                      View Code
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <div className="w-full py-2 px-4 border border-gray-700 rounded-lg text-center font-medium text-gray-500 text-sm">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
