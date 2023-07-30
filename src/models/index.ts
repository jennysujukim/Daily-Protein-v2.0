import { ReactNode } from "react";
export * from './redux';
export * from './auth';
export * from './profile';

export interface LayoutProps {
    children: ReactNode;
}
export interface DashboardContainerProps {
    isProfile: boolean;
    title: string;
    children: ReactNode;
}
