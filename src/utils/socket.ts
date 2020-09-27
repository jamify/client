import io from 'socket.io-client';

const connectSocket = (): SocketIOClient.Socket =>
  io(String(process.env.REACT_APP_PUBSUB_URI));

export default connectSocket;
