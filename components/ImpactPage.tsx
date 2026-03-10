
import React from 'react';
import { 
  Users, 
  Target, 
  Briefcase, 
  Globe2, 
  ArrowUpRight, 
  CheckCircle,
  Building2,
  Trophy,
  BarChart3,
  Calendar,
  Clock,
  Newspaper,
  ArrowRight
} from 'lucide-react';

const ImpactPage: React.FC = () => {
  const newsItems = [
    {
      type: "Succès",
      title: "Inauguration du nouveau Hub Technologique à Lubumbashi",
      date: "12 Mars 2024",
      description: "Un nouvel espace de 500m² dédié à l'incubation de startups et à la formation de pointe en intelligence artificielle.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      linkText: "Voir les photos",
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      type: "Événement",
      title: "Webinaire : L'IA, levier de croissance pour les PME Africaines",
      date: "25 Avril 2024 • 14:00 GMT",
      description: "Rejoignez nos experts pour une session stratégique sur l'intégration des outils génératifs dans vos processus business.",
      image: "https://images.unsplash.com/photo-1591115765373-520b7a217267?q=80&w=2070&auto=format&fit=crop",
      linkText: "S'inscrire gratuitement",
      color: "text-blue-600 bg-blue-50"
    },
    {
      type: "Annonce",
      title: "Partenariat stratégique avec Global Tech Alliance",
      date: "05 Février 2024",
      description: "Itot Africa rejoint le réseau mondial pour faciliter l'accès des talents africains aux certifications internationales.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      linkText: "Lire le communiqué",
      color: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Impact background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-bold uppercase tracking-wider mb-8">
            <Trophy size={14} />
            Notre Héritage d'Excellence
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
            Des résultats concrets,<br />un impact <span className="text-itot-teal">systémique</span>.
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Au-delà des mots, nous mesurons notre succès par la transformation réelle des individus et la croissance durable des organisations que nous accompagnons.
          </p>
        </div>
      </section>

      {/* 2. CHIFFRES CLÉS SECTION */}
      <section className="py-20 px-6 bg-white relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Talents formés", value: "10,700+", icon: <Users />, color: "bg-teal-50 text-itot-teal" },
              { label: "Taux d'insertion", value: "47%", icon: <Target />, color: "bg-blue-50 text-blue-600" },
              { label: "Entreprises partenaires", value: "10+", icon: <Briefcase />, color: "bg-purple-50 text-purple-600" },
              { label: "Projets délivrés", value: "92+", icon: <Globe2 />, color: "bg-amber-50 text-amber-600" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${stat.color} group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-500 font-medium uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJETS MAJEURS SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Études de cas & Réalisations.</h2>
              <p className="text-lg text-slate-600">
                Découvrez comment nos interventions transforment les défis technologiques en opportunités de croissance.
              </p>
            </div>
            <button className="flex items-center gap-2 font-bold text-itot-teal hover:gap-3 transition-all">
              Voir tous les projets
              <ArrowUpRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1773146826449-a77f7138c840?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Digitalisation écoles" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-itot-teal">
                  Transformation Digitale des écoles
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Digitalisation de deux écoles locales avec Ecobank</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Partenariat éducatif pour l’intégration du numérique et de l’intelligence artificielle dans les écoles, avec formation des enseignants, ateliers pour les élèves et mise en place d’infrastructures informatiques et bibliothèques numériques.
                </p>
                <div className="flex items-center gap-4 py-4 border-t border-slate-50">
                   <BarChart3 className="text-itot-teal" />
                   <span className="font-bold text-slate-800">+45% d'efficacité opérationnelle</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1773142268363-d9b3f06c8741?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Education impact" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-blue-600">
                  Impact Social
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Programmes de formation "JED & FED".</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Déploiement de plusieurs programmes de formations dont : "Jeune Auto-Entrepreneur & Femmes Micro-Entrepreneur", afin de booster les entreprises ou projets grâce au outils digitaux
                </p>
                <div className="flex items-center gap-4 py-4 border-t border-slate-50">
                   <CheckCircle className="text-blue-600" />
                   <span className="font-bold text-slate-800">85% de taux de complétion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACTUALITÉS & ÉVÉNEMENTS (NOUVELLE SECTION) */}

      {/* 5. NOS PARTENAIRES SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ils nous font confiance.</h2>
            <p className="text-slate-500">Des institutions internationales, gouvernements et leaders de l'industrie.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center">
             {[
               { name: "Enabel", logo: "https://logo.clearbit.com/enabel.be" },
               { name: "GIZ", logo: "https://logo.clearbit.com/giz.de" },
               { name: "Ecobank", logo: "https://logo.clearbit.com/ecobank.com" },
               { name: "Rawbank", logo: "https://logo.clearbit.com/rawbank.com" },
               { name: "FEC", logo: "https://logo.clearbit.com/fec-rdc.com" },
               { name: "PNUD", logo: "https://logo.clearbit.com/undp.org" }
             ].map((partner, i) => (
               <div key={i} className="flex justify-center transition-all cursor-pointer group">
                  <div className="h-24 w-full bg-white rounded-2xl flex items-center justify-center p-6 border border-slate-100 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                     <img 
                       src={partner.logo} 
                       alt={partner.name} 
                       className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                       referrerPolicy="no-referrer"
                       onError={(e) => {
                         // Fallback to a text-based logo if the image fails to load
                         const target = e.target as HTMLImageElement;
                         target.style.display = 'none';
                         const parent = target.parentElement;
                         if (parent) {
                           const span = document.createElement('span');
                           span.className = 'text-slate-400 font-bold text-xs uppercase tracking-widest';
                           span.innerText = partner.name;
                           parent.appendChild(span);
                         }
                       }}
                     />
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. INDICATEURS D'IMPACT DÉTAILLÉS */}
      <section className="py-24 px-6 bg-itot-teal text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Un engagement envers les objectifs de développement durable.</h2>
              <p className="text-xl text-teal-50 mb-10 font-light leading-relaxed">
                Notre action s'aligne directement avec les priorités globales pour une croissance inclusive et une transformation technologique responsable.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <CheckCircle className="text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Éducation de Qualité</h4>
                    <p className="text-teal-100/80">Démocratisation de l'accès aux compétences technologiques de pointe.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <CheckCircle className="text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Travail Décent</h4>
                    <p className="text-teal-100/80">Création de ponts directs vers l'emploi et l'entrepreneuriat numérique.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <CheckCircle className="text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Industrie & Innovation</h4>
                    <p className="text-teal-100/80">Accélération de l'infrastructure numérique des entreprises locales.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-full flex items-center justify-center p-12 border border-white/10 animate-pulse-slow">
                <div className="bg-white text-itot-teal p-12 rounded-[40px] shadow-2xl flex flex-col items-center text-center">
                  <Building2 size={48} className="mb-6" />
                  <span className="text-4xl font-black mb-2">60%</span>
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">De femmes dans nos cohortes tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
        .animate-pulse-slow { animation: pulse-slow 6s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default ImpactPage;
