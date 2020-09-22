import { getProfile } from './profile';
import { getDevices } from './devices';

const spotifyAPI = {
  profile: {
    get: getProfile,
  },
  devices: {
    get: getDevices,
  },
};

export default spotifyAPI;
