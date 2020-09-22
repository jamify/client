import { DevicesState, DevicesActionTypes, UPDATE_DEVICES } from './types';

export function updateDevices(newDevices: DevicesState): DevicesActionTypes {
  return {
    type: UPDATE_DEVICES,
    payload: newDevices,
  };
}
