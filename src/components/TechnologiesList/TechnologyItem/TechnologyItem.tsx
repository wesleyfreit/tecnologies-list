import { CheckBox } from '@/components/CheckBox';
import { TrashButton } from '@/components/TrashButton';
import { colors } from '@/styles/global';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { TechnologyItemComponentProps } from '../interfaces';
import { technologyItemTextStyle, technologyItemViewStyle } from '../styles';

export const TechnologyItem = ({
  technology,
  handleSetCompleted,
  handleRemoveTechnology,
}: TechnologyItemComponentProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View
      style={{
        ...technologyItemViewStyle,
        borderColor: technology.finished ? colors.gray500.color : colors.gray400.color,
      }}
    >
      <CheckBox tecnology={technology} handleSetCompleted={handleSetCompleted} />

      <Text
        style={{
          ...technologyItemTextStyle,
          textDecorationLine: technology.finished ? 'line-through' : 'none',
        }}
        onPress={() => handleSetCompleted(technology.id)}
      >
        {technology.title}
      </Text>

      <TrashButton
        handleRemoveTechnology={handleRemoveTechnology}
        setPressed={setPressed}
        technology={technology}
        pressed={pressed}
      />
    </View>
  );
};
