import {
  IAction,
  IActionEmailAndPassword,
  IActionSignUp,
} from '../../../interface/auth/IAction';

export function signInRequest(
  email: string,
  password: string,
): IActionEmailAndPassword {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, password},
  };
}

export function signUpRequest(
  name: string,
  email: string,
  password: string,
): IActionSignUp {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {name, email, password},
  };
}

export function signInSuccess(data: unknown): IAction {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {data},
  };
}

export function signFailure(data: unknown): IAction {
  return {
    type: '@auth/SIGN_FAILURE',
    payload: {data},
  };
}

export function signOut(): IAction {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function resetPassword(login: string): IAction {
  return {
    type: '@auth/RESET_PASSWORD',
    payload: {login},
  };
}

export function registerPhoneRequest(phone: string): IAction {
  return {
    type: '@auth/REGISTER_PHONE_REQUEST',
    payload: {phone},
  };
}
