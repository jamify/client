import { DevicesState, DevicesActionTypes, UPDATE_DEVICES } from './types';

export function updateDevices(
  newDevicesState: DevicesState
): DevicesActionTypes {
  return {
    type: UPDATE_DEVICES,
    payload: newDevicesState,
  };
}
