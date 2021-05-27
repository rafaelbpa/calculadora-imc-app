import {Action} from 'redux';

export type User = {
  id?: number;
  name: string;
  email: string;
  profilePicture?: string | null;
  acceptedTermsOfServiceVersion?: number;
  acceptedDataSharePolicy?: boolean;
  npsLastDate?: Date;
  showNps?: boolean;
};

export type Data = {
  uid: string;
  displayName: string;
  photoURL: string | null;
  email: string;
  emailVerified: boolean;
} | null;

export type State = {
  signed: boolean;
  data: Data;
  loading: boolean;
  error: string | null;
};

export interface AuthState {
  auth: State;
}

export interface DispatchAction extends Action {
  payload: {
    data: Data;
    error: string | null;
    token: string | null;
  };
}
