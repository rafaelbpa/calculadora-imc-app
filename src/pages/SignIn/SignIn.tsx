import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import {signInRequest} from '../../store/modules/auth/actions';

import {Container, Title} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signInUser = async () => {
    dispatch(signInRequest(email, password));
  };

  return (
    <Container>
      <Title>Calculadora de IMC</Title>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Input label="Email" onChangeText={text => setEmail(text)} />
        <Input
          label="Senha"
          onChangeText={text => setPassword(text)}
          password
        />
      </View>
      <Button
        colors={{backgroundColor: '#ffcc00', labelColor: '#000'}}
        label="Fazer login"
        onPress={signInUser}
      />
      <View style={{height: 16}} />
      <Button
        colors={{backgroundColor: 'transparent', labelColor: '#000'}}
        label="Criar Conta"
        onPress={() => navigation.navigate('SignUp')}
      />
      <SafeAreaView />
    </Container>
  );
};

export default SignIn;
