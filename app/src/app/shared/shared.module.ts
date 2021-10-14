import { FormsModule } from '@angular/forms';
import { Section } from './generic/section';
import { MenuComponent } from './menu/menu';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        IonicModule,
        FormsModule
    ],
    declarations: [
        HeaderComponent,
        MenuComponent,
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
    ]
})
export class SharedModule { }
