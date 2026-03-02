
import React from 'react';
import { 
  Handshake, 
  Building2, 
  Landmark, 
  GraduationCap, 
  Search, 
  Layout, 
  Rocket, 
  BarChart, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface PartnershipsPageProps {
  onNavigate: (page: 'home' | 'about' | 'solutions' | 'impact' | 'partnerships' | 'contact') => void;
}

const PartnershipsPage: React.FC<PartnershipsPageProps> = ({ onNavigate }) => {
  const partnerTypes = [
    {
      icon: <Landmark className="w-10 h-10" />,
      title: "Institutions & Gouvernance",
      desc: "Accompagnement dans l'exécution de programmes nationaux de transformation digitale et de souveraineté numérique.",
      features: ["Assistance technique", "Numérisation publique", "Conseil stratégique"]
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Secteur Privé",
      desc: "Collaboration pour l'intégration de talents certifiés et le développement de solutions software sur-mesure.",
      features: ["Externalisation technique", "Recrutement de talents", "Audit de scalabilité"]
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Académique & Recherche",
      desc: "Partenariats pour l'alignement des cursus académiques avec les besoins réels du marché global.",
      features: ["Certification conjointe", "Hubs d'innovation", "Parcours hybrides"]
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "ONG & Bailleurs de fonds",
      desc: "Mise en œuvre opérationnelle de projets à fort impact social et économique via le numérique.",
      features: ["Mesure d'impact", "Durabilité des projets", "Déploiement terrain"]
    }
  ];

  const steps = [
    {
      id: "01",
      icon: <Search className="w-6 h-6" />,
      title: "Audit & Alignement",
      desc: "Analyse profonde de vos objectifs et identification des synergies opérationnelles avec notre infrastructure."
    },
    {
      id: "02",
      icon: <Layout className="w-6 h-6" />,
      title: "Design de Solution",
      desc: "Co-conception d'un cadre d'intervention précis, avec indicateurs de succès et calendrier d'exécution."
    },
    {
      id: "03",
      icon: <Rocket className="w-6 h-6" />,
      title: "Exécution & Déploiement",
      desc: "Mise en œuvre rigoureuse par nos équipes d'ingénieurs et de mentors, avec une présence terrain constante."
    },
    {
      id: "04",
      icon: <BarChart className="w-6 h-6" />,
      title: "Scale & Impact",
      desc: "Évaluation continue, optimisation des performances et passage à l'échelle pour maximiser le ROI social ou économique."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-24 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#00796B_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-itot-teal/10 text-itot-teal border border-itot-teal/20 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Handshake size={14} />
            Synergies Stratégiques
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Bâtir des alliances pour <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">un impact systémique.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Itot Africa n'agit pas seule. Nous construisons une infrastructure collaborative où chaque partenaire joue un rôle clé dans l'accélération numérique du continent.
          </p>
        </div>
      </section>

      {/* Typologies de partenaires */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Nos Typologies d'Alliances.</h2>
             <p className="text-slate-500 max-w-2xl text-lg">
               Nous adaptons notre cadre de collaboration selon la nature et les objectifs de chaque organisation.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((type, i) => (
              <div key={i} className="group p-10 bg-[#F8FAFC] rounded-[40px] border border-slate-100 hover:border-itot-teal/30 hover:shadow-2xl hover:shadow-itot-teal/5 transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-itot-teal shrink-0 group-hover:bg-itot-teal group-hover:text-white transition-all">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.title}</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed font-light">
                      {type.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {type.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100">
                          <CheckCircle2 size={12} className="text-itot-teal" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode de collaboration */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Méthode d'Exécution.</h2>
            <p className="text-slate-400 text-lg font-light">
              Notre approche est rigoureuse, structurée et orientée vers la livraison de résultats mesurables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 rounded-[40px] overflow-hidden border border-white/10">
            {steps.map((step, i) => (
              <div key={i} className="p-10 bg-slate-950 flex flex-col justify-between min-h-[350px] group">
                <div>
                   <span className="text-5xl font-black text-white/5 mb-8 block group-hover:text-itot-teal/20 transition-colors">{step.id}</span>
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-itot-teal mb-6">
                     {step.icon}
                   </div>
                   <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                   <p className="text-slate-400 text-sm leading-relaxed font-light">
                     {step.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Grid - Sober */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xs font-black text-slate-300 uppercase tracking-[0.5em] mb-16">Organisations qui nous font confiance</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-30 grayscale">
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <div key={i} className="flex justify-center h-8 w-full border-b border-slate-100 items-end pb-4 font-black text-[10px] tracking-widest text-slate-400 uppercase">
                 Partner_{i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[60px] p-12 md:p-24 shadow-2xl shadow-itot-teal/10 border border-slate-100 relative overflow-hidden text-center">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-itot-teal/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-3xl bg-itot-teal text-white flex items-center justify-center mb-10 shadow-xl">
                 <ShieldCheck size={40} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Devenez partenaire <br />
                <span className="text-itot-teal">de l'infrastructure.</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mb-12 font-light leading-relaxed">
                Prêt à co-créer une solution technologique durable ou à transformer l'employabilité d'une génération ? Notre équipe stratégique vous répond sous 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-10 py-5 bg-itot-teal text-white font-black rounded-2xl shadow-2xl shadow-itot-teal/20 hover:bg-[#004D40] transition-all flex items-center gap-3"
                >
                  Initier une collaboration
                  <ArrowRight size={20} />
                </button>
                <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all">
                  Consulter notre brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipsPage;
