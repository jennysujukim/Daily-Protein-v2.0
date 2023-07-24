import { createSlice } from "@reduxjs/toolkit";
import { 
    AuthActionPayload, 
    AuthState  
} from "../../models";

const initialState: AuthState = {
  user: null,
  authIsReady: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: AuthActionPayload) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    authIsReady: (state, action: AuthActionPayload) => {
      state.user = action.payload;
      state.authIsReady = true;
    },
  },
});

export const { 
    login, 
    logout, 
    authIsReady 
} = authSlice.actions;
export const authReducer = authSlice.reducer;