export interface Track {
  id: string;
  uri: string;
  name: string;
  duration: number;
  artists: any;
  album: any;
}

export interface PlayerState {
  isPaused: boolean;
  position: number;
  currentTrack?: Track;
}

export const UPDATE_PLAYER = 'UPDATE_PLAYER';

interface UpdatePlayerAction {
  type: typeof UPDATE_PLAYER;
  payload: PlayerState;
}

export type PlayerActionTypes = UpdatePlayerAction;
