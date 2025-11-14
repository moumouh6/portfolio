import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            MA
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
