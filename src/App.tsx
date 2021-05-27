import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AppState} from './store/types';
import {signOut} from './store/modules/auth/actions';

import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Calculator from './pages/Calculator/Calculator';
import Results from './pages/Results/Results';

const Stack = createStackNavigator();

const selectAuthReducer = (state: AppState['auth']) => state?.auth;

const App = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuthReducer);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState.signed ? (
          <>
            <Stack.Screen
              name="Calculator"
              options={{
                title: 'Calculadora IMC',
                headerRight: () => (
                  <TouchableOpacity onPress={() => dispatch(signOut())}>
                    <Text style={{marginRight: 8}}>Logout</Text>
                  </TouchableOpacity>
                ),
              }}
              component={Calculator}
            />
            <Stack.Screen
              name="Results"
              options={{title: 'Resultados', headerBackTitleVisible: false}}
              component={Results}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
