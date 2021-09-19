import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { TaskService } from "./task.service";

@Injectable()
export class DashboardResolverService implements Resolve<any> {
    constructor(private taskService: TaskService) { }

    resolve() {
        return this.taskService.getTasks();
    }
}