import io from 'socket.io-client';

const socket: SocketIOClient.Socket = io(
  String(process.env.REACT_APP_PUBSUB_URI)
);

export default socket;
