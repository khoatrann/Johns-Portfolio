import { Component } from '@angular/core';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    memeIsOn = false;
    constructor() {
    }

    counter(i: number) {
        return new Array(i);
    }

    memeToggle(): void {
        this.memeIsOn = !this.memeIsOn;
    }
}