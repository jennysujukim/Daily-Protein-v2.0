import { ReactNode } from "react";
import { store } from "../redux/store";


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export interface LayoutProps {
    children: ReactNode;
}

export interface ProfileInitialStateModel {
    age: string | number;
    gender: string;
    height: string | number;
    weight: string | number;
    activity: string;
    goal: string;
}

export interface DashboardContainerProps {
    title: string;
    children: ReactNode;
}

export interface TrackerDataModel {
    id: string;
    uid: string;
    name: string;
    protein: number;
}

export interface TrackerListProps {
    lists: TrackerDataModel[];
    handleDelete: (id: string) => void;
}

// ---- AUTH ---- //
export interface UserModel {
    uid: string | null;
    displayName: string | null;
} 

export type AuthInitialStateModel = {
    user: UserModel | null;
    authIsReady: boolean;
}

export interface AuthContextModel extends AuthInitialStateModel {}

export interface AuthContextProviderProps {
    children: ReactNode;
}


export interface AuthProps {
    email: string;
    password: string;
    username?: string;
}

// ---- Protein Intake ---- //
export interface ProteinIntakeModel {
    proteinSum: number;
    proteinGoal: number;
    remainingProtein: number;
    barPercent: number;
    setProteinSum: (sum: number) => void;
    setProteinGoal: (goal: number) => void;
}

export interface ProteinIntakeContextProviderProps {
    children: ReactNode;
}


// ---- Food Tracker ---- //
export interface FoodDataModel {
    food: {
        label: string;
        nutrients: {
            ENERC_KCAL: number;
            PROCNT: number;
            CHOCDF: number;
            FAT: number;
        }
    }
}

export interface FoodListProps {
    lists: FoodDataModel[];
}

export interface AddFoodProps {
    foodName: string;
    foodProtein: number;
}
