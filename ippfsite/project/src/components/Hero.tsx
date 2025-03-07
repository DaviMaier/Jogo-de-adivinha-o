import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Igreja Pentecostal Palavra da Fé</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus." - Efésios 2:8
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-white text-blue-900 hover:bg-blue-100 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Nossos Cultos
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-transparent hover:bg-blue-800 border-2 border-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;