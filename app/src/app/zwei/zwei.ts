import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'zwei_page',
    templateUrl: './zwei_page.html'
})
export class Zwei_Page {
    constructor(
        private route: ActivatedRoute,
    ) {
    }
}