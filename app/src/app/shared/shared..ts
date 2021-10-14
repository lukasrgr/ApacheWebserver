export { HeaderComponent } from './header/header.component';
export { MenuComponent } from "./menu/menu"

import { Component } from "@angular/core";

@Component({
    selector: 'shared',
    templateUrl: './shared.html',
})
export class Header {
    constructor(
    ) {
    }
}