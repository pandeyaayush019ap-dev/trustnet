
import React, { useState, useRef, useEffect } from 'react';
import { GeminiService } from '../services/geminiService';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';

const Assistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'Hello. I am the TrustNet Strategy Assistant. How can I help you analyze this responsible AI framework?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const gemini = useRef<GeminiService | null>(null);

  useEffect(() => {
    if (!gemini.current) {
      gemini.current = new GeminiService();
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await gemini.current?.sendMessage(userMsg);
      setMessages(prev => [...prev, { role: 'bot', content: response || "No response generated." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: "Connection to the strategy engine failed." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-24">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
          Strategy Assistant
          <Sparkles className="text-teal-400" size={24} />
        </h2>
        <p className="text-slate-400 max-w-2xl">Ask deeper questions about the corruption detection architecture or TrustNet's strategic role.</p>
      </div>

      <div className="max-w-4xl mx-auto glass rounded-[40px] border-slate-800 overflow-hidden flex flex-col h-[600px]">
        <div className="p-6 bg-slate-900/50 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-slate-950">
              <Bot size={20} />
            </div>
            <div>
              <p className="font-bold text-sm tracking-wide">TrustNet Bot</p>
              <p className="text-[10px] text-teal-500 uppercase font-bold tracking-widest">Powered by Gemini 3 Flash</p>
            </div>
          </div>
          <div className="text-[10px] mono text-slate-500 bg-slate-800 px-3 py-1 rounded-full uppercase tracking-tighter">
            System Online
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-4 max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-blue-600' : 'bg-slate-800'}`}>
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600/10 text-blue-100 rounded-tr-none border border-blue-500/20' : 'bg-slate-800/40 text-slate-300 rounded-tl-none border border-slate-700/50'}`}>
                  {m.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="flex gap-4 items-center animate-pulse">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Loader2 className="animate-spin text-teal-400" size={16} />
                </div>
                <div className="px-4 py-2 bg-slate-800/20 rounded-2xl text-xs text-slate-500 italic">
                  Analyzing strategy...
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-slate-900/50 border-t border-slate-800">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="E.g., How does the human governance loop work?"
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all pr-16"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="absolute right-2 p-3 bg-teal-500 text-slate-950 rounded-xl hover:bg-teal-400 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;
