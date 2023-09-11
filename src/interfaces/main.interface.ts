import {Socket} from 'socket.io-client';

export type ViewSetter = (value: string) => void;

export type SocketSetter = (value: Socket) => void;

export interface SocketProps {
  setView: ViewSetter;
  socket: Socket;
  setSocket: SocketSetter;
}
