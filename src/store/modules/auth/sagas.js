import {takeLatest, all, call, put} from 'redux-saga/effects';

import {signInSuccess, signFailure} from './actions';
import api from '../../../services/api';

function* signIn({payload}) {
  const {email, password} = payload;

  try {
    const response = yield call(api.post, '/users/login', {
      email,
      password,
    });

    yield put(signInSuccess(response.data));
  } catch (err) {
    yield put(signFailure(err));
    yield console.log('erro no saga ao fazer sign in => ', err);
  }

  return null;
}

function* signUp({payload}) {
  const {name, email, password} = payload;

  try {
    const response = yield call(api.post, '/users', {
      name,
      email,
      password,
    });

    if (response.status === 201) {
      const response2 = yield call(api.post, '/users/login', {
        email,
        password,
      });

      yield put(signInSuccess(response2.data));
    }
  } catch (err) {
    yield put(signFailure(err));
    yield console.log('erro no saga ao fazer sign up => ', err);
  }

  return null;
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
