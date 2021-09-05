import { Component, Input } from "@angular/core";
import { User } from "./user";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    @Input() item!: User;
    isEditing: boolean = false;

    onEdit() {
        this.isEditing = true;
    }

    onCancel() {
        this.isEditing = false;
    }
}