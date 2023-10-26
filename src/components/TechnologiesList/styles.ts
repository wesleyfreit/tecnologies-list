import { colors } from '@/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  technologyItemViewStyle: {
    backgroundColor: colors.gray500.color,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  technologyItemTextStyle: {
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
});

export const { technologyItemViewStyle, technologyItemTextStyle } = styles;
