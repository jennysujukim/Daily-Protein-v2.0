export interface TrackerData {
    uid: string;
    name: string;
    protein: number;
}

export interface TrackerListProps {
    lists: TrackerData[];
}