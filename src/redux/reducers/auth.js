const INITIAL_STATE = localStorage.getItem("access_token") || "";

const authState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOG_IN":
      return action.payload;
    default:
      return state;
  }
};

export default authState;
