
import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="intro" className="min-h-[80vh] flex flex-col justify-center py-20">
      <div className="max-w-4xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold tracking-widest uppercase mb-6 border border-teal-500/20">
          Responsible AI Intelligence
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
          Building <span className="gradient-text">Accountable</span> <br /> Institutional AI Systems
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-12">
          An investigation into the architecture, implementation, and ethics of AI systems designed to detect corruption, eliminate bias, and surface hidden manipulation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck size={120} />
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="text-teal-400" size={24} />
              The TrustNet Reality
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              TrustNet.AI serves as a strategic advisor for responsible AI deployment, focusing on risk, ethics, and governance frameworks rather than just raw detection.
            </p>
          </div>
          <div className="glass p-6 rounded-3xl relative overflow-hidden group border-blue-500/10">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-blue-400">
              <Info size={120} />
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Info className="text-blue-400" size={24} />
              System Goals
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A comprehensive blueprint to identify financial wrongdoing, discriminatory practices, and hidden patterns across complex datasets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
