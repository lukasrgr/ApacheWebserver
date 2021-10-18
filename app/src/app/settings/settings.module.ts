import { SharedModule } from '../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SettingsComponent } from './settings';

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
    ],
    exports: [
        SettingsComponent
    ],
    entryComponents: [
        SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsModule { }
