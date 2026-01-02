
import React from 'react';
import { ChevronLeft, ChevronRight, BrainCircuit } from 'lucide-react';
import { INTERACTION_MODES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 space-y-24">
      {/* Memory Model Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Not just AI. Not just a friend</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Powered by Uni AI's proprietary emotional model, Uni turns AI into everyday companionship
          </p>
        </div>

        <div className="bg-[#E9DCC9]/40 rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            <div className="w-14 h-14 bg-white/50 backdrop-blur rounded-2xl flex items-center justify-center">
              <BrainCircuit className="w-8 h-8 text-[#A8E6CF]" />
            </div>
            <h3 className="text-3xl font-bold">Multi-Layer Memory Model</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Every chat is transformed into a structured understanding: through layered memory, Uni gradually shapes a long-term personality model, allowing it to anticipate how you might feel in certain moments — and to be there with the right companionship when you need it most.
            </p>
            <p className="text-gray-500 italic">Uni doesn't just memorize words—it interprets meaning.</p>
            <div className="flex gap-4 pt-4">
              <button className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
            <img src="https://picsum.photos/seed/memory/1000/600" className="w-full h-full object-cover" alt="Memory Model" />
            <div className="absolute inset-0 bg-black/20 flex flex-col items-end p-8 gap-4">
               <div className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-xs font-bold uppercase tracking-widest text-gray-800">Short Term Memory <span className="mx-2">· · ·</span> Mood</div>
               <div className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-xs font-bold uppercase tracking-widest text-gray-800">Mid Term Memory <span className="mx-2">· · ·</span> Key Events</div>
               <div className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-xs font-bold uppercase tracking-widest text-gray-800">Long Term Memory <span className="mx-2">· · ·</span> Habits & Personality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interaction Modes */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">More Than Words</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Uni engages across senses with dynamic feedback and adaptive modes, bringing companionship that feels truly alive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERACTION_MODES.map((mode) => (
            <div key={mode.name} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all">
              <img src={mode.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={mode.name} />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <div className="mb-4 w-10 h-10 bg-[#A8E6CF]/80 backdrop-blur rounded-xl flex items-center justify-center">
                  {React.cloneElement(mode.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>
                <h4 className="font-bold text-sm tracking-widest uppercase">{mode.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
