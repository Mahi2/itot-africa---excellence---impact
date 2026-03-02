
import React from 'react';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'solutions' | 'impact' | 'partnerships') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: 'home' | 'about' | 'solutions' | 'impact' | 'partnerships', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div 
              className="flex items-center gap-2 mb-8 cursor-pointer"
              onClick={(e) => handleNav('home', e as any)}
            >
              <div className="w-10 h-10 bg-itot-teal rounded-full flex items-center justify-center">
                 <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-black tracking-tight">
                itot<span className="font-light italic text-teal-400">africa</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              L'infrastructure humaine et digitale qui transforme le potentiel de l'Afrique en compétences utiles et opportunités réelles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-itot-teal hover:border-itot-teal transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-itot-teal hover:border-itot-teal transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-itot-teal hover:border-itot-teal transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Solutions</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" onClick={(e) => handleNav('solutions', e)} className="hover:text-teal-400 transition-colors">Okademy (Formation)</a></li>
              <li><a href="#" onClick={(e) => handleNav('solutions', e)} className="hover:text-teal-400 transition-colors">Développement Software</a></li>
              <li><a href="#" onClick={(e) => handleNav('solutions', e)} className="hover:text-teal-400 transition-colors">Conseil Stratégique</a></li>
              <li><a href="#" onClick={(e) => handleNav('solutions', e)} className="hover:text-teal-400 transition-colors">E-learning Platforms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" onClick={(e) => handleNav('home', e)} className="hover:text-teal-400 transition-colors">Accueil</a></li>
              <li><a href="#" onClick={(e) => handleNav('about', e)} className="hover:text-teal-400 transition-colors">À Propos</a></li>
              <li><a href="#" onClick={(e) => handleNav('impact', e)} className="hover:text-teal-400 transition-colors">Impact & Études</a></li>
              <li><a href="#" onClick={(e) => handleNav('partnerships', e)} className="hover:text-teal-400 transition-colors">Partenariats</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <MapPin className="text-itot-teal shrink-0" size={20} />
                <span>Kinshasa, RD Congo<br />Lubumbashi, RD Congo</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-itot-teal shrink-0" size={20} />
                <span>+243 000 000 000</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-itot-teal shrink-0" size={20} />
                <span>contact@itotafrica.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2024 Itot Africa. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
