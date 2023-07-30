import { ReactNode } from "react";

export interface User {
    uid: string | null;
    displayName: string | null;
} 

export interface AuthInitialState {
    user: User | null;
    authIsReady: boolean;
}

export interface AuthProps {
    email: string;
    password: string;
    username?: string;
}

export interface AuthContextProviderProps {
    children: ReactNode;
}