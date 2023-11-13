import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userredux";
import { logoutFailure, logoutStart, logoutSuccess } from "./logoutRedux";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "./registerRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutStart());
  try {
    await axios.post("http://localhost:8000/api/auth/logout");
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
  }
};

export default { login, register, logout };
