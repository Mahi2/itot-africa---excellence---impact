
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
import { useTranslation } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formType, setFormType] = useState<'partnership' | 'service' | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    userType: 'individual', // for service form
    serviceType: '', // for service form
    otherService: '' // for service form
  });

  const partnershipProfiles = [
    { id: 'corporate', label: t('contact.profile.corporate.label'), icon: <Building2 />, desc: t('contact.profile.corporate.desc') },
    { id: 'gov', label: t('contact.profile.gov.label'), icon: <Landmark />, desc: t('contact.profile.gov.desc') },
    { id: 'partner', label: t('contact.profile.partner.label'), icon: <HeartHandshake />, desc: t('contact.profile.partner.desc') }
  ];

  const services = [
    "Développement Web / Mobile",
    "Transformation Digitale",
    "Conseil Stratégique",
    "Accompagnement Communication",
    "Formation Technique",
    "Autres"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const payload = {
      ...formData,
      formType,
      profile: formType === 'partnership' ? selectedProfile : formData.userType,
      subject: formType === 'service' ? (formData.serviceType === 'Autres' ? formData.otherService : formData.serviceType) : formData.subject
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(data.error || t('contact.error.generic') || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (err) {
      setError(t('contact.error.server') || "Impossible de contacter le serveur. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
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
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
              {t('contact.title').split('prochain impact.')[0]} <br />
              <span className="text-itot-teal">prochain impact.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              {t('contact.subtitle')}
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
                
                {/* Enhanced Form Type Switcher */}
                <div className="mb-12">
                  <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-8 text-center">
                    {t('contact.switcher.label')}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button 
                      onClick={() => { setFormType('partnership'); setIsSubmitted(false); }}
                      className={`p-6 md:p-8 rounded-[32px] border-2 transition-all text-left flex items-center gap-4 md:gap-6 group ${
                        formType === 'partnership' 
                          ? 'border-itot-teal bg-teal-50 shadow-xl shadow-teal-100' 
                          : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                        formType === 'partnership' ? 'bg-itot-teal text-white scale-110' : 'bg-slate-100 text-slate-400 group-hover:text-itot-teal'
                      }`}>
                        <HeartHandshake size={28} className="md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h4 className={`text-lg md:text-xl font-black mb-1 ${formType === 'partnership' ? 'text-itot-teal' : 'text-slate-900'}`}>{t('contact.partnership.title')}</h4>
                        <p className="text-xs md:text-sm text-slate-500 font-medium">{t('contact.partnership.desc')}</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => { setFormType('service'); setIsSubmitted(false); }}
                      className={`p-6 md:p-8 rounded-[32px] border-2 transition-all text-left flex items-center gap-4 md:gap-6 group ${
                        formType === 'service' 
                          ? 'border-itot-teal bg-teal-50 shadow-xl shadow-teal-100' 
                          : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                        formType === 'service' ? 'bg-itot-teal text-white scale-110' : 'bg-slate-100 text-slate-400 group-hover:text-itot-teal'
                      }`}>
                        <Building2 size={28} className="md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h4 className={`text-lg md:text-xl font-black mb-1 ${formType === 'service' ? 'text-itot-teal' : 'text-slate-900'}`}>{t('contact.services.title')}</h4>
                        <p className="text-xs md:text-sm text-slate-500 font-medium">{t('contact.services.desc')}</p>
                      </div>
                    </button>
                  </div>
                </div>

                {formType && !isSubmitted && (
                  <div className="pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                    <form onSubmit={handleSubmit}>
                      {formType === 'partnership' ? (
                        /* Partnership Form */
                        <div className="space-y-10">
                          <div>
                            <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
                              {t('contact.form.step1.partnership')}
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              {partnershipProfiles.map((profile) => (
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

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.name.label')}</label>
                              <input 
                                required
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.name.placeholder')}
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all placeholder:text-slate-300"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.email.label')}</label>
                              <input 
                                required
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.email.placeholder')}
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all placeholder:text-slate-300"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.phone.label')}</label>
                              <input 
                                required
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.phone.placeholder')}
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all placeholder:text-slate-300"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.subject.label')}</label>
                              <input 
                                required
                                type="text" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.subject.placeholder')}
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all placeholder:text-slate-300"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.message.label')}</label>
                            <textarea 
                              required
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={5}
                              placeholder={t('contact.form.message.placeholder')}
                              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all resize-none placeholder:text-slate-300"
                            ></textarea>
                          </div>
                        </div>
                      ) : (
                        /* Service Form */
                        <div className="space-y-10">
                          <div>
                            <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
                              {t('contact.form.step1.service')}
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                              <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.userType.label')}</label>
                                <select 
                                  name="userType"
                                  value={formData.userType}
                                  onChange={handleInputChange}
                                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all"
                                >
                                  <option value="individual">{t('contact.form.userType.individual')}</option>
                                  <option value="enterprise">{t('contact.form.userType.enterprise')}</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.serviceType.label')}</label>
                                <select 
                                  required
                                  name="serviceType"
                                  value={formData.serviceType}
                                  onChange={handleInputChange}
                                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all"
                                >
                                  <option value="">{t('contact.form.serviceType.placeholder')}</option>
                                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                              </div>
                            </div>

                            {formData.serviceType === 'Autres' && (
                              <div className="mb-8">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.otherService.label')}</label>
                                <input 
                                  required
                                  type="text" 
                                  name="otherService"
                                  value={formData.otherService}
                                  onChange={handleInputChange}
                                  placeholder={t('contact.form.otherService.placeholder')}
                                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all placeholder:text-slate-300"
                                />
                              </div>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.name.label')}</label>
                              <input 
                                required
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.name.placeholder')}
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all placeholder:text-slate-300"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.email.label')}</label>
                              <input 
                                required
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.email.placeholder')}
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all placeholder:text-slate-300"
                              />
                            </div>
                          </div>

                          <div className="mb-8">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.phone.label')}</label>
                            <input 
                              required
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder={t('contact.form.phone.placeholder')}
                              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all placeholder:text-slate-300"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('contact.form.message.label')}</label>
                            <textarea 
                              required
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={5}
                              placeholder={t('contact.form.message.placeholder')}
                              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-itot-teal/20 focus:border-itot-teal transition-all resize-none placeholder:text-slate-300"
                            ></textarea>
                          </div>
                        </div>
                      )}

                      {error && (
                        <div className="mt-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-medium">
                          {error}
                        </div>
                      )}

                      <button 
                        type="submit"
                        disabled={(formType === 'partnership' && !selectedProfile) || isLoading}
                        className={`w-full mt-10 py-5 rounded-2xl font-black text-white flex items-center justify-center gap-3 transition-all shadow-xl ${
                          (formType === 'service' || selectedProfile) && !isLoading ? 'bg-itot-teal hover:bg-[#004D40] shadow-teal-200' : 'bg-slate-200 cursor-not-allowed'
                        }`}
                      >
                        {isLoading ? t('contact.form.loading') : t('contact.form.submit')}
                        {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={18} />}
                      </button>
                    </form>
                  </div>
                )}

                {isSubmitted && (
                  <div className="text-center py-12 animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-teal-50 text-itot-teal rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-4">{t('contact.success.title')}</h2>
                    <p className="text-slate-500 max-w-sm mx-auto mb-10">
                      {t('contact.success.desc')}
                    </p>
                    <button 
                      onClick={() => { setIsSubmitted(false); setFormType(null); setSelectedProfile(null); }}
                      className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                    >
                      {t('contact.success.cta')}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-slate-900 rounded-[40px] p-10 text-white">
                <h3 className="text-2xl font-bold mb-8">{t('contact.info.title')}</h3>
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
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{t('contact.form.phone.label')}</div>
                      <a href="https://wa.me/243978400415" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-itot-teal transition-colors">+243 978 400 415</a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/10">
                   <h4 className="text-sm font-bold text-itot-teal mb-6 uppercase tracking-widest">{t('contact.info.offices')}</h4>
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
                <h3 className="text-xl font-bold mb-4 relative z-10">{t('contact.talent.title')}</h3>
                <p className="text-teal-50/80 text-sm mb-8 leading-relaxed relative z-10">
                  {t('contact.talent.desc')}
                </p>
                <a 
                  href="https://www.okademy.africa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-itot-teal font-black text-sm px-6 py-4 rounded-2xl hover:bg-teal-50 transition-all relative z-10 w-fit"
                >
                  {t('contact.talent.cta')}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
