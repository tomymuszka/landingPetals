import { useRef } from 'react';
import { ServiceCard } from '../UI/ServiceCard/ServiceCard.component';
import { ServicesData } from './services.data';
import { useIsVisible } from '../../hooks/useIsVisible';
import { FormattedMessage } from 'react-intl';

export const ServicesSection: React.FC = () => {
  const ref = useRef(null);

  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      id="sectionServices"
      className={`transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} w-full bg-white flex justify-center py-8`}
    >
      <div className="w-full max-w-[970px] flex flex-col py-4 items-center gap-6">
        <div className="w-[95%] mt-4 flex flex-col items-center lg:w-[600px] lg:items-start">
          <h2 className="text-2xl font-bold lg:text-5xl text-center w-full pointer-events-none">
            <FormattedMessage id="services_title" />
          </h2>
        </div>
        <div className="w-full flex flex-col items-center gap-6 lg:flex-row lg:mt-4">
          {ServicesData.map((service, key) => (
            <ServiceCard key={key} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};
