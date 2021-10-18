import { AppRoutingModule } from './../app-routing.module';
import { FormsModule } from '@angular/forms';
import { Section } from './generic/section';
import { MenuComponent } from './menu/menu';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Language } from './translations/language';

@NgModule({
    imports: [
        IonicModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useClass: Language }
        }),
        AppRoutingModule
    ],
    declarations: [
        HeaderComponent,
        MenuComponent,
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        TranslateModule
    ]
})
export class SharedModule { }
