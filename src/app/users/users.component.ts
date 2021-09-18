import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { filter, startWith, takeUntil } from "rxjs/operators";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, OnDestroy {
    users: User[] = [];
    newUser!: User;
    newUserVisible: boolean = false;
    private ngUnsubscribe = new Subject();

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers()
            .pipe(
                startWith([]),
                filter(users => users.length > 0),
                takeUntil(this.ngUnsubscribe)
            )
            .subscribe(users => this.users = users);
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