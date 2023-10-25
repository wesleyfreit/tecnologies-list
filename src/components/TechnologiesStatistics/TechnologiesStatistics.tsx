import { View } from 'react-native';

import { TechnologiesStatisticsSide } from './TechnologiesStatisticsSide';

import { colors } from '@/styles/global';
import { technologiesStatisticsViewStyle } from './styles';

import { TecnologiesStatisticsComponentProps } from './interfaces';

export const TechnologiesStatistics = ({
  createdTecnologies,
  completedTecnologies,
}: TecnologiesStatisticsComponentProps) => {
  return (
    <View style={technologiesStatisticsViewStyle}>
      <TechnologiesStatisticsSide
        title={'Criadas'}
        color={colors.blue.color}
        value={createdTecnologies}
      />
      <TechnologiesStatisticsSide
        title={'Concluídas'}
        color={colors.purple.color}
        value={completedTecnologies}
      />
    </View>
  );
};
