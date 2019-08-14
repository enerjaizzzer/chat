const actionUserIsHear = (user, count) => ({
  type: 'USER_IS_HERE',
  payload: {
    user,
    count,
  },
});

export default actionUserIsHear;
