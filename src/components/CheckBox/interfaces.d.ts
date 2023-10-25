import { Tecnology } from '@/app/interfaces';

export interface CheckBoxComponentProps {
  tecnology: Tecnology;
  handleSetCompleted: (id: string | number[]) => void;
}
