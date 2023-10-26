import { colors } from '@/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 10,
    backgroundColor: colors.gray500.color,
    padding: 16,
    fontSize: 20,
    borderWidth: 1,
    borderColor: colors.gray700.color,
    width: 300,
    color: colors.gray100.color,
  },
});

export const { inputStyle } = styles;
