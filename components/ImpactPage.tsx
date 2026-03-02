
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
              { label: "Talents formés", value: "15,000+", icon: <Users />, color: "bg-teal-50 text-itot-teal" },
              { label: "Taux d'insertion", value: "90%", icon: <Target />, color: "bg-blue-50 text-blue-600" },
              { label: "Entreprises partenaires", value: "500+", icon: <Briefcase />, color: "bg-purple-50 text-purple-600" },
              { label: "Projets délivrés", value: "1,200+", icon: <Globe2 />, color: "bg-amber-50 text-amber-600" }
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
                  src="https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fintech transformation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-itot-teal">
                  Transformation Digitale
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Numérisation d'une institution financière majeure.</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Accompagnement de bout en bout pour la migration vers le cloud et le développement d'une application mobile servant plus de 200,000 utilisateurs.
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
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                  alt="Education impact" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-blue-600">
                  Impact Social
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Programme National de Formation "Skills 2030".</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Déploiement d'une infrastructure e-learning pour former 5,000 jeunes aux métiers du code dans des zones reculées de la RDC.
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
      <section className="py-32 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Actualités & Événements</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Suivez notre impact au quotidien, nos derniers succès de projets et participez à nos prochaines initiatives pour l'écosystème.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, i) => (
              <div key={i} className="group bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${item.color} shadow-sm backdrop-blur-md`}>
                    {item.type}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-4 uppercase tracking-tighter">
                    {item.type === "Événement" ? <Clock size={14} className="text-itot-teal" /> : <Calendar size={14} className="text-itot-teal" />}
                    {item.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-itot-teal transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>
                  
                  <button className="flex items-center gap-2 text-sm font-black text-slate-900 group-hover:gap-3 transition-all">
                    {item.linkText}
                    <ArrowRight size={16} className="text-itot-teal" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-itot-teal transition-all shadow-xl shadow-slate-200">
               Consulter toutes les actualités
             </button>
          </div>
        </div>
      </section>

      {/* 5. NOS PARTENAIRES SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ils nous font confiance.</h2>
            <p className="text-slate-500">Des institutions internationales, gouvernements et leaders de l'industrie.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-60">
             {[1,2,3,4,5,6].map(i => (
               <div key={i} className="flex justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <div className="h-12 w-32 bg-white rounded-lg flex items-center justify-center font-bold text-slate-400 border border-slate-100 uppercase tracking-widest text-[10px]">
                     Partenaire {i}
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
