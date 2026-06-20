
import React from 'react';
import { User, Building, Landmark, HeartHandshake, ArrowRight } from 'lucide-react';
import { PersonaCardProps } from '../types';

interface PersonaSectionProps {
  onNavigate: (path: string) => void;
}

const PersonaCard: React.FC<PersonaCardProps & { onClick: () => void }> = ({ type, title, description, cta, icon, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-itot-teal hover:shadow-2xl transition-all duration-300 flex flex-col h-full group cursor-pointer"
  >
    <div className="w-16 h-16 rounded-2xl bg-teal-50 text-itot-teal flex items-center justify-center mb-8 group-hover:bg-itot-teal group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <span className="text-itot-teal font-bold text-xs uppercase tracking-widest mb-4">{type}</span>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 mb-10 flex-grow leading-relaxed">{description}</p>
    <div className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-itot-teal transition-colors underline decoration-itot-teal/30 underline-offset-8">
      {cta}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

const PersonaSection: React.FC<PersonaSectionProps> = ({ onNavigate }) => {
  return (
    <section id="secteurs" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-[100px] -mr-48 -mt-48 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Pour qui nous agissons.</h2>
          <p className="text-lg text-slate-600">
            Itot Africa adapte son approche pour répondre aux enjeux spécifiques de chaque acteur de l'écosystème.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PersonaCard 
            icon={<User className="w-8 h-8" />}
            type="Individu"
            title="Particuliers"
            description="Lancez votre carrière dans le numérique avec une formation certifiante, un accompagnement concret et un accès direct aux opportunités d'emploi."
            cta="Démarrer ma formation"
            onClick={() => onNavigate('/contact')}
          />
          <PersonaCard 
            icon={<Building className="w-8 h-8" />}
            type="Secteur Privé"
            title="Entreprises"
            description="Formez vos équipes aux compétences digitales, recrutez des talents certifiés ou confiez-nous vos projets de transformation numérique."
            cta="Trouver des solutions"
            onClick={() => onNavigate('/contact')}
          />
          <PersonaCard 
            icon={<Landmark className="w-8 h-8" />}
            type="Institutions"
            title="Gouvernements"
            description="Accélérez vos programmes de développement des compétences grâce à notre expertise en conception et exécution de projets de formation."
            cta="Collaborer avec nous"
            onClick={() => onNavigate('/contact')}
          />
          <PersonaCard 
            icon={<HeartHandshake className="w-8 h-8" />}
            type="Impact"
            title="ONG & Bailleurs"
            description="Maximisez l'impact de vos investissements grâce à des programmes de formation mesurables, avec suivi post-formation et reporting d'impact rigoureux."
            cta="Devenir partenaire"
            onClick={() => onNavigate('/contact')}
          />
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
