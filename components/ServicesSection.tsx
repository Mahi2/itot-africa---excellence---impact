
import React from 'react';
import { ArrowUpRight, GraduationCap, Code2, Globe, Activity, ShieldCheck, Zap } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (page: 'home' | 'about' | 'solutions') => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const handleGoToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('solutions');
  };

  return (
    <section className="py-32 bg-[#F8FAFC] px-6 relative overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#00796B 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Minimalist Strategy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-itot-teal/10 text-itot-teal text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Activity size={14} />
              Capacités Opérationnelles, nos produits : 
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              L'écosystème <br />
              <span className="text-slate-400">en action.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed border-l border-slate-200 pl-6">
            Nous transformons des objectifs complexes en résultats tangibles grâce à trois pôles d'expertise intégrés.
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Main Block: OKADEMY (6 columns) */}
          <div className="md:col-span-7 md:row-span-2 group relative bg-white rounded-[40px] border border-slate-200 p-10 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-itot-teal/5 transition-all duration-700">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-itot-teal rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Okademy : <br/>Le Moteur de Talents</h3>
                <p className="text-slate-500 text-lg max-w-md font-light leading-relaxed">
                  Formation intensive et certification en compétences numériques de niveau international pour les futurs professionnels du continent.
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">+10.7k apprenants</div>
                  <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Certifications AWS, Cisco, etc.</div>
                </div>
                <button 
                  onClick={handleGoToSolutions}
                  className="flex items-center gap-3 text-itot-teal font-black text-sm group/btn"
                >
                  Découvrir Okademy
                  <div className="w-8 h-8 rounded-full bg-itot-teal/10 flex items-center justify-center group-hover/btn:bg-itot-teal group-hover/btn:text-white transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </button>
              </div>
            </div>
            
            {/* Visual Deco: Floating Elements */}
            <div className="absolute top-10 right-10 flex flex-col gap-2 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
               {[1,2,3].map(i => (
                 <div key={i} className="h-1 w-12 bg-itot-teal rounded-full" style={{ opacity: 1 - i*0.25 }}></div>
               ))}
            </div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Education"
              className="absolute -bottom-10 -right-10 w-2/3 h-2/3 object-cover rounded-[40px] opacity-20 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
          </div>

          {/* Block 2: Software Dev (5 columns) */}
          <div className="md:col-span-5 group relative bg-slate-900 rounded-[40px] p-10 overflow-hidden shadow-xl">
             <div className="relative z-10">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-itot-teal">
                   <Code2 size={20} />
                 </div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Build & Deploy</span>
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Open Intelligence : L'éclaireur</h3>
               <p className="text-slate-400 text-sm leading-relaxed font-light">
                 Recherche, veille de marché et production de données fiables sur les compétences et l'emploi digital en Afrique pour éclairer les décisions de formation, de recrutement et d'investissement.
               </p>
             </div>
             
             {/* Tech grid visual */}
             <div className="absolute bottom-0 right-0 p-4 opacity-10">
                <div className="grid grid-cols-4 gap-1">
                   {[...Array(16)].map((_, i) => (
                     <div key={i} className="w-4 h-4 border border-white/20"></div>
                   ))}
                </div>
             </div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-itot-teal/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
          </div>

          {/* Block 3: Institutions (5 columns) */}
          <div className="md:col-span-5 group relative bg-white rounded-[40px] border border-slate-200 p-10 overflow-hidden shadow-sm hover:border-itot-teal/30 transition-colors">
             <div className="flex flex-col h-full justify-between">
               <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-itot-teal transition-colors">
                      <Globe size={20} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Souveraineté</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Conseil & Exécution de projets </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    Conception et délivrance de programmes de formation, consulting en transformation digitale, et accompagnement stratégique pour entreprises et institutions. Partenaire de confiance
                  </p>
               </div>
               <div className="flex items-center gap-2 text-itot-teal">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-black uppercase tracking-tighter">Infrastructure de confiance</span>
               </div>
             </div>
          </div>

          {/* New Micro-Block: Impact Stats (Optional but cool for Bento) */}
          <div className="md:col-span-12 mt-6 flex flex-wrap gap-4 items-center justify-center p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm">
             <div className="flex items-center gap-3">
                <Zap size={18} className="text-amber-500" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ce qui nous distingue :</span>
             </div>
             <p className="text-slate-500 text-sm leading-relaxed font-light">
                    Chaque talent formé est suivi, chaque impact est mesuré, chaque formation est alimentée par les données du marché.
              </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
