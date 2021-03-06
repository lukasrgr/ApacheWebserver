import { SharedModule } from './shared/shared.module';
import { ZweiModule } from './zwei/zwei.module';
import { EinsModule } from './eins/eins.module';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { Language } from './shared/translations/language';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SettingsModule } from './settings/settings.module';
import { Shared } from './shared/shared.';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    // Pages
    EinsModule,
    ZweiModule,
    SharedModule,
    SettingsModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // ngx-translate and the loader module
    HttpClientModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useClass: Language,
    //   }
    // }),
    IonicModule.forRoot(),
    FormsModule,
    [LottieModule.forRoot({ player: playerFactory })],
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'de' },
    Shared
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  // constructor() {
  //   registerLocaleData(localDE);
  // }
}
export function playerFactory() {
  return player;
}
// required for AOT compilation
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http, '/shared/translations/', ".ts");
// }