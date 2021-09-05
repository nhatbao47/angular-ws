export class Schedule {
    id: number;
    title: string;
    creator: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;

    constructor(id: number, title: string, creator: string, description: string, location: string, startDate: Date, endDate: Date) {
        this.id = id;
        this.title = title;
        this.creator = creator;
        this.description = description;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}