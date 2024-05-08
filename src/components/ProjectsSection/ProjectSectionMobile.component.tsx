import { useRef } from 'react';
import { ProjectCard } from '../UI/ProjectCard/ProjectCard.component';
import { projectsData } from './projects.data';
import { useIsVisible } from '../../hooks/useIsVisible';
import { FormattedMessage } from 'react-intl';

export const ProjectsSectionMobile: React.FC = () => {
  const ref = useRef(null);

  const isVisible = useIsVisible(ref);

  return (
    <div
      id="sectionProjects"
      className={`lg:hidden transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} w-full py-8 bg-white flex justify-center overflow-x-hidden`}
    >
      <div
        ref={ref}
        className="w-full max-w-[970px] flex flex-col py-4 items-center gap-6"
      >
        <div className="w-[95%] flex flex-col items-center lg:w-[600px] lg:items-start">
          <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl text-center">
            <FormattedMessage id="projects_title" />
          </h2>
          <p className="lg:text-3xl lg:mt-3 hidden">
            <FormattedMessage id="projects_bussines_description" />
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-6 lg:flex-row lg:mt-4">
          {projectsData.map((project, key) => (
            <ProjectCard key={key} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
