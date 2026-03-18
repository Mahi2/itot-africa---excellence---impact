import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, EyeOff, Database } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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
              <ShieldCheck size={14} />
              Protection des données
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
              Politique de <br />
              <span className="text-itot-teal">Confidentialité.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              Votre vie privée est au cœur de notre engagement éthique et technologique.
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
                  Introduction
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Chez <strong>Itot Africa</strong>, nous accordons une importance capitale à la protection de vos données personnelles. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre plateforme.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-itot-teal flex items-center justify-center text-sm">02</span>
                  Données Collectées
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Nous collectons uniquement les données nécessaires à la fourniture de nos services d'excellence :
                </p>
                <ul className="mt-4 space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <Database size={18} className="text-itot-teal mt-1 flex-shrink-0" />
                    <span><strong>Formulaires de contact :</strong> Nom, email, téléphone et détails de votre projet.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <EyeOff size={18} className="text-itot-teal mt-1 flex-shrink-0" />
                    <span><strong>Données de navigation :</strong> Cookies techniques pour améliorer votre expérience utilisateur.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-itot-teal flex items-center justify-center text-sm">03</span>
                  Utilisation des Données
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Vos informations sont utilisées exclusivement pour :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h3 className="font-black text-slate-900 mb-2">Service Client</h3>
                    <p className="text-sm text-slate-600">Répondre à vos demandes de renseignements et de devis.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h3 className="font-black text-slate-900 mb-2">Amélioration</h3>
                    <p className="text-sm text-slate-600">Analyser l'utilisation de notre site pour optimiser nos services.</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-itot-teal flex items-center justify-center text-sm">04</span>
                  Sécurité et Conservation
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles rigoureuses pour protéger vos données contre tout accès non autorisé. Vos données sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-itot-teal flex items-center justify-center text-sm">05</span>
                  Vos Droits
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Conformément aux réglementations en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à :
                </p>
                <div className="mt-6 p-6 bg-teal-50 rounded-3xl border border-teal-100 text-itot-teal font-black text-center">
                  contact@itotafrica.com
                </div>
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

export default PrivacyPolicyPage;
