import { ClipboardList } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { colors } from '@/styles/global';
import { emptyTechnologiesTextStyle, emptyTechnologiesViewStyle } from './styles';

export const EmptyTecnologies = () => {
  return (
    <View style={emptyTechnologiesViewStyle}>
      <ClipboardList color={colors.gray400.color} size={80} strokeWidth={1.1} />
      <Text style={emptyTechnologiesTextStyle}>
        Você ainda não tem tecnologias cadastradas{' '}
        <Text style={{ fontWeight: '400' }}>Crie tarefas e organize seus itens a fazer</Text>
      </Text>
    </View>
  );
};
