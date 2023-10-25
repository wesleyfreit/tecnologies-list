import { TouchableOpacity, View } from 'react-native';

import { setComponentIcon } from '@/lib/setComponentIcon';
import { ButtonComponentProps } from './interfaces';
import { buttonStyle } from './styles';

export const Button = ({ iconName, onClick }: ButtonComponentProps) => {
  const componentIcon = setComponentIcon(iconName);

  return (
    <TouchableOpacity style={buttonStyle} activeOpacity={0.8} onPress={onClick}>
      <View>{componentIcon?.icon}</View>
    </TouchableOpacity>
  );
};
