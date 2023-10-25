import { Key } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';

import { TechnologyItem } from './TechnologyItem';

import {
  getCompletedTechnology,
  removeTechnology,
  setCompletedTechnology,
} from '@/lib/arrayTecnologiesUtils';

import { TechnologiesListComponentProps } from './interfaces';

export const TechnologiesList = ({
  technologies,
  setTechnologies,
  setCompleted,
}: TechnologiesListComponentProps) => {
  const handleSetCompleted = (id: string | number[]) => {
    const newArrayItems = setCompletedTechnology(technologies, id);
    setTechnologies(newArrayItems);

    const counter = getCompletedTechnology(newArrayItems);
    setCompleted(counter);
  };

  const handleRemoveTechnology = (id: string | number[]) => {
    const newArrayItems = removeTechnology(technologies, id);
    setTechnologies(newArrayItems);

    const counter = getCompletedTechnology(newArrayItems);
    setCompleted(counter);
  };

  return (
    <ScrollView
      style={{ height: useWindowDimensions().height - 300 }}
      contentContainerStyle={{ gap: 8 }}
      showsVerticalScrollIndicator={false}
    >
      {technologies.map((tecnology) => {
        return (
          <TechnologyItem
            key={tecnology.id as Key}
            technology={tecnology}
            handleSetCompleted={handleSetCompleted}
            handleRemoveTechnology={handleRemoveTechnology}
          />
        );
      })}
    </ScrollView>
  );
};
