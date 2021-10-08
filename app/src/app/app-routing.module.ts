import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eins_Page } from './eins/eins';
import { Zwei_Page } from './zwei/zwei';

const routes: Routes = [
  // { path: '', redirectTo: 'aboutMe', pathMatch: 'full' },
  { path: 'rename', component: Zwei_Page },
  { path: 'aboutMe', component: Eins_Page }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
