import { colors } from '@/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  checkBoxStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: colors.blue.color,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  checkBoxTextStyle: {
    color: colors.gray100.color,
    fontSize: 10,
  },
});

export const { checkBoxStyle, checkBoxTextStyle } = styles;
