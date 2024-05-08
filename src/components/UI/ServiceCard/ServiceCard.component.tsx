import { Button } from '@nextui-org/react';
import { ServiceType } from '../../ServicesSection/services.data';
import { scroller } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

export const ServiceCard: React.FC<ServiceType> = ({
  icon,
  title,
  description,
  isBig,
}) => {
  const handleButtonClick = () => {
    scroller.scrollTo('sectionHome', {
      spy: true,
      smooth: true,
      offset: -115,
      duration: 500,
    });
  };

  return (
    <div
      className={`flex flex-col p-4 text-center items-center justify-between w-[95%] border-medium border-[#8EC2F2] rounded-medium ${isBig ? 'h-[280px]' : 'h-[240px]'} sm:w-[360px]`}
    >
      {icon}
      <h4 className="font-bold text-large pointer-events-none">
        {<FormattedMessage id={title} />}
      </h4>
      <small className="text-default-500 pointer-events-none">
        {<FormattedMessage id={description} />}
      </small>
      <Button color="primary" variant="light" onClick={handleButtonClick}>
        <FormattedMessage id="services_button" />
      </Button>
    </div>
  );
};
