import { Shared } from './../shared/shared.';
import { Component, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Language, LanguageTag } from "../shared/translations/language";

@Component({
    selector: 'settings',
    templateUrl: './settings.html',
})
export class SettingsComponent {

    public animation_finished: boolean = false;
    @Output() animationfinished = new EventEmitter<boolean>(false);
    public readonly languages: LanguageTag[];
    public currentLanguage: LanguageTag;

    constructor(
        public translate: TranslateService,
        private route: ActivatedRoute,
        private shared: Shared
    ) {
        this.languages = Language.getLanguageTags();
        this.currentLanguage = translate.currentLang as LanguageTag;
    }

    ngAfterViewInit() {

        // TODO: ? how to access length of lottie animation -> now static
        setTimeout(() => {
            this.animation_finished = true
        }, 4000)
    }

    ngOnInit() {
        this.shared.setCurrentComponent('Settings', this.route)
    }

    public setLanguage(language: LanguageTag): void {
        sessionStorage.setItem("LANGUAGE", Object.keys(LanguageTag)[Object.values(LanguageTag).indexOf(language)]);
        this.currentLanguage = language;
        this.translate.use(language);
    }
}