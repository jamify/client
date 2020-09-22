export interface SessionState {
  token: string;
  tokenType: string;
  expiresIn: number;
}

export interface SystemState {
  loggedIn: boolean;
  session: SessionState;
}

export const UPDATE_SESSION = 'UPDATE_SESSION';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}

export type SystemActionTypes = UpdateSessionAction;
