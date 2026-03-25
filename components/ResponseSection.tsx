
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users, Building2, Landmark, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const ResponseSection: React.FC = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      title: t('response.pillars.0.title'),
      subtitle: t('response.pillars.0.subtitle'),
      desc: t('response.pillars.0.desc'),
      details: t('response.pillars.0.details', { returnObjects: true }) as string[],
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500/20 to-teal-500/5",
      accent: "#00796B"
    },
    {
      title: t('response.pillars.1.title'),
      subtitle: t('response.pillars.1.subtitle'),
      desc: t('response.pillars.1.desc'),
      details: t('response.pillars.1.details', { returnObjects: true }) as string[],
      icon: <Building2 className="w-8 h-8" />,
      color: "from-blue-500/20 to-blue-500/5",
      accent: "#3b82f6"
    },
    {
      title: t('response.pillars.2.title'),
      subtitle: t('response.pillars.2.subtitle'),
      desc: t('response.pillars.2.desc'),
      details: t('response.pillars.2.details', { returnObjects: true }) as string[],
      icon: <Landmark className="w-8 h-8" />,
      color: "from-purple-500/20 to-purple-500/5",
      accent: "#a855f7"
    }
  ];

  return (
    <section className="bg-slate-950 py-32 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-itot-teal/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Zap className="text-itot-teal" size={20} />
              <span className="text-itot-teal font-black text-xs uppercase tracking-[0.4em]">{t('response.badge')}</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter"
            >
              {t('response.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">{t('response.titleAccent')}</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-sm text-lg leading-relaxed font-light border-l border-white/10 pl-8"
          >
            {t('response.desc')}
          </motion.p>
        </div>

        {/* 3-Pillar Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="h-full p-8 md:p-10 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 flex flex-col">
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-10">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: pillar.accent }}
                  >
                    {pillar.icon}
                  </div>
                  <span className="text-white/10 font-black text-5xl group-hover:text-white/20 transition-colors">0{index + 1}</span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <span className="text-itot-teal font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
                    {pillar.subtitle}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-itot-teal transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-slate-400 text-base leading-relaxed font-light mb-8">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                        <CheckCircle2 size={16} className="text-itot-teal shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-6 border-t border-white/5">
                  <Link 
                    to="/contact"
                    className="flex items-center gap-3 text-white font-bold group/btn w-full justify-between"
                  >
                    <span className="text-sm uppercase tracking-widest">{t('response.cta')}</span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-950 transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Decorative accent line */}
              <div 
                className="absolute bottom-0 left-10 right-10 h-1 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: pillar.accent, boxShadow: `0 0 20px ${pillar.accent}` }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Insight Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex flex-col lg:flex-row items-center justify-between p-8 md:p-10 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-sm gap-8"
        >
           <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="relative shrink-0">
                 <div className="w-20 h-20 rounded-full border-2 border-dashed border-itot-teal animate-spin-slow"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-itot-teal font-black text-[10px] uppercase tracking-tighter">Itot Africa</div>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">{t('response.convergence')}</h4>
                <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
                  {t('response.convergenceDesc')}
                </p>
              </div>
           </div>
           <div className="flex flex-wrap justify-center gap-4 shrink-0">
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                {t('response.impactLocal')}
              </div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                {t('response.standardGlobal')}
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponseSection;
