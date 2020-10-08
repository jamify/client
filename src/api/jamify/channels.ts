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
    isPaused: state.player.track?.paused,
    position: state.player.track?.position,
    track: state.player.track,
  });
  const { data } = response;
  return data;
};
