import { colors } from '@/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  technologiesStatisticsViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  technologiesStatisticsSidesStyle: {
    flexDirection: 'row',
    gap: 5,
  },
  technologiesStatisticsSideTextStyle: {
    fontWeight: '700',
    fontSize: 16,
  },
  technologiesStatisticsSideValueStyle: {
    fontWeight: '700',
    fontSize: 16,
    backgroundColor: colors.gray400.color,
    color: colors.gray100.color,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export const {
  technologiesStatisticsViewStyle,
  technologiesStatisticsSidesStyle,
  technologiesStatisticsSideTextStyle,
  technologiesStatisticsSideValueStyle,
} = styles;
