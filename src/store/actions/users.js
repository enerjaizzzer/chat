const identification = (nick, pass) => {
  console.log(nick, pass)
  return {
    type: 'LOG_IN_USER',
    payload: {
      nickName: nick,
      password: pass,
    },
  };
}

export default identification;
