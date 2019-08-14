const stateUser = {
  message: {
    userIsHere: true,
    countMessages: 0,
    formValue: '',
    someoneMessages: [],
    yourMessages: [],
  },
};

const reducerMessages = (state = stateUser, action) => {
  switch (action.type) {
    case 'SOMEONE_MESSAGE': {
      const newSomeoneState = state;
      if (state.someoneMessages.length >= 10) {
        newSomeoneState.someoneMessages.shift();
      }
      console.log(newSomeoneState.countMessages)
      if (!state.userIsHere) {
        newSomeoneState.countMessages += 1;
      }
      console.log(newSomeoneState.countMessages)
      newSomeoneState.someoneMessages.push(action.payload);

      newSomeoneState.someoneMessages.sort((a, b) => (
        (a.time - b.time)
      ));
      return { ...newSomeoneState };
    }
    case 'YOUR_MESSAGE': {
      const newYourState = state;
      if (state.yourMessages.length >= 10) {
        newYourState.yourMessages.shift();
      }

      newYourState.yourMessages.unshift(action.payload);
      return { ...newYourState };
    }
    case 'SAVE_FORM_VALUE': {
      const len = action.payload.formValue.length;
      return { ...state, formValue: `${state.formValue}${action.payload.formValue[len - 1]}` };
    }
    case 'USER_IS_HERE': {
      return { ...state, userIsHere: action.payload.user, countMessages: action.payload.count };
    }
    default:
      return state;
  }
};

export default reducerMessages;
