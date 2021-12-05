import { AUTO_STYLE } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent {
    constructor(public matDialog: MatDialog) {
    }

    openDialog = () => {
        const dialogRef = this.matDialog.open(ModalComponent, {
            width: '700px',
            height: 'auto'
        })
    };

    counter = (i: number) => {
        return new Array(i);
    }
}