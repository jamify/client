import Pusher from 'pusher-js';

const createPusherInstance = () =>
  new Pusher(String(process.env.REACT_APP_PUSHER_APP_KEY), {
    cluster: String(process.env.REACT_APP_PUSHER_APP_CLUSTER),
  });

export default createPusherInstance;
