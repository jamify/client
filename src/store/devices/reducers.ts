import { DevicesState, DevicesActionTypes, UPDATE_DEVICES } from './types';

const initialDevicesState: DevicesState = {
  devices: [],
};

export function profileReducer(
  state = initialDevicesState,
  action: DevicesActionTypes
): DevicesState {
  switch (action.type) {
    case UPDATE_DEVICES: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
