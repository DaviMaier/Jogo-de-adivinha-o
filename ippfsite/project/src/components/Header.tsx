import React, { useState, useEffect } from 'react';
import { Menu, X, Dribbble as Bible } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre Nós' },
    { id: 'services', label: 'Cultos' },
    { id: 'sermons', label: 'Mensagens' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Bible className="h-8 w-8 text-blue-700" />
          <div className="ml-2">
            <h1 className="text-xl font-bold text-blue-900">Igreja Pentecostal</h1>
            <p className="text-sm text-blue-700">Palavra da Fé</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                activeSection === item.id ? 'text-blue-700 font-semibold' : 'text-gray-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-blue-700 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm font-medium py-2 transition-colors hover:text-blue-700 ${
                    activeSection === item.id ? 'text-blue-700 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;