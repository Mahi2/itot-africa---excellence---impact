
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
} from 'lucide-react';
import { LanguageProvider, useTranslation } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ResponseSection from './components/ResponseSection';
import ServicesSection from './components/ServicesSection';
import PersonaSection from './components/PersonaSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import SolutionsPage from './components/SolutionsPage';
import ImpactPage from './components/ImpactPage';
import PartnershipsPage from './components/PartnershipsPage';
import ContactPage from './components/ContactPage';
import LegalNoticePage from './components/LegalNoticePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import SEO from './components/SEO';

const HomePage: React.FC<{ navigateTo: (path: string) => void }> = ({ navigateTo }) => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEO title={t('nav.home')} />
      <Hero onNavigate={navigateTo} />
      <ProblemSection />
      <ResponseSection />
      <ServicesSection onNavigate={navigateTo} />
      <PersonaSection onNavigate={navigateTo} />
      
      {/* Final CTA Section */}
      <section className="bg-itot-teal py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {t('hero.cta.primary')}
          </h2>
          <p className="text-xl text-teal-50 mb-10 opacity-90">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('/contact')}
              className="px-8 py-4 bg-white text-itot-teal font-bold rounded-lg shadow-xl hover:bg-teal-50 transition-all flex items-center justify-center gap-2 group"
            >
              {t('nav.contact')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigateTo('/about')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              {t('nav.about')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  // Scroll to top when path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigateTo = (path: string) => {
    // Handle both old 'home' style and new '/home' style for backward compatibility if needed
    const targetPath = path.startsWith('/') ? path : `/${path === 'home' ? '' : path}`;
    navigate(targetPath);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={navigateTo} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage navigateTo={navigateTo} />} />
          <Route path="/home" element={<HomePage navigateTo={navigateTo} />} />
          <Route path="/about" element={
            <>
              <SEO title={t('nav.about')} />
              <AboutPage />
            </>
          } />
          <Route path="/solutions" element={
            <>
              <SEO title={t('nav.solutions')} />
              <SolutionsPage onNavigate={navigateTo} />
            </>
          } />
          <Route path="/impact" element={
            <>
              <SEO title={t('nav.impact')} />
              <ImpactPage />
            </>
          } />
          <Route path="/partnerships" element={
            <>
              <SEO title={t('nav.partnerships')} />
              <PartnershipsPage onNavigate={navigateTo} />
            </>
          } />
          <Route path="/contact" element={
            <>
              <SEO title={t('nav.contact')} />
              <ContactPage />
            </>
          } />
          <Route path="/legal" element={
            <>
              <SEO title={t('footer.legal.notice')} />
              <LegalNoticePage />
            </>
          } />
          <Route path="/privacy" element={
            <>
              <SEO title={t('footer.legal.privacy')} />
              <PrivacyPolicyPage />
            </>
          } />
        </Routes>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
