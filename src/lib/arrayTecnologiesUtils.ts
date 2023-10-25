import { Technology } from '@/types/technology';
import uuid from 'react-native-uuid';

export const addTechnology = (technologies: Technology[], textInput: string) => {
  return [...technologies, { id: uuid.v4(), title: textInput, finished: false }];
};

export const setCompletedTechnology = (technologies: Technology[], id: string | number[]) => {
  return technologies.map((tecnology) => {
    if (tecnology.id === id && !tecnology.finished) {
      tecnology.finished = true;
      return tecnology;
    } else if (tecnology.id == id) {
      tecnology.finished = false;
      return tecnology;
    } else return tecnology;
  });
};

export const getCompletedTechnology = (technologies: Technology[]) => {
  return technologies.reduce((counter, item) => {
    return item.finished ? counter + 1 : counter;
  }, 0);
};

export const removeTechnology = (technologies: Technology[], id: string | number[]) => {
  return technologies.filter((technology) => technology.id !== id);
};
