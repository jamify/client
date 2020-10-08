export interface Comment {
  userId: string;
  text: string;
  createdAt: string;
  channelId: string;
}

export interface Track {
  id: string;
  uri: string;
  name: string;
  duration: number;
  artists: any;
  album: any;
  paused: boolean;
  position: number;
}

export interface PlayerState {
  host: string;
  track?: Track;
}

export const UPDATE_PLAYER = 'player/UPDATE_PLAYER';
export const UPDATE_TRACK = 'player/UPDATE_TRACK';
export const UPDATE_HOST = 'player/UPDATE_HOST';
export const RESET_PLAYER = 'player/RESET_PLAYER';

interface UpdatePlayerAction {
  type: typeof UPDATE_PLAYER;
  payload: PlayerState;
}

interface UpdateTrackAction {
  type: typeof UPDATE_TRACK;
  payload: Track;
}

interface UpdateHostAction {
  type: typeof UPDATE_HOST;
  payload: string;
}

interface ResetPlayerAction {
  type: typeof RESET_PLAYER;
}

export type PlayerActionTypes =
  | UpdatePlayerAction
  | UpdateTrackAction
  | UpdateHostAction
  | ResetPlayerAction;
