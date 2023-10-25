import { colors } from '@/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: colors.blueDark.color,
    padding: 20,
    borderColor: colors.gray700.color,
    borderWidth: 1,
  },
  buttonTextStyle: {
    fontSize: 20,
    color: colors.gray100.color,
  },
});

export const { buttonStyle, buttonTextStyle } = styles;
