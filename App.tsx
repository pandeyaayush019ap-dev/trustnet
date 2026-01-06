
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Architecture from './components/Architecture';
import StepJourney from './components/StepJourney';
import ModelDeepDive from './components/ModelDeepDive';
import EthicsSection from './components/EthicsSection';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'intro';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || 'intro';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation activeSection={activeSection} onNavigate={navigateTo} />
      
      <main className="lg:pl-64">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
          {/* Main Content Sections */}
          <HeroSection />
          
          <div className="space-y-24">
            <Architecture />
            <StepJourney />
            <ModelDeepDive />
            <EthicsSection />
            <Assistant />
          </div>

          <footer className="py-20 border-t border-slate-900 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center font-bold text-xs">TN</div>
                <span className="text-slate-500 text-sm">TrustNet Strategy Blueprint © 2024</span>
              </div>
              <div className="flex gap-8">
                <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Framework</a>
                <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Ethical Guidelines</a>
                <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Documentation</a>
              </div>
            </div>
          </footer>
        </div>
      </main>

      {/* Mobile Nav Trigger (Simplified) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 rounded-full bg-teal-500 text-slate-950 shadow-xl flex items-center justify-center font-bold">
          <div className="space-y-1">
             <div className="w-4 h-0.5 bg-slate-950"></div>
             <div className="w-4 h-0.5 bg-slate-950"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;
