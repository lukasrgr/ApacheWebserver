export { HeaderComponent } from './header/header.component';
export { MenuComponent } from "./menu/menu"

import { Component, Injectable } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'shared',
    templateUrl: './shared.html',
})

@Injectable()
export class Shared {

    private currentActivatedRoute: ActivatedRoute | undefined;
    public currentPageTitle: string = 'About me';

    constructor(
    ) {
    }

    public setCurrentComponent(currentPageTitle: string, activatedRoute: ActivatedRoute) {
        if (this.currentActivatedRoute != activatedRoute) {
            // if (currentPageTitle == null || currentPageTitle.trim() === '') {
            //     this.currentPageTitle = 'About Me';
            // } else {
            this.currentPageTitle = currentPageTitle;
            // }
        }
        this.currentActivatedRoute = activatedRoute;
    }
}