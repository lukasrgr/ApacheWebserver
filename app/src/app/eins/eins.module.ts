import { SharedModule } from './../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Eins_Page } from './eins';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        Eins_Page,
    ],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
    ],
    exports: [
        Eins_Page,
    ],
    entryComponents: [
        SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EinsModule { }
