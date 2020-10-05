import { getChannels, patchChannel, postChannel } from './channels';
import { getChannelMessages, postChannelMessage } from './messages';

const jamifyAPI = {
  channels: {
    get: {
      all: getChannels,
    },
    post: postChannel,
    patch: patchChannel,
  },
  messages: {
    get: getChannelMessages,
    post: postChannelMessage,
  },
};

export default jamifyAPI;
