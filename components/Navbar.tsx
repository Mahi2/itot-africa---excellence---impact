
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'solutions' | 'impact' | 'partnerships' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: 'home' | 'about' | 'solutions' | 'impact' | 'partnerships' | 'contact', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Placeholder */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={(e) => handleLinkClick('home', e)}
        >
          <span className={`text-2xl font-black tracking-tight ${isScrolled ? 'text-itot-teal' : 'text-white'}`}>
            Itot <span className="font-light">africa</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { id: 'home', label: 'Accueil' },
            { id: 'about', label: 'À Propos' },
            { id: 'solutions', label: 'Solutions' },
            { id: 'impact', label: 'Impact' },
            { id: 'partnerships', label: 'Partenariats' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <a 
              key={item.id}
              href="#" 
              onClick={(e) => handleLinkClick(item.id as any, e)}
              className={`font-medium transition-colors hover:text-itot-teal ${
                isScrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={(e) => handleLinkClick('contact', e as any)}
            className="px-6 py-2 bg-itot-teal text-white font-semibold rounded-lg hover:bg-[#004D40] transition-all shadow-lg shadow-teal-900/10"
          >
            Nous rejoindre
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-itot-teal' : 'text-white'} size={28} />
          ) : (
            <Menu className={isScrolled ? 'text-itot-teal' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
          {[
            { id: 'home', label: 'Accueil' },
            { id: 'about', label: 'À Propos' },
            { id: 'solutions', label: 'Solutions' },
            { id: 'impact', label: 'Impact' },
            { id: 'partnerships', label: 'Partenariats' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <a 
              key={item.id}
              href="#" 
              onClick={(e) => handleLinkClick(item.id as any, e)} 
              className="text-slate-800 text-lg font-semibold border-b border-slate-50 pb-2"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={(e) => handleLinkClick('contact', e as any)}
            className="w-full py-4 bg-itot-teal text-white font-bold rounded-xl"
          >
            Nous rejoindre
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
