/* eslint-disable no-param-reassign */
import produce from 'immer';
import {IAction} from '../../../interface/auth/IAction';
import {IAuth} from '../../../interface/auth/IAuth';

const INITIAL_STATE: IAuth = {
  signed: false,
  data: null,
  loading: false,
  error: null,
};

export default function auth(state = INITIAL_STATE, action: IAction): IAuth {
  return produce(state, (draft: IAuth) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST':
        draft.loading = true;
        draft.error = null;
        break;
      case '@auth/SIGN_UP_REQUEST':
        draft.loading = true;
        draft.error = null;
        break;
      case '@auth/SIGN_IN_SUCCESS':
        draft.loading = false;
        draft.signed = true;
        draft.data = action.payload;
        break;
      case '@auth/SIGN_FAILURE':
        draft.error = action.error;
        draft.loading = false;
        break;
      case '@auth/SIGN_OUT':
        draft.signed = false;
        draft.data = null;
        draft.loading = false;
        draft.error = null;
        break;
      default:
    }
  });
}
