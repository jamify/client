import axios from 'axios';
import store from '../../store';

const spotifyClient = () => {
  const state = store.getState();
  return axios.create({
    baseURL: process.env.REACT_APP_SPOTIFY_BASE_URI,
    headers: {
      Authorization: `Bearer ${state.system.session.token}`,
    },
  });
};

export default spotifyClient;
