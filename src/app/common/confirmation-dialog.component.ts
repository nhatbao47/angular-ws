import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.css']
})

export class ConfirmationDialogComponent {
    @Input() title!: string;
    @Input() message!: string;
    @Input() btnOkText!: string;
    @Input() btnCancelText!: string;

    constructor(private activeModel: NgbActiveModal) { }

    decline() {
        this.activeModel.close(false);
    }

    accept() {
        this.activeModel.close(true);
    }

    dismiss() {
        this.activeModel.dismiss();
    }
}