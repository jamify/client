export interface Device {
  id: string;
  name: string;
  type: string;
}

export interface DevicesState {
  devices: Device[];
}

export const UPDATE_DEVICES = 'UPDATE_DEVICES';

interface UpdateDevicesAction {
  type: typeof UPDATE_DEVICES;
  payload: DevicesState;
}

export type DevicesActionTypes = UpdateDevicesAction;
