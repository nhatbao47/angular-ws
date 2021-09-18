import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ConfirmationDialogService } from "../dialog/confirmation-dialog.service";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {
    constructor(
        private userService: UserService,
        private dialogService: ConfirmationDialogService
    ) { }

    @Input() item!: User;
    isEditing: boolean = false;
    private originalUser!: User;
    private ngUnsubscribe = new Subject();

    ngOnInit() {
        if (this.item) {
            this.originalUser = Object.assign({}, this.item);
        }
    }

    onSubmit() {
        this.userService.editUser(this.item)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => {
                this.originalUser = this.cloneUser(this.item);
                this.isEditing = false;
            });
    }

    onEdit() {
        this.isEditing = true;
    }

    onCancel() {
        this.item.name = this.originalUser.name;
        this.item.title = this.originalUser.title;
        this.isEditing = false;
    }

    onDelete() {
        this.dialogService.confirm('Confirmation', `Are you sure to delete '${this.item.name}' user?`)
            .then(confirmed => {
                if (confirmed) {
                    this.userService.deleteUser(this.item.id)
                        .pipe(takeUntil(this.ngUnsubscribe))
                        .subscribe(() => {
                            this.item.isDeleted = true;
                        })
                }
            });

    }

    cloneUser(user: User) {
        return Object.assign({}, this.item);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}