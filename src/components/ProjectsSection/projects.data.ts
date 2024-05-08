import { BerkmanPhoto, SBSPhoto, SanifyPhoto } from '../../assets';

export type ProjectsType = {
  type: string;
  description: string;
  title: string;
  photo: string;
};

export const projectsData: ProjectsType[] = [
  {
    type: 'Bussines web application',
    description: 'projects_bussines_description',
    title: 'Berkman estudios',
    photo: BerkmanPhoto,
  },
  {
    type: 'Bussines web application',
    description: 'projects_bussines_description',
    title: 'Sanify',
    photo: SanifyPhoto,
  },
  {
    type: 'Bussines web application',
    description: 'projects_bussines_description',
    title: 'SBS security',
    photo: SBSPhoto,
  },
];
