import React from 'react';
import Hero from './components/Hero';
import ChatWidget from './components/ChatWidget';
import TimelineChart from './components/TimelineChart';
import { SECTIONS, FRAMEWORKS, APP_NAME } from './constants';
import { BookOpen, Scale, Globe, FlaskConical, Feather } from 'lucide-react';

// Icon mapping helper
const getIcon = (id: string) => {
  switch (id) {
    case 'doctrine': return <BookOpen className="w-6 h-6 text-brand-gold" />;
    case 'canon': return <Feather className="w-6 h-6 text-brand-gold" />;
    case 'science': return <FlaskConical className="w-6 h-6 text-brand-gold" />;
    case 'colonialism': return <Globe className="w-6 h-6 text-brand-gold" />;
    default: return <Scale className="w-6 h-6 text-brand-gold" />;
  }
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-brand-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight text-brand-blue flex items-center gap-2">
            <span className="text-2xl">☧</span> {APP_NAME}
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            {SECTIONS.map(s => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-brand-gold transition-colors">{s.title.split(' ')[0]}</a>
            ))}
            <a href="#frameworks" className="hover:text-brand-gold transition-colors">Frameworks</a>
          </div>
        </div>
      </nav>

      <Hero />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-32">
        
        {/* Intro Timeline Section */}
        <section className="scroll-mt-24">
           <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-stone-900 mb-4">Chronology of Truth</h2>
              <p className="text-stone-600 font-serif italic">Visualizing the early establishment of creed and canon.</p>
           </div>
           <TimelineChart />
        </section>

        {/* Dynamic Sections */}
        {SECTIONS.map((section, idx) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <div className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
              
              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-stone-100 rounded-lg border border-stone-200">
                    {getIcon(section.id)}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-stone-500">{section.title}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-tight">
                  {section.subtitle}
                </h2>

                <div className="space-y-8">
                  {section.content.map((block, bIdx) => (
                    <div key={bIdx} className="border-l-2 border-brand-gold/30 pl-6 hover:border-brand-gold transition-colors duration-300">
                      <h3 className="text-xl font-serif font-bold text-brand-blue mb-2">{block.heading}</h3>
                      <p className="text-stone-700 leading-relaxed text-lg">{block.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                 <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
                   {section.imagePlaceholder && (
                     <img 
                      src={section.imagePlaceholder} 
                      alt={section.title} 
                      className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent pointer-events-none"></div>
                 </div>
              </div>

            </div>
          </section>
        ))}

        {/* Frameworks Table Section */}
        <section id="frameworks" className="scroll-mt-24 pb-20">
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Key Theological Frameworks</h2>
                <p className="text-stone-400 font-serif">Distinctions that define the faith.</p>
              </div>

              <div className="grid gap-6">
                {FRAMEWORKS.map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-1/3">
                        <h3 className="text-xl font-bold text-brand-gold font-display">{item.concept}</h3>
                      </div>
                      <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                        <p className="text-stone-300 leading-relaxed font-serif">{item.fact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-500 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-display font-bold text-2xl text-stone-300 mb-4">{APP_NAME}</div>
          <p className="mb-8 max-w-md mx-auto">A project dedicated to historical integrity and theological clarity.</p>
          <div className="flex justify-center gap-8 text-sm">
            <span>© {new Date().getFullYear()} The Creedal Archive</span>
            <span>Patristic Facts</span>
            <span>The Ecumenical Lens</span>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;