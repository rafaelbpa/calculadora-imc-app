import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import DismissKeyboard from '../../components/DismissKeyboard/DismissKeyboard';

import {Container, Title} from './styles';

const Calculator = () => {
  const navigation = useNavigation();
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [isDisabled, setSetIsDisabled] = useState<boolean>(true);

  const calculateBMI = () => {
    navigation.navigate('Results', {
      height,
      weight,
    });
  };

  useEffect(() => {
    if (height && weight) {
      setSetIsDisabled(false);
    } else {
      setSetIsDisabled(true);
    }
  }, [height, weight]);

  return (
    <DismissKeyboard>
      <Container>
        <Title>Vamos calcular seu IMC</Title>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Input
            label="Altura (cm)"
            onChangeText={text => {
              setHeight(text);
              console.log(height);
            }}
          />
          <Input label="Peso (kg)" onChangeText={text => setWeight(text)} />
        </View>
        <Button
          colors={{backgroundColor: '#ffcc00', labelColor: '#000'}}
          isDisabled={isDisabled}
          label="Calcular"
          onPress={calculateBMI}
        />
        <SafeAreaView />
      </Container>
    </DismissKeyboard>
  );
};

export default Calculator;
