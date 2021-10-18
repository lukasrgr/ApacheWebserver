import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Eins_Page } from './eins/eins';
import { SettingsComponent } from './settings/settings';
import { Zwei_Page } from './zwei/zwei';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: Eins_Page },
  { path: 'rename', component: Zwei_Page },
  { path: 'aboutMe', component: Eins_Page },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
