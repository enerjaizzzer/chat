const stateUser = {
  message: {
    someoneMessages: [],
    yourMessages: [],
  },
};

const reducerMessages = (state = stateUser, action) => {
  switch (action.type) {
    case 'SOMEONE_MESSAGE': {
      const newSomeoneState = state;
      if (state.someoneMessages.length >= 100) {
        newSomeoneState.someoneMessages.shift();
      }
      newSomeoneState.someoneMessages.push(action.payload);

      newSomeoneState.someoneMessages.sort((a, b) => (
        (a.time - b.time)
      ));
      return { ...newSomeoneState };
    }
    case 'YOUR_MESSAGE': {
      const newYourState = state;
      if (state.yourMessages.length >= 100) {
        newYourState.yourMessages.shift();
      }

      newYourState.yourMessages.unshift(action.payload);
      return { ...newYourState };
    }
    default:
      return state;
  }
};

export default reducerMessages;
