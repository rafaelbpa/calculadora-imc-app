import {createStore, applyMiddleware, compose} from 'redux';

export default (reducers, middlewares) => {
  // eslint-disable-next-line no-undef
  const modeDev = __DEV__;

  const composer = modeDev
    ? compose(
        applyMiddleware(...middlewares),
        // eslint-disable-next-line no-console
        // console.tron.createEnhancer(),
      )
    : compose(applyMiddleware(...middlewares));

  return createStore(reducers, composer);
};
