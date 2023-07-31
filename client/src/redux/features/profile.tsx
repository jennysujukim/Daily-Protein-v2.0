import { 
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { ProfileInitialStateModel } from "../../models"

// set initial state
const initialState: ProfileInitialStateModel = {
    age: "",
    gender: "",
    height: "",
    weight: "",
    activity: "",
    goal: ""
};

// create slice
const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        updateAge: (state, action: PayloadAction<number | string>) => {
            state.age = action.payload;
        },
        updateGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },
        updateHeight: (state, action: PayloadAction<number | string>) => {
            state.height = action.payload;
        },
        updateWeight: (state, action: PayloadAction<number | string>) => {
            state.weight = action.payload;
        },
        updateActivity: (state, action: PayloadAction<string>) => {
            state.activity = action.payload;
        },
        updateGoal: (state, action: PayloadAction<string>) => {
            state.goal = action.payload;
        }
    }
})

export const {
    updateAge,
    updateGender,
    updateHeight,
    updateWeight,
    updateActivity,
    updateGoal
} = profileSlice.actions;
export const profileReducer = profileSlice.reducer;