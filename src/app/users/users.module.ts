import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NewUserComponent } from "./new-user.component";
import { UserComponent } from "./user.component";
import { UsersResolverService } from "./users-resolver.service";
import { UsersComponent } from "./users.component";

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [
        UsersComponent,
        UserComponent,
        NewUserComponent
    ],
    providers: [UsersResolverService],
    exports: [UsersComponent]
})

export class UsersModule { }