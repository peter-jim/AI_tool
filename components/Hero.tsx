
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/豆包.mp4" type="video/mp4" />
      </video>


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


      </div>
    </section>
  );
};

export default Hero;
