import { connect } from 'react-redux';

import actionUserIsHere from '../store/actions/actionUserIsHere';


import store from '../store/state';

const userIsHere = (props) => {
  console.log(props)
  window.onfocus = () => {
    document.title = 'Chat';
    store.dispatch(actionUserIsHere(true, 0));
  };
  window.onblur = () => {
    document.title = `${props.count} unread messages`;
    store.dispatch(actionUserIsHere(false, 0));
  };
};

export default connect(state => ({
  count: state.messages.countMessages,
}))({ userIsHere });
