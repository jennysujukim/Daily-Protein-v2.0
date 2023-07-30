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