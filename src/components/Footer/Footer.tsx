import { ReactNode } from 'react';
import { View } from 'react-native';

import { containerStyle, footerStyle } from './styles';

export const Footer = ({ children }: { children: ReactNode }) => {
  return (
    <View style={footerStyle}>
      <View style={containerStyle}>{children}</View>
    </View>
  );
};
