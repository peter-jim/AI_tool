
import React from 'react';
import { ShoppingBag, Search, User, Sparkles } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEF9EF]/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#A8E6CF] rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-gray-900">UNI AI</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#A8E6CF] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-[#A8E6CF] transition-colors"><Search className="w-5 h-5" /></button>
          <button className="text-gray-600 hover:text-[#A8E6CF] transition-colors"><User className="w-5 h-5" /></button>
          <button className="relative text-gray-600 hover:text-[#A8E6CF] transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#FFB6C1] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
