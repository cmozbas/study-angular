import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { SharedExternalComponentModule } from '../shared-external-component.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedExternalComponentModule
  ],
  declarations: [
    NavComponent,
    LeftSideBarComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    LeftSideBarComponent,
    FooterComponent
  ]
})
export class SharedComponentModule { }
