import jamifyClient from './jamify';
import store from '../../store';

export const getChannels = async () => {
  const response = await jamifyClient().get('/channels');
  return response.data;
};

export const postChannel = async () => {
  const state = store.getState();
  const response = await jamifyClient().post('/channels', {
    id: state.profile.id,
  });
  const { data } = response;
  return data;
};

export const patchChannel = async () => {
  const state = store.getState();
  const response = await jamifyClient().patch(`/channels/${state.profile.id}`, {
    isPaused: state.player.isPaused,
    position: state.player.position,
    track: state.player.currentTrack,
  });
  const { data } = response;
  return data;
};
