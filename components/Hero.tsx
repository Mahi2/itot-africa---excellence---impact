
import React from 'react';
import { ArrowRight, Users, Building2 } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1773139786673-d363971d5cca?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Itot Africa Talents" 
          className="w-full h-full object-cover blur-[1px]"
          referrerPolicy="no-referrer"
        />
        {/* Creative overlay: deep gradient for readability on the left, with a touch of itot-teal and seamless faded blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10"></div>
        <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:linear-gradient(to_right,black_20%,transparent_60%)] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-itot-teal/10 via-transparent to-transparent z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-teal-300 font-medium text-sm mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            {t('hero.badge')}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-2xl text-white font-medium mb-10 leading-relaxed max-w-2xl drop-shadow-md">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('/contact')}
              className="group flex items-center justify-center gap-3 px-8 py-5 bg-itot-teal text-white rounded-xl font-bold text-lg hover:bg-teal-600 transition-all shadow-2xl shadow-teal-950/40"
            >
              <Users className="w-5 h-5" />
              {t('hero.cta.individual')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('/contact')}
              className="flex items-center justify-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              <Building2 className="w-5 h-5" />
              {t('hero.cta.organization')}
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150",
                "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&h=150",
                "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=150&h=150",
                "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&h=150"
              ].map((src, i) => (
                <img 
                  key={i} 
                  src={src} 
                  className="w-12 h-12 rounded-full border-2 border-teal-900 object-cover" 
                  alt="Talent"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-white/60 text-sm">
              <span className="text-white font-bold block text-base">{t('hero.stats')}</span>
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
