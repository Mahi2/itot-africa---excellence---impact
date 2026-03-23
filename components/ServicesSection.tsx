
import React from 'react';
import { ArrowUpRight, GraduationCap, Code2, Globe, Activity, ShieldCheck, Zap, Layers, Target, BarChart3 } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface ServicesSectionProps {
  onNavigate: (path: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const handleGoToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/solutions');
  };

  return (
    <section className="py-32 bg-slate-950 px-6 relative overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-itot-teal/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Editorial Style */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 text-teal-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-white/10 backdrop-blur-sm">
            <Activity size={14} />
            {t('services.badge')}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8">
                {t('services.title')} <br />
                <span className="text-itot-teal">{t('services.titleAccent')}</span>
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-slate-400 text-xl font-light leading-relaxed mb-8">
                {t('services.desc')}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 border-t border-itot-teal rounded-full animate-spin"></div>
                  <Zap size={14} className="text-itot-teal" />
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('services.cycle')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* The New Presentation: Vertical Flow of Innovation */}
        <div className="space-y-8">
          
          {/* 1. OKADEMY - The Engine */}
          <div className="group relative bg-white/[0.02] border border-white/10 rounded-[40px] overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-itot-teal/30">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-12 md:p-16 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-itot-teal text-white text-[10px] font-black uppercase tracking-widest mb-10 w-fit">
                  <GraduationCap size={14} />
                  {t('services.okademy.badge')}
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">{t('services.okademy.title')}</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 max-w-xl">
                  {t('services.okademy.desc')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="text-3xl font-black text-itot-teal mb-1">+10.7k</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('services.okademy.learners')}</div>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="text-xl font-bold text-white mb-1">{t('services.okademy.certifications')}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('services.okademy.certificationsDesc')}</div>
                  </div>
                </div>

                <a 
                  href="https://www.okademy.africa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-4 text-white font-black text-sm w-fit"
                >
                  <span className="border-b-2 border-itot-teal pb-1 group-hover/btn:border-white transition-all">{t('services.okademy.cta')}</span>
                  <div className="w-12 h-12 rounded-full bg-itot-teal text-white flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:rotate-45 transition-all shadow-xl shadow-itot-teal/20">
                    <ArrowUpRight size={20} />
                  </div>
                </a>
              </div>
              
              <div className="lg:col-span-5 relative min-h-[400px] bg-itot-teal/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Abstract Visual Representation of a "Motor" or "Engine" */}
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 border-2 border-itot-teal/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute inset-4 border border-itot-teal/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-12 border-4 border-itot-teal/10 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GraduationCap size={80} className="text-itot-teal opacity-50" />
                    </div>
                  </div>
                </div>
                {/* Decorative mesh */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00796B 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 2. OPEN INTELLIGENCE - The Scout */}
            <div className="group relative bg-slate-900 border border-white/5 rounded-[40px] p-12 overflow-hidden transition-all duration-500 hover:border-itot-teal/20">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-itot-teal/10 border border-itot-teal/20 rounded-2xl flex items-center justify-center text-itot-teal mb-10 group-hover:scale-110 transition-transform">
                  <Code2 size={28} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6">{t('services.intelligence.title')}</h3>
                <p className="text-slate-400 text-base leading-relaxed font-light mb-10">
                  {t('services.intelligence.desc')}
                </p>
                <div className="flex items-center gap-4 text-itot-teal text-xs font-bold uppercase tracking-widest">
                  <BarChart3 size={16} />
                  {t('services.intelligence.insight')}
                </div>
              </div>
              {/* Subtle background glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-itot-teal/5 blur-[80px] rounded-full group-hover:bg-itot-teal/10 transition-all"></div>
            </div>

            {/* 3. CONSULTING & PROJECTS - The Bridge */}
            <div className="group relative bg-white border border-slate-100 rounded-[40px] p-12 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200">
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-10 group-hover:bg-itot-teal group-hover:text-white transition-all">
                  <Layers size={28} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">{t('services.consulting.title')}</h3>
                <p className="text-slate-500 text-base leading-relaxed font-light mb-10">
                  {t('services.consulting.desc')}
                </p>
                
                <div className="mt-auto grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                    <ShieldCheck size={20} className="text-itot-teal" />
                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-tight">{t('services.consulting.partner')}</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                    <Activity size={20} className="text-itot-teal" />
                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-tight">{t('services.consulting.reporting')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
