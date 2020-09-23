import { Device } from '../devices/types';

export interface SessionState {
  token: string;
  tokenType: string;
  expiresIn: number;
}

export interface SystemState {
  loggedIn: boolean;
  session: SessionState;
  currentDevice?: Device;
}

export const UPDATE_SESSION = 'UPDATE_SESSION';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}

export type SystemActionTypes = UpdateSessionAction;
