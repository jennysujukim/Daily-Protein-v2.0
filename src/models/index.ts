import { ReactNode } from "react";
export * from './redux';
export * from './auth';
export * from './profile';
export * from './food';
export * from './tracker';

export interface LayoutProps {
    children: ReactNode;
}
export interface DashboardContainerProps {
    isProfile: boolean;
    title: string;
    children: ReactNode;
}
