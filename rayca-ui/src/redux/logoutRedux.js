import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
  name: "logout",
  initialState: {
    currentUser: true,
    isFetching: false,
    error: false,
  },
  reducers: {
    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { logoutStart, logoutSuccess, logoutFailure } =
  logoutSlice.actions;
export default logoutSlice.reducer;
