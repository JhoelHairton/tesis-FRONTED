import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    LandingComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
