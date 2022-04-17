import { Dispatch } from "redux";
import { authAPI } from "../api/api";

const SET_USER = "SET_USER";

interface IAuthState {
  isAuth: boolean
}

interface IAuthAction {
  type: string;
  payload?: any
}

let initialState = {
  isAuth: false,
};

const authReducer = (state: IAuthState = initialState, action: IAuthAction): IAuthState => {
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

export const setAuthUser = (isAuth: boolean) => ({
  type: SET_USER,
  payload: { isAuth },
});

export const login = ({email, password}) => async (dispatch: Dispatch<IAuthAction>) => {
  const response = await authAPI.login(email, password);
  if (response && response.status === 200) {
    dispatch(setAuthUser(true));
  }
};

export const usersMe = () => async (dispatch: Dispatch<IAuthAction>) => {
  try {
    const response = await authAPI.usersme();
    if (response && response.status === 200) {
      dispatch(setAuthUser(true));
    }
  } catch {
    dispatch(setAuthUser(true));
  }
};

export const logout = () => async (dispatch: Dispatch<IAuthAction>) => {
  const response = await authAPI.logout();
  if (response && response.status === 200) {
    dispatch(setAuthUser(false));
  }
};

export default authReducer;
