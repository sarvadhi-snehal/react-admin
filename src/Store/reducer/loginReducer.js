import { LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from "../actions/type";

const intialState = {
  token: null,
  user: null,
  error: null,
};

const loginReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case LOG_OUT:
      return {
        token: null,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};


export default loginReducer