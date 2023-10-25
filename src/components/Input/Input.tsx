import { useState } from 'react';
import { TextInput } from 'react-native';

import { colors } from '@/styles/global';
import { InputComponentProps } from './interfaces';
import { inputStyle } from './styles';

export const Input = ({ text, value, onChange }: InputComponentProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <TextInput
      style={{
        ...inputStyle,
        borderColor: focus ? colors.purpleDark.color : colors.gray700.color,
      }}
      placeholder={text}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      onChangeText={onChange}
      value={value}
      placeholderTextColor={colors.gray300.color}
    />
  );
};
