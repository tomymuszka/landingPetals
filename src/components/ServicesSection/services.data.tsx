import { ReactElement } from 'react';
import { BoxIcon, CustomIcon, RenewIcon } from '../../assets';

export type ServiceType = {
  icon: ReactElement;
  title: string;
  description: string;
  isBig?: boolean;
};

export const ServicesData: ServiceType[] = [
  {
    icon: <CustomIcon />,
    title: 'services_tailored_title',
    description: 'services_tailored_description',
  },
  {
    icon: <RenewIcon />,
    title: 'services_tech_title',
    description: 'services_tech_description',
    isBig: true,
  },
  {
    icon: <BoxIcon />,
    title: 'services_ai_title',
    description: 'services_ai_description',
  },
];
