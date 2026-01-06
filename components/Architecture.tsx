
import React from 'react';
import { Database, FileCode, Search, ScanLine, MessageSquare, UserCircle, Send } from 'lucide-react';

const ARCH_LAYERS = [
  { icon: Database, name: "Data Collection", desc: "Structured & Unstructured Ingestion", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: FileCode, name: "Normalization", desc: "Tokenization & Metadata Tagging", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { icon: Search, name: "Model Layer", desc: "Anomaly & Graph Engines", color: "text-teal-400", bg: "bg-teal-400/10" },
  { icon: ScanLine, name: "Bias Detection", desc: "Fairness Audits & XAI", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: MessageSquare, name: "Interpretation", desc: "Explanation & Analysis", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: UserCircle, name: "Governance Loop", desc: "Expert Human Validation", color: "text-orange-400", bg: "bg-orange-400/10" },
  { icon: Send, name: "Actionable Reporting", desc: "Audit Trails & Response", color: "text-red-400", bg: "bg-red-400/10" },
];

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">System Architecture</h2>
        <p className="text-slate-400 max-w-2xl">The 7-layer stack required to surface institutional corruption and maintain ethical integrity.</p>
      </div>

      <div className="relative flex flex-col items-center gap-4">
        {ARCH_LAYERS.map((layer, idx) => (
          <div key={idx} className="w-full max-w-2xl flex flex-col items-center group">
            <div className="w-full glass p-6 rounded-2xl flex items-center gap-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/5 cursor-default border-slate-800/50">
              <div className={`p-4 rounded-xl ${layer.bg} ${layer.color}`}>
                <layer.icon size={28} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] mono text-slate-500 font-bold uppercase tracking-widest">Layer 0{idx + 1}</span>
                  <h4 className="font-bold text-lg">{layer.name}</h4>
                </div>
                <p className="text-sm text-slate-400">{layer.desc}</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
              </div>
            </div>
            {idx < ARCH_LAYERS.length - 1 && (
              <div className="h-4 w-px bg-gradient-to-b from-slate-700 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Architecture;
