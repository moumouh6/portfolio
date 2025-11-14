const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Mohamed Alem
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-4">
          Front-End Developer
        </p>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm a Front-End Developer with a Bachelor's degree in Computer Science from USTHB, currently pursuing my Master's.
          Passionate about web development, I specialize in creating responsive, user-friendly, and visually appealing websites.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-blue-500 blue-500 rounded-lg font-semibold hover:from-teal-600  transition-all transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
