import { useRef } from 'react';
import { Button } from '@nextui-org/react';
import { ContactForm } from '../UI/ContactForm/ContactForm.component';
import { scroller } from 'react-scroll';
import { useIsVisible } from '../../hooks/useIsVisible';
import { FormattedMessage } from 'react-intl';
import { LightIcon } from '../../assets';

export const MainSection: React.FC = () => {
  const ref = useRef(null);

  const isVisible = useIsVisible(ref);

  const handleButtonClick = () => {
    scroller.scrollTo('sectionProjects', {
      spy: true,
      smooth: true,
      offset: -40,
      duration: 500,
    });
  };

  return (
    <div
      ref={ref}
      id="sectionHome"
      className={`transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} w-full max-w-[970px] py-8 gap-6 flex flex-col items-center lg:flex-row lg:mt-12 lg:items-start lg:justify-around`}
    >
      <div className="w-[95%] mt-4 flex flex-col items-center lg:w-[600px] lg:items-start text-center lg:text-start">
        <h2 className={`text-2xl font-bold lg:text-6xl pointer-events-none`}>
          <FormattedMessage id="home_title" />
        </h2>
        <p className={`lg:text-3xl lg:mt-3 pointer-events-none`}>
          <FormattedMessage id="home_subtitle" />
        </p>

        <Button
          onClick={handleButtonClick}
          size="lg"
          className="hidden lg:flex mt-6"
          endContent={<LightIcon />}
        >
          <FormattedMessage id="home_button" />
        </Button>
      </div>
      <ContactForm />
    </div>
  );
};
