import { PlayerState, PlayerActionTypes, UPDATE_PLAYER } from './types';

export function updateDevices(newDevicesState: PlayerState): PlayerActionTypes {
  return {
    type: UPDATE_PLAYER,
    payload: newDevicesState,
  };
}
