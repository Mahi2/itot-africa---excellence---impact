
import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Map, 
  Target, 
  Zap, 
  Users, 
  Award,
  Layers,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Direction Générale",
      role: "Stratégie & Vision",
      desc: "Pilotage de la vision globale et alignement stratégique avec les partenaires institutionnels.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Direction des Opérations",
      role: "Exécution & Terrain",
      desc: "Coordination des interventions multisites et garantie de la livraison opérationnelle des projets.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Direction Technique",
      role: "Ingénierie & Architecture",
      desc: "Supervision des standards de développement et de la robustesse des infrastructures digitales.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Responsable Formation",
      role: "Capital Humain (Okademy)",
      desc: "Conception des programmes d'excellence et suivi de l'employabilité des cohortes de talents.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. INTRO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
            alt="Collaboration and strategy" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-itot-teal mb-6"></div>
            <h4 className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-4">À propos de Itot Africa</h4>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
              L'Infrastructure de Transformation <span className="text-itot-teal bg-white/10 px-2 inline-block backdrop-blur-sm">Digitale</span> de l'Afrique.
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
              Bien plus qu'un prestataire de services, nous sommes un mécanisme d'exécution stratégique conçu pour convertir le potentiel brut du continent en une force économique réelle et durable.
            </p>
          </div>
        </div>
      </section>

      {/* 2. NOTRE RÔLE SECTION */}
      <section className="py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Un Rôle d'Infrastructure</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Itot Africa opère comme une **infrastructure humaine et technologique**. Nous ne nous contentons pas de former ou de développer ; nous construisons les fondations nécessaires pour que les acteurs de l'écosystème africain puissent interagir de manière efficace.
              </p>
              <div className="bg-teal-50 p-6 rounded-2xl border-l-4 border-itot-teal mb-6">
                <p className="text-slate-800 font-medium italic">
                  "Nous sommes le chaînon manquant entre la volonté politique/institutionnelle et la réalité du terrain technologique."
                </p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                En agissant comme un pont, nous permettons aux talents d'accéder aux marchés mondiaux et aux organisations de trouver l'excellence technique dont elles ont besoin pour croître localement.
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative p-1 bg-white rounded-3xl shadow-2xl border border-slate-100">
                 {/* Visual schema representation */}
                 <div className="p-8 md:p-12 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-slate-50 rounded-xl flex flex-col items-center gap-3">
                        <Users className="text-itot-teal w-10 h-10" />
                        <h4 className="font-bold text-slate-900">Capital Humain</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">Compétences & Talents</p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-xl flex flex-col items-center gap-3">
                        <Cpu className="text-itot-teal w-10 h-10" />
                        <h4 className="font-bold text-slate-900">Digitalisation</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">Solutions & Systèmes</p>
                      </div>
                      <div className="md:col-span-2 p-6 bg-itot-teal text-white rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform">
                        <Layers className="w-8 h-8 mx-auto mb-2" />
                        <h4 className="font-bold text-xl uppercase tracking-widest">ITOT AFRICA</h4>
                        <p className="text-sm text-teal-100">Le Pont d'Exécution</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOTRE APPROCHE SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Une Approche Orientée Résultats</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Notre méthodologie repose sur trois piliers fondamentaux qui garantissent la pérennité de nos actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-teal-50 text-itot-teal rounded-2xl flex items-center justify-center mb-8 group-hover:bg-itot-teal group-hover:text-white transition-colors">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Exécution Rigoureuse</h3>
              <p className="text-slate-600 leading-relaxed">
                Nous ne nous arrêtons pas au conseil. Nous implémentons les solutions avec une rigueur technique de standard international, assurant une transition fluide de l'idée à la réalité.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-teal-50 text-itot-teal rounded-2xl flex items-center justify-center mb-8 group-hover:bg-itot-teal group-hover:text-white transition-colors">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Présence Terrain</h3>
              <p className="text-slate-600 leading-relaxed">
                Notre connaissance profonde des réalités locales nous permet de concevoir des interventions adaptées au contexte africain, là où les modèles théoriques échouent souvent.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-teal-50 text-itot-teal rounded-2xl flex items-center justify-center mb-8 group-hover:bg-itot-teal group-hover:text-white transition-colors">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Impact Mesurable</h3>
              <p className="text-slate-600 leading-relaxed">
                Chaque projet est évalué selon des indicateurs de performance clairs. Notre succès se mesure à la croissance des entreprises que nous accompagnons et à l'employabilité des talents que nous formons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ÉQUIPE SECTION (NEW) */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-itot-teal"></div>
                <span className="text-itot-teal font-black text-xs uppercase tracking-[0.3em]">Infrastructure Humaine</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Une équipe orientée <br />
                <span className="text-slate-400">terrain et exécution.</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed font-light border-l border-slate-200 pl-8">
              Itot Africa est portée par une équipe pluridisciplinaire capable de piloter des projets complexes avec une exigence de standard global.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, i) => (
              <div key={i} className="group flex flex-col items-center md:items-start text-center md:text-left">
                <div className="relative mb-8 group">
                   <div className="absolute inset-0 bg-itot-teal rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-10"></div>
                   <img 
                    src={member.image} 
                    alt={member.name}
                    className="relative w-40 h-40 object-cover rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl"
                   />
                   <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-itot-teal opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
                      <Linkedin size={20} />
                   </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">{member.name}</h3>
                <div className="text-itot-teal font-bold text-xs uppercase tracking-widest mb-4">{member.role}</div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-10">
             <div className="max-w-2xl">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Le moteur de vos projets.</h4>
                <p className="text-slate-600 leading-relaxed">
                  Cette équipe est le levier opérationnel qui permet à Itot Africa de transformer des visions stratégiques en résultats concrets, jour après jour, sur chaque site d'intervention.
                </p>
             </div>
             <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-itot-teal transition-all group shrink-0">
               Rejoindre l'infrastructure
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* 5. VALEURS SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Nos Valeurs Fondamentales.</h2>
            <div className="w-24 h-1 bg-itot-teal"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col">
              <div className="mb-6 text-itot-teal">
                <Award className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Excellence</h4>
              <p className="text-slate-500">Rechercher le plus haut standard dans chaque ligne de code et chaque session de formation.</p>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 text-itot-teal">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Intégrité</h4>
              <p className="text-slate-500">Agir avec transparence et responsabilité envers nos partenaires et nos bénéficiaires.</p>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 text-itot-teal">
                <Target className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Focus Impact</h4>
              <p className="text-slate-500">Prioriser les actions qui génèrent une transformation réelle et quantifiable sur le long terme.</p>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 text-itot-teal">
                <Users className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Collaboration</h4>
              <p className="text-slate-500">Croire en la force de l'écosystème et travailler main dans la main avec tous les acteurs du changement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
