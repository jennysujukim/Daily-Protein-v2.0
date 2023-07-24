import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface ContainerProps {
    isProfile: boolean;
    title: string;
    children: ReactNode;
}

export interface User {
    uid: string;
    displayName: string;
    email: string;
}

export interface AuthState {
    user: User | null;
    authIsReady: boolean;
}

export interface AuthActionPayload {
    type: string;
    payload: User | any;
}

export interface AuthContextProviderProps {
    children: ReactNode;
}

export interface AuthProps {
    emailAddress: string;
    password: string;
    username?: string;
}

