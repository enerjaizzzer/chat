import store from '../store/state';
import actionSomeoneMessage from '../store/actions/actionSomeoneMessage';

const connectWebSocket = (ws) => {
  const webSocket = ws;

  webSocket.onopen = () => { };

  webSocket.onmessage = (e) => {
    const someoneMessage = JSON.parse(e.data);

    someoneMessage.forEach((item) => {
      store.dispatch(actionSomeoneMessage(item.from, item.message, item.time));
    });
  };
};

export default connectWebSocket;
