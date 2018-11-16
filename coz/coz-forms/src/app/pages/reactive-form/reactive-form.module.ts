import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ReactiveFormComponent,
    DisplayComponent,
    EditComponent
  ],
  exports: [
  ]
})
export class ReactiveFormModule { }
