import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { UsersComponent } from "./users.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
        UsersComponent,
        UserComponent
    ],
    exports: [UsersComponent]
})

export class UsersModule { }