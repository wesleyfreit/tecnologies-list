import { colors } from '@/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footerStyle: {
    flexGrow: 1,
    backgroundColor: colors.gray600.color,
    width: '100%',
    padding: 30,
  },
  containerStyle: {
    marginTop: 30,
    gap: 20,
  },
});

export const { footerStyle, containerStyle } = styles;
