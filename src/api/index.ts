import { getProfile } from './profile';
import { getDevices } from './devices';
import player from './player';

const spotifyAPI = {
  profile: {
    get: getProfile,
  },
  devices: {
    get: getDevices,
  },
  player,
};

export default spotifyAPI;
