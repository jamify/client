import { getChannels, patchChannel, postChannel } from './channels';

const jamifyAPI = {
  channels: {
    get: {
      all: getChannels,
    },
    post: postChannel,
    patch: patchChannel,
  },
};

export default jamifyAPI;
