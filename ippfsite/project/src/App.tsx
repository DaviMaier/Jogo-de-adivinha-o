import React from 'react';
import { Dribbble as Bible, Clock, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Sermons from './components/Sermons';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="flex-grow">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Sermons />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;