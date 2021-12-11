import { AUTO_STYLE } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatTableDataSource } from '@angular/material/table';


export interface attributes {
    name: string;
    details: string[];
}

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})


export class AboutMeComponent {
    displayedColumns: string[] = ['name', 'details'];
    DATA: attributes[] = [
        { name: 'George Mason University', details: ['Courses: MIS303 & BUS 303', 'Enrolled in Business Information Systems and Develop Special Skills'] }
    ];
    dataSource = new MatTableDataSource(this.DATA);


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