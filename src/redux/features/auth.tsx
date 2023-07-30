import { 
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import { 
    AuthInitialState,
    User  
} from "../../models";

const initialState: AuthInitialState = {
  user: null,
  authIsReady: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    authIsReady: (state, action: PayloadAction<User>) => {
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