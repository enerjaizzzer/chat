const connectWebSocket = () => {
  const ws = new WebSocket('ws://st-chat.shas.tel');

  ws.onopen = (e) => {
    console.log('online', e);
  };

  ws.onclose = (e) => {
    console.log('disconnect', e);
  };

  ws.onmessage = (e) => {
    console.log('message', e);
  };
};

export default connectWebSocket;
