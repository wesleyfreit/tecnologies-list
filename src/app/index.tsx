import { useState } from 'react';
import { Keyboard, SafeAreaView, StatusBar } from 'react-native';

import { Button } from '@/components/Button';
import { EmptyTecnologies } from '@/components/EmptyTecnologies';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { OverlayView } from '@/components/OverlayView';
import { TechnologiesList } from '@/components/TechnologiesList';
import { TechnologiesStatistics } from '@/components/TechnologiesStatistics';

import { addTechnology, getCompletedTechnology } from '@/lib/arrayTecnologiesUtils';

import { Technology } from '@/types/technology';

import { colors } from '@/styles/global';
import { backgroundStyle } from './styles';

export default () => {
  const [technologies, setTechnologies] = useState<Technology[]>([
    {
      finished: false,
      id: 'aaa5287d-54d4-45ca-9b52-bc72a5bd4cb6',
      title: 'Integer urna interdum massa libero a auctor neque turpis turpis semper.',
    },
    {
      finished: true,
      id: 'aceaf305-0f65-4134-80c1-c765a7aeedce',
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    },
  ]);
  const [textInput, setTextInput] = useState('');
  const [completed, setCompleted] = useState(getCompletedTechnology(technologies));

  const handleAddTechnology = () => {
    if (textInput) {
      const newArrayItems = addTechnology(technologies, textInput);
      setTechnologies(newArrayItems);
      setTextInput('');
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.gray700.color} />

      <Header title="Minhas Tecnologias" />

      <OverlayView>
        <Input text="Adicione uma nova tecnologia" onChange={setTextInput} value={textInput} />
        <Button iconName="plus" onClick={handleAddTechnology} />
      </OverlayView>

      <Footer>
        <TechnologiesStatistics
          createdTecnologies={technologies.length}
          completedTecnologies={completed}
        />

        {technologies.length <= 0 ? (
          <EmptyTecnologies />
        ) : (
          <TechnologiesList
            technologies={technologies}
            setTechnologies={setTechnologies}
            setCompleted={setCompleted}
          />
        )}
      </Footer>
    </SafeAreaView>
  );
};
