import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reduxFlipper from 'redux-flipper';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

if (__DEV__) {
  const createDebugger = reduxFlipper;
  middlewares.push(createDebugger());
}

middlewares.push(sagaMiddleware);

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
