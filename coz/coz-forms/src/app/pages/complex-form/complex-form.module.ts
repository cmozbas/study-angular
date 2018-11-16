import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

import { ComplexFormRoutingModule } from './complex-form-routing.module';
import { ComplexFormComponent } from './complex-form.component';
import { ComplexFormShareClassComponent } from './complex-form-share-class/complex-form-share-class.component';
import { ComplexFormGeneralComponent } from './complex-form-general/complex-form-general.component';

@NgModule({
  imports: [
    CommonModule,
    ComplexFormRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ComplexFormComponent,
    ComplexFormShareClassComponent,
    ComplexFormGeneralComponent
  ],
  exports: [
    ComplexFormComponent,
    ReactiveFormsModule
  ]
})
export class ComplexFormModule { }
