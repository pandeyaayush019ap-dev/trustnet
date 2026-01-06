
import React from 'react';
import { CORE_MODELS } from '../constants';
import * as Icons from 'lucide-react';

const ModelDeepDive: React.FC = () => {
  return (
    <section id="models" className="py-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Core Model Layer</h2>
        <p className="text-slate-400 max-w-2xl">Advanced algorithmic strategies for different data modalities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CORE_MODELS.map((model, idx) => {
          // @ts-ignore
          const IconComponent = Icons[model.icon];
          return (
            <div key={idx} className="glass p-8 rounded-3xl border-slate-800/50 hover:border-teal-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {IconComponent && <IconComponent className="text-teal-400" size={28} />}
              </div>
              <h3 className="text-2xl font-bold mb-1">{model.title}</h3>
              <p className="text-teal-500 text-xs font-bold tracking-widest uppercase mb-6 opacity-60">{model.subtitle}</p>
              
              <div className="space-y-3">
                {model.points.map((p, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 text-xs text-slate-400 border border-transparent hover:border-slate-800">
                    <div className="mt-1 w-1 h-1 rounded-full bg-slate-600" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-12 glass p-8 rounded-3xl border-yellow-500/10 bg-gradient-to-r from-yellow-500/5 to-transparent">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="p-4 rounded-2xl bg-yellow-500/10 text-yellow-500">
            <Icons.Eye size={32} />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">Detection of Invisible Manipulation</h4>
            <p className="text-sm text-slate-400 max-w-2xl">
              Modern anomaly detection surfaces signals invisible to manual audits: subtle timing patterns, co-movement among actors, and cross-dataset correlations that rules alone cannot capture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelDeepDive;
