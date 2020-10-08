import {
  PlayerState,
  PlayerActionTypes,
  UPDATE_PLAYER,
  Track,
  UPDATE_TRACK,
  UPDATE_HOST,
  RESET_PLAYER,
} from './types';

export function updatePlayer(playerState: PlayerState): PlayerActionTypes {
  return {
    type: UPDATE_PLAYER,
    payload: playerState,
  } as const;
}

export function updateTrack(track: Track): PlayerActionTypes {
  return {
    type: UPDATE_TRACK,
    payload: track,
  } as const;
}

export function updateHost(host: string): PlayerActionTypes {
  return {
    type: UPDATE_HOST,
    payload: host,
  } as const;
}

export function resetPlayer(): PlayerActionTypes {
  return {
    type: RESET_PLAYER,
  } as const;
}
