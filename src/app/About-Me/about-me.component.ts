import { Component } from '@angular/core';
@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent {
    constructor() {
    }

    counter(i: number) {
        return new Array(i);
    }
}