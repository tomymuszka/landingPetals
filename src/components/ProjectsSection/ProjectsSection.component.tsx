import { useRef } from 'react';
import { ProjectCard } from '../UI/ProjectCard/ProjectCard.component';
import { projectsData } from './projects.data';
import { useIsVisible } from '../../hooks/useIsVisible';
import { FormattedMessage } from 'react-intl';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
  const ref = useRef(null);

  const isVisible = useIsVisible(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const divOneValue = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);

  const divTwoValue = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

  return (
    <div
      id="sectionProjects"
      className={`transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} w-full py-8 bg-white hidden lg:flex justify-center overflow-x-hidden`}
    >
      <div
        ref={ref}
        className="w-full max-w-[970px] flex flex-col py-4 items-center gap-6"
      >
        <motion.div
          style={{ translateX: divOneValue }}
          className="w-[95%] mt-4 flex flex-col items-center lg:w-[600px] lg:items-start"
        >
          <h2 className="text-2xl font-bold lg:text-5xl text-center pointer-events-none">
            <FormattedMessage id="projects_title" />
          </h2>
          <p className="lg:text-3xl lg:mt-3 hidden pointer-events-none">
            <FormattedMessage id="projects_bussines_description" />
          </p>
        </motion.div>
        <motion.div
          style={{ translateX: divTwoValue }}
          className="w-full flex flex-col items-center gap-6 lg:flex-row lg:mt-4"
        >
          {projectsData.map((project, key) => (
            <ProjectCard key={key} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
