export interface Schedule {
    id: number;
    title: string;
    userId: number;
    creator: string;
    description: string;
    location: string;
    date: Date;
    startTime: ShortTime;
    endTime: ShortTime;
}

export interface ShortTime {
    hour: number;
    minute: number;
}