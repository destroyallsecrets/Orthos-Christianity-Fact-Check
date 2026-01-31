import React from 'react';
import { ArrowDown } from 'lucide-react';
import { APP_NAME, APP_TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900 text-stone-100">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Ancient Manuscript Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-stone-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-4 inline-block px-3 py-1 border border-brand-gold/50 rounded-full text-brand-gold text-sm tracking-widest uppercase animate-fade-in-up">
          Documented Facts & Theology
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight drop-shadow-lg text-stone-50">
          {APP_NAME}
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif italic text-stone-300 mb-8 font-light">
          {APP_TAGLINE}
        </h2>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed mb-12">
          Refuting common misconceptions about Christian history through historical documentation, 
          archaeological evidence, and theological precision.
        </p>
        
        <button 
          onClick={() => document.getElementById('doctrine')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-2 mx-auto bg-transparent border border-stone-400 px-8 py-3 rounded-sm hover:bg-stone-100 hover:text-stone-900 hover:border-stone-100 transition-all duration-500"
        >
          <span className="uppercase tracking-widest text-sm font-semibold">Explore the Archives</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;