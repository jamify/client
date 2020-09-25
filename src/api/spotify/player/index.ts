import { getDevices } from './devices';
import { playTrack } from './play';

const player = {
  play: playTrack,
  devices: {
    get: getDevices,
  },
};

export default player;
