import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationComponent } from './first-section/first.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { Section } from './generic/section';
import { ajax, css } from "jquery";
@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    HeaderComponent,
    Section
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
