import { authAPI } from "../api/api";

const SET_USER = "SET_USER";

let initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUser = (isAuth) => ({
  type: SET_USER,
  payload: { isAuth },
});

export const login = (username, password) => async (dispatch) => {
  const response = await authAPI.login(username, password);
  if (response && response.status === 200) {
    dispatch(setAuthUser(true));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(setAuthUser(false));
};

export default authReducer;
