export interface Schedule {
    id: number;
    title: string;
    userId: number;
    creator: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
}