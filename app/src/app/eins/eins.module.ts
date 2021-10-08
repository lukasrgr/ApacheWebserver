import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Eins_Page } from './eins';
import { Slide1Component } from './slide1/slide1';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        Slide1Component,
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
    ]
})
export class EinsModule { }
