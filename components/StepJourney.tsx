
import React, { useState } from 'react';
import { IMPLEMENTATION_STEPS } from '../constants';
import * as Icons from 'lucide-react';

const StepJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="implementation" className="py-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Implementation Roadmap</h2>
        <p className="text-slate-400 max-w-2xl">A clinical 9-step approach to engineering trust and detection.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-3">
          {IMPLEMENTATION_STEPS.map((step, idx) => {
            // @ts-ignore
            const IconComponent = Icons[step.icon];
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all flex items-center gap-4 ${
                  activeStep === idx 
                  ? 'bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20' 
                  : 'hover:bg-slate-900 text-slate-400'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeStep === idx ? 'bg-teal-500 text-slate-950' : 'bg-slate-800'}`}>
                  {IconComponent && <IconComponent size={16} />}
                </div>
                <span className="font-semibold text-sm">Step {step.id}: {step.title}</span>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-8">
          <div className="glass h-full min-h-[400px] rounded-3xl p-10 relative overflow-hidden flex flex-col justify-center border-teal-500/10">
            <div className="absolute top-0 right-0 p-8 text-teal-500 opacity-5">
              <span className="text-[120px] font-bold leading-none">{activeStep + 1}</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">{IMPLEMENTATION_STEPS[activeStep].title}</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed italic">
                "{IMPLEMENTATION_STEPS[activeStep].description}"
              </p>
              
              <ul className="space-y-4">
                {IMPLEMENTATION_STEPS[activeStep].details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    <span className="text-slate-400 text-md">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepJourney;
