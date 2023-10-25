import { Technology } from '@/types/technology';

export interface TrashButtonComponentProps {
  handleRemoveTechnology: (id: string | number[]) => void;
  setPressed: (value: boolean) => void;
  technology: Technology;
  pressed: boolean;
}
