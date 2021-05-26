import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import api from '../../services/api';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import {Container} from './styles';

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const createAccount = async () => {
    const response = await api.post('/users', {
      name,
      email,
      password,
    });

    console.log(response.data);
  };

  return (
    <Container>
      <View style={{flex: 1}}>
        <Input label="Name" onChangeText={text => setName(text)} />
        <Input label="Email" onChangeText={text => setEmail(text)} />
        <Input label="Senha" onChangeText={text => setPassword(text)} />
      </View>
      <Button
        colors={{backgroundColor: '#ffcc00', labelColor: '#000'}}
        label="Criar Conta"
        onPress={createAccount}
      />
      <SafeAreaView />
    </Container>
  );
};

export default SignUp;
