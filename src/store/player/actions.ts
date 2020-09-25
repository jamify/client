import { PlayerState, PlayerActionTypes, UPDATE_PLAYER } from './types';

export function updatePlayer(newPlayerState: PlayerState): PlayerActionTypes {
  return {
    type: UPDATE_PLAYER,
    payload: newPlayerState,
  };
}
