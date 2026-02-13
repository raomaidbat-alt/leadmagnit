
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Strategies from './components/Strategies';
import Catalog from './components/Catalog';
import HowToUse from './components/HowToUse';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { CATEGORIES } from './data/prompts';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const categoryElements = CATEGORIES.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 400;

      for (let i = categoryElements.length - 1; i >= 0; i--) {
        const el = categoryElements[i];
        if (el && scrollPosition >= el.offsetTop) {
          setActiveCategory(CATEGORIES[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-cyber-dark selection:bg-cyber-cyan selection:text-cyber-dark">
      <div className="tron-grid"></div>
      
      <Hero promptCount={CATEGORIES.reduce((acc, cat) => acc + cat.prompts.length, 0)} />
      
      <main>
        <div className="container mx-auto px-4">
          <Advantages />
        </div>
        
        <Strategies />
        
        <div className="container mx-auto px-4 py-12">
          <Catalog 
            categories={CATEGORIES} 
            activeCategoryId={activeCategory} 
          />
          
          <HowToUse />
        </div>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
