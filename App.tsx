
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UGCSection from './components/UGCSection';
import Features from './components/Features';
import TrustSection, { Footer } from './components/TrustSection';
import { MessageCircleHeart } from 'lucide-react';

const App: React.FC = () => {
  const [showChatTip, setShowChatTip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowChatTip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FEF9EF] selection:bg-[#A8E6CF] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Stats */}
        <section className="bg-white/50 border-y border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">50K+</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Adopted</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Safe AI</p>
            </div>
          </div>
        </section>

        <UGCSection />
        
        <Features />

        {/* Video Highlight */}
        <section className="py-24 max-w-7xl mx-auto px-4">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group">
             <img src="https://picsum.photos/seed/video-cover/1920/1080" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-24 h-24 bg-[#A8E6CF] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform pink-glow">
                   <div className="ml-2 w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent" />
                </button>
             </div>
             <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur" />
                <span className="text-white font-medium text-sm">Meet Uni, your first AI bestie</span>
             </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-[#FFB6C1]/10 text-center px-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full -translate-y-1/2 z-0 blur-3xl opacity-50" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight italic">You Can Trust Uni, <br /> Just Like You Trust Your Best Friend</h2>
            <button className="px-12 py-5 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-black transition-all hover:scale-105 shadow-2xl">
              Bring Uni Home
            </button>
          </div>
        </section>

        <TrustSection />
      </main>

      <Footer />

      {/* Floating Chat */}
      <div className="fixed bottom-8 right-8 z-[100] group">
        {showChatTip && (
          <div className="absolute bottom-full right-0 mb-4 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100 animate-bounce whitespace-nowrap">
             <p className="text-xs font-bold text-gray-800">Hi! I'm Uni. Want to talk? ✨</p>
             <div className="absolute top-full right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 -mt-1.5" />
          </div>
        )}
        <button className="w-16 h-16 bg-[#FFB6C1] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group">
          <MessageCircleHeart className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default App;
