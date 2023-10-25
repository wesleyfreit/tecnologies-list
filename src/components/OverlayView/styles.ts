import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlayViewStyle: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: -30,
    zIndex: 1,
    gap: 2,
  },
});

export const { overlayViewStyle } = styles;
