import store from '../store/state';
import actionSomeoneMessage from '../store/actions/actionSomeoneMessage';

const connectWebSocket = (ws) => {
  ws.onopen = (e) => {

  };

  ws.onclose = (e) => {

  };

  ws.onmessage = (e) => {
    const someoneMessage = JSON.parse(e.data);
    someoneMessage.forEach((item) => {
      store.dispatch(actionSomeoneMessage(item.from, item.message, item.time));
    })
    console.log(e.data)
  };
};

export default connectWebSocket;
