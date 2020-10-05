import jamifyClient from './jamify';
import store from '../../store';

interface CommentPOST {
  text: string;
  userId: string;
}

export const getChannelMessages = async (channelId: string) => {
  const response = await jamifyClient().get(`/channels/${channelId}/messages`);
  const { data } = response;
  return data;
};

export const postChannelMessage = async (channelId: string, text: string) => {
  const state = store.getState();
  const response = await jamifyClient().post(
    `/channels/${channelId}/messages`,
    {
      userId: state.profile.id,
      text,
    }
  );
  const { data } = response;
  return data;
};
