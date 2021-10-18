import { LanguageTag } from './shared/translations/language';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.translate.use(Object.values(LanguageTag)[sessionStorage.LANGUAGE] ?? 'DE');
    // console.log("this.service.browserLangToLangTag(navigator.language)", navigator.language, Object.values(LanguageTag)[Object.keys(LanguageTag).indexOf(sessionStorage.LANGUAGE)], sessionStorage.LANGUAGE)
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  // Unused
  title = 'app';
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }
  ];
}
