import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Calculator from './pages/Calculator/Calculator';
import Results from './pages/Results/Results';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          options={{title: 'Login'}}
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          options={{title: 'Criar Conta'}}
          component={SignUp}
        />
        <Stack.Screen
          name="Calculator"
          options={{title: 'Calculadora IMC'}}
          component={Calculator}
        />
        <Stack.Screen
          name="Results"
          options={{title: 'Resultados', headerBackTitleVisible: false}}
          component={Results}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
