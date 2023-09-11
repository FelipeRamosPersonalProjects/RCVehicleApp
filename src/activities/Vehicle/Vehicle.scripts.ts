import {Socket} from 'socket.io-client';

export function toggleLights(socket: Socket) {
  if (!socket) {
    throw 'Vehicle socket is not connected!';
  }

  socket.emit('lights:regular:toggle');
}

export function changeAcceleration(socket: Socket, value: number) {
  if (!socket) {
    throw 'Vehicle socket is not connected!';
  }

  socket.emit('aceleration:change', value);
}

export function changeSteeringWheel(socket: Socket, value: number) {
  if (!socket) {
    throw 'Vehicle socket is not connected!';
  }

  socket.emit('steering-wheel:change', value);
}
