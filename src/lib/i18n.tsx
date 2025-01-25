import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "fr" | "de" | "pt";
type Translations = Record<string, Record<string, string>>;

const translations: Translations = {
  en: {
    "services.title": "Our Services",
    "services.description":
      "We offer a range of innovative web solutions to help businesses thrive in the digital age.",
    "services.UI_UX_Design.title": "UI/UX Design",
    "services.UI_UX_Design.description":
      "We create intuitive and engaging user interfaces that enhance user experience.",
    "services.Web_Development.title": "Web Development",
    "services.Web_Development.description":
      "We build modern, responsive websites using the latest technologies.",
    "services.Digital_Strategy.title": "Digital Strategy",
    "services.Digital_Strategy.description":
      "We craft digital strategies that drive business growth and success.",
    "services.Performance_Optimization.title": "Performance Optimization",
    "services.Performance_Optimization.description":
      "We optimize website performance to improve load times and boost user experience.",
    "services.Internationalization.title": "Internationalization",
    "services.Internationalization.description":
      "We provide multilingual support to ensure your business reaches its target audience in any language.",
    "services.SEO_Optimization.title": "SEO Optimization",
    "services.SEO_Optimization.description":
      "We optimize website content for search engines, enhancing visibility and traffic.",
    "languages.en": "English",
    "languages.fr": "French",
    "languages.pt": "Portuguese",
    "languages.de": "German",
    "hero.title": "Welcome to webframing",
    "hero.subtitle":
      "We create innovative web solutions that help businesses thrive in the digital age",
    "home.recentProjects": "Recent Projects",
    "home.contactUs": "Contact Us",
    "home.copyright": "webframing. All rights reserved.",
    "navbar.brand": "webframing",
    "navbar.services": "Services",
    "navbar.projects": "Projects",
    "navbar.about": "About",
    "navbar.contact": "Contact",
    "language.en": "English",
    "language.fr": "French",
    "language.de": "German",
    "language.pt": "Portuguese",
    "categories.all": "All",
    "categories.webdev": "Web Development",
    "categories.blog": "Blog",
    "categories.web3": "Web3",
    "categories.fintech": "FinTech",
    "projects.project1.title": "CoverageLabs",
    "projects.project1.description":
      "Website and blog project for a web3 services company",
    "projects.project3.title": "imdiogo",
    "projects.project3.description":
      "Personal website and blog for a Software Engineer",
    "projects.project2.title": "Litebill",
    "projects.project2.description":
      "Corporate website with dark mode support for a billing software company",
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our team",
    "contact.errors.nameLength": "Name must be at least 2 characters",
    "contact.errors.invalidEmail": "Invalid email address",
    "contact.errors.messageLength": "Message must be at least 10 characters",
    "contact.form.nameLabel": "Full Name",
    "contact.form.namePlaceholder": "Enter your name",
    "contact.form.emailLabel": "Email",
    "contact.form.emailPlaceholder": "Enter your email",
    "contact.form.messageLabel": "Message",
    "contact.form.messagePlaceholder": "Type your message here",
    "contact.form.submitting": "Submitting...",
    "contact.form.submit": "Send Message",
    "projects.grid.viewAll": "View All Projects",
    "projects.grid.loadMore": "Load More",
    "projects.grid.subtitle": "Explore our latest projects",
    "projects.grid.noProjects": "There are no projects in this category",
  },
  fr: {
    "services.title": "Nos Services",
    "services.description":
      "Nous offrons une gamme de solutions web innovantes pour aider les entreprises à prosperer dans l'ère numérique.",
    "services.UI_UX_Design.title": "Conception UI/UX",
    "services.UI_UX_Design.description":
      "Nous concevons des interfaces utilisateur intuitives et engageantes qui améliorent l'expérience utilisateur.",
    "services.Web_Development.title": "Développement Web",
    "services.Web_Development.description":
      "Nous construisons des sites Web modernes et réactifs utilisant les technologies de pointe.",
    "services.Digital_Strategy.title": "Stratégie Digitale",
    "services.Digital_Strategy.description":
      "Nous concevons des strатегies digitales qui encouragent la croissance et le successe de l'entreprise.",
    "services.Performance_Optimization.title": "Optimisation de Performance",
    "services.Performance_Optimization.description":
      "Nous optimisons la performance du site Web pour améliorer les temps de chargement et améliorer l'expérience utilisateur.",
    "services.Internationalization.title": "Internationalisation",
    "services.Internationalization.description":
      "Nous fournissons un soutien multilingue pour assurer que votre entreprise atteigne son public cible dans n'importe quelle langue.",
    "services.SEO_Optimization.title": "Optimisation SEO",
    "services.SEO_Optimization.description":
      "Nous optimisons le contenu du site Web pour les moteurs de recherche, améliorer la visibilité et le trafic.",
    "languages.en": "Anglais",
    "languages.fr": "Français",
    "languages.de": "Allemand",
    "languages.pt": "Portugais",
    "hero.title": "Bienvenue chez webframing",
    "hero.subtitle":
      "Nous créons des solutions web innovantes qui aident les entreprises à prospérer à l'ère numérique.",
    "home.recentProjects": "Projets Récents",
    "home.contactUs": "Contactez-nous",
    "home.copyright": "webframing. Tous droits réservés.",
    "navbar.brand": "webframing",
    "navbar.services": "Services",
    "navbar.projects": "Projets",
    "navbar.about": "À propos",
    "navbar.contact": "Contact",
    "categories.all": "Tous",
    "categories.webdev": "Développement Web",
    "categories.web3": "Web 3",
    "categories.blog": "Blog",
    "categories.fintech": "FinTech",
    "projects.project1.title": "CoverageLabs",
    "projects.project1.description":
      "Projet de site web et blog pour une entreprise de services web3",
    "projects.project3.title": "imdiogo",
    "projects.project3.description":
      "Site web personnel et blog pour un ingénieur logiciel",
    "projects.project2.title": "Litebill",
    "projects.project2.description":
      "Site web institutionnel avec support du mode sombre pour une entreprise de logiciels de facturation",
    "contact.title": "Nous Contacter",
    "contact.subtitle": "Contactez notre équipe",
    "contact.errors.nameLength": "Le nom doit contenir au moins 2 caractères",
    "contact.errors.invalidEmail": "Adresse email invalide",
    "contact.errors.messageLength":
      "Le message doit contenir au moins 10 caractères",
    "contact.form.nameLabel": "Nom Complet",
    "contact.form.namePlaceholder": "Entrez votre nom",
    "contact.form.emailLabel": "Email",
    "contact.form.emailPlaceholder": "Entrez votre email",
    "contact.form.messageLabel": "Message",
    "contact.form.messagePlaceholder": "Tapez votre message ici",
    "contact.form.submitting": "Envoi en cours...",
    "contact.form.submit": "Envoyer le Message",
    "projects.grid.viewAll": "Voir Tous les Projets",
    "projects.grid.loadMore": "Charger Plus",
    "projects.grid.subtitle": "Découvrez nos travaux récents",
    "projects.grid.noProjects": "Aucun projet trouvé dans cette catégorie",
  },
  de: {
    "services.title": "Unsere Dienstleistungen",
    "services.description":
      "Wir bieten eine Reihe von innovativen Web-Lösungen, die Unternehmen helfen, im digitalen Zeitalter erfolgreich zu sein.",
    "services.UI_UX_Design.title": "UI/UX Design",
    "services.UI_UX_Design.description":
      "Wir entwickeln intuitive und engagierende Benutzeroberflächen, die den Benutzererfahrung verbessern.",
    "services.Web_Development.title": "Webentwicklung",
    "services.Web_Development.description":
      "Wir entwickeln moderne, reaktive Websites mit den neuesten Technologien.",
    "services.Digital_Strategy.title": "Digitale Strategie",
    "services.Digital_Strategy.description":
      "Wir entwickeln digitale Strategien, die Unternehmen erfolgreich machen.",
    "services.Performance_Optimization.title": "Performance-Optimierung",
    "services.Performance_Optimization.description":
      "Wir optimieren die Performance von Websites, um Ladenzeiten und Benutzererfahrungen zu verbessern.",
    "services.Internationalization.title": "Internationale Unterstückung",
    "services.Internationalization.description":
      "Wir bieten Multilingualisierung, um Ihre Unternehmen in jedem Sprache auf ihre Zielgruppe zuzuschreiben.",
    "services.SEO_Optimization.title": "SEO-Optimierung",
    "services.SEO_Optimization.description":
      "Wir optimieren den Inhalt von Websites für Suchmaschinen, um sie visuell und zugleich zu verbessern.",
    "languages.en": "Englisch",
    "languages.fr": "Französisch",
    "languages.pt": "Portugiesisch",
    "languages.de": "Deutsch",
    "hero.title": "Willkommen bei webframing",
    "hero.subtitle":
      "Wir entwickeln innovative Web-Lösungen, die Unternehmen helfen, im digitalen Zeitalter erfolgreich zu sein.",
    "home.recentProjects": "Aktuelle Projekte",
    "home.contactUs": "Kontaktieren Sie uns",
    "home.copyright": "webframing. Alle Rechte vorbehalten.",
    "navbar.brand": "webframing",
    "navbar.services": "Dienstleistungen",
    "navbar.projects": "Projekte",
    "navbar.about": "Über uns",
    "navbar.contact": "Kontakt",
    "language.en": "Englisch",
    "language.fr": "Französisch",
    "language.de": "Deutsch",
    "language.pt": "Portugiesisch",
    "categories.all": "Alle",
    "categories.webdev": "Webentwicklung",
    "categories.blog": "Blog",
    "categories.web3": "Web 3",
    "categories.fintech": "FinTech",
    "projects.project1.title": "CoverageLabs",
    "projects.project1.description":
      "Projekt für eine Website und einen Blog für ein Web3-Dienstleistungsunternehmen",
    "projects.project3.title": "imdiogo",
    "projects.project3.description":
      "Persönliche Website und Blog für einen Softwareentwickler",
    "projects.project2.title": "Litebill",
    "projects.project2.description":
      "Unternehmenswebsite mit Unterstützung für den Dunkelmodus für ein Abrechnungssoftware-Unternehmen",
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle": "Kontaktieren Sie unser Team",
    "contact.errors.nameLength": "Name muss mindestens 2 Zeichen lang sein",
    "contact.errors.invalidEmail": "Ungültige E-Mail-Adresse",
    "contact.errors.messageLength":
      "Nachricht muss mindestens 10 Zeichen lang sein",
    "contact.form.nameLabel": "Vollständiger Name",
    "contact.form.namePlaceholder": "Geben Sie Ihren Namen ein",
    "contact.form.emailLabel": "E-Mail",
    "contact.form.emailPlaceholder": "Geben Sie Ihre E-Mail ein",
    "contact.form.messageLabel": "Nachricht",
    "contact.form.messagePlaceholder": "Geben Sie Ihre Nachricht hier ein",
    "contact.form.submitting": "Wird übermittelt...",
    "contact.form.submit": "Nachricht Senden",
    "projects.grid.viewAll": "Alle Projekte Anzeigen",
    "projects.grid.loadMore": "Mehr Laden",
    "projects.grid.subtitle": "Entdecken Sie unsere aktuellen Arbeiten",
    "projects.grid.noProjects": "Keine Projekte in dieser Kategorie gefunden",
  },
  pt: {
    "services.title": "Serviços",
    "services.description":
      "Oferecemos uma variedade de soluções web inovadoras que ajudam empresas a prosperar na era digital.",
    "services.UI_UX_Design.title": "Design de UI/UX",
    "services.UI_UX_Design.description":
      "Desenvolvemos interfaces de usuário intuitivas e engajadoras que melhoram a experiência do usuário.",
    "services.Web_Development.title": "Desenvolvimento Web",
    "services.Web_Development.description":
      "Desenvolvemos sites web modernos e reativos usando as tecnologias de ponta.",
    "services.Digital_Strategy.title": "Estratégia Digital",
    "services.Digital_Strategy.description":
      "Desenvolvemos estratégias digitais que ajudam empresas a prosperar.",
    "services.Performance_Optimization.title": "Optimização de Performance",
    "services.Performance_Optimization.description":
      "Optimizamos a performance dos sites Web para melhorar os tempos de carregamento e a experiência do usuário.",
    "services.Internationalization.title": "Internacionalização",
    "services.Internationalization.description":
      "Oferecemos suporte multilingue para alcancar o pубlico-alvo em qualquer linguagem.",
    "services.SEO_Optimization.title": "SEO-Optimização",
    "services.SEO_Optimization.description":
      "Optimizamos o conteúdo dos sites Web para melhorar a visibilidade e a acessibilidade para os buscadores.",
    "languages.en": "Inglês",
    "languages.fr": "Francês",
    "languages.pt": "Português",
    "languages.de": "Alemão",
    "hero.title": "Bem-vindo à webframing",
    "hero.subtitle":
      "Criamos soluções web inovadoras que ajudam as empresas a prosperar na era digital.",
    "home.recentProjects": "Projetos Recentes",
    "home.contactUs": "Contacte-nos",
    "home.copyright": "webframing. Todos os direitos reservados.",
    "navbar.brand": "webframing",
    "navbar.services": "Serviços",
    "navbar.projects": "Projetos",
    "navbar.about": "Sobre",
    "navbar.contact": "Contacto",
    "language.en": "Inglês",
    "language.fr": "Francês",
    "language.de": "Alemão",
    "language.pt": "Português",
    "categories.all": "Todos",
    "categories.webdev": "Desenvolvimento Web",
    "categories.web3": "Web 3",
    "categories.blog": "Blog",
    "categories.fintech": "FinTech",
    "projects.project1.title": "CoverageLabs",
    "projects.project1.description":
      "Projecto de website e blog para uma empresa de serviços web3",
    "projects.project3.title": "imdiogo",
    "projects.project3.description":
      "Website pessoal e blog para Software Engineer",
    "projects.project2.title": "Litebill",
    "projects.project2.description":
      "Website institucional com suporte para dark mode para uma empresa de software de facturação.",
    "contact.title": "Contacte-nos",
    "contact.subtitle": "Fale com a nossa equipa",
    "contact.errors.nameLength": "O nome deve ter pelo menos 2 caracteres",
    "contact.errors.invalidEmail": "Endereço de email inválido",
    "contact.errors.messageLength":
      "A mensagem deve ter pelo menos 10 caracteres",
    "contact.form.nameLabel": "Nome Completo",
    "contact.form.namePlaceholder": "Insira o seu nome",
    "contact.form.emailLabel": "Email",
    "contact.form.emailPlaceholder": "Insira o seu email",
    "contact.form.messageLabel": "Mensagem",
    "contact.form.messagePlaceholder": "Escreva a sua mensagem aqui",
    "contact.form.submitting": "A enviar...",
    "contact.form.submit": "Enviar Mensagem",
    "projects.grid.viewAll": "Ver Todos os Projetos",
    "projects.grid.loadMore": "Carregar Mais",
    "projects.grid.subtitle": "Explore os nossos trabalhos recentes",
    "projects.grid.noProjects": "Nenhum projeto encontrado nesta categoria",
  },
};

export const languages = Object.keys(translations) as Language[];

interface I18nContextType {
  t: (key: string) => string;
  lang: Language;
  setLang: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType>(null!);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const handleLanguageChange = (newLang: Language) => {
    const params = new URLSearchParams(window.location.search);
    params.set("lang", newLang);
    window.history.pushState({}, "", `?${params.toString()}`);
    setLang(newLang);
  };

  useEffect(() => {
    const handleLangChange = () => {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang") as Language;

      if (urlLang && translations[urlLang]) {
        setLang(urlLang);
      }
    };

    handleLangChange();
    window.addEventListener("popstate", handleLangChange);
    return () => window.removeEventListener("popstate", handleLangChange);
  }, []);

  const t = (key: string) => translations[lang][key] || key;

  return (
    <I18nContext.Provider value={{ t, lang, setLang: handleLanguageChange }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useTranslation = () => useContext(I18nContext);
