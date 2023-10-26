import { Trash2 } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

import { colors } from '@/styles/global';
import { useState } from 'react';
import { TrashButtonComponentProps } from './interfaces';

export const TrashButton = ({ handleRemoveTechnology, technology }: TrashButtonComponentProps) => {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => handleRemoveTechnology(technology.id)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      activeOpacity={0.9}
    >
      <Trash2 size={20} color={pressed ? colors.danger.color : colors.gray300.color} />
    </TouchableOpacity>
  );
};
