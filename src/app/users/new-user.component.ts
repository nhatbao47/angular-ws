import { Component, Output, EventEmitter, Input } from "@angular/core";
import { User } from "./user.model";

@Component({
    selector: 'new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.css']
})

export class NewUserComponent {
    @Input() item!: User;
    @Output() createUserEvent = new EventEmitter<User>();

    onCreate() {
        this.createUserEvent.emit(this.item);
    }
}