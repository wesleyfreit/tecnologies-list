import { buttonTextStyle } from '@/components/Button/styles';
import { PlusCircle } from 'lucide-react-native';

const iconsArray = [
  {
    name: 'plus',
    icon: <PlusCircle size={buttonTextStyle.fontSize} color={buttonTextStyle.color} />,
  },
];

export const setComponentIcon = (iconName: string) => {
  const componentIcon = iconsArray.find((component) => component.name === iconName);
  return componentIcon;
};
