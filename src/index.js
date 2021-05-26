import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';

import App from './App';

import store from './store';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
