
export type Language = 'fr' | 'en' | 'ln' | 'sw' | 'es' | 'de';

export interface Translation {
  [key: string]: {
    [lang in Language]: string;
  };
}

export const translations: Translation = {
  // Navbar
  'nav.home': {
    fr: 'Accueil',
    en: 'Home',
    ln: 'Ebandeli',
    sw: 'Nyumbani',
    es: 'Inicio',
    de: 'Startseite'
  },
  'nav.about': {
    fr: 'À Propos',
    en: 'About',
    ln: 'Likambo na biso',
    sw: 'Kuhusu sisi',
    es: 'Nosotros',
    de: 'Über uns'
  },
  'nav.solutions': {
    fr: 'Solutions',
    en: 'Solutions',
    ln: 'Biyano',
    sw: 'Suluhisho',
    es: 'Soluciones',
    de: 'Lösungen'
  },
  'nav.impact': {
    fr: 'Impact',
    en: 'Impact',
    ln: 'Litomba',
    sw: 'Matokeo',
    es: 'Impacto',
    de: 'Auswirkung'
  },
  'nav.partnerships': {
    fr: 'Partenariats',
    en: 'Partnerships',
    ln: 'Boyokani',
    sw: 'Ushirikiano',
    es: 'Alianzas',
    de: 'Partnerschaften'
  },
  'nav.contact': {
    fr: 'Contact',
    en: 'Contact',
    ln: 'Bosololi',
    sw: 'Mawasiliano',
    es: 'Contacto',
    de: 'Kontakt'
  },

  // Hero Section
  'hero.badge': {
    fr: "Bâtir le capital humain de l'Afrique digitale",
    en: "Building Africa's digital human capital",
    ln: "Kotonga mayele ya bana mboka mpo na Afrika ya sika",
    sw: "Kujenga rasilimali watu ya kidijitali barani Afrika",
    es: "Construyendo el capital humano digital de África",
    de: "Aufbau des digitalen Humankapitals in Afrika"
  },
  'hero.title': {
    fr: "De la formation certifiante à l'emploi concret.",
    en: "From certified training to concrete employment.",
    ln: "Longwa na boyekoli tii na mosala ya solo.",
    sw: "Kutoka kwa mafunzo ya uthibitisho hadi ajira halisi.",
    es: "De la formación certificada al empleo concreto.",
    de: "Von der zertifizierten Ausbildung zur konkreten Beschäftigung."
  },
  'hero.subtitle': {
    fr: "Itot Africa est l'écosystème qui relie les talents, les entreprises et les institutions aux compétences réelles et aux opportunités durables de croissance.",
    en: "Itot Africa is the ecosystem that connects talents, companies, and institutions to real skills and sustainable growth opportunities.",
    ln: "Itot Africa ezali esika oyo ekangisaka bato ya mayele, misala mpe mangomba na mayele ya solo mpe mabaku ya kokola.",
    sw: "Itot Africa ni mfumo unaounganisha vipaji, makampuni, na taasisi na ujuzi halisi na fursa endelevu za ukuaji.",
    es: "Itot Africa es el ecosistema que conecta talentos, empresas e instituciones con habilidades reales y oportunidades de crecimiento sostenible.",
    de: "Itot Africa ist das Ökosystem, das Talente, Unternehmen und Institutionen mit echten Fähigkeiten und nachhaltigen Wachstumschancen verbindet."
  },
  'hero.cta.individual': {
    fr: 'Je suis un particulier',
    en: 'I am an individual',
    ln: 'Nazali moto moko',
    sw: 'Mimi ni mwananchi',
    es: 'Soy un particular',
    de: 'Ich bin eine Privatperson'
  },
  'hero.cta.organization': {
    fr: 'Je représente une organisation',
    en: 'I represent an organization',
    ln: 'Nazali komonisa lingomba',
    sw: 'Nawakilisha shirika',
    es: 'Represento a una organización',
    de: 'Ich vertrete eine Organisation'
  },
  'hero.stats': {
    fr: '+10 700 apprenants formés | 200+ emplois générés | 30+ partenaires entreprises',
    en: '+10,700 learners trained | 200+ jobs generated | 30+ corporate partners',
    ln: '+10 700 bayekoli | +200 misala | +30 baninga ya mosala',
    sw: '+10,700 wanafunzi waliofunzwa | 200+ kazi zilizozalishwa | 30+ washirika wa kampuni',
    es: '+10.700 estudiantes formados | 200+ empleos generados | 30+ socios corporativos',
    de: '+10.700 Lernende ausgebildet | 200+ Arbeitsplätze geschaffen | 30+ Unternehmenspartner'
  },
  'hero.cta.primary': {
    fr: 'Découvrir nos solutions',
    en: 'Discover our solutions',
    ln: 'Meka biyano na biso',
    sw: 'Gundua suluhisho zetu',
    es: 'Descubre nuestras soluciones',
    de: 'Unsere Lösungen entdecken'
  },
  'hero.cta.secondary': {
    fr: 'Voir notre impact',
    en: 'See our impact',
    ln: 'Tala litomba na biso',
    sw: 'Angalia matokeo yetu',
    es: 'Ver nuestro impacto',
    de: 'Unsere Wirkung sehen'
  },

  // Footer
  'footer.desc': {
    fr: "L'écosystème de formation, de certification et d'insertion digitale en Afrique.",
    en: "The ecosystem for digital training, certification, and placement in Africa.",
    ln: "Esika ya boyekoli, nzeté mpe mosala ya mayele ya sika na Afrika.",
    sw: "Mfumo wa mafunzo, uthibitisho na ajira ya kidijitali barani Afrika.",
    es: "El ecosistema de formación, certificación e inserción digital en África.",
    de: "Das Ökosystem für digitale Ausbildung, Zertifizierung und Vermittlung in Afrika."
  },
  'footer.links.title': {
    fr: 'Liens Rapides',
    en: 'Quick Links',
    ln: 'Nzela ya noki',
    sw: 'Viungo vya Haraka',
    es: 'Enlaces Rápidos',
    de: 'Schnelllinks'
  },
  'footer.legal.title': {
    fr: 'Légal',
    en: 'Legal',
    ln: 'Mibeko',
    sw: 'Kisheria',
    es: 'Legal',
    de: 'Rechtliches'
  },
  'footer.legal.notice': {
    fr: 'Mentions Légales',
    en: 'Legal Notice',
    ln: 'Makambo ya mibeko',
    sw: 'Taarifa za Kisheria',
    es: 'Aviso Legal',
    de: 'Impressum'
  },
  'footer.legal.privacy': {
    fr: 'Confidentialité',
    en: 'Privacy Policy',
    ln: 'Kobomba sekele',
    sw: 'Sera ya Faragha',
    es: 'Privacidad',
    de: 'Datenschutz'
  },
  'footer.contact.title': {
    fr: 'Contact',
    en: 'Contact',
    ln: 'Bosololi',
    sw: 'Mawasiliano',
    es: 'Contacto',
    de: 'Kontakt'
  },

  // Contact Page
  'contact.title': {
    fr: 'Parlons de votre prochain impact.',
    en: 'Let\'s talk about your next impact.',
    ln: 'Tolo loba mpo na litomba na yo ya sika.',
    sw: 'Tuzungumzie matokeo yako yajayo.',
    es: 'Hablemos de tu próximo impacto.',
    de: 'Lassen Sie uns über Ihre nächste Wirkung sprechen.'
  },
  'contact.subtitle': {
    fr: 'Que vous souhaitiez transformer votre carrière ou numériser une institution, notre équipe est prête à vous accompagner.',
    en: 'Whether you want to transform your career or digitize an institution, our team is ready to support you.',
    ln: 'Soki olingi obongola mosala na yo to obongola lingomba na yo na mayele ya sika, toza pene ya kosalisa yo.',
    sw: 'Iwe unataka kubadilisha taaluma yako au kuifanya taasisi kuwa ya kidijitali, timu yetu iko tayari kukusaidia.',
    es: 'Ya sea que quieras transformar tu carrera o digitalizar una institución, nuestro equipo está listo para apoyarte.',
    de: 'Ob Sie Ihre Karriere transformieren oder eine Institution digitalisieren möchten, unser Team ist bereit, Sie zu unterstützen.'
  },
  'contact.switcher.label': {
    fr: 'Choisissez le type de demande pour commencer',
    en: 'Choose the type of request to start',
    ln: 'Pona lolenge ya senga mpo na kobanda',
    sw: 'Chagua aina ya ombi ili kuanza',
    es: 'Elige el tipo de solicitud para comenzar',
    de: 'Wählen Sie die Art der Anfrage, um zu beginnen'
  },
  'contact.partnership.title': {
    fr: 'Partenariats',
    en: 'Partnerships',
    ln: 'Boyokani',
    sw: 'Ushirikiano',
    es: 'Alianzas',
    de: 'Partnerschaften'
  },
  'contact.partnership.desc': {
    fr: 'Entreprises, Institutions, ONG',
    en: 'Companies, Institutions, NGOs',
    ln: 'Misala, Mangomba, ONG',
    sw: 'Makampuni, Taasisi, Mashirika',
    es: 'Empresas, Instituciones, ONG',
    de: 'Unternehmen, Institutionen, NGOs'
  },
  'contact.services.title': {
    fr: 'Services & Formations',
    en: 'Services & Training',
    ln: 'Misala mpe Boyekoli',
    sw: 'Huduma na Mafunzo',
    es: 'Servicios y Formación',
    de: 'Dienstleistungen & Ausbildung'
  },
  'contact.services.desc': {
    fr: 'Besoins techniques & Talents',
    en: 'Technical Needs & Talents',
    ln: 'Senga ya mayele mpe Bato ya mayele',
    sw: 'Mahitaji ya Kiufundi na Vipaji',
    es: 'Necesidades Técnicas y Talentos',
    de: 'Technische Bedürfnisse & Talente'
  },
  'contact.form.step1.partnership': {
    fr: '1. Quel est votre profil institutionnel ?',
    en: '1. What is your institutional profile?',
    ln: '1. Lolenge nini ya lingomba na yo?',
    sw: '1. Wasifu wako wa kitaasisi ni upi?',
    es: '1. ¿Cuál es su perfil institucional?',
    de: '1. Was ist Ihr institutionelles Profil?'
  },
  'contact.form.step1.service': {
    fr: '1. Je souhaite un service ou une formation',
    en: '1. I want a service or training',
    ln: '1. Nalingi mosala to boyekoli',
    sw: '1. Nataka huduma au mafunzo',
    es: '1. Deseo un servicio o formación',
    de: '1. Ich wünsche eine Dienstleistung oder Schulung'
  },
  'contact.profile.corporate.label': {
    fr: 'Entreprise',
    en: 'Company',
    ln: 'Misala',
    sw: 'Kampuni',
    es: 'Empresa',
    de: 'Unternehmen'
  },
  'contact.profile.corporate.desc': {
    fr: "Pour l'ingénierie",
    en: 'For engineering',
    ln: 'Mpo na mayele ya mosala',
    sw: 'Kwa uhandisi',
    es: 'Para ingeniería',
    de: 'Für Engineering'
  },
  'contact.profile.gov.label': {
    fr: 'Institution / État',
    en: 'Institution / State',
    ln: 'Lingomba / Leta',
    sw: 'Taasisi / Serikali',
    es: 'Institución / Estado',
    de: 'Institution / Staat'
  },
  'contact.profile.gov.desc': {
    fr: 'Pour la stratégie',
    en: 'For strategy',
    ln: 'Mpo na mwango',
    sw: 'Kwa mkakati',
    es: 'Para estrategia',
    de: 'Für Strategie'
  },
  'contact.profile.partner.label': {
    fr: 'ONG / Bailleur',
    en: 'NGO / Donor',
    ln: 'ONG / Mopesi mbongo',
    sw: 'NGO / Mfadhili',
    es: 'ONG / Donante',
    de: 'NGO / Geber'
  },
  'contact.profile.partner.desc': {
    fr: "Pour l'impact",
    en: 'For impact',
    ln: 'Mpo na litomba',
    sw: 'Kwa matokeo',
    es: 'Para impacto',
    de: 'Für Wirkung'
  },
  'contact.form.name.label': {
    fr: 'Nom complet',
    en: 'Full name',
    ln: 'Kombo mobimba',
    sw: 'Jina kamili',
    es: 'Nombre completo',
    de: 'Vollständiger Name'
  },
  'contact.form.name.placeholder': {
    fr: 'ex: Netka Kasongo...',
    en: 'e.g., Netka Kasongo...',
    ln: 'ndakisa: Netka Kasongo...',
    sw: 'mfano: Netka Kasongo...',
    es: 'ej: Netka Kasongo...',
    de: 'z.B. Netka Kasongo...'
  },
  'contact.form.email.label': {
    fr: 'Email professionnel',
    en: 'Professional email',
    ln: 'Email ya mosala',
    sw: 'Barua pepe ya kitaalamu',
    es: 'Correo profesional',
    de: 'Berufliche E-Mail'
  },
  'contact.form.email.placeholder': {
    fr: 'jean@exemple.com',
    en: 'john@example.com',
    ln: 'jean@ndakisa.com',
    sw: 'john@mfano.com',
    es: 'juan@ejemplo.com',
    de: 'hans@beispiel.de'
  },
  'contact.form.phone.label': {
    fr: 'Numéro de téléphone',
    en: 'Phone number',
    ln: 'Nimero ya telefone',
    sw: 'Nambari ya simu',
    es: 'Número de teléfono',
    de: 'Telefonnummer'
  },
  'contact.form.phone.placeholder': {
    fr: '+243 978 400 415',
    en: '+243 978 400 415',
    ln: '+243 978 400 415',
    sw: '+243 978 400 415',
    es: '+243 978 400 415',
    de: '+243 978 400 415'
  },
  'contact.form.subject.label': {
    fr: 'Sujet / Projet',
    en: 'Subject / Project',
    ln: 'Likambo / Mwango',
    sw: 'Mada / Mradi',
    es: 'Asunto / Proyecto',
    de: 'Betreff / Projekt'
  },
  'contact.form.subject.placeholder': {
    fr: 'Ex: Accompagnement stratégique pour la transformation digitale...',
    en: 'E.g., Strategic support for digital transformation...',
    ln: 'Ndakisa: Lisalisi ya mwango mpo na mbongwana ya sika...',
    sw: 'Mfano: Msaada wa kimkakati kwa mabadiliko ya kidijitali...',
    es: 'Ej: Acompañamiento estratégico para la transformación digital...',
    de: 'Z.B. Strategische Begleitung für die digitale Transformation...'
  },
  'contact.form.message.label': {
    fr: 'Votre message / Détails',
    en: 'Your message / Details',
    ln: 'Nsango na yo / Makambo mosusu',
    sw: 'Ujumbe wako / Maelezo',
    es: 'Tu mensaje / Detalles',
    de: 'Ihre Nachricht / Details'
  },
  'contact.form.message.placeholder': {
    fr: 'Dites-nous comment nous pouvons vous aider...',
    en: 'Tell us how we can help you...',
    ln: 'Yebisa biso ndenge nini tokoki kosalisa yo...',
    sw: 'Tuambie jinsi tunavyoweza kukusaidia...',
    es: 'Cuéntanos cómo podemos ayudarte...',
    de: 'Sagen Sie uns, wie wir Ihnen helfen können...'
  },
  'contact.form.userType.label': {
    fr: 'Je suis un(e)',
    en: 'I am a',
    ln: 'Nazali',
    sw: 'Mimi ni',
    es: 'Soy un(a)',
    de: 'Ich bin ein(e)'
  },
  'contact.form.userType.individual': {
    fr: 'Particulier / Talent',
    en: 'Individual / Talent',
    ln: 'Moto moko / Moto ya mayele',
    sw: 'Mwananchi / Kipaji',
    es: 'Particular / Talento',
    de: 'Privatperson / Talent'
  },
  'contact.form.userType.enterprise': {
    fr: 'Entreprise',
    en: 'Company',
    ln: 'Misala',
    sw: 'Kampuni',
    es: 'Empresa',
    de: 'Unternehmen'
  },
  'contact.form.serviceType.label': {
    fr: 'Service souhaité',
    en: 'Desired service',
    ln: 'Mosala olingi',
    sw: 'Huduma inayohitajika',
    es: 'Servicio deseado',
    de: 'Gewünschte Dienstleistung'
  },
  'contact.form.serviceType.placeholder': {
    fr: 'Sélectionnez un service...',
    en: 'Select a service...',
    ln: 'Pona mosala moko...',
    sw: 'Chagua huduma...',
    es: 'Seleccione un servicio...',
    de: 'Wählen Sie eine Dienstleistung...'
  },
  'contact.form.otherService.label': {
    fr: 'Précisez votre besoin',
    en: 'Specify your need',
    ln: 'Yebisa senga na yo',
    sw: 'Eleza mahitaji yako',
    es: 'Especifique su necesidad',
    de: 'Präzisieren Sie Ihren Bedarf'
  },
  'contact.form.otherService.placeholder': {
    fr: 'Ex: Audit de sécurité informatique...',
    en: 'E.g., IT security audit...',
    ln: 'Ndakisa: Kotala bokengi ya mayele ya sika...',
    sw: 'Mfano: Ukaguzi wa usalama wa IT...',
    es: 'Ej: Auditoría de seguridad informática...',
    de: 'Z.B. IT-Sicherheitsaudit...'
  },
  'contact.info.title': {
    fr: 'Informations de contact',
    en: 'Contact Information',
    ln: 'Sango ya bosololi',
    sw: 'Habari za Mawasiliano',
    es: 'Información de contacto',
    de: 'Kontaktinformationen'
  },
  'contact.info.offices': {
    fr: 'Nos Bureaux',
    en: 'Our Offices',
    ln: 'Misala na biso',
    sw: 'Ofisi Zetu',
    es: 'Nuestras Oficinas',
    de: 'Unsere Büros'
  },
  'contact.talent.title': {
    fr: 'Vous êtes un talent ?',
    en: 'Are you a talent?',
    ln: 'Ozali moto ya mayele?',
    sw: 'Wewe ni kipaji?',
    es: '¿Eres un talento?',
    de: 'Sind Sie ein Talent?'
  },
  'contact.talent.desc': {
    fr: 'Accédez directement à nos programmes de formation sur la plateforme Okademy.',
    en: 'Access our training programs directly on the Okademy platform.',
    ln: 'Kende mbala moko na manaka na biso ya boyekoli na Okademy.',
    sw: 'Fikia programu zetu za mafunzo moja kwa moja kwenye jukwaa la Okademy.',
    es: 'Accede directamente a nuestros programas de formación en la plataforma Okademy.',
    de: 'Greifen Sie direkt auf unsere Schulungsprogramme auf der Okademy-Plattform zu.'
  },
  'contact.talent.cta': {
    fr: 'Accéder à Okademy',
    en: 'Access Okademy',
    ln: 'Kende na Okademy',
    sw: 'Fikia Okademy',
    es: 'Acceder a Okademy',
    de: 'Okademy aufrufen'
  },
  'contact.form.submit': {
    fr: 'Envoyer ma demande',
    en: 'Send my request',
    ln: 'Tinda senga na ngai',
    sw: 'Tuma ombi langu',
    es: 'Enviar mi solicitud',
    de: 'Meine Anfrage senden'
  },
  'contact.form.loading': {
    fr: 'Envoi en cours...',
    en: 'Sending...',
    ln: 'Ezali kokende...',
    sw: 'Inatuma...',
    es: 'Enviando...',
    de: 'Wird gesendet...'
  },
  'contact.success.title': {
    fr: 'Message reçu !',
    en: 'Message received!',
    ln: 'Nsango ekoli!',
    sw: 'Ujumbe umepokelewa!',
    es: '¡Mensaje recibido!',
    de: 'Nachricht erhalten!'
  },
  'contact.success.desc': {
    fr: 'Merci de nous avoir contactés. Notre équipe stratégique étudie votre demande et vous répondra sous 24 à 48 heures ouvrées.',
    en: 'Thank you for contacting us. Our strategic team is reviewing your request and will respond within 24 to 48 business hours.',
    ln: 'Matondi mpo na bosololi na biso. Bato na biso bazali kotala senga na yo mpe bakopesa yo eyano na boumeli ya ngonga 24 to 48.',
    sw: 'Asante kwa kuwasiliana nasi. Timu yetu ya kimkakati inakagua ombi lako na itajibu ndani ya saa 24 hadi 48 za kazi.',
    es: 'Gracias por contactarnos. Nuestro equipo estratégico está revisando su solicitud y responderá en un plazo de 24 a 48 horas hábiles.',
    de: 'Vielen Dank für Ihre Kontaktaufnahme. Unser strategisches Team prüft Ihre Anfrage und wird innerhalb von 24 bis 48 Geschäftsstunden antworten.'
  },
  'contact.success.cta': {
    fr: 'Envoyer un autre message',
    en: 'Send another message',
    ln: 'Tinda nsango mosusu',
    sw: 'Tuma ujumbe mwingine',
    es: 'Enviar otro mensaje',
    de: 'Weitere Nachricht senden'
  },
  'problem.badge': {
    fr: "L'Audit du Marché",
    en: 'Market Audit',
    ln: 'Mimekano ya Zando',
    sw: 'Ukaguzi wa Soko',
    es: 'Auditoría de Mercado',
    de: 'Marktaudit'
  },
  'problem.title': {
    fr: 'Le Paradoxe ',
    en: 'The African ',
    ln: 'Likambo ya ',
    sw: 'Kitendawili cha ',
    es: 'La Paradoja ',
    de: 'Das afrikanische '
  },
  'problem.titleAccent': {
    fr: 'Africain.',
    en: 'Paradox.',
    ln: 'Afrika.',
    sw: 'Afrika.',
    es: 'Africana.',
    de: 'Paradoxon.'
  },
  'problem.point1.title': {
    fr: 'Le Gisement Invisible',
    en: 'The Invisible Deposit',
    ln: 'Mayele oyo emonanaka te',
    sw: 'Hazina Isiyoonekana',
    es: 'El Yacimiento Invisible',
    de: 'Das unsichtbare Vorkommen'
  },
  'problem.point1.desc': {
    fr: 'Des millions de jeunes talents possèdent un potentiel brut exceptionnel, mais restent invisibles sur le marché mondial faute de certifications reconnues et d\'expérience sur des projets concrets.',
    en: 'Millions of young talents possess exceptional raw potential but remain invisible on the global market due to a lack of recognized certifications and experience on concrete projects.',
    ln: 'Babilenge mingi baza na mayele makasi, kasi bamonanaka te na zando ya mokili mobimba mpo baza na mikanda ya lokumu te mpe mpo basalaka naino misala ya solosolo te.',
    sw: 'Mamilioni ya vijana wenye vipaji wana uwezo mkubwa, lakini hawaonekani kwenye soko la kimataifa kwa sababu ya kukosekana kwa vyeti vinavyotambulika na uzoefu katika miradi halisi.',
    es: 'Millones de jóvenes talentos poseen un potencial bruto excepcional, pero permanecen invisibles en el mercado mundial por falta de certificaciones reconocidas y experiencia en proyectos concretos.',
    de: 'Millionen junger Talente verfügen über ein außergewöhnliches Rohpotenzial, bleiben aber auf dem Weltmarkt unsichtbar, da es an anerkannten Zertifizierungen und Erfahrung in konkreten Projekten mangelt.'
  },
  'problem.point1.category': {
    fr: 'Capital Humain',
    en: 'Human Capital',
    ln: 'Bato',
    sw: 'Rasilimali Watu',
    es: 'Capital Humano',
    de: 'Humankapital'
  },
  'problem.point2.title': {
    fr: 'L\'Ecart de Livraison',
    en: 'The Delivery Gap',
    ln: 'Kozanga kokokisa misala',
    sw: 'Pengo la Utekelezaji',
    es: 'La Brecha de Entrega',
    de: 'Die Lieferlücke'
  },
  'problem.point2.desc': {
    fr: 'Les institutions et les bailleurs ont la vision et les budgets, mais peinent à trouver des partenaires techniques locaux capables de livrer des projets complexes aux standards internationaux.',
    en: 'Institutions and donors have the vision and budgets but struggle to find local technical partners capable of delivering complex projects to international standards.',
    ln: 'Bakompanyi mpe bapesi mbongo baza na makanisi mpe mbongo, kasi bazali kozwa bato ya mayele ya mboka te mpo na kokokisa misala ya minene na ndenge ya mokili mobimba.',
    sw: 'Taasisi na wafadhili wana maono na bajeti, lakini wanapata shida kupata washirika wa kiufundi wa ndani wenye uwezo wa kutekeleza miradi mikubwa kwa viwango vya kimataifa.',
    es: 'Las instituciones y los donantes tienen la visión y los presupuestos, pero luchan por encontrar socios técnicos locales capaces de entregar proyectos complejos con estándares internacionales.',
    de: 'Institutionen und Geber haben die Vision und die Budgets, haben aber Schwierigkeiten, lokale technische Partner zu finden, die in der Lage sind, komplexe Projekte nach internationalen Standards abzuwickeln.'
  },
  'problem.point2.category': {
    fr: 'CAPACITE D\'EXECUTION',
    en: 'EXECUTION CAPACITY',
    ln: 'MAKOKI YA KOSALA',
    sw: 'UWEZO WA UTEKELEZAJI',
    es: 'CAPACIDAD DE EJECUCIÓN',
    de: 'AUSFÜHRUNGSKAPAZITÄT'
  },
  'problem.point3.title': {
    fr: 'Le Décalage Formation-Marché',
    en: 'The Training-Market Mismatch',
    ln: 'Kokesana ya kelasi na zando',
    sw: 'Tofauti kati ya Mafunzo na Soko',
    es: 'El Desajuste Formación-Mercado',
    de: 'Die Diskrepanz zwischen Ausbildung und Markt'
  },
  'problem.point3.desc': {
    fr: 'Le marché de l\'emploi exige des compétences digitales pratiques et actualisées, là où les systèmes éducatifs classiques proposent encore de la théorie déconnectée du terrain.',
    en: 'The job market demands practical and updated digital skills, whereas traditional educational systems still offer theory disconnected from the field.',
    ln: 'Zando ya mosala esengaka mayele ya tekinolozi ya sika mpe ya solosolo, kasi bakelasi ya kala bazali naino kopesa mateya ya buku oyo ekesani na makambo ya solosolo.',
    sw: 'Soko la ajira linahitaji ujuzi wa kidijitali wa vitendo na wa kisasa, ambapo mifumo ya elimu ya asili bado inatoa nadharia isiyohusiana na uhalisia.',
    es: 'El mercado laboral exige competencias digitales prácticas y actualizadas, allí donde los sistemas educativos clásicos todavía proponen teoría desconectada del terreno.',
    de: 'Der Arbeitsmarkt erfordert praktische und aktuelle digitale Kompetenzen, während klassische Bildungssysteme immer noch Theorie anbieten, die von der Praxis entkoppelt ist.'
  },
  'problem.point3.category': {
    fr: 'COMPETENCES',
    en: 'SKILLS',
    ln: 'MAYELE',
    sw: 'UJUZI',
    es: 'COMPETENCIAS',
    de: 'KOMPETENZEN'
  },
  'problem.point4.title': {
    fr: 'Impact Non Mésuré',
    en: 'Unmeasured Impact',
    ln: 'Impact oyo eyebani te',
    sw: 'Athari Isiyopimika',
    es: 'Impacto No Medido',
    de: 'Nicht gemessene Wirkung'
  },
  'problem.point4.desc': {
    fr: 'Sans suivi post-formation et sans données fiables sur l\'insertion professionnelle, les investissements dans la formation s\'évaporent sans laisser de trace vérifiable.',
    en: 'Without post-training follow-up and reliable data on professional integration, investments in training evaporate without leaving a verifiable trace.',
    ln: 'Soki kolanda nsima ya kelasi ezali te mpe soki bilembo ya solosolo ya kozwa mosala ezali te, mbongo oyo ekotaka na kelasi elimwaka kaka pamba.',
    sw: 'Bila ufuatiliaji baada ya mafunzo na bila data ya kuaminika juu ya kuingia kazini, uwekezaji katika mafunzo unapotea bila kuacha alama inayoweza kuthibitishwa.',
    es: 'Sin seguimiento post-formación y sin datos fiables sobre la inserción profesional, las inversiones en formación se evaporan sin dejar rastro verificable.',
    de: 'Ohne Nachbereitung nach der Ausbildung und ohne zuverlässige Daten zur beruflichen Integration verpuffen Investitionen in die Ausbildung, ohne eine überprüfbare Spur zu hinterlassen.'
  },
  'problem.point4.category': {
    fr: 'IMPACT',
    en: 'IMPACT',
    ln: 'IMPACT',
    sw: 'ATHARI',
    es: 'IMPACTO',
    de: 'WIRKUNG'
  },
  'problem.cta': {
    fr: 'Comprendre le défi',
    en: 'Understand the challenge',
    ln: 'Sosola mokakatano',
    sw: 'Eleza changamoto',
    es: 'Comprender el desafío',
    de: 'Die Herausforderung verstehen'
  },
  'problem.insight': {
    fr: 'Ce constat n\'est pas une fatalité. C\'est le point de départ de notre mission. Itot Africa a été bâtie pour résoudre ces quatre ruptures par un écosystème intégré de formation, de certification et d\'insertion.',
    en: 'This observation is not a fatality. It is the starting point of our mission. Itot Africa was built to resolve these four ruptures through an integrated ecosystem of training, certification, and integration.',
    ln: 'Likambo oyo ezali suka te. Ezali ebandeli ya mosala na biso. Itot Africa esalemaki mpo na kosilisa mikakatano oyo minei na nzela ya kelasi, mikanda ya lokumu mpe kozwa mosala.',
    sw: 'Hali hii si mwisho. Ni mwanzo wa utume wetu. Itot Africa ilijengwa ili kutatua matatizo haya manne kupitia mfumo jumuishi wa mafunzo, vyeti na ajira.',
    es: 'Esta constatación no es una fatalidad. Es el punto de partida de nuestra misión. Itot Africa fue construida para resolver estas cuatro rupturas mediante un ecosistema integrado de formación, certificación e inserción.',
    de: 'Diese Feststellung ist kein Schicksal. Sie ist der Ausgangspunkt unserer Mission. Itot Africa wurde aufgebaut, um diese vier Brüche durch ein integriertes Ökosystem aus Ausbildung, Zertifizierung und Integration zu lösen.'
  },
};

