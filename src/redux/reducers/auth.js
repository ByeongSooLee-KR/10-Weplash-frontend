const INITIAL_STATE = false;

const authState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOG_IN":
      return action.payload;
    default:
      return state;
  }
};

export default authState;
