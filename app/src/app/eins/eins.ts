import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'page-one',
    templateUrl: './eins_page.html',
})
export class Eins_Page {

    public animation_finished: boolean = false;
    @Output() animationfinished = new EventEmitter<boolean>(false);

    constructor() { }

    ngAfterViewInit() {

        // TODO: ? how to access length of lottie animation -> now static
        setTimeout(() => {
            this.animation_finished = true,
                console.log("test")
        }, 4000)
    }
}