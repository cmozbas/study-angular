import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketLogoComponent } from './basket-logo/basket-logo.component';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { BasketContentComponent } from './basket-content/basket-content.component';

@NgModule({
  declarations: [
    BasketLogoComponent,
    BasketPageComponent,
    BasketContentComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule
  ],
  exports: [
    BasketLogoComponent
  ]
})
export class BasketModule { }
