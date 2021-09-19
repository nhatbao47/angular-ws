import { Pipe, PipeTransform } from "@angular/core";
import { ShortTime } from "./schedule.model";

@Pipe({
    name: 'shortTime'
})

export class ShortTimePipe implements PipeTransform {
    transform(value: ShortTime): string {
        const hour = value.hour.toString().padStart(2, '0');
        const minute = value.minute.toString().padStart(2, '0');
        return `${hour}:${minute}`;
    }
}