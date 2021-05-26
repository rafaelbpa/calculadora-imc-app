import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/core';

import {Container, Title, Text} from './styles';
import Button from '../../components/Button/Button';
import {Classification} from 'model/Classification';

type ResultsProp = {
  Calculator: {
    height: string;
    weight: string;
  };
};

const Results: React.FC = () => {
  const route = useRoute<RouteProp<ResultsProp, 'Calculator'>>();
  const {height, weight} = route.params;

  const [bmi, setBmi] = useState<string>('');
  const [classification, setClassification] = useState<Classification>({
    level: '',
    result: '',
  });

  const calculateBMI = () => {
    const result =
      Number.parseInt(weight, 10) /
      (((Number.parseInt(height, 10) / 100) * Number.parseInt(height, 10)) /
        100);

    console.log('result', result);
    setBmi(result.toFixed(1));
  };

  const classificateBMI = (bmiNumber: number) => {
    if (bmiNumber < 18.5) {
      setClassification({result: 'Magreza', level: 'Obesidade grau 0'});
    }
    if (bmiNumber >= 18.5 && bmiNumber < 25) {
      setClassification({result: 'Normal', level: 'Obesidade grau 0'});
    }
    if (bmiNumber >= 25 && bmiNumber < 30) {
      setClassification({result: 'Sobrepeso', level: 'Obesidade grau 1'});
    }
    if (bmiNumber >= 30 && bmiNumber < 40) {
      setClassification({result: 'Obesidade', level: 'Obesidade grau 2'});
    } else {
      setClassification({result: 'Obesidade grave', level: 'Obesidade grau 3'});
    }
  };

  useEffect(() => {
    calculateBMI();
  });

  useEffect(() => {
    if (bmi) {
      classificateBMI(Number.parseFloat(bmi));
    }
  }, [bmi]);

  return (
    <Container>
      <View style={{flex: 1}}>
        <Title>IMC</Title>
        <Text>{bmi}</Text>
        <Title>Classificação</Title>
        <Text>{classification.result}</Text>
        <Title>Nível</Title>
        <Text>{classification.level}</Text>
      </View>
      <Button
        colors={{backgroundColor: '#ffcc00', labelColor: '#000'}}
        label="Salvar"
        onPress={() => console.log('salvo')}
      />
      <SafeAreaView />
    </Container>
  );
};

export default Results;
