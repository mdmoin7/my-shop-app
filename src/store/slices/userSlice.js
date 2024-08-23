import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    createSession: (state, action) => {
      return action.payload;
    },
    logout: (state, action) => {
      return null;
    },
  },
});
export const { createSession, logout } = userSlice.actions;
export default userSlice.reducer;
