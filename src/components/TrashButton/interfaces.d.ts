import { Technology } from '@/types/technology';

export interface TrashButtonComponentProps {
  handleRemoveTechnology: (id: string | number[]) => void;
  technology: Technology;
}
