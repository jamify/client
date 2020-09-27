import { getDevices } from './devices';
import { pauseTrack } from './pause';
import { playTrack } from './play';

const player = {
  play: playTrack,
  pause: pauseTrack,
  devices: {
    get: getDevices,
  },
};

export default player;
