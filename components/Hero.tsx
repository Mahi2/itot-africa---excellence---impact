
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Building2, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  // Split stats for better layout
  const statsText = t('hero.stats');
  const statsArray = typeof statsText === 'string' ? statsText.split('|') : [];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1773139786673-d363971d5cca?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Itot Africa Talents" 
          className="w-full h-full object-cover blur-[1px]"
          referrerPolicy="no-referrer"
        />
        {/* Creative overlay: deep gradient for readability on the left, with a touch of itot-teal and seamless faded blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
        <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_right,black_30%,transparent_70%)] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-itot-teal/20 via-transparent to-transparent z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-teal-300 font-medium text-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            {t('hero.badge')}
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              {t('hero.title').split(' ').map((word: string, i: number) => (
                <motion.span 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                  }}
                  transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className="inline-block mr-[0.2em]"
                >
                  {word === "concret." || word === "employment." ? (
                    <span className="relative inline-block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-300 bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_15px_rgba(45,212,191,0.4)]">
                        {word}
                      </span>
                      <motion.span 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-teal-400 to-transparent rounded-full opacity-50"
                      />
                    </span>
                  ) : word}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-300 font-light mb-12 leading-relaxed max-w-2xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button 
              onClick={() => onNavigate('/contact')}
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-itot-teal text-white rounded-xl font-bold text-lg hover:bg-teal-600 transition-all shadow-2xl shadow-teal-950/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Users className="w-5 h-5" />
              {t('hero.cta.individual')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('/contact')}
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              <Building2 className="w-5 h-5" />
              {t('hero.cta.organization')}
            </button>
          </motion.div>

          {/* Refined Stats Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150",
                "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&h=150",
                "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=150&h=150",
                "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&h=150"
              ].map((src, i) => (
                <motion.img 
                  whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                  key={i} 
                  src={src} 
                  className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover ring-1 ring-white/10" 
                  alt="Talent"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-y-4">
              {statsArray.map((stat, i) => {
                const trimmedStat = stat.trim();
                const match = trimmedStat.match(/^([\+\d\s,]+)(.*)$/);
                const value = match ? match[1].trim() : trimmedStat;
                const label = match ? match[2].trim() : "";
                
                return (
                  <React.Fragment key={i}>
                    <div className="flex flex-col group">
                      <span className="text-white font-bold text-xl md:text-2xl tracking-tight group-hover:text-itot-teal transition-colors">
                        {value}
                      </span>
                      <span className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] group-hover:text-slate-300 transition-colors">
                        {label}
                      </span>
                    </div>
                    {i < statsArray.length - 1 && (
                      <div className="mx-8 h-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-itot-teal/5 blur-[120px] rounded-full -mr-20 -mb-20"></div>
    </section>
  );
};


export default Hero;
