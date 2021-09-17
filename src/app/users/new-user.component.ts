import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.css']
})

export class NewUserComponent {
    @Output() createUserEvent = new EventEmitter<string>();

    onCreate() {
        this.createUserEvent.emit('create');
    }
}