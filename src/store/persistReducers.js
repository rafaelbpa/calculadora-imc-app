import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'imctecnologiauni7',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persistedReducer;
};
