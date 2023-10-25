import { colors } from '@/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 40,
    marginBottom: 60,
  },
  headerTitleStyle: {
    color: colors.blue.color,
    fontSize: 25,
    fontWeight: '900',
  },
});

export const { headerStyle, headerTitleStyle } = styles;
