import { Device, DevicesState } from '../store/devices/types';
import spotifyClient from './spotify';

export const getDevices = async (): Promise<Device[]> => {
  const response: any = await spotifyClient().get('/v1/me/player/devices');
  const { data } = response;
  return data;
};
