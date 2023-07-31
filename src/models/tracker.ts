import { ReactNode } from "react";
export interface TrackerData {
    id: string;
    uid: string;
    name: string;
    protein: number;
}

export interface TrackerListProps {
    lists: TrackerData[];
    handleDelete: (id: string) => void;
}

export interface ProteinIntakeProps {
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

