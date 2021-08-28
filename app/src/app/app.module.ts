import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationComponent } from './first-section/first.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './shared/header/header.component';
import { Section } from './generic/section';
import { MenuComponent } from './shared/menu/menu';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Language } from './shared/translations/language';


@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    HeaderComponent,
    Section,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // useFactory: HttpLoaderFactory,
        deps: [HttpClient],
        useClass: Language,

      }
    }),
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http, '/shared/translations/', ".ts");
// }