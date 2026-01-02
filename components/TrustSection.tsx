
import React from 'react';
import { TRUST_CARDS } from '../constants';
import { Twitter, Youtube, Instagram, Facebook } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="bg-[#CDB599]/30 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_CARDS.map((card) => (
            <div key={card.title} className="bg-white/50 backdrop-blur-md p-10 rounded-[3rem] text-center space-y-4 hover:shadow-xl transition-shadow border border-white/20">
              <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-[#A8E6CF] shadow-sm">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold">{card.title}</h4>
              <p className="text-gray-500">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#A8E6CF] rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✨</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter">UNI AI</span>
            </div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400">Be your first ai best friend</p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-[#A8E6CF] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-[#A8E6CF] transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-[#A8E6CF] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-[#A8E6CF] transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 grayscale opacity-50">
               {['AMEX', 'Apple Pay', 'Diners Club', 'Discover', 'Google Pay', 'MasterCard', 'PayPal', 'Shop Pay', 'Visa'].map(p => (
                 <span key={p} className="text-[10px] font-bold border border-gray-300 px-2 py-1 rounded uppercase">{p}</span>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest mb-6">About Us</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#A8E6CF]">About Uni</a></li>
                <li><a href="#" className="hover:text-[#A8E6CF]">FAQ</a></li>
                <li><a href="#" className="hover:text-[#A8E6CF]">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Policy</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#A8E6CF]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#A8E6CF]">Refund Policy</a></li>
                <li><a href="#" className="hover:text-[#A8E6CF]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#A8E6CF]">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-[#A8E6CF]">Track Your Order</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Contact Us</h5>
              <div className="text-sm text-gray-500 space-y-4">
                <p>support@uni-ai.love</p>
                <p className="font-medium text-gray-800">UNI EMERALD INC.</p>
                <p>800 N UNICORN ST, SUITE 101<br />WONDERLAND, DE 19801</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:row items-center justify-between gap-6">
           <div className="bg-gray-50 p-6 rounded-3xl w-full flex flex-col sm:flex-row gap-4 items-center max-w-2xl mx-auto">
             <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium px-4 h-12"
             />
             <button className="px-10 h-12 bg-black text-white rounded-full font-bold text-sm uppercase hover:bg-gray-800 transition-all shadow-lg hover:shadow-black/20">
               Subscribe
             </button>
           </div>
           <p className="text-xs text-gray-400">© 2025 UNI AI. All rights reserved. Built for magic.</p>
        </div>
      </div>
    </footer>
  );
};

export default TrustSection;
