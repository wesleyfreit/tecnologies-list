import { Text, View } from 'react-native';

import {
  technologiesStatisticsSidesStyle,
  technologiesStatisticsSideTextStyle,
  technologiesStatisticsSideValueStyle,
} from '../styles';

import { TechnologiesStatisticsSideComponentProps } from '../interfaces';

export const TechnologiesStatisticsSide = ({
  title,
  color,
  value,
}: TechnologiesStatisticsSideComponentProps) => {
  return (
    <View style={technologiesStatisticsSidesStyle}>
      <Text style={{ ...technologiesStatisticsSideTextStyle, color: color }}>{title}</Text>
      <Text style={technologiesStatisticsSideValueStyle}>{value}</Text>
    </View>
  );
};
