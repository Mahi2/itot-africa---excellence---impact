
import React, { useState } from 'react';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  Building2, 
  Landmark, 
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const profiles = [
    { id: 'talent', label: 'Talent / Particulier', icon: <User />, desc: 'Pour la formation' },
    { id: 'corporate', label: 'Entreprise', icon: <Building2 />, desc: 'Pour l\'ingénierie' },
    { id: 'gov', label: 'Institution / État', icon: <Landmark />, desc: 'Pour la stratégie' },
    { id: 'partner', label: 'ONG / Bailleur', icon: <HeartHandshake />, desc: 'Pour l\'impact' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#00796B_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
              Parlons de votre <br />
              <span className="text-itot-teal">prochain impact.</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Que vous souhaitiez transformer votre carrière ou numériser une institution, notre équipe est prête à vous accompagner.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative z-20 -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Section */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-12">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Profile Selection */}
                    <div className="mb-12">
                      <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
                        1. Quel est votre profil ?
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {profiles.map((profile) => (
                          <button
                            key={profile.id}
                            type="button"
                            onClick={() => setSelectedProfile(profile.id)}
                            className={`p-6 rounded-3xl border-2 transition-all text-left flex flex-col justify-between h-full group ${
                              selectedProfile === profile.id 
                                ? 'border-itot-teal bg-teal-50 shadow-lg shadow-teal-100' 
                                : 'border-slate-50 bg-slate-50 hover:border-slate-200'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                              selectedProfile === profile.id ? 'bg-itot-teal text-white' : 'bg-white text-slate-400 group-hover:text-itot-teal'
                            }`}>
                              {profile.icon}
                            </div>
                            <div>
                              <div className={`text-sm font-bold ${selectedProfile === profile.id ? 'text-itot-teal' : 'text-slate-900'}`}>
                                {profile.label}
                              </div>
                              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                                {profile.desc}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Nom complet</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Jean Dupont"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Email professionnel</label>
                        <input 
                          required
                          type="email" 
                          placeholder="jean@exemple.com"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all"
                        />
                      </div>
                    </div>

                    <div className="mb-10">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Votre message / Projet</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Dites-nous comment nous pouvons vous aider..."
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={!selectedProfile}
                      className={`w-full py-5 rounded-2xl font-black text-white flex items-center justify-center gap-3 transition-all shadow-xl ${
                        selectedProfile ? 'bg-itot-teal hover:bg-[#004D40] shadow-teal-200' : 'bg-slate-200 cursor-not-allowed'
                      }`}
                    >
                      Envoyer ma demande
                      <Send size={18} />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-teal-50 text-itot-teal rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Message reçu !</h2>
                    <p className="text-slate-500 max-w-sm mx-auto mb-10">
                      Merci de nous avoir contactés. Notre équipe stratégique étudie votre demande et vous répondra sous 24 à 48 heures ouvrées.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-slate-900 rounded-[40px] p-10 text-white">
                <h3 className="text-2xl font-bold mb-8">Informations de contact</h3>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-itot-teal shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email</div>
                      <div className="font-medium">contact@itotafrica.com</div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-itot-teal shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Téléphone</div>
                      <div className="font-medium">+243 000 000 000</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/10">
                   <h4 className="text-sm font-bold text-itot-teal mb-6 uppercase tracking-widest">Nos Bureaux</h4>
                   <div className="space-y-6">
                     <div className="flex gap-4">
                       <MapPin size={18} className="text-slate-500 shrink-0" />
                       <div className="text-sm text-slate-400">Kinshasa: Avenue de la Gombe, Immeuble Itot</div>
                     </div>
                     <div className="flex gap-4">
                       <MapPin size={18} className="text-slate-500 shrink-0" />
                       <div className="text-sm text-slate-400">Lubumbashi: Avenue Kapenda, Hub Itot</div>
                     </div>
                   </div>
                </div>
              </div>

              <div className="bg-itot-teal rounded-[40px] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Vous êtes un talent ?</h3>
                <p className="text-teal-50/80 text-sm mb-8 leading-relaxed relative z-10">
                  Accédez directement à nos programmes de formation sur la plateforme Okademy.
                </p>
                <button className="flex items-center gap-3 bg-white text-itot-teal font-black text-sm px-6 py-4 rounded-2xl hover:bg-teal-50 transition-all relative z-10">
                  Accéder à Okademy
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
