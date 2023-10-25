import { Technology } from '@/types/technology';

export interface TechnologiesListComponentProps {
  technologies: Technology[];
  setTechnologies: (technologies: Technology[]) => void;
  setCompleted: (num: number) => void;
}

export interface TechnologyItemComponentProps {
  technology: Technology;
  handleSetCompleted: (id: string | number[]) => void;
  handleRemoveTechnology: (id: string | number[]) => void;
}
