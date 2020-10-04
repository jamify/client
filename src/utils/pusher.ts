import Pusher from 'pusher-js';

const DISCONNECTED = 'disconnected';

let pusherInstance: Pusher;

const pusher = (): Pusher => {
  if (pusherInstance) {
    if (pusherInstance.connection.state === DISCONNECTED) {
      pusherInstance.connect();
    }
    return pusherInstance;
  }
  pusherInstance = new Pusher(String(process.env.REACT_APP_PUSHER_APP_KEY), {
    cluster: String(process.env.REACT_APP_PUSHER_APP_CLUSTER),
  });
  return pusherInstance;
};

export default pusher;
