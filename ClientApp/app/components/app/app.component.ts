import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showLoader: boolean;

    constructor(private loaderService: LoaderService) {
    }

     ngOnInit() {
        this.loaderService.status.subscribe((val: boolean) => {
            this.showLoader = val;
        });
    }
    
}
