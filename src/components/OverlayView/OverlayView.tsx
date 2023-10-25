import { ReactNode } from 'react';
import { View } from 'react-native';

import { overlayViewStyle } from './styles';

export const OverlayView = ({ children }: { children: ReactNode }) => (
  <View style={overlayViewStyle}>{children}</View>
);
