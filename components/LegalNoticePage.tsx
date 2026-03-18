import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Scale, FileText } from 'lucide-react';

const LegalNoticePage: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#00796B_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-itot-teal/10 border border-itot-teal/20 text-itot-teal text-xs font-black uppercase tracking-widest mb-6">
              <Scale size={14} />
              Cadre Juridique
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
              Mentions <br />
              <span className="text-itot-teal">Légales.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              Transparence et conformité au cœur de notre écosystème technologique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-16">
            <div className="prose prose-slate max-w-none">
              <div className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-itot-teal flex items-center justify-center text-sm">01</span>
                  Éditeur du Site
                </h2>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                  <p className="text-slate-700 leading-relaxed">
                    Le site <strong>itot.africa</strong> est édité par <strong>Itot Africa</strong>, un écosystème technologique dédié à l'excellence et à l'impact en République Démocratique du Congo.
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li><strong>Siège Social :</strong> Lubumbashi, RD Congo</li>
                    <li><strong>Bureaux :</strong> Kinshasa, RD Congo</li>
                    <li><strong>Email :</strong> contact@itotafrica.com</li>
                    <li><strong>Téléphone :</strong> +243 978 400 415</li>
                    <li><strong>Directeur de la publication :</strong> La Direction Générale</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-itot-teal flex items-center justify-center text-sm">02</span>
                  Hébergement
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Ce site est hébergé sur des infrastructures cloud de haute disponibilité, garantissant une accessibilité optimale et une sécurité renforcée des données pour nos utilisateurs à travers le continent.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-itot-teal flex items-center justify-center text-sm">03</span>
                  Propriété Intellectuelle
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  L'ensemble de ce site relève de la législation congolaise et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-itot-teal flex items-center justify-center text-sm">04</span>
                  Responsabilité
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Itot Africa s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.
                </p>
              </div>

              <div className="pt-10 border-t border-slate-100 italic text-slate-400 text-sm">
                Dernière mise à jour : 18 Mars 2026
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalNoticePage;
