const connectWebSocket = () => {
  const ws = new WebSocket('ws://st-chat.shas.tel');

  ws.onopen = () => {
    console.log('online');
  };

  ws.onclose = () => {
    console.log('disconnect');
  };

  ws.onmessage = () => {
    console.log('message');
  };
};

export default connectWebSocket;
