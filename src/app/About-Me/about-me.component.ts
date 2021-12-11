import { AUTO_STYLE } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatTableDataSource } from '@angular/material/table';


export interface attributes {
    value: string;
}

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})


export class AboutMeComponent {
    educationDisplayedColumns: string[] = ['value'];
    educationObject: attributes[] = [
        {
            value: 'George Mason University'
        },
        {
            value: 'Northern Virginia Community College'
        }
    ];
    educationDataSource = new MatTableDataSource(this.educationObject);

    gpaDisplayedColumns: string[] = ['value'];
    gpaObject: attributes[] = [
        {
            value: '?'
        },
        {
            value: '3.5 (cum louder)'
        }
    ];
    gpaDataSource = new MatTableDataSource(this.gpaObject);

    jobDisplayedColumns: string[] = ['value'];
    jobObject: attributes[] = [
        {
            value: 'Assist with basic needs (walking, eating, toileting, etc)'
        },
        {
            value: 'Monitor medications for daily consumption'
        },
        {
            value: 'Support with housekeeping (washing dishes, cleaning laundry, vacuuming floors)'
        },
        {
            value: 'Follow exercise plan (standing up from seat multiple times, arm circles/raises)'
        },
        {
            value: 'Translate between English and Vietnamese to help her talk with native English speakers'
        }
    ];
    jobDataSource = new MatTableDataSource(this.jobObject);

    skillsDisplayedColumns: string[] = ['value'];
    skillsObject: attributes[] = [
        {
            value: 'Skills: Word; Excel; PowerPoint; Organization; 60+ WPM Typist; Fluent in Vietnamese; Windows; MacOS'
        },
        {
            value: 'Interests: Gaming; Basketball; Spending time with friends; Bible; Stocks; Computer Hardware; Anime; Netflix; Movies; Crypto'
        }
    ];
    skillsDataSource = new MatTableDataSource(this.skillsObject);


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