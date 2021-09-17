import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";

@Injectable({
    providedIn: 'root'
})

export class ConfirmationDialogService {
    constructor(private modelService: NgbModal) { }
    
    confirm(title: string, message: string, dialogSize: 'sm' | 'lg' = 'sm'): Promise<boolean> {
        const modelRef = this.modelService.open(ConfirmationDialogComponent, { size: dialogSize });
        modelRef.componentInstance.title = title;
        modelRef.componentInstance.message = message;
        modelRef.componentInstance.btnOkText = 'OK';
        modelRef.componentInstance.btnCancelText = 'Cancel';
        return modelRef.result;
    }
}