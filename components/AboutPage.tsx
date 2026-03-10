
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
              L'écosystème de formation, de certification et d'insertion <span className="text-itot-teal bg-white/10 px-2 inline-block backdrop-blur-sm">digitale</span> en Afrique.
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
              Bien plus qu'un prestataire de services, nous sommes le partenaire d'exécution qui transforme le potentiel brut du continent en compétences certifiées, en emplois concrets et en intelligence de marché actionnable.
            </p>
          </div>
        </div>
      </section>

      {/* 2. NOTRE RÔLE SECTION */}
      <section className="py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre rôle dans l'écosystème</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Itot Africa opère comme le pont entre le potentiel et l'emploi. Nous ne nous contentons pas de former : nous certifions avec des standards internationaux, nous suivons chaque apprenant jusqu'à l'insertion professionnelle, et nous produisons les données de marché qui éclairent chaque décision.
              </p>
              <div className="bg-teal-50 p-6 rounded-2xl border-l-4 border-itot-teal mb-6">
                <p className="text-slate-800 font-medium italic">
                  "Le continent ne manque ni de talents ni de volonté. Il manque de structures capables de transformer l'un en l'autre avec rigueur, transparence et résultats mesurables. C'est notre raison d'être."
                </p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                En agissant comme ce pont, nous permettons aux talents d'accéder aux certifications reconnues mondialement et aux opportunités d'emploi, aux entreprises de trouver les compétences qualifiées dont elles ont besoin pour croître, et aux institutions de mesurer l'impact réel de leurs investissements dans le capital humain.
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
                        <p className="text-xs text-slate-500 uppercase tracking-widest">Formation certifiante & insertion professionnelle</p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-xl flex flex-col items-center gap-3">
                        <Cpu className="text-itot-teal w-10 h-10" />
                        <h4 className="font-bold text-slate-900">Intelligence</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">Recherche, données de marché & aide à la décision</p>
                      </div>
                      <div className="md:col-span-2 p-6 bg-itot-teal text-white rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform">
                        <Layers className="w-8 h-8 mx-auto mb-2" />
                        <h4 className="font-bold text-xl uppercase tracking-widest">ITOT AFRICA</h4>
                        <p className="text-sm text-teal-100">Le pont entre le potentiel et l'emploi</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Une approche orientée résultats</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Notre méthodologie repose sur trois piliers fondamentaux qui garantissent la crédibilité et la pérennité de nos actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-teal-50 text-itot-teal rounded-2xl flex items-center justify-center mb-8 group-hover:bg-itot-teal group-hover:text-white transition-colors">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Exécution Rigoureuse</h3>
              <p className="text-slate-600 leading-relaxed">
                Nous ne nous arrêtons pas à la promesse. Nous concevons, délivrons et mesurons chaque programme de formation et chaque projet avec une rigueur documentée à chaque étape — du premier atelier au dernier rapport d'impact.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-teal-50 text-itot-teal rounded-2xl flex items-center justify-center mb-8 group-hover:bg-itot-teal group-hover:text-white transition-colors">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ancrage terrain</h3>
              <p className="text-slate-600 leading-relaxed">
                Notre présence à Lubumbashi et à Kinshasa, notre facilité à nous déployer dans les autres villes du pays, et notre connaissance profonde des réalités locales nous permettent de concevoir des formations adaptées au contexte congolais et africain là où les modèles importés échouent souvent.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-teal-50 text-itot-teal rounded-2xl flex items-center justify-center mb-8 group-hover:bg-itot-teal group-hover:text-white transition-colors">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Impact mesuré et prouvé</h3>
              <p className="text-slate-600 leading-relaxed">
                Chaque programme est évalué selon des indicateurs précis : taux de certification, taux d'insertion professionnelle, évolution salariale des apprenants. Notre département Open Intelligence produit les données qui prouvent notre impact et orientent nos décisions.
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
                <span className="text-itot-teal font-black text-xs uppercase tracking-[0.3em]">Notre équipe</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Une équipe orientée<br />
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
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Le moteur de vos projets</h4>
                <p className="text-slate-600 leading-relaxed">
                  Cette équipe est le levier opérationnel qui permet à Itot Africa de transformer des programmes de formation en résultats concrets : des apprenants certifiés, des talents insérés, des entreprises renforcées.
                </p>
             </div>
             <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-itot-teal transition-all group shrink-0">
               Rejoindre l'équipe
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* 5. VALEURS SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Ce en quoi nous croyons, nos valeurs</h2>
            <div className="w-24 h-1 bg-itot-teal"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col">
              <div className="mb-6 text-itot-teal">
                <Award className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Transparence radicale</h4>
              <p className="text-slate-500">Chaque décision documentée. Chaque engagement tracé. Chaque résultat partagé. Nous avons appris que la confiance ne se décrète pas. Elle se construit, une itération à la fois.</p>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 text-itot-teal">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Rigueur d'exécution</h4>
              <p className="text-slate-500">Promettre moins, délivrer plus. Nous ne vendons pas des visions — nous livrons des résultats. Un programme annoncé ou un projet lancé est délivré dans les délais, avec les indicateurs promis.</p>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 text-itot-teal">
                <Target className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Impact prouvé</h4>
              <p className="text-slate-500">Si nous ne pouvons pas le mesurer, nous ne prétendons pas l'avoir fait. Notre crédibilité repose sur des données vérifiables, pas sur des estimations optimistes.</p>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 text-itot-teal">
                <Users className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Apprentissage permanent</h4>
              <p className="text-slate-500">Nous sommes une entreprise de formation. Si nous-mêmes cessons d'apprendre, nous perdons notre légitimité. Chaque erreur est une leçon documentée. Chaque projet livré fait l'objet d'un retour d'expérience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
