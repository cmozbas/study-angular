import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShareClassRoutingModule } from './share-class-routing.module';
import { ShareClassComponent } from './share-class.component';
import { SharedExternalComponentModule } from '../../shared/shared-external-component.module';
import { DataDictionaryService } from './service/data-dictionary.service';

@NgModule({
  imports: [
    CommonModule,
    ShareClassRoutingModule,
    SharedExternalComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ShareClassComponent],
  providers: [
    DataDictionaryService
  ]
})
export class ShareClassModule { }
