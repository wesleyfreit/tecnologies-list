import { Text, View } from 'react-native';

import { CheckBox } from '@/components/CheckBox';
import { TrashButton } from '@/components/TrashButton';
import { colors } from '@/styles/global';

import { TechnologyItemComponentProps } from '../interfaces';

import { technologyItemTextStyle, technologyItemViewStyle } from '../styles';

export const TechnologyItem = ({
  technology,
  handleSetCompleted,
  handleRemoveTechnology,
}: TechnologyItemComponentProps) => {
  return (
    <View
      style={{
        ...technologyItemViewStyle,
        borderColor: technology.finished ? colors.gray500.color : colors.gray400.color,
      }}
    >
      <CheckBox tecnology={technology} handleSetCompleted={handleSetCompleted} />

      <View style={{ flex: 1 }}>
        <Text
          style={{
            ...technologyItemTextStyle,
            textDecorationLine: technology.finished ? 'line-through' : 'none',
            color: technology.finished ? colors.gray300.color : colors.gray100.color,
          }}
          onPress={() => handleSetCompleted(technology.id)}
        >
          {technology.title}
        </Text>
      </View>

      <TrashButton handleRemoveTechnology={handleRemoveTechnology} technology={technology} />
    </View>
  );
};
