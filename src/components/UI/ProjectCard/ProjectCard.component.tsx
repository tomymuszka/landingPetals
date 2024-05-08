import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { ProjectsType } from '../../ProjectsSection/projects.data';
import { FormattedMessage } from 'react-intl';

export const ProjectCard: React.FC<ProjectsType> = ({
  type,
  description,
  photo,
  title,
}) => {
  return (
    <Card className="py-4 w-[95%] sm:w-[360px] h-[290px] hover:scale-105">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold pointer-events-none">
          {type}
        </p>
        <small className="text-default-500 pointer-events-none">
          {<FormattedMessage id={description} />}
        </small>
        <h4 className="font-bold text-large pointer-events-none">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image className="object-cover rounded-xl" src={photo} width={270} />
      </CardBody>
    </Card>
  );
};
