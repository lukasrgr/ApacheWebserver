import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'menu',
    templateUrl: './menu.html',
})
export class MenuComponent {
    public currentPage: '1' | '2' = '1';
    public backUrl: boolean = false;

    constructor(
        private menu: MenuController,
        public router: Router,
        private translate: TranslateService
    ) { }
    updateBackUrl(url: string) {
        // disable backUrl & Segment Navigation on initial 'index' page
        if (url === '/') {
            this.backUrl = false;
            return;
        }
    }
    ngOnInit() {
        this.updateUrl(window.location.pathname);
    }
    updateUrl(url: string) {
        this.updateBackUrl(url)
    }

    closeMenu() {
        this.menu.close()
    }

    useLanguage(language: string): void {
        this.translate.use(language);
        console.log("language", language)
    }

}

// openFirst() {
//     this.menu.enable(true, 'first');
//     this.menu.open('first');
// }

// openEnd() {
//     this.menu.open('end');
// }

// openCustom() {
//     this.menu.enable(true, 'custom');
//     this.menu.open('custom');
// }