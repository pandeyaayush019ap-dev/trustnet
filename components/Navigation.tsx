
import React from 'react';
import { SECTIONS } from '../constants';

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-slate-950 border-r border-slate-800 p-6 hidden lg:block">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center font-bold text-slate-950">TN</div>
        <h1 className="font-bold text-xl tracking-tight">TrustNet Hub</h1>
      </div>
      <div className="space-y-2">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
              activeSection === section.id
                ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${activeSection === section.id ? 'bg-teal-400' : 'bg-transparent'}`} />
            <span className="font-medium text-sm tracking-wide">{section.label}</span>
          </button>
        ))}
      </div>
      <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl">
        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Status</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-slate-300">Strategy Active</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
