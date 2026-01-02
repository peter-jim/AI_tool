
import React from 'react';
import { Heart, MessageCircle, Moon, HandMetal, Volume2, ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

export const COLORS = {
  primary: '#A8E6CF', // Jade Green
  secondary: '#FFB6C1', // Soft Pink
  background: '#FEF9EF', // Creamy Beige
  text: '#1F2937',
};

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Shop', href: '#shop' },
  { name: 'Uni Pass', href: '#pass' },
  { name: 'FAQ', href: '#faq' },
  { name: 'About Us', href: '#about' },
];

export const STORIES = [
  { id: '1', username: '@lily_vlogs', thumbnail: 'https://picsum.photos/seed/girl1/400/700', tagline: 'POV: Autumn feels sweeter with Uni' },
  { id: '2', username: '@jade_mindset', thumbnail: 'https://picsum.photos/seed/girl2/400/700', tagline: 'My AI Bestie Calming My Doubts ✨' },
  { id: '3', username: '@sara_tech', thumbnail: 'https://picsum.photos/seed/girl3/400/700', tagline: 'Uni help me pick my outfit!' },
  { id: '4', username: '@mia_lifestyle', thumbnail: 'https://picsum.photos/seed/girl4/400/700', tagline: 'Letting Uni plan my day' },
  { id: '5', username: '@cloe_unboxed', thumbnail: 'https://picsum.photos/seed/girl5/400/700', tagline: 'The cuttest package ever!' },
];

export const TRUST_CARDS = [
  { title: 'Fast, Free Shipping', description: 'Ship out within 1-2 business days', icon: <Truck className="w-8 h-8" /> },
  { title: 'One-Year Warranty', description: 'Warranty period subject to local laws', icon: <ShieldCheck className="w-8 h-8" /> },
  { title: 'Lifetime Support', description: 'Quick support within 24 hours', icon: <Headphones className="w-8 h-8" /> },
];

export const INTERACTION_MODES = [
  { name: 'VOICE INTERACTION', image: 'https://picsum.photos/seed/voice/600/400', icon: <Volume2 /> },
  { name: 'ADAPTIVE EYE FEEDBACK', image: 'https://picsum.photos/seed/eyes/600/400', icon: <MessageCircle /> },
  { name: 'TOUCH RESPONSE', image: 'https://picsum.photos/seed/touch/600/400', icon: <HandMetal /> },
  { name: 'SLEEP MODE', image: 'https://picsum.photos/seed/sleep/600/400', icon: <Moon /> },
];
