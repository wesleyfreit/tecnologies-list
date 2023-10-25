import { Text, TouchableOpacity, View } from 'react-native';

import { colors } from '@/styles/global';
import { CheckBoxComponentProps } from './interfaces';
import { checkBoxStyle, checkBoxTextStyle } from './styles';

export const CheckBox = ({ tecnology, handleSetCompleted }: CheckBoxComponentProps) => {
  return (
    <TouchableOpacity onPress={() => handleSetCompleted(tecnology.id)} activeOpacity={0.7}>
      <View
        style={{
          ...checkBoxStyle,
          borderColor: tecnology.finished ? colors.purpleDark.color : checkBoxStyle.borderColor,
          backgroundColor: tecnology.finished
            ? colors.purpleDark.color
            : checkBoxStyle.backgroundColor,
        }}
      >
        {tecnology.finished && <Text style={checkBoxTextStyle}>✔</Text>}
      </View>
    </TouchableOpacity>
  );
};
