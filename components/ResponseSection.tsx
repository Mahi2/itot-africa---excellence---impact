
import React, { useState } from 'react';
import { Users, Building2, Landmark, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const ResponseSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Connecter les talents",
      subtitle: "Capital Humain",
      desc: "Nous certifions le génie africain pour le rendre interopérable avec le marché mondial.",
      details: [
        "Certification de compétences",
        "Matching IA intelligent",
        "Parcours d'excellence"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500/20 to-teal-500/5",
      accent: "#00796B"
    },
    {
      title: "Propulser les entreprises",
      subtitle: "Secteur Privé",
      desc: "Nous agissons comme le bras technique des leaders pour accélérer leur exécution digitale.",
      details: [
        "Ingénierie sur-mesure",
        "Externalisation stratégique",
        "Audit de scalabilité"
      ],
      icon: <Building2 className="w-8 h-8" />,
      color: "from-blue-500/20 to-blue-500/5",
      accent: "#3b82f6"
    },
    {
      title: "Bâtir les institutions",
      subtitle: "Gouvernance & ONG",
      desc: "Nous garantissons la souveraineté numérique par des infrastructures à impact systémique.",
      details: [
        "Infrastructures publiques",
        "Suivi d'impact en temps réel",
        "Conseil en souveraineté"
      ],
      icon: <Landmark className="w-8 h-8" />,
      color: "from-purple-500/20 to-purple-500/5",
      accent: "#a855f7"
    }
  ];

  return (
    <section className="bg-slate-950 py-32 px-6 relative overflow-hidden min-h-[900px] flex flex-col justify-center">
      {/* Dynamic Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 blur-[150px] transition-all duration-1000 rounded-full"
        style={{ background: `radial-gradient(circle, ${pillars[activePillar].accent} 0%, transparent 70%)` }}
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-itot-teal animate-pulse" size={20} />
              <span className="text-itot-teal font-black text-xs uppercase tracking-[0.4em]">Levier Opérationnel</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Une infrastructure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">en trois dimensions.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-lg leading-relaxed font-light border-l border-white/10 pl-8">
            Nous ne nous contentons pas de répondre au marché. Nous le structurons par une exécution sans compromis.
          </p>
        </div>

        {/* Immersive Pillars Gallery */}
        <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              onMouseEnter={() => setActivePillar(index)}
              className={`relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-[40px] border border-white/10 group cursor-pointer
                ${activePillar === index ? 'flex-[2.5] bg-white/10 backdrop-blur-3xl shadow-2xl' : 'flex-1 bg-white/5 grayscale opacity-40'}
              `}
            >
              {/* Pillar Background Label (Vertical) */}
              <div className={`absolute top-1/2 left-6 -translate-y-1/2 -rotate-90 text-4xl font-black text-white/5 uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-700 select-none
                ${activePillar === index ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}
              `}>
                {pillar.subtitle}
              </div>

              {/* Card Content */}
              <div className={`h-full p-10 flex flex-col justify-between transition-all duration-500
                ${activePillar === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 lg:translate-x-10'}
              `}>
                <div>
                  <div className="flex items-center justify-between mb-12">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg"
                      style={{ backgroundColor: pillar.accent }}
                    >
                      {pillar.icon}
                    </div>
                    <span className="text-white/20 font-black text-6xl">0{index + 1}</span>
                  </div>

                  <span className="text-itot-teal font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
                    {pillar.subtitle}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-slate-300 text-lg leading-relaxed max-w-md font-light mb-8">
                    {pillar.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pillar.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-slate-400">
                        <CheckCircle2 size={16} className="text-itot-teal shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <button className="flex items-center gap-3 text-white font-bold group/btn">
                    <span>Explorer la solution</span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-950 transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </div>
              </div>

              {/* Progress Line (Active card) */}
              <div 
                className={`absolute bottom-0 left-0 h-1 transition-all duration-700
                ${activePillar === index ? 'w-full' : 'w-0'}`}
                style={{ backgroundColor: pillar.accent }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom Insight Section */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-10 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-sm">
           <div className="flex items-center gap-8">
              <div className="relative">
                 <div className="w-16 h-16 rounded-full border-2 border-dashed border-itot-teal animate-spin-slow"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-itot-teal font-black text-xs">ITOT</div>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1">Convergence Systémique</h4>
                <p className="text-slate-500 max-w-md text-sm leading-relaxed">
                  L'infrastructure Itot Africa opère simultanément sur ces trois leviers pour créer un cycle de croissance auto-entretenu.
                </p>
              </div>
           </div>
           <div className="mt-8 md:mt-0 flex gap-4">
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold uppercase tracking-widest">
                Impact Local
              </div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold uppercase tracking-widest">
                Standard Global
              </div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}</style>
    </section>
  );
};

export default ResponseSection;