export const personaTranslations = {
  fr: {
    problem: {
      // ... (existing problem translations)
    },
    response: {
      badge: "Levier Opérationnel, notre approche :",
      title: "Un écosystème ",
      titleAccent: "en trois dimensions.",
      desc: "Nous ne nous contentons pas de répondre au marché. Nous le structurons par la formation certifiante, l'intelligence de marché et l'insertion vérifiable.",
      pillars: [
        {
          title: "Former et certifier les talents",
          subtitle: "Capital Humain",
          desc: "Nous formons et certifions les talents africains avec des standards internationaux pour les rendre compétitifs sur le marché mondial.",
          details: [
            "Certifications internationales (AWS, Cisco, etc.)",
            "Accompagnement à l'insertion professionnelle",
            "Parcours de formation alignés sur les besoins réels du marché"
          ]
        },
        {
          title: "Propulser les entreprises",
          subtitle: "Secteur Privé",
          desc: "Nous agissons comme le partenaire technique des entreprises pour accélérer leur transformation digitale et former leurs équipes.",
          details: [
            "Formations sur mesure pour les entreprises",
            "Consulting en transformation digitale",
            "Accès à un vivier de talents certifiés"
          ]
        },
        {
          title: "Exécuter des projets à impact",
          subtitle: "Institutions & Bailleurs",
          desc: "Nous concevons et délivrons des programmes de formation à impact social mesurable, avec un suivi rigoureux des résultats.",
          details: [
            "Conception et exécution de programme de formation",
            "Suivi d'impact post-formation (Impact Tracker)",
            "Intelligence de marché sur les compétences"
          ]
        }
      ],
      cta: "Explorer la solution",
      convergence: "Convergence",
      convergenceDesc: "Itot Africa opère simultanément sur ces trois leviers pour créer un cycle vertueux : la recherche éclaire les formations, les formations produisent des talents certifiés, les talents servent les entreprises et les institutions, et les données d'impact renforcent la crédibilité de l'ensemble.",
      impactLocal: "Impact Local",
      standardGlobal: "Standard Global"
    },
    services: {
      badge: "04 — Nos produits",
      title: "L'écosystème ",
      titleAccent: "en action.",
      desc: "Nous transformons des objectifs complexes en résultats tangibles grâce à trois pôles d'expertise intégrés",
      cycle: "Cycle de Valeur",
      okademy: {
        badge: "Moteur de talents",
        title: "Okademy : Le moteur de talents",
        desc: "Formation intensive et certification en compétences numériques de niveau international pour les futurs professionnels du continent.",
        learners: "Apprenants",
        certifications: "Certifications",
        certificationsDesc: "AWS, Cisco, etc.",
        cta: "Explorer le catalogue Okademy"
      },
      intelligence: {
        title: "Open Intelligence : L'éclaireur",
        desc: "Recherche, veille de marché et production de données fiables sur les compétences et l'emploi digital en Afrique pour éclairer les décisions de formation, de recrutement et d'investissement.",
        insight: "Data-Driven Insights"
      },
      consulting: {
        title: "Conseil & Exécution de projets",
        desc: "Conception et délivrance de programmes de formation, consulting en transformation digitale, et accompagnement stratégique pour entreprises et institutions. Partenaire de confiance",
        partner: "Partenaire de Confiance",
        reporting: "Reporting d'Impact Temps Réel"
      }
    }
  },
  en: {
    // ... (existing en translations)
    response: {
      badge: "Operational Lever, our approach:",
      title: "A three-dimensional ",
      titleAccent: "ecosystem.",
      desc: "We don't just respond to the market. We structure it through certifying training, market intelligence, and verifiable integration.",
      pillars: [
        {
          title: "Train and certify talents",
          subtitle: "Human Capital",
          desc: "We train and certify African talents with international standards to make them competitive on the global market.",
          details: [
            "International certifications (AWS, Cisco, etc.)",
            "Professional integration support",
            "Training paths aligned with real market needs"
          ]
        },
        {
          title: "Propel companies",
          subtitle: "Private Sector",
          desc: "We act as the technical partner for companies to accelerate their digital transformation and train their teams.",
          details: [
            "Tailor-made training for companies",
            "Digital transformation consulting",
            "Access to a pool of certified talents"
          ]
        },
        {
          title: "Execute impact projects",
          subtitle: "Institutions & Donors",
          desc: "We design and deliver training programs with measurable social impact, with rigorous monitoring of results.",
          details: [
            "Design and execution of training programs",
            "Post-training impact monitoring (Impact Tracker)",
            "Market intelligence on skills"
          ]
        }
      ],
      cta: "Explore the solution",
      convergence: "Convergence",
      convergenceDesc: "Itot Africa operates simultaneously on these three levers to create a virtuous cycle: research informs training, training produces certified talents, talents serve companies and institutions, and impact data strengthens the overall credibility.",
      impactLocal: "Local Impact",
      standardGlobal: "Global Standard"
    },
    services: {
      badge: "04 — Our Products",
      title: "The Ecosystem ",
      titleAccent: "in Action.",
      desc: "We transform complex objectives into tangible results through three integrated expertise poles",
      cycle: "Value Cycle",
      okademy: {
        badge: "Talent Engine",
        title: "Okademy: The Talent Engine",
        desc: "Intensive training and certification in international-level digital skills for the continent's future professionals.",
        learners: "Learners",
        certifications: "Certifications",
        certificationsDesc: "AWS, Cisco, etc.",
        cta: "Explore the Okademy catalog"
      },
      intelligence: {
        title: "Open Intelligence: The Scout",
        desc: "Research, market monitoring, and production of reliable data on skills and digital employment in Africa to inform training, recruitment, and investment decisions.",
        insight: "Data-Driven Insights"
      },
      consulting: {
        title: "Consulting & Project Execution",
        desc: "Design and delivery of training programs, digital transformation consulting, and strategic support for companies and institutions. Trusted partner",
        partner: "Trusted Partner",
        reporting: "Real-Time Impact Reporting"
      }
    }
  },
  ln: {
    // ... (existing ln translations)
    response: {
      badge: "Ndenge ya kosala, lolenge na biso :",
      title: "Ecosystème ya ",
      titleAccent: "lolenge misato.",
      desc: "Tozali kaka kopesa eyano na zando te. Tozali kobongisa yango na nzela ya kelasi ya mikanda ya lokumu, boyebi ya zando mpe kozwa mosala ya solosolo.",
      pillars: [
        {
          title: "Koteya mpe kopesa mikanda ya lokumu",
          subtitle: "Bato",
          desc: "Tozali koteya mpe kopesa babilenge ya Afrika mikanda ya lokumu ya mokili mobimba mpo bázala na makoki ya kowelana na zando ya mokili mobimba.",
          details: [
            "Mikanda ya lokumu ya mokili mobimba (AWS, Cisco, b.n.b)",
            "Lisungi mpo na kozwa mosala",
            "Mateya oyo eyokani na bamposa ya solosolo ya zando"
          ]
        },
        {
          title: "Kotombola bakompanyi",
          subtitle: "Misala ya bato",
          desc: "Tozali kosala lokola molandi ya tekinolozi ya bakompanyi mpo na kokende mbangu na mbongwana ya tekinolozi mpe koteya bato na bango.",
          details: [
            "Mateya oyo ebongisami mpo na bakompanyi",
            "Toli mpo na mbongwana ya tekinolozi",
            "Kozwa bato ya mayele oyo baza na mikanda ya lokumu"
          ]
        },
        {
          title: "Kokokisa misala ya impact",
          subtitle: "Bakompanyi mpe bapesi mbongo",
          desc: "Tozali kobongisa mpe kopesa manaka ya kelasi oyo epesaka matomba ya solosolo na bato, na kolanda malamu mpenza mbuma na yango.",
          details: [
            "Kobongisa mpe kokokisa manaka ya kelasi",
            "Kolanda matomba nsima ya kelasi (Impact Tracker)",
            "Boyebi ya zando na oyo etali mayele"
          ]
        }
      ],
      cta: "Luka eyano",
      convergence: "Boyokani",
      convergenceDesc: "Itot Africa esalaka na mbala moko na makambo oyo misato mpo na kosala mzinga ya malamu: bolukiluki emonisaka nzela ya kelasi, kelasi ebimisaka bato ya mayele, bato ya mayele basalelaka bakompanyi mpe bapesi mbongo, mpe bilembo ya matomba ekumisaka mosala mobimba.",
      impactLocal: "Impact ya mboka",
      standardGlobal: "Lolenge ya mokili"
    },
    services: {
      badge: "04 — Biloko na biso",
      title: "Ecosystème ",
      titleAccent: "na mosala.",
      desc: "Tozali kobongola mikano ya minene na mbuma ya solosolo na nzela ya biteni misato ya mayele oyo eyokani",
      cycle: "Mzinga ya Matomba",
      okademy: {
        badge: "Moteur ya mayele",
        title: "Okademy : Moteur ya mayele",
        desc: "Mateya makasi mpe mikanda ya lokumu na mayele ya tekinolozi ya lolenge ya mokili mobimba mpo na bato ya mayele ya lobi ya Afrika.",
        learners: "Bayekoli",
        certifications: "Mikanda ya lokumu",
        certificationsDesc: "AWS, Cisco, b.n.b.",
        cta: "Tala buku ya Okademy"
      },
      intelligence: {
        title: "Open Intelligence : Molandi",
        desc: "Bolukiluki, kotala zando mpe kobimisa bilembo ya solosolo na oyo etali mayele mpe mosala ya tekinolozi na Afrika mpo na kopesa nzela na bikateli ya kelasi, kozwa mosala mpe mbongo.",
        insight: "Data-Driven Insights"
      },
      consulting: {
        title: "Toli & Kokokisa misala",
        desc: "Kobongisa mpe kopesa manaka ya kelasi, toli na mbongwana ya tekinolozi, mpe lisungi ya mayele mpo na bakompanyi mpe bapesi mbongo. Molandi ya solosolo",
        partner: "Molandi ya solosolo",
        reporting: "Lapolo ya Impact na ntango ya solosolo"
      }
    }
  },
  sw: {
    // ... (existing sw translations)
    response: {
      badge: "Njia ya Uendeshaji, mbinu yetu:",
      title: "Mfumo wa ikolojia ",
      titleAccent: "wa pande tatu.",
      desc: "Hatutosheki tu na kujibu soko. Tunaliunda kupitia mafunzo ya vyeti, ujasusi wa soko na ajira inayoweza kuthibitishwa.",
      pillars: [
        {
          title: "Fundisha na uidhinishe vipaji",
          subtitle: "Rasilimali Watu",
          desc: "Tunafundisha na kuidhinisha vipaji vya Kiafrika kwa viwango vya kimataifa ili kuwafanya wawe na ushindani kwenye soko la kimataifa.",
          details: [
            "Vyeti vya kimataifa (AWS, Cisco, n.k.)",
            "Msaada wa kuingia kazini",
            "Njia za mafunzo zinazoendana na mahitaji halisi ya soko"
          ]
        },
        {
          title: "Sukuma makampuni",
          subtitle: "Sekta Binafsi",
          desc: "Tunafanya kazi kama mshirika wa kiufundi wa makampuni ili kuharakisha mabadiliko yao ya kidijitali na kufundisha timu zao.",
          details: [
            "Mafunzo maalum kwa makampuni",
            "Ushauri wa mabadiliko ya kidijitali",
            "Upatikanaji wa kundi la vipaji vilivyoidhinishwa"
          ]
        },
        {
          title: "Tekeleza miradi yenye athari",
          subtitle: "Taasisi na Wafadhili",
          desc: "Tunatengeneza na kutoa programu za mafunzo zenye athari ya kijamii inayopimika, kwa ufuatiliaji makini wa matokeo.",
          details: [
            "Ubunifu na utekelezaji wa programu za mafunzo",
            "Ufuatiliaji wa athari baada ya mafunzo (Impact Tracker)",
            "Ujasusi wa soko juu ya ujuzi"
          ]
        }
      ],
      cta: "Chunguza suluhisho",
      convergence: "Makutano",
      convergenceDesc: "Itot Africa inafanya kazi kwa wakati mmoja kwenye mbinu hizi tatu ili kuunda mzunguko mzuri: utafiti unaangazia mafunzo, mafunzo yanazalisha vipaji vilivyoidhinishwa, vipaji vinatumikia makampuni na taasisi, na data ya athari inaimarisha uaminifu wa jumla.",
      impactLocal: "Athari za Ndani",
      standardGlobal: "Kiwango cha Kimataifa"
    },
    services: {
      badge: "04 — Bidhaa zetu",
      title: "Mfumo wa ikolojia ",
      titleAccent: "kazini.",
      desc: "Tunabadilisha malengo magumu kuwa matokeo yanayoonekana kupitia nyanja tatu jumuishi za utaalamu",
      cycle: "Mzunguko wa Thamani",
      okademy: {
        badge: "Injini ya vipaji",
        title: "Okademy: Injini ya vipaji",
        desc: "Mafunzo ya kina na vyeti katika ujuzi wa kidijitali wa kiwango cha kimataifa kwa wataalamu wa baadaye wa bara hili.",
        learners: "Wanafunzi",
        certifications: "Vyeti",
        certificationsDesc: "AWS, Cisco, n.k.",
        cta: "Chunguza katalogi ya Okademy"
      },
      intelligence: {
        title: "Open Intelligence: Skauti",
        desc: "Utafiti, ufuatiliaji wa soko na uzalishaji wa data ya kuaminika juu ya ujuzi na ajira ya kidijitali barani Afrika ili kufahamisha maamuzi ya mafunzo, ajira na uwekezaji.",
        insight: "Data-Driven Insights"
      },
      consulting: {
        title: "Ushauri na Utekelezaji wa Miradi",
        desc: "Ubunifu na utoaji wa programu za mafunzo, ushauri wa mabadiliko ya kidijitali, na msaada wa kimkakati kwa makampuni na taasisi. Mshirika anayeaminika",
        partner: "Mshirika anayeaminika",
        reporting: "Ripoti ya Athari ya Wakati Halisi"
      }
    }
  },
  es: {
    // ... (existing es translations)
    response: {
      badge: "Palanca Operativa, nuestro enfoque:",
      title: "Un ecosistema ",
      titleAccent: "en tres dimensiones.",
      desc: "No nos limitamos a responder al mercado. Lo estructuramos mediante formación certificada, inteligencia de mercado e inserción verificable.",
      pillars: [
        {
          title: "Formar y certificar talentos",
          subtitle: "Capital Humano",
          desc: "Formamos y certificamos talentos africanos con estándares internacionales para hacerlos competitivos en el mercado mundial.",
          details: [
            "Certificaciones internacionales (AWS, Cisco, etc.)",
            "Acompañamiento a la inserción profesional",
            "Itinerarios de formación alineados con las necesidades reales del mercado"
          ]
        },
        {
          title: "Impulsar a las empresas",
          subtitle: "Sector Privado",
          desc: "Actuamos como socio técnico de las empresas para acelerar su transformación digital y formar a sus equipos.",
          details: [
            "Formaciones a medida para empresas",
            "Consultoría en transformación digital",
            "Acceso a una reserva de talentos certificados"
          ]
        },
        {
          title: "Ejecutar proyectos de impacto",
          subtitle: "Instituciones y Donantes",
          desc: "Diseñamos y entregamos programas de formación con un impacto social medible, con un seguimiento riguroso de los resultados.",
          details: [
            "Diseño y ejecución de programas de formación",
            "Seguimiento de impacto post-formación (Impact Tracker)",
            "Inteligencia de mercado sobre competencias"
          ]
        }
      ],
      cta: "Explorar la solución",
      convergence: "Convergencia",
      convergenceDesc: "Itot Africa opera simultáneamente en estas tres palancas para crear un ciclo virtuoso: la investigación ilumina la formación, la formación produce talentos certificados, los talentos sirven a empresas e instituciones, y los datos de impacto refuerzan la credibilidad del conjunto.",
      impactLocal: "Impacto Local",
      standardGlobal: "Estándar Global"
    },
    services: {
      badge: "04 — Nuestros productos",
      title: "El ecosistema ",
      titleAccent: "en acción.",
      desc: "Transformamos objetivos complejos en resultados tangibles gracias a tres polos de experiencia integrados",
      cycle: "Ciclo de Valor",
      okademy: {
        badge: "Motor de talentos",
        title: "Okademy: El motor de talentos",
        desc: "Formación intensiva y certificación en competencias digitales de nivel internacional para los futuros profesionales del continente.",
        learners: "Estudiantes",
        certifications: "Certificaciones",
        certificationsDesc: "AWS, Cisco, etc.",
        cta: "Explorar el catálogo de Okademy"
      },
      intelligence: {
        title: "Open Intelligence: El explorador",
        desc: "Investigación, vigilancia de mercado y producción de datos fiables sobre competencias y empleo digital en África para informar decisiones de formación, contratación e inversión.",
        insight: "Data-Driven Insights"
      },
      consulting: {
        title: "Consultoría y Ejecución de proyectos",
        desc: "Diseño y entrega de programas de formación, consultoría en transformación digital y acompañamiento estratégico para empresas e instituciones. Socio de confianza",
        partner: "Socio de Confianza",
        reporting: "Informes de Impacto en Tiempo Real"
      }
    }
  },
  de: {
    // ... (existing de translations)
    response: {
      badge: "Operativer Hebel, unser Ansatz:",
      title: "Ein dreidimensionales ",
      titleAccent: "Ökosystem.",
      desc: "Wir reagieren nicht nur auf den Markt. Wir strukturieren ihn durch zertifizierte Ausbildung, Marktintelligenz und überprüfbare Integration.",
      pillars: [
        {
          title: "Talente ausbilden und zertifizieren",
          subtitle: "Humankapital",
          desc: "Wir bilden afrikanische Talente nach internationalen Standards aus und zertifizieren sie, um sie auf dem Weltmarkt wettbewerbsfähig zu machen.",
          details: [
            "Internationale Zertifizierungen (AWS, Cisco usw.)",
            "Begleitung bei der beruflichen Integration",
            "Ausbildungswege, die an den realen Marktbedürfnissen ausgerichtet sind"
          ]
        },
        {
          title: "Unternehmen vorantreiben",
          subtitle: "Privatsektor",
          desc: "Wir agieren als technischer Partner für Unternehmen, um deren digitale Transformation zu beschleunigen und ihre Teams zu schulen.",
          details: [
            "Maßgeschneiderte Schulungen für Unternehmen",
            "Beratung zur digitalen Transformation",
            "Zugang zu einem Pool zertifizierter Talente"
          ]
        },
        {
          title: "Impact-Projekte durchführen",
          subtitle: "Institutionen & Geber",
          desc: "Wir konzipieren und liefern Ausbildungsprogramme mit messbarer sozialer Wirkung und einer strengen Überwachung der Ergebnisse.",
          details: [
            "Konzeption und Durchführung von Ausbildungsprogrammen",
            "Wirkungskontrolle nach der Ausbildung (Impact Tracker)",
            "Marktintelligenz zu Kompetenzen"
          ]
        }
      ],
      cta: "Die Lösung erkunden",
      convergence: "Konvergenz",
      convergenceDesc: "Itot Africa agiert gleichzeitig auf diesen drei Hebeln, um einen positiven Kreislauf zu schaffen: Die Forschung beleuchtet die Ausbildung, die Ausbildung bringt zertifizierte Talente hervor, die Talente dienen Unternehmen und Institutionen, und die Wirkungsdaten stärken die Glaubwürdigkeit des Ganzen.",
      impactLocal: "Lokale Wirkung",
      standardGlobal: "Globaler Standard"
    },
    services: {
      badge: "04 — Unsere Produkte",
      title: "Das Ökosystem ",
      titleAccent: "in Aktion.",
      desc: "Wir verwandeln komplexe Ziele in greifbare Ergebnisse durch drei integrierte Kompetenzbereiche",
      cycle: "Wertschöpfungszyklus",
      okademy: {
        badge: "Talentmotor",
        title: "Okademy: Der Talentmotor",
        desc: "Intensive Ausbildung und Zertifizierung in digitalen Kompetenzen auf internationalem Niveau für die zukünftigen Fachkräfte des Kontinents.",
        learners: "Lernende",
        certifications: "Zertifizierungen",
        certificationsDesc: "AWS, Cisco usw.",
        cta: "Den Okademy-Katalog erkunden"
      },
      intelligence: {
        title: "Open Intelligence: Der Scout",
        desc: "Forschung, Marktbeobachtung und Produktion zuverlässiger Daten zu Kompetenzen und digitaler Beschäftigung in Afrika zur Information von Ausbildungs-, Einstellungs- und Investitionsentscheidungen.",
        insight: "Data-Driven Insights"
      },
      consulting: {
        title: "Beratung & Projektdurchführung",
        desc: "Konzeption und Durchführung von Ausbildungsprogrammen, Beratung zur digitalen Transformation und strategische Begleitung für Unternehmen und Institutionen. Vertrauenswürdiger Partner",
        partner: "Vertrauenswürdiger Partner",
        reporting: "Impact-Reporting in Echtzeit"
      }
    }
  }
};
