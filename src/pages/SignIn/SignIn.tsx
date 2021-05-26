import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import api from '../../services/api';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import {Container} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signInUser = async () => {
    const result = await api.post('/users/login', {
      email,
      password,
    });

    console.log(result.data);
  };

  return (
    <Container>
      <View style={{flex: 1}}>
        <Input label="Email" onChangeText={text => setEmail(text)} />
        <Input label="Senha" onChangeText={text => setPassword(text)} />
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
