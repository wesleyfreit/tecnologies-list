import { Text, View } from 'react-native';

import { HeaderComponentProps } from './interfaces';
import { headerStyle, headerTitleStyle } from './styles';

export const Header = ({ title }: HeaderComponentProps) => (
  <View style={headerStyle}>
    <Text style={headerTitleStyle}>{title}</Text>
  </View>
);
