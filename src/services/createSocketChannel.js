import { eventChannel } from 'redux-saga';

const createSocketChannel = (socket, socketTypes = []) =>
  eventChannel((emit) => {
    socket.on('connect', () => {
      // On connect handle
    });

    socketTypes.forEach((socketType) => {
      socket.on(socketType, (payload) => {
        emit({ type: socketType, payload });
      });
    });

    socket.on('error', (error) => {
      // socket.socket.connect('https://ourway.gg/api/clicker/');
      emit(new Error(error));
    });

    return () => {
      // unuabscribe
      socket.disconnect();
    };
  });

export default createSocketChannel;
