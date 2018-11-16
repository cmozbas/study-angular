import { NgModule }           from '@angular/core';
/**
 * Shared module already import the common module
 * Mean we don't need to reimport it et rexport it
 */
import { SharedModule }       from '../shared/shared.module';

import { ContactComponent }     from './contact.component';
import { ContactService }       from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
