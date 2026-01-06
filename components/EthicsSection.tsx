
import React from 'react';
import { AlertOctagon, Lock, Scaling, EyeOff, Gavel } from 'lucide-react';

const CHALLENGES = [
  { icon: Lock, title: "Privacy & Legal", desc: "Sensitive personal data must be handled securely while adhering to cross-border regulations." },
  { icon: Scaling, title: "Model Bias", desc: "AI can inadvertently amplify historical biases if datasets aren't rigorously audited." },
  { icon: AlertOctagon, title: "False Positives", desc: "Risk of mislabeling innocent behavior can cause catastrophic reputational damage." },
  { icon: EyeOff, title: "Transparency", desc: "Ensuring stakeholders understand the 'why' behind automated flags via XAI tools." },
  { icon: Gavel, title: "Governance", desc: "Continuous oversight is non-negotiable for maintaining a trustworthy ecosystem." },
];

const EthicsSection: React.FC = () => {
  return (
    <section id="ethics" className="py-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Ethical Foundations</h2>
        <p className="text-slate-400 max-w-2xl">A framework for addressing the critical challenges inherent in detection systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHALLENGES.map((item, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl group border-red-500/5 hover:border-red-500/20 transition-all">
            <div className="p-3 rounded-xl bg-red-500/10 text-red-400 w-fit mb-6 group-hover:bg-red-500 group-hover:text-slate-950 transition-colors">
              <item.icon size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 glass p-10 rounded-[40px] bg-slate-900/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6">Strategy Summary Blueprint</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                  <th className="pb-4 px-4">Component</th>
                  <th className="pb-4 px-4">Core Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="py-4 px-4 font-bold text-teal-400">Data Layer</td>
                  <td className="py-4 px-4 text-slate-400 italic">Ingest structured/unstructured global signals</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-teal-400">Models</td>
                  <td className="py-4 px-4 text-slate-400 italic">Detect anomalies, patterns, and hidden networks</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-teal-400">Bias Audits</td>
                  <td className="py-4 px-4 text-slate-400 italic">Ensure fairness and radical transparency</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-teal-400">Governance</td>
                  <td className="py-4 px-4 text-slate-400 italic">Ethical and legal human oversight loop</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-teal-400">Outputs</td>
                  <td className="py-4 px-4 text-slate-400 italic">Contextual alerts, visualizations, and evidence reports</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicsSection;
