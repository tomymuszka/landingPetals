import { Button } from '@nextui-org/react';
import { FormattedMessage } from 'react-intl';
import { scroller } from 'react-scroll';
import { MessageIcon } from '../../assets';

export const MidBannerSection: React.FC = () => {
  const handleButtonClick = () => {
    scroller.scrollTo('sectionHome', {
      spy: true,
      smooth: true,
      offset: -115,
      duration: 500,
    });
  };

  return (
    <div className="w-full h-[160px] bg-[#8EC2F2] flex justify-center items-center">
      <div className="w-full max-w-[970px] flex flex-col items-center justify-center gap-4 lg:flex-row">
        <small className="text-xl text-white font-bold pointer-events-none">
          <FormattedMessage id="mid_title" />
        </small>
        <Button
          endContent={<MessageIcon />}
          variant="bordered"
          color="primary"
          onClick={handleButtonClick}
        >
          <FormattedMessage id="mid_button" />
        </Button>
      </div>
    </div>
  );
};
