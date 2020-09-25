import { getProfile } from './profile';
import player from './player';

const spotifyAPI = {
  profile: {
    get: getProfile,
  },
  player,
};

export default spotifyAPI;
