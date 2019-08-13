const stateUser = {
  message: {
    someoneMessages: [],
    yourMessages: [],
  },
};

const reducerMessages = (state = stateUser, action) => {
  switch (action.type) {
    case 'SOMEONE_MESSAGE':
      let newSomeoneState = state;
      if (state.someoneMessages.length >= 100) {
        newSomeoneState.someoneMessages.shift();
      }
      newSomeoneState.someoneMessages.push(action.payload);

      newSomeoneState.someoneMessages.sort((a, b) => (
        (a.time - b.time)
      ));
      return { ...newSomeoneState };
    case 'YOUR_MESSAGE':
      let newYourState = state;
      if (state.yourMessages.length > 99) {
        newYourState.yourMessages.shift();
      }
      const newStateYourMessage = { ...newYourState };
      newStateYourMessage.yourMessages.unshift(action.payload);
      return newStateYourMessage;
    default:
      return state;
  }
};

export default reducerMessages;