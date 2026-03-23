
import React, { useState } from 'react';
import { Users, Target, Zap, BarChart3, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const ProblemSection: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const points = [
    {
      id: "01",
      title: t('problem.point1.title'),
      desc: t('problem.point1.desc'),
      icon: <Users className="w-6 h-6" />,
      category: t('problem.point1.category')
    },
    {
      id: "02",
      title: t('problem.point2.title'),
      desc: t('problem.point2.desc'),
      icon: <Target className="w-6 h-6" />,
      category: t('problem.point2.category')
    },
    {
      id: "03",
      title: t('problem.point3.title'),
      desc: t('problem.point3.desc'),
      icon: <Zap className="w-6 h-6" />,
      category: t('problem.point3.category')
    },
    {
      id: "04",
      title: t('problem.point4.title'),
      desc: t('problem.point4.desc'),
      icon: <BarChart3 className="w-6 h-6" />,
      category: t('problem.point4.category')
    }
  ];

  return (
    <section className="bg-slate-950 py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Very Clean */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-itot-teal"></div>
            <span className="text-itot-teal font-black text-xs uppercase tracking-[0.3em]">{t('problem.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">
            {t('problem.title')}<span className="text-slate-500">{t('problem.titleAccent')}</span>
          </h2>
        </div>

        {/* The Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {points.map((point, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative p-10 md:p-16 bg-slate-950 transition-all duration-700 min-h-[380px] flex flex-col justify-between group cursor-default ${
                hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30 blur-[2px] scale-[0.98]' : 'opacity-100 blur-0 scale-100'
              }`}
            >
              {/* Background Number Label */}
              <div className="absolute top-10 right-10 text-8xl font-black text-white/[0.03] select-none transition-colors group-hover:text-itot-teal/10">
                {point.id}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-itot-teal group-hover:bg-itot-teal group-hover:text-white transition-all duration-500">
                    {point.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{point.category}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-itot-teal transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed max-w-md font-light">
                  {point.desc}
                </p>
              </div>

              <div className="relative z-10 pt-8 flex items-center gap-2 text-itot-teal font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {t('problem.cta')}
                <ArrowUpRight size={18} />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-itot-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-slate-500 text-sm max-w-2xl">
            {t('problem.insight')}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-itot-teal uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">{t('problem.mission')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
