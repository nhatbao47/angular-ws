import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnDestroy {
    users: User[] = [];
    newUser!: User;
    newUserVisible: boolean = false;
    private ngUnsubscribe = new Subject();

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
        this.users = this.activatedRoute.snapshot.data['users'];
    }

    onDisplayNewUser() {
        this.newUser = {
            id: 0,
            name: '',
            title: '',
            isDeleted: false
        };
        this.newUserVisible = true;
    }

    onCancel() {
        this.newUserVisible = false;
    }

    onCreateNewUser(newUser: User) {
        this.userService.createUser(newUser)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(user => {
                this.users.unshift(user);
            })
        this.newUserVisible = false;
    }

    identify(index: number, item: User): number {
        return item.id;
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}