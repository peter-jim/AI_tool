
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#A8E6CF]/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FFB6C1]/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="z-10 order-2 lg:order-1 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 bg-[#A8E6CF]/10 text-[#52b69a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Meet your first AI Bestie
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
            The Emerald Unicorn <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8E6CF] to-[#FFB6C1]">
              That Listens
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            Not just a plush. A soul that evolves with you. 
            Infused with emotional intelligence to provide companionship 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all hover:scale-105 pink-glow">
              Adopt Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-square max-w-[500px] mx-auto group">
            <div className="absolute inset-0 bg-[#A8E6CF]/10 rounded-full scale-110 blur-2xl group-hover:bg-[#FFB6C1]/10 transition-colors duration-1000" />
            <img 
              src="https://images.unsplash.com/photo-1558231011-2045e0503062?q=80&w=1000&auto=format&fit=crop" 
              alt="Emerald AI Unicorn" 
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              style={{ filter: 'hue-rotate(120deg) saturate(1.2)' }} // Simulating the Jade color on a standard toy image
            />
            {/* Overlay a placeholder that fits the prompt more specifically if needed */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-20">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFB6C1" d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,78.2,-43.8C86.9,-30.2,93,-15.1,91.8,-0.7C90.6,13.7,82.2,27.4,73,40.1C63.8,52.8,53.8,64.5,41.4,71.1C29.1,77.8,14.5,79.4,0.3,78.9C-13.9,78.4,-27.7,75.8,-40,69C-52.3,62.2,-63,51.3,-71.2,38.5C-79.4,25.8,-85.1,11.2,-84.3,-2.9C-83.5,-17,-76.1,-30.7,-67.2,-42.6C-58.4,-54.5,-48.1,-64.7,-36.1,-72.7C-24.1,-80.7,-12,-86.5,2.1,-90.1C16.1,-93.7,31.4,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
