
import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Handshake, 
  ArrowRight, 
  CheckCircle2, 
  Laptop, 
  Server, 
  Users2,
  Globe,
  Sparkles,
  LayoutDashboard,
  LineChart,
  BrainCircuit,
  Zap
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: 'home' | 'about' | 'solutions' | 'impact' | 'partnerships' | 'contact') => void;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Solutions Background" 
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Nos Solutions Stratégiques</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Une offre structurée pour répondre aux défis complexes de la transformation numérique en Afrique, de l'individu à l'institution.
          </p>
        </div>
      </section>

      {/* SECTION : ÉCOSYSTÈME OKADEMY (NOUVELLE SECTION) */}
      <section id="ecosysteme-okademy" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-itot-teal/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-itot-teal border border-itot-teal/20 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                <Sparkles size={14} className="animate-pulse" />
                Innovation Technologique
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                L’écosystème <span className="text-itot-teal">Okademy</span>.
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Okademy est bien plus qu'une plateforme d'apprentissage. C'est un écosystème digital intelligent qui accompagne chaque apprenant de l'acquisition de compétences jusqu'à son insertion professionnelle concrète.
              </p>
              <p className="text-lg text-slate-500 mb-10">
                Nous construisons un outil propriétaire augmenté par l'Intelligence Artificielle pour garantir une progression réelle, personnalisée et centrée sur l'employabilité.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-8 py-4 bg-itot-teal text-white font-bold rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/10 group">
                  Découvrir Okademy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all"
                >
                  Explorer nos outils
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-itot-teal/10 rounded-[40px] blur-2xl group-hover:bg-itot-teal/15 transition-all"></div>
                <div className="relative bg-white rounded-[32px] shadow-2xl border border-slate-100 p-2 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                    alt="Okademy Interface Mockup" 
                    className="w-full h-auto rounded-[24px] shadow-inner"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-itot-teal text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <Zap size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-itot-teal/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-itot-teal flex items-center justify-center mb-6 group-hover:bg-itot-teal group-hover:text-white transition-colors">
                <BrainCircuit size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Coach IA Intégré</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Un assistant intelligent disponible 24/7 pour expliquer, reformuler et accompagner l'apprenant à chaque étape de son parcours de formation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-itot-teal/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Sparkles size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Mentor IA Projets</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Une IA spécialisée qui aide à structurer, corriger et améliorer les livrables techniques en temps réel, simulant l'accompagnement d'un mentor senior.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-itot-teal/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <LayoutDashboard size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Dashboard Intelligent</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Visualisation claire de la progression, des compétences acquises et des axes d'amélioration identifiés par nos algorithmes pour l'apprenant comme pour les organisations partenaires.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-itot-teal/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <LineChart size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Orientation Carrière</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                L'IA croise les compétences acquises avec les données de notre département Open Intelligence pour suggérer les parcours professionnels les plus porteurs sur le marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 1 : DÉVELOPPEMENT DES COMPÉTENCES */}
      <section id="competences" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-itot-teal text-xs font-bold uppercase tracking-wider mb-6">
                <GraduationCap size={14} />
                Capital Humain
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Développement de compétences qui mènent à l'emploi</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Le marché ne cherche pas des diplômes. Il cherche des gens capables de résoudre des problèmes. Nous formons les talents aux technologies les plus demandées en intégrant les réalités concrètes du marché de l'emploi en RDC et en Afrique.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  { title: "Programmes Okademy", desc: "Des formations intensives orientées projet et employabilité, couvrant les domaines les plus demandés : Cloud Computing, Développement Web, Data, Marketing Digital et compétences entrepreneuriales." },
                  { title: "Compétences professionnelles", desc: "Communication, gestion de projet, travail en équipe et préparation aux entretiens les compétences transversales que les employeurs recherchent autant que l'expertise technique." },
                  { title: "Certifications internationales", desc: "Validation des compétences par des certifications reconnues mondialement : AWS Cloud Practitioner, Cisco CCNA, CompTIA Security+, Google Data Analytics. Un certificat Itot Africa ouvre des portes partout." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-50 hover:border-teal-100 hover:bg-teal-50/30 transition-all">
                    <CheckCircle2 className="text-itot-teal shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-8 py-4 bg-itot-teal text-white font-bold rounded-xl hover:bg-teal-700 transition-all group"
              >
                Découvrir les programmes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students learning" 
                  className="w-full aspect-square lg:aspect-auto lg:h-[600px] object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50">
                  <p className="text-slate-900 font-bold mb-1">Notre engagement</p>
                  <p className="text-slate-600 text-sm">Chaque apprenant formé est suivi après sa formation. Nous mesurons le taux d'insertion professionnelle, l'évolution salariale et la satisfaction des employeurs — parce que la vraie mesure d'une formation, c'est ce qui se passe après.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 2 : ACCOMPAGNEMENT & IMPLÉMENTATION */}
      <section id="implementation" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                <Code2 size={14} />
                Expertise technique
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Consulting & Transformation digitale</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nous accompagnons les entreprises et les PME dans leur transformation numérique avec une présence terrain et une compréhension profonde du contexte local.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <Laptop className="text-itot-teal mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Transformation digitale des entreprises</h4>
                  <p className="text-sm text-slate-500">Stratégie digitale, mise en place d'outils de gestion, marketing digital, formation des équipes internes nous aidons les entreprises à intégrer le numérique dans leurs opérations quotidiennes.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <Server className="text-itot-teal mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Développement de solutions sur mesure</h4>
                  <p className="text-sm text-slate-500">Conception et développement de sites web, d'applications et de systèmes d'information adaptés aux besoins spécifiques de chaque organisation.</p>
                </div>
              </div>

              <button 
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all group"
              >
                Voir comment nous accompagnons
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  alt="Implementation Team" 
                  className="rounded-2xl h-64 w-full object-cover shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hardware integration" 
                  className="rounded-2xl h-80 w-full object-cover shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 3 : CONSEIL & PARTENARIATS */}
      <section id="partenariats" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Handshake size={14} />
              Partenariats
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Projets à impact pour institutions et bailleurs</h2>
            <p className="text-lg text-slate-600">
              Nous concevons et exécutons des programmes de formation et d'insertion professionnelle pour le compte d'institutions publiques, de bailleurs de fonds et d'organisations à impact social, avec une exigence de résultats mesurables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 border border-slate-100 rounded-3xl hover:border-itot-teal transition-colors">
              <Users2 className="w-10 h-10 text-itot-teal mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">Institutions & Gouvernements</h4>
              <p className="text-slate-500 text-sm">Conception et délivrance de programmes de formation professionnelle alignés sur les priorités nationales de développement des compétences et de l'emploi.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-3xl hover:border-itot-teal transition-colors">
              <Globe className="w-10 h-10 text-itot-teal mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">ONG & Bailleurs de fonds</h4>
              <p className="text-slate-500 text-sm">Exécution opérationnelle de programmes de formation et d'insertion, avec reporting d'impact rigoureux : taux de certification, taux d'insertion, évolution professionnelle des bénéficiaires.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-3xl hover:border-itot-teal transition-colors">
              <Handshake className="w-10 h-10 text-itot-teal mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">Secteur Privé</h4>
              <p className="text-slate-500 text-sm">Formations sur mesure pour les équipes, accès au vivier de talents certifiés Okademy, et rapports sectoriels Open Intelligence sur les compétences et l'emploi digital.</p>
            </div>
          </div>

          <button 
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-10 py-5 border-2 border-itot-teal text-itot-teal font-bold rounded-xl hover:bg-itot-teal hover:text-white transition-all group"
          >
            Discuter d'un partenariat
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
