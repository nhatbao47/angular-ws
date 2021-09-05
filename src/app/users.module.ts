import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NewUserComponent } from "./new-user.component";
import { UserComponent } from "./user.component";
import { UsersComponent } from "./users.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
        UsersComponent,
        UserComponent,
        NewUserComponent
    ],
    exports: [UsersComponent]
})

export class UsersModule { }