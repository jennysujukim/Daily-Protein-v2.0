import { 
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import { 
  AuthInitialStateModel,
  UserModel  
} from "../../models";

// set initial state
const initialState: AuthInitialStateModel = {
  user: null,
  authIsReady: false,
};

// create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    authIsReady: (state, action: PayloadAction<UserModel>) => {
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