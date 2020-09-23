import { Device, DevicesState } from '../store/devices/types';
import spotifyClient from './spotify';

export const getDevices = async (): Promise<Device[]> => {
  const response = await spotifyClient().get('/v1/me/player/devices');
  const {
    data: { devices },
  } = response;
  return devices;
};
