import { IntlProvider } from 'react-intl';
import { HomeNavbar } from './Elements/HomeNavbar.component';
import {
  MainSection,
  MidBannerSection,
  ProjectsSection,
  ProjectsSectionMobile,
  ServicesSection,
} from '../components';
import messages_en from '../i18n/en.json';
import messages_es from '../i18n/es.json';
import { useEffect, useState } from 'react';

export const HomePage: React.FC = () => {
  const [locale, setLocale] = useState('es');
  const [defaultLocale, setDefaultLocale] = useState('en');
  const [currentYear, setCurrentYear] = useState('');

  const messages: { [key: string]: { [key: string]: string } } = {
    en: messages_en,
    es: messages_es,
  };

  useEffect(() => {
    const userLanguages = navigator.languages || [navigator.language];
    const isSpanish = userLanguages.some((lang) => lang.startsWith('es'));

    if (isSpanish) {
      setDefaultLocale('es');
    } else {
      setDefaultLocale('en');
    }

    setCurrentYear(new Date().getFullYear().toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale={defaultLocale}
    >
      <div className="w-full max-w-full flex flex-col items-center font-poppins bg-[#8EC2F2] scroll-smooth">
        <HomeNavbar setLocale={setLocale} locale={locale} />
        {/* <CircleComponent /> */}
        <MainSection />
        <ProjectsSection />
        <ProjectsSectionMobile />
        <MidBannerSection />
        <ServicesSection />
        <div className="w-full h-[150px] bg-[#8EC2F2] flex justify-center items-center">
          <p className="font-bold text-white pointer-events-none">
            © {currentYear} GP Software
          </p>
        </div>
      </div>
    </IntlProvider>
  );
};
