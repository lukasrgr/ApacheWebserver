import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { TRANSLATION as DE } from './de';
import { TRANSLATION as EN } from './en';


export enum LanguageTag {
    EN = "English",
    DE = "German"
}

export class Language implements TranslateLoader {

    public static getLanguageTags(): LanguageTag[] {
        return Object.keys(LanguageTag).map(key => LanguageTag[key as keyof typeof LanguageTag]);
    }

    public static getLanguages(): string[] {
        return Object.keys(LanguageTag).map(key => key.toLowerCase());
    }

    constructor() { }

    getTranslation(lang: LanguageTag): Observable<any> {
        switch (lang) {
            case LanguageTag.DE:
                return of(DE);
            case LanguageTag.EN:
                return of(EN);
        }
        return of(EN);
    }
}
