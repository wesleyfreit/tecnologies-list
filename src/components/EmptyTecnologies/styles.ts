import { colors } from '@/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  emptyTechnologiesViewStyle: {
    borderTopWidth: 2,
    borderColor: colors.gray400.color,
    alignItems: 'center',
    paddingVertical: 48,
    gap: 16,
  },
  emptyTechnologiesTextStyle: {
    color: colors.gray300.color,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});

export const { emptyTechnologiesViewStyle, emptyTechnologiesTextStyle } = styles;
