const actionFormValue = formValue => ({
  type: 'SAVE_FORM_VALUE',
  payload: {
    formValue,
  },
});

export default actionFormValue;
