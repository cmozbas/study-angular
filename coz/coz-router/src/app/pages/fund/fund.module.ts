import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FundRoutingModule } from './fund-routing.module';
import { FundComponent } from './fund.component';
import { FundEditComponent } from './edit/fund-edit.component';
import { FundDisplayComponent } from './display/fund-display.component';
import { SharedExternalComponentModule } from '../../shared/shared-external-component.module';
import { FundEditGeneralComponent } from './edit/general/fund-edit-general.component';
import { FundEditClassificationComponent } from './edit/classification/fund-edit-classification/fund-edit-classification.component';
import { EdrAnalystsComponent } from './edit/edr-analysts/edr-analysts.component';
 
@NgModule({
  imports: [
    CommonModule,
    FundRoutingModule,
    SharedExternalComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FundComponent,
    FundEditComponent,
    FundDisplayComponent,
    FundEditGeneralComponent,
    FundEditClassificationComponent,
    EdrAnalystsComponent
  ],
  exports: [
    FundRoutingModule
  ]
})
export class FundModule { }
