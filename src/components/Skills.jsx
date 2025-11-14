const Skills = () => {
  const skillCategories = [
    {
      title: 'Langages',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'SQL', 'R' ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'jQUERY', 'Tailwind CSS', 'Bootstrap', 'FastAPI', 'Node.js', 'Pandas', 'Biopython', 'Matplotlib', 'Streamlit']
    },
    {
      title: 'Database & Cloud',
      skills: ['PostgreSQL', 'SQLite', 'Cloudinary']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma']
    },
    {
      title: 'Bioinformatique',
      skills: ['Analyse de séquences ADN et protéines', 'Visualisation scientifique,', 'Biologie moléculaire']  
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Teamwork', 'Communication', 'Creativity']
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/30 text-sm font-medium hover:bg-cyan-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
