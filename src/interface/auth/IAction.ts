export type IAction = {
  type: string;
  payload?: unknown;
  error?: unknown;
};

export type IActionEmailAndPassword = {
  type: string;
  payload: {
    email: string;
    password: string;
  };
  error?: unknown;
};

export type IActionSignUp = {
  type: string;
  payload: {
    name: string;
    email: string;
    password: string;
  };
  error?: unknown;
};
