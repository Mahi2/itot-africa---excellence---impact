
import React from 'react';
import { ArrowRight, Users, Building2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: 'home' | 'about' | 'solutions' | 'impact' | 'partnerships' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
          alt="African professionals working" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-teal-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-teal-300 font-medium text-sm mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Bâtir l'avenir du numérique en Afrique
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Transformer le potentiel en <span className="text-itot-teal bg-white px-2 inline-block">compétences</span> utiles.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-light mb-10 leading-relaxed max-w-2xl">
            Itot Africa est l'infrastructure humaine et digitale qui relie les individus, les entreprises et les institutions aux opportunités réelles de croissance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="group flex items-center justify-center gap-3 px-8 py-5 bg-itot-teal text-white rounded-xl font-bold text-lg hover:bg-teal-600 transition-all shadow-2xl shadow-teal-950/40"
            >
              <Users className="w-5 h-5" />
              Je suis un particulier
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              <Building2 className="w-5 h-5" />
              Je représente une organisation
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/150?u=${i}`} 
                  className="w-12 h-12 rounded-full border-2 border-teal-900 object-cover" 
                  alt="Talent"
                />
              ))}
            </div>
            <div className="text-white/60 text-sm">
              <span className="text-white font-bold block text-base">+15,000 Talents</span>
              formés et connectés au marché
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-itot-teal/10 blur-[120px] rounded-full -mr-20 -mb-20"></div>
    </section>
  );
};

export default Hero;
