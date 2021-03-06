import {
  SystemState,
  SessionState,
  SystemActionTypes,
  UPDATE_SESSION,
} from './types';

const initialSessionState: SessionState = {
  token: '',
  tokenType: '',
  expiresIn: -1,
};

const initialSystemState: SystemState = {
  loggedIn: false,
  session: initialSessionState,
};

export function systemReducer(
  state = initialSystemState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
