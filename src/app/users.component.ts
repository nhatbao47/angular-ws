import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { filter, startWith, takeUntil } from "rxjs/operators";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, OnDestroy {
    users: User[] = [];
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
        this.newUserVisible = true;
    }

    onCancel() {
        this.newUserVisible = false;
    }

    onCreateNewUser(name: string) {
        this.newUserVisible = false;
        console.log(name);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}