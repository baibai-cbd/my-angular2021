import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'warning-alert',
    templateUrl: './warning-alert.component.html',
    styles: [`
    p {
        color: orange
    }
    `]
})
export class WarningAlertComponent implements OnInit {

    constructor() {}

    ngOnInit() : void {}
}