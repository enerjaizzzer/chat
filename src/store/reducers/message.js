const stateUser = {
  message: {
    someoneMessages: [],
    yourMessages: [],
  },
};

const reducerMessages = (state = stateUser, action) => {
  switch (action.type) {
    case 'SOMEONE_MESSAGE':
      const newStateSomeoneMessage = { ...state };
      newStateSomeoneMessage.someoneMessages.push(action.payload);
      return newStateSomeoneMessage;
    case 'YOUR_MESSAGE':
      const newStateYourMessage = { ...state };
      newStateYourMessage.yourMessages.push(action.payload);
      return newStateYourMessage;
    default:
      return state;
  }
};

export default reducerMessages;