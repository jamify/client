export interface Comment {
  id: string;
  message: string;
  timestamp: string;
}

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
  comments: Comment[];
}

export const UPDATE_PLAYER = 'UPDATE_PLAYER';

interface UpdatePlayerAction {
  type: typeof UPDATE_PLAYER;
  payload: PlayerState;
}

export type PlayerActionTypes = UpdatePlayerAction;
